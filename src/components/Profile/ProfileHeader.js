import React from 'react';
import { useAuth } from '../../utils/AuthProvider';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './styles.css';

export default function ProfileHeader() {
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
  const totalPoints = profile?.points || 0;
  const level = Math.floor(totalPoints / 500) + 1;
  const xpCurrent = totalPoints % 500;
  const xpPercentage = (xpCurrent / 500) * 100;

  return (
    <div className="profile-header-card astra-card">
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
          <h1>{profile?.username || user.email.split('@')[0]}</h1>
          <button className="signout-btn" onClick={signOut}>Cerrar Sesión</button>
        </div>

        <div className="xp-container">
          <div className="xp-header">
            <span>Maestro Nivel {level}</span>
            <span>{xpCurrent} / 500 XP</span>
          </div>
          <div className="xp-bar-bg">
            <div className="xp-bar-fill" style={{ width: `${xpPercentage}%` }}></div>
          </div>
        </div>
      </div>

      <div className="points-card">
        <span className="points-value">{totalPoints}</span>
        <span className="points-label">Puntos Totales</span>
      </div>
    </div>
  );
}
