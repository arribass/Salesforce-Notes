import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { useSupabase } from '@site/src/utils/supabaseClient';
import '@site/src/components/Profile/styles.css';
import '@site/src/components/SeidorHoot/styles.css';

export default function LeaderboardPage() {
  const supabase = useSupabase();
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaders() {
      const { data, error } = await supabase
        .from('profiles')
        .select('username, points, avatar_url')
        .order('points', { ascending: false })
        .limit(20);

      if (!error && data) {
        setLeaders(data);
      }
      setLoading(false);
    }
    fetchLeaders();
  }, [supabase]);

  const podium = leaders.slice(0, 3);
  const others = leaders.slice(3);

  return (
    <Layout title="Clasificación Global" description="Mira quién lidera la flota de Salesforce">
      <main className="profile-page-container hoot-container" style={{ 
        maxWidth: '1200px', 
        margin: '2rem auto', 
        background: '#0f172a', /* Force solid dark background */
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        minHeight: '100vh',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#ffffff', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>🏆 Clasificación Global</h1>
          <p style={{ fontSize: '1.4rem', color: '#ffffff', opacity: 1, fontWeight: '600' }}>Los Trailblazers más legendarios de la flota</p>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '5rem', fontSize: '1.5rem', color: '#ffffff', opacity: 0.5 }}>
            Sincronizando el podio...
          </div>
        ) : (
          <div className="leaderboard-wrap">
            {/* Podium Section */}
            <div className="podium-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '2rem', marginBottom: '5rem', minHeight: '300px' }}>
              
              {/* Silver - 2nd Place */}
              {podium[1] && (
                <div className="podium-spot silver astra-card" style={{ width: '180px', height: '220px', textAlign: 'center', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', background: 'linear-gradient(135deg, #94a3b8 0%, #475569 100%)', border: '1px solid #94a3b8' }}>
                  <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', fontSize: '3rem' }}>🥈</div>
                  <div className="avatar-placeholder" style={{ width: '60px', height: '60px', margin: '0 auto 1rem', background: '#e2e8f0', color: '#1e293b', fontWeight: 'bold', fontSize: '1.5rem' }}>
                    {podium[1].username?.[0] || 'U'}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{podium[1].username}</h3>
                  <div style={{ color: '#e2e8f0', fontWeight: '900', fontSize: '1.1rem' }}>{podium[1].points} pts</div>
                </div>
              )}

              {/* Gold - 1st Place */}
              {podium[0] && (
                <div className="podium-spot gold astra-card" style={{ width: '220px', height: '280px', textAlign: 'center', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', background: 'linear-gradient(135deg, #fbbf24 0%, #b45309 100%)', border: '2px solid #fbbf24', boxShadow: '0 0 30px rgba(251, 191, 36, 0.4)' }}>
                  <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', fontSize: '4.5rem', filter: 'drop-shadow(0 0 15px #fbbf24)' }}>🥇</div>
                  <div className="avatar-placeholder" style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', background: '#fef3c7', color: '#78350f', fontWeight: 'bold', fontSize: '2.5rem', boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)' }}>
                    {podium[0].username?.[0] || 'U'}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>{podium[0].username}</h3>
                  <div style={{ color: '#fef3c7', fontWeight: '900', fontSize: '1.4rem' }}>{podium[0].points} pts</div>
                </div>
              )}

              {/* Bronze - 3rd Place */}
              {podium[2] && (
                <div className="podium-spot bronze astra-card" style={{ width: '180px', height: '180px', textAlign: 'center', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', background: 'linear-gradient(135deg, #d97706 0%, #78350f 100%)', border: '1px solid #d97706' }}>
                  <div style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', fontSize: '2.5rem' }}>🥉</div>
                  <div className="avatar-placeholder" style={{ width: '50px', height: '50px', margin: '0 auto 1rem', background: '#ffedd5', color: '#78350f', fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {podium[2].username?.[0] || 'U'}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{podium[2].username}</h3>
                  <div style={{ color: '#ffedd5', fontWeight: '900', fontSize: '1.1rem' }}>{podium[2].points} pts</div>
                </div>
              )}
            </div>

            {/* Ranking List */}
            <div className="astra-card" style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(20px)' }}>
              {leaders.length === 0 ? (
                <p style={{ textAlign: 'center', padding: '2rem', opacity: 0.5 }}>Aún no hay puntuaciones. ¡Sé el primero!</p>
              ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', color: '#ffffff' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.2)', textAlign: 'left', background: 'rgba(255,255,255,0.05)' }}>
                      <th style={{ padding: '1.5rem', fontSize: '1.1rem', fontWeight: '900' }}>Posición</th>
                      <th style={{ fontSize: '1.1rem', fontWeight: '900' }}>Usuario</th>
                      <th style={{ textAlign: 'right', paddingRight: '1.5rem', fontSize: '1.1rem', fontWeight: '900' }}>Puntos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaders.map((player, index) => (
                      <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: index % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent', transition: 'background 0.2s' }}>
                        <td style={{ padding: '1.2rem 1.5rem', fontWeight: '900', color: index < 3 ? 'var(--astra-gold)' : '#ffffff' }}>
                          #{index + 1}
                        </td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div className="avatar-placeholder" style={{ width: '36px', height: '36px', fontSize: '0.9rem', background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}>
                               {player.username?.[0] || 'U'}
                            </div>
                            <span style={{ fontWeight: index < 3 ? '900' : '600', fontSize: '1.05rem' }}>{player.username}</span>
                          </div>
                        </td>
                        <td style={{ textAlign: 'right', paddingRight: '1.5rem', fontWeight: '900', fontSize: '1.1rem', color: index === 0 ? '#fbbf24' : '#ffffff' }}>
                          {player.points.toLocaleString()} XP
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <p style={{ opacity: 0.5, marginBottom: '1.5rem' }}>¡Participa en los SeidorHoots para escalar posiciones!</p>
              <a href="/Salesforce-Notes/seidorhoot" className="hoot-action-btn" style={{ textDecoration: 'none' }}>
                Ir al Quiz de Sesión
              </a>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
