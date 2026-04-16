import React, { useState, useEffect } from 'react';
import { useSupabase } from '../../utils/supabaseClient';
import './styles.css';

export default function HootLobby({ onStart, categoryName, sessionInfo, isHost }) {
  const [players, setPlayers] = useState([]);
  const supabase = useSupabase();

  // 1. Fetch initial players & Sync Realtime
  useEffect(() => {
    if (!supabase || !sessionInfo) return;

    // Obtener jugadores actuales
    const fetchPlayers = async () => {
      const { data } = await supabase
        .from('hoot_participants')
        .select('username')
        .eq('session_id', sessionInfo.id);
      if (data) setPlayers(data.map(p => p.username));
    };
    fetchPlayers();

    // Suscribirse a nuevos jugadores
    const participantSub = supabase
      .channel(`session_participants_${sessionInfo.id}`)
      .on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'hoot_participants',
        filter: `session_id=eq.${sessionInfo.id}`
      }, (payload) => {
        setPlayers(prev => [...prev, payload.new.username]);
      })
      .subscribe();

    // 2. Jugadores: Escuchar inicio de partida del Host
    let sessionSub;
    if (!isHost) {
      sessionSub = supabase
        .channel(`session_status_${sessionInfo.id}`)
        .on('postgres_changes', {
          event: 'UPDATE',
          schema: 'public',
          table: 'hoot_sessions',
          filter: `id=eq.${sessionInfo.id}`
        }, (payload) => {
          if (payload.new.status === 'PLAYING') {
            onStart();
          }
        })
        .subscribe();
    }

    return () => {
      supabase.removeChannel(participantSub);
      if (sessionSub) supabase.removeChannel(sessionSub);
    };
  }, [supabase, sessionInfo, isHost, onStart]);

  const handleStartGame = async () => {
    if (!isHost) return;
    
    // Actualizar estado en DB
    const { error } = await supabase
      .from('hoot_sessions')
      .update({ status: 'PLAYING' })
      .eq('id', sessionInfo.id);

    if (!error) onStart();
  };

  const displayPin = sessionInfo?.pin || "----";

  return (
    <div className="hoot-lobby">
      <h1 style={{ marginBottom: '2rem', fontSize: '3rem' }}>
        <span style={{ opacity: 0.6 }}>Sala:</span> {categoryName || 'SeidorHoot'}
      </h1>
      
      <div className="hoot-pin-card astra-card">
        <p style={{ opacity: 0.7, marginBottom: '1rem', fontSize: '1.2rem' }}>Únete a la sesión en móvil</p>
        <div className="hoot-pin-number">{displayPin}</div>
      </div>

      <div className="hoot-status">
        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
          {players.length === 0 ? 'Esperando al equipo...' : `${players.length} Trailblazers Listos`}
        </h3>
        <div className="hoot-players-grid">
          {players.map((p, i) => (
            <div key={i} className="hoot-player-tag">
              {p}
            </div>
          ))}
        </div>
      </div>

      {isHost ? (
        <button 
          className="hoot-action-btn"
          style={{ marginTop: '4rem' }}
          onClick={handleStartGame}
          disabled={players.length === 0}
        >
          {players.length === 0 ? 'Esperando Jugadores...' : 'Empezar Partida para Todos'}
        </button>
      ) : (
        <div style={{ marginTop: '4rem', fontStyle: 'italic', opacity: 0.7 }}>
          Esperando a que el Anfitrión inicie la misión...
        </div>
      )}
    </div>
  );
}
