import React from 'react';
import Details from '@theme/Details';
import './LatestCommit.css';
import commitData from '@site/src/data/latestCommit.json';

export default function LatestCommit() {
    if (!commitData || !commitData.success || !commitData.commits || commitData.commits.length === 0) {
        return null; // Do not show if data couldn't be fetched
    }

    // Choose a nice status emoji based on git diff status (A, M, D)
    const getStatusIcon = (status) => {
        if (status.startsWith('A')) return '🌱'; // Added
        if (status.startsWith('M')) return '✨'; // Modified
        if (status.startsWith('D')) return '🗑️'; // Deleted
        return '📄'; // Default
    };

    const latestCommit = commitData.commits[0];
    const previousCommits = commitData.commits.slice(1);

    // Reverting to the 'Card' look for the latest commit header
    const headerSummary = (
        <div className="latest-commit-card-summary">
            <div className="summary-header">
                <svg className="commit-icon pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="6" y1="3" x2="6" y2="15"></line>
                    <circle cx="18" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M18 9a9 9 0 0 1-9 9"></path>
                </svg>
                <span className="summary-title">Latest Commit</span>
            </div>

            <p className="summary-message">{latestCommit.message}</p>

            <div className="summary-meta">
                <span>By <strong>{latestCommit.author}</strong></span>
                <span>•</span>
                <span>{latestCommit.relativeDate}</span>
                <span>•</span>
                <span className="commit-hash">{latestCommit.shortHash}</span>
            </div>
        </div>
    );

    return (
        <div className="container">
            <div className="commit-timeline-wrapper">

                {/* Latest Commit (Collapsible Details) */}
                <Details
                    className="latest-commit-details latest"
                    summary={headerSummary}
                >
                    <div className="latest-commit-body">
                        <div className="commit-meta-grid">
                            <div className="meta-item">
                                <span className="meta-label">Author Email</span>
                                <span className="meta-value">{latestCommit.email}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Exact Date</span>
                                <span className="meta-value">{latestCommit.exactDate}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Full Hash</span>
                                <span className="meta-value commit-hash">{latestCommit.shortHash}</span>
                            </div>
                        </div>

                        <hr className="commit-divider" />

                        <div className="commit-files">
                            <span className="meta-label">Changed Files</span>
                            <ul className="file-list">
                                {latestCommit.files.map((file, i) => (
                                    <li key={i} className="file-item">
                                        <span className="file-status">{getStatusIcon(file.status)}</span>
                                        <span className="file-name">{file.name}</span>
                                    </li>
                                ))}
                                {latestCommit.files.length === 0 && (
                                    <li className="file-item empty">No files changed in this commit.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </Details>

                {/* Previous Commits Timeline */}
                {previousCommits.length > 0 && (
                    <div className="previous-commits-timeline">
                        {previousCommits.map((commit, i) => (
                            <div key={i} className="timeline-item">
                                <div className="timeline-node"></div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <span className="timeline-message">{commit.message}</span>
                                    </div>
                                    <div className="timeline-meta">
                                        <span className="commit-hash">{commit.shortHash}</span>
                                        <span>•</span>
                                        <span>By {commit.author}</span>
                                        <span>•</span>
                                        <span>{commit.relativeDate}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
