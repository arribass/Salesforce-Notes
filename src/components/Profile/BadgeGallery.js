import React from 'react';
import './styles.css';

const MOCK_BADGES = [
  { id: 'first_hoot', name: 'First Mission', icon: '🎖️', desc: 'Completed your first SeidorHoot' },
  { id: 'quiz_master', name: 'Quiz Master', icon: '🧠', desc: 'Answered 50 questions correctly' },
  { id: 'on_fire', name: 'On Fire!', icon: '🔥', desc: '3 correct answers in a row' },
  { id: 'early_bird', name: 'Early Bird', icon: '🌅', desc: 'Completed a quiz before 9 AM' },
];

export default function BadgeGallery() {
  return (
    <section className="badge-gallery-section">
      <div className="section-header">
        <span style={{ fontSize: '2rem' }}>🏆</span>
        <h2>Achievement Gallery</h2>
      </div>
      <div className="badge-grid">
        {MOCK_BADGES.map(badge => (
          <div key={badge.id} className="badge-astra-card astra-card">
            <div className="badge-icon-wrap">{badge.icon}</div>
            <h4>{badge.name}</h4>
            <p>{badge.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
