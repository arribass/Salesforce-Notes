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
        .select('username, xp, avatar_url')
        .order('xp', { ascending: false })
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
  
  const thStyle = {
    padding: '1.2rem',
    fontSize: '0.9rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: '#64748b',
    textAlign: 'center'
  };

  const tdStyle = {
    padding: '1.2rem',
    textAlign: 'center',
    verticalAlign: 'middle'
  };

  return (
    <Layout title="Clasificación Global" description="Mira quién lidera la flota de Salesforce">
      <main className="profile-page-container" style={{ 
        padding: 0, 
        margin: 0, 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        background: '#f3f3f2'
      }}>
        {/* Header Section with Gradient - Wide */}
        <div className="profile-header-card" style={{ 
          background: 'linear-gradient(to bottom, #064e3b 0%, #08b47b 60%, #10b981 85%, #f3f3f2 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '6rem 2rem',
          borderBottom: 'none',
          width: '100%'
        }}>
          <h1 style={{ fontSize: '4rem', fontWeight: '900', color: '#ffffff', textShadow: '0 4px 15px rgba(0,0,0,0.4)', margin: 0 }}>🏆 Clasificación Global</h1>
          <p style={{ fontSize: '1.5rem', color: '#ffffff', opacity: 1, fontWeight: '600', marginTop: '1.5rem', maxWidth: '800px' }}>Los Trailblazers más legendarios de la flota de Salesforce</p>
        </div>

        <div className="leaderboard-content" style={{ 
          padding: '0 2rem 5rem 2rem', 
          width: '100%', 
          maxWidth: '1200px', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '10rem 2rem', fontSize: '1.5rem', color: '#1e293b', opacity: 0.5 }}>
              Sincronizando el podio...
            </div>
          ) : (
            <div className="leaderboard-wrap" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              width: '100%', 
              paddingBottom: '5rem' 
            }}>
              <div style={{ width: '100%', maxWidth: '1000px' }}> {/* Inner container to keep podium and table aligned */}
              {/* Podium Section */}
              <div className="podium-container" style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'flex-end', 
                gap: '2.5rem', 
                marginBottom: '6rem', 
                minHeight: '350px',
                paddingTop: '2rem',
                flexWrap: 'wrap'
              }}>
                
                {/* Silver - 2nd Place */}
                {podium[1] && (
                  <div className="podium-spot silver astra-card" style={{ width: '220px', height: '240px', textAlign: 'center', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', position: 'relative', background: '#ffffff', border: '1px solid #94a3b8' }}>
                    <div style={{ position: 'absolute', top: '-45px', fontSize: '3.5rem' }}>🥈</div>
                    <div className="avatar-placeholder" style={{ width: '70px', height: '70px', margin: '0 auto 1rem', background: '#e2e8f0', color: '#1e293b', fontWeight: 'bold', fontSize: '1.8rem', borderRadius: '20px' }}>
                      {podium[1].username?.[0] || 'U'}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1e293b', fontWeight: '800' }}>{podium[1].username}</h3>
                    <div style={{ color: '#445469', fontWeight: '900', fontSize: '1.2rem' }}>{podium[1].xp} XP</div>
                  </div>
                )}

                {/* Gold - 1st Place */}
                {podium[0] && (
                  <div className="podium-spot gold astra-card" style={{ width: '260px', height: '300px', textAlign: 'center', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', position: 'relative', background: '#ffffff', border: '3px solid #fbbf24', boxShadow: '0 10px 40px rgba(251, 191, 36, 0.2)', zIndex: 10 }}>
                    <div style={{ position: 'absolute', top: '-70px', fontSize: '5rem', filter: 'drop-shadow(0 0 15px #fbbf24)' }}>🥇</div>
                    <div className="avatar-placeholder" style={{ width: '90px', height: '90px', margin: '0 auto 1.5rem', background: '#fef3c7', color: '#78350f', fontWeight: 'bold', fontSize: '2.5rem', borderRadius: '25px', boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)' }}>
                      {podium[0].username?.[0] || 'U'}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1e293b', fontWeight: '900' }}>{podium[0].username}</h3>
                    <div style={{ color: '#b45309', fontWeight: '900', fontSize: '1.5rem' }}>{podium[0].xp} XP</div>
                  </div>
                )}

                {/* Bronze - 3rd Place */}
                {podium[2] && (
                  <div className="podium-spot bronze astra-card" style={{ width: '220px', height: '200px', textAlign: 'center', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', position: 'relative', background: '#ffffff', border: '1px solid #d97706' }}>
                    <div style={{ position: 'absolute', top: '-35px', fontSize: '2.8rem' }}>🥉</div>
                    <div className="avatar-placeholder" style={{ width: '60px', height: '60px', margin: '0 auto 1rem', background: '#ffedd5', color: '#78350f', fontWeight: 'bold', fontSize: '1.5rem', borderRadius: '18px' }}>
                      {podium[2].username?.[0] || 'U'}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1e293b', fontWeight: '800' }}>{podium[2].username}</h3>
                    <div style={{ color: '#92400e', fontWeight: '900', fontSize: '1.2rem' }}>{podium[2].xp} XP</div>
                  </div>
                )}
              </div>

              {/* Ranking List Table - Perfectly Centered */}
              <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0.75rem' }}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Posición</th>
                      <th style={thStyle}>Trailblazer</th>
                      <th style={thStyle}>Puntuación</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaders.length === 0 ? (
                      <tr>
                        <td colSpan="3" style={{ textAlign: 'center', padding: '4rem', opacity: 0.5, color: '#1e293b' }}>Aún no hay puntuaciones en el radar.</td>
                      </tr>
                    ) : (
                      others.map((player, index) => (
                        <tr key={index}>
                          <td style={{ ...tdStyle, fontWeight: '900', color: '#64748b', width: '100px' }}>
                            #{index + 4}
                          </td>
                          <td style={tdStyle}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', justifyContent: 'center' }}>
                              <div className="avatar-placeholder" style={{ width: '45px', height: '45px', fontSize: '1.1rem', background: '#ffffff', color: '#1e293b', border: '1px solid #e2e8f0', borderRadius: '14px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                 {player.username?.[0] || 'U'}
                              </div>
                              <span style={{ fontWeight: '700', fontSize: '1.15rem', color: '#1e293b' }}>{player.username}</span>
                            </div>
                          </td>
                          <td style={{ ...tdStyle, fontWeight: '900', fontSize: '1.15rem', color: '#08b47b', width: '150px' }}>
                            {player.xp?.toLocaleString() || 0} <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>XP</span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                <p style={{ color: '#475569', fontWeight: '600', marginBottom: '2rem' }}>¿Quieres aparecer aquí? ¡Participa en los quizzes!</p>
                <a href="/Salesforce-Notes/seidorhoot" className="hoot-action-btn" style={{ textDecoration: 'none', padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                  Aceptar el Desafío
                </a>
              </div>
              </div> {/* Closes inner container (line 94) */}
            </div> {/* Closes leaderboard-wrap (line 87) */}
          )}
        </div> {/* Closes leaderboard-content (line 74) */}
      </main>
    </Layout>
  );
}
