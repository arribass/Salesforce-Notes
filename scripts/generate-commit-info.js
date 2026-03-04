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
    // We use a custom delimiter |§| to avoid conflicts with commit messages that might contain |
    const stdout = execSync('git log -5 --format="%h|§|%H|§|%an|§|%ae|§|%ar|§|%aD|§|%s"', { encoding: 'utf-8' });
    const logLines = stdout.trim().split('\n').filter(line => line);

    const commits = logLines.map((line, index) => {
        const [shortHash, hash, author, email, relativeDate, exactDate, message] = line.split('|§|');

        let files = [];

        // Only fetch file changes for the LATEST commit (index 0) to avoid heavy payload
        if (index === 0) {
            try {
                const filesOut = execSync(`git log -1 --name-status --format="" ${hash}`, { encoding: 'utf-8' });
                files = filesOut.trim().split('\n').filter(line => line).map(fileLine => {
                    const parts = fileLine.split('\t');
                    const status = parts[0].trim();
                    const name = parts.slice(1).join('\t').trim();
                    return { status, name };
                });
            } catch (e) {
                console.warn('Could not fetch file diff for latest commit', e.message);
            }
        }

        return {
            shortHash,
            hash,
            author,
            email,
            relativeDate,
            exactDate,
            message,
            files
        };
    });

    const commitData = {
        commits,
        success: true
    };

    fs.writeFileSync(outputFile, JSON.stringify(commitData, null, 2));
    console.log('✅ Successfully generated latestCommit.json (Last 5 commits)');

} catch (error) {
    console.error('⚠️ Failed to fetch git commit info. Using fallback data.', error.message);

    const fallbackData = {
        commits: [
            {
                shortHash: '000000',
                hash: '000000000000000000000000000',
                author: 'Unknown',
                email: 'unknown@example.com',
                relativeDate: 'Unknown',
                exactDate: 'Unknown Date',
                message: 'No commit history found or git is not installed.',
                files: []
            }
        ],
        success: false
    };

    fs.writeFileSync(outputFile, JSON.stringify(fallbackData, null, 2));
}
