import React from 'react';
import './LatestCommit.css';
import commitData from '@site/src/data/latestCommit.json';

export default function LatestCommit() {
    if (!commitData || !commitData.success) {
        return null; // Do not show if data couldn't be fetched
    }

    return (
        <div className="container">
            <div className="latest-commit-container">

                <div className="latest-commit-header">
                    {/* Simple Git Branch SVG Icon */}
                    <svg className="commit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="6" y1="3" x2="6" y2="15"></line>
                        <circle cx="18" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M18 9a9 9 0 0 1-9 9"></path>
                    </svg>
                    Latest Update
                </div>

                <div className="latest-commit-body">
                    <p className="commit-message">{commitData.message}</p>
                    <div className="commit-meta">
                        <span>By <strong>{commitData.author}</strong></span>
                        <span>•</span>
                        <span>{commitData.date}</span>
                        <span>•</span>
                        <span className="commit-hash">{commitData.hash}</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
