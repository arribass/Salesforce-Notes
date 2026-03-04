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
    // Format: %h (abbrev hash), %H (full hash), %an (author name), %ae (author email), %ar (relative), %aD (exact date), %s (subject)
    const stdout = execSync('git log -1 --format="%h|%H|%an|%ae|%ar|%aD|%s"', { encoding: 'utf-8' });
    const [shortHash, hash, author, email, relativeDate, exactDate, message] = stdout.trim().split('|');

    // get changed files
    const filesOut = execSync('git log -1 --name-status --format=""', { encoding: 'utf-8' });
    const files = filesOut.trim().split('\n').filter(line => line).map(line => {
        const parts = line.split('\t'); // usually status \t filename
        // some systems use spaces instead of tabs for short names
        const status = parts[0].trim();
        const name = parts.slice(1).join('\t').trim();
        return { status, name };
    });

    const commitData = {
        shortHash,
        hash,
        author,
        email,
        relativeDate,
        exactDate,
        message,
        files,
        success: true
    };

    fs.writeFileSync(outputFile, JSON.stringify(commitData, null, 2));
    console.log('✅ Successfully generated latestCommit.json');

} catch (error) {
    console.error('⚠️ Failed to fetch git commit info. Using fallback data.', error.message);

    const fallbackData = {
        shortHash: '000000',
        hash: '000000000000000000000000000',
        author: 'Unknown',
        email: 'unknown@example.com',
        relativeDate: 'Unknown',
        exactDate: 'Unknown Date',
        message: 'No commit history found or git is not installed.',
        files: [],
        success: false
    };

    fs.writeFileSync(outputFile, JSON.stringify(fallbackData, null, 2));
}
