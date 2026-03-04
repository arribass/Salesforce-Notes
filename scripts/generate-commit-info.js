const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');
const outputFile = path.join(dataDir, 'latestCommit.json');

// Ensure the data directory exists
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

try {
    // Execute git log command to get: hash, author name, date, and commit subject
    // Format: %h (abbrev hash), %an (author name), %ar (author date, relative), %s (subject)
    const stdout = execSync('git log -1 --format="%h|%an|%ar|%s"', { encoding: 'utf-8' });
    const [hash, author, date, message] = stdout.trim().split('|');

    const commitData = {
        hash,
        author,
        date,
        message,
        success: true
    };

    fs.writeFileSync(outputFile, JSON.stringify(commitData, null, 2));
    console.log('✅ Successfully generated latestCommit.json');

} catch (error) {
    console.error('⚠️ Failed to fetch git commit info. Using fallback data.', error.message);

    const fallbackData = {
        hash: '000000',
        author: 'Unknown',
        date: 'Unknown',
        message: 'No commit history found or git is not installed.',
        success: false
    };

    fs.writeFileSync(outputFile, JSON.stringify(fallbackData, null, 2));
}
