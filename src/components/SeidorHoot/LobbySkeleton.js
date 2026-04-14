import React, { useState } from 'react';
import './styles.css';


export default function LobbySkeleton({ onStart, categoryName }) {
  const [players, setPlayers] = useState(['Arribas']);
  const pin = "882 192";

  return (
    <div className="hoot-lobby">
      <h1 style={{ marginBottom: '2rem', fontSize: '3rem' }}>
        <span style={{ opacity: 0.6 }}>Sala:</span> {categoryName || 'SeidorHoot'}
      </h1>
      
      <div className="hoot-pin-card astra-card">
        <p style={{ opacity: 0.7, marginBottom: '1rem', fontSize: '1.2rem' }}>Únete a la sesión en</p>
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>salesforce-notes.com/seidorhoot</h3>
        <div className="hoot-pin-number">{pin}</div>
      </div>

      <div className="hoot-status">
        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
          {players.length === 0 ? 'Esperando jugadores...' : `${players.length} Jugadores Unidos`}
        </h3>
        <div className="hoot-players-grid">
          {players.map((p, i) => (
            <div key={i} className="hoot-player-tag">
              {p}
            </div>
          ))}
        </div>
      </div>

      <button 
        className="hoot-action-btn"
        style={{ marginTop: '4rem' }}
        onClick={onStart}
      >
        Empezar Partida
      </button>
    </div>
  );
}
