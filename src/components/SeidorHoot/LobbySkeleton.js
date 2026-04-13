import React, { useState, useEffect } from 'react';
import './styles.css';

const MOCK_PLAYERS = ['Arribas', 'SalesforceExpert', 'CloudRider', 'Trailblazer'];

export default function LobbySkeleton({ onStart, categoryName }) {
  const [players, setPlayers] = useState(['Arribas']);
  const pin = "882 192";

  useEffect(() => {
    // Simular que se unen compañeros
    const intervals = MOCK_PLAYERS.slice(1).map((name, i) => {
      return setTimeout(() => {
        setPlayers(prev => [...new Set([...prev, name])]);
      }, (i + 1) * 2000);
    });

    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <div className="hoot-lobby">
      <h1 style={{ marginBottom: '2rem', fontSize: '3rem' }}>
        <span style={{ opacity: 0.6 }}>Lobby:</span> {categoryName || 'SeidorHoot'}
      </h1>
      
      <div className="hoot-pin-card astra-card">
        <p style={{ opacity: 0.7, marginBottom: '1rem', fontSize: '1.2rem' }}>Join the session at</p>
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>salesforce-notes.com/seidorhoot</h3>
        <div className="hoot-pin-number">{pin}</div>
      </div>

      <div className="hoot-status">
        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
          {players.length === 0 ? 'Waiting for players...' : `${players.length} Players Joined`}
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
        Start Game
      </button>
    </div>
  );
}
