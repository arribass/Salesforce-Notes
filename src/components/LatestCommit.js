import React from 'react';
import Details from '@theme/Details';
import './LatestCommit.css';
import commitData from '@site/src/data/latestCommit.json';

export default function LatestCommit() {
    if (!commitData || !commitData.success) {
        return null; // Do not show if data couldn't be fetched
    }

    // Choose a nice status emoji based on git diff status (A, M, D)
    const getStatusIcon = (status) => {
        if (status.startsWith('A')) return '🌱'; // Added
        if (status.startsWith('M')) return '✨'; // Modified
        if (status.startsWith('D')) return '🗑️'; // Deleted
        return '📄'; // Default
    };

    const headerSummary = (
        <div className="latest-commit-summary">
            <svg className="commit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="3" x2="6" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
            </svg>
            <span>Latest Update: {commitData.message} ({commitData.relativeDate})</span>
        </div>
    );

    return (
        <div className="container">
            <Details
                className="latest-commit-details"
                summary={headerSummary}
            >
                <div className="latest-commit-body">
                    <div className="commit-meta-grid">
                        <div className="meta-item">
                            <span className="meta-label">Author</span>
                            <span className="meta-value">{commitData.author} &lt;{commitData.email}&gt;</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Date</span>
                            <span className="meta-value">{commitData.exactDate}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Commit</span>
                            <span className="meta-value commit-hash" title={commitData.hash}>{commitData.shortHash}</span>
                        </div>
                    </div>

                    <hr className="commit-divider" />

                    <div className="commit-files">
                        <span className="meta-label">Changed Files</span>
                        <ul className="file-list">
                            {commitData.files.map((file, i) => (
                                <li key={i} className="file-item">
                                    <span className="file-status">{getStatusIcon(file.status)}</span>
                                    <span className="file-name">{file.name}</span>
                                </li>
                            ))}
                            {commitData.files.length === 0 && (
                                <li className="file-item empty">No files changed in this commit.</li>
                            )}
                        </ul>
                    </div>
                </div>
            </Details>
        </div>
    );
}
