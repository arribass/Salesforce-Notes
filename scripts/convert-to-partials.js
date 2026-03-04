const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');

// Map of directory path to the base raw markdown file name and the topic MDX that references it
const replacements = [
    { dir: 'Admin', file: 'Admin.md', topic: 'Admin_Topic.mdx' },
    { dir: 'AI/Associate', file: 'AI.md', topic: 'AI_Topic.mdx' },
    { dir: 'AI/Specialist', file: 'AISpecialist.md', topic: 'AISpecialist_Topic.mdx' },
    { dir: 'App Builder', file: 'AppBuilder.md', topic: 'AppBuilder_Topic.mdx' },
    { dir: 'Consultant', file: 'SalesCloudConsultant.md', topic: 'Consultant_Topic.mdx' },
    { dir: 'Developer/Developer I', file: 'PlatformDeveloperI.md', topic: 'DeveloperI_Topic.mdx' },
    { dir: 'Developer/Developer II', file: 'DeveloperII.md', topic: 'DeveloperII_Topic.mdx' }
];

replacements.forEach(({ dir, file, topic }) => {
    const targetDir = path.join(docsDir, dir);
    const oldMdPath = path.join(targetDir, file);
    const newMdPath = path.join(targetDir, '_' + file);
    const topicPath = path.join(targetDir, topic);

    // 1. Rename the .md file to _file.md (makes it a Docusaurus Partial)
    if (fs.existsSync(oldMdPath)) {
        fs.renameSync(oldMdPath, newMdPath);
        console.log(`Renamed: ${file} -> _${file}`);
    }

    // 2. Update the import statement in the Topic.mdx file
    if (fs.existsSync(topicPath)) {
        let content = fs.readFileSync(topicPath, 'utf8');

        // Replace the specific import path
        // example: import Notes from '@site/docs/Admin/Admin.md'; -> import Notes from '@site/docs/Admin/_Admin.md';
        const oldImport = `${dir}/${file}`;
        const newImport = `${dir}/_${file}`;

        if (content.includes(oldImport)) {
            content = content.replace(oldImport, newImport);
            fs.writeFileSync(topicPath, content, 'utf8');
            console.log(`Updated import in: ${topic}`);
        }
    }
});

console.log('✅ All base markdown files converted to partials.');
