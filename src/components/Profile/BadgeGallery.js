import React from 'react';
import './styles.css';

const MOCK_BADGES = [
  { id: 'first_hoot', name: 'Primera Misión', icon: '🎖️', desc: 'Completaste tu primer SeidorHoot' },
  { id: 'quiz_master', name: 'Maestro del Quiz', icon: '🧠', desc: 'Respondiste correctamente a 50 preguntas' },
  { id: 'on_fire', name: '¡En racha!', icon: '🔥', desc: '3 respuestas correctas seguidas' },
  { id: 'early_bird', name: 'Madrugador', icon: '🌅', desc: 'Completaste un quiz antes de las 9 AM' },
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
