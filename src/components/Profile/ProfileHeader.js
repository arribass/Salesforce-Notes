import React from 'react';
import { useAuth } from '../../utils/AuthProvider';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './styles.css';

export default function ProfileHeader({ onEdit }) {
  const { user, profile, loading, signOut } = useAuth();
  const history = useHistory();
  const loginUrl = useBaseUrl('/login');

  if (loading) return <div className="profile-skeleton">Cargando...</div>;

  if (!user) {
    return (
      <div className="auth-placeholder">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¡Bienvenido, Trailblazer! 🚀</h2>
        <p style={{ fontSize: '1.2rem', opacity: 0.7, marginBottom: '2.5rem' }}>
          Inicia sesión para seguir tu progreso, ganar insignias y canjear premios de oficina.
        </p>
        <button 
          className="hoot-action-btn" 
          onClick={() => history.push(loginUrl)}
        >
          Acceder al Centro de Mando
        </button>
      </div>
    );
  }

  // Calculate Level and XP (500 points per level)
  const totalXp = profile?.xp || 0;
  const currentPoints = profile?.points || 0;
  const level = Math.floor(totalXp / 500) + 1;
  const xpInLevel = totalXp % 500;
  const xpPercentage = (xpInLevel / 500) * 100;

  return (
    <div className="profile-header-card">
      <div className="profile-avatar">
        {profile?.avatar_url ? (
          <img src={profile.avatar_url} alt={profile.username} />
        ) : (
          <div className="avatar-placeholder">{profile?.username?.[0] || 'U'}</div>
        )}
        <div className="level-orbit-badge" title="Nivel Actual">
          {level}
        </div>
      </div>

      <div className="profile-info">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1>{profile?.username || user.email.split('@')[0]}</h1>
            {profile?.office && (
              <div className="profile-office-tag">
                <span className="office-icon">🏢</span>
                Sede {profile.office}
              </div>
            )}
          </div>
          <button className="edit-profile-btn" onClick={onEdit}>
            <span>✏️</span> Editar Perfil
          </button>
        </div>

        <div className="xp-container">
          <div className="xp-header">
            <span>Rango: Trailblazer Lvl {level}</span>
            <span>{xpInLevel} / 500 XP</span>
          </div>
          <div className="xp-bar-bg">
            <div className="xp-bar-fill" style={{ width: `${xpPercentage}%` }}></div>
          </div>
        </div>
      </div>

      <div className="points-card">
        <span className="points-value">{currentPoints}</span>
        <span className="points-label">Puntos Canjeables</span>
      </div>
    </div>
  );
}
