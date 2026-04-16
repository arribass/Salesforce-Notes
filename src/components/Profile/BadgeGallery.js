import React from 'react';
import { useAuth } from '../../utils/AuthProvider';
import { useAllBadges, useUserBadges } from '../../utils/hooks';
import './styles.css';

export default function BadgeGallery() {
  const { user } = useAuth();
  const { badges, loading: badgesLoading } = useAllBadges();
  const { userBadges, loading: userBadgesLoading } = useUserBadges(user?.id);

  if (badgesLoading || userBadgesLoading) return <div className="badge-loading">Sincronizando medallas...</div>;

  return (
    <section className="badge-gallery-section">
      <div className="section-header">
        <span style={{ fontSize: '2rem' }}>🏆</span>
        <h2>Galería de Logros</h2>
      </div>
      <div className="badge-grid">
        {badges.map(badge => {
          const isEarned = userBadges.includes(badge.id);
          return (
            <div 
              key={badge.id} 
              className={`badge-astra-card astra-card ${isEarned ? 'earned' : 'locked'}`}
              title={isEarned ? badge.description : 'Logro bloqueado'}
            >
              <div className="badge-icon-wrap">{badge.icon}</div>
              <h4>{badge.name}</h4>
              <p>{badge.description}</p>
              {!isEarned && <div className="lock-overlay">🔒</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
