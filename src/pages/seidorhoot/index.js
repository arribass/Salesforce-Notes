import React, { useState } from 'react';
import Layout from '@theme/Layout';
import LobbySkeleton from '../../components/SeidorHoot/LobbySkeleton';
import QuestionSkeleton from '../../components/SeidorHoot/QuestionSkeleton';
import { useAuth } from '../../utils/AuthProvider';
import { useSupabase } from '../../utils/supabaseClient';
import '../../components/SeidorHoot/styles.css';

// Importar datos de preguntas
import adminData from '../../data/admin.json';
import aiData from '../../data/ai-associate.json';
import appBuilderData from '../../data/app-builder.json';

const CATEGORIES = [
  { id: 'admin', name: 'Salesforce Admin', data: adminData },
  { id: 'ai', name: 'AI Associate', data: aiData },
  { id: 'appbuilder', name: 'App Builder', data: appBuilderData },
];

export default function SeidorHootPage() {
  const [gameState, setGameState] = useState('LANDING'); // LANDING, CATEGORY_SELECT, QUESTION_COUNT_SELECT, LOBBY, PLAYING, RESULTS
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCount, setSelectedCount] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  const { user, profile, refreshProfile } = useAuth();
  const supabase = useSupabase();

  const handleFinish = async (points) => {
    console.log('[SeidorHoot] handleFinish entry. Points:', points);
    setFinalScore(points);
    setGameState('RESULTS');
    setSaveError(null);
    
    if (user && points > 0) {
      setIsSaving(true);
      try {
        console.log('[SeidorHoot] Syncing for user:', user.id);
        console.log('[SeidorHoot] Current profile state:', profile);

        // Obtenemos los puntos más recientes antes de sumar para evitar sobreescrituras
        const { data: latestProfile, error: fetchError } = await supabase
          .from('profiles')
          .select('id, points, xp')
          .eq('id', user.id)
          .maybeSingle();
        
        if (fetchError) {
          console.error('[SeidorHoot] Error fetching latest points:', fetchError);
          throw new Error(`Profile sync failed: ${fetchError.message}`);
        }

        const currentPoints = latestProfile?.points ?? 0;
        const currentXP = latestProfile?.xp ?? 0;
        const newTotalPoints = currentPoints + points;
        const newTotalXP = currentXP + points;
        
        console.log(`[SeidorHoot] Calculating Puntos: ${currentPoints} (old) + ${points} (new) = ${newTotalPoints} (final)`);
        console.log(`[SeidorHoot] Calculating XP: ${currentXP} (old) + ${points} (new) = ${newTotalXP} (final)`);

        // Usamos UPSERT en lugar de update para crear el perfil si no existe durante el guardado
        const { data: updatedData, error: updateError } = await supabase
          .from('profiles')
          .upsert({ 
            id: user.id, 
            points: newTotalPoints,
            xp: newTotalXP,
            email: user.email,
            username: profile?.username || user.user_metadata?.username || user.email?.split('@')[0],
            updated_at: new Date().toISOString()
          })
          .select();

        if (updateError) {
          console.error('[SeidorHoot] Update Error:', updateError);
          throw updateError;
        }

        if (!updatedData || updatedData.length === 0) {
          console.warn('[SeidorHoot] Update ejecutado pero no se encontró fila para ID:', user.id);
          throw new Error('No se encontró el perfil para actualizar. Comprueba que tu perfil existe.');
        }

        console.log('[SeidorHoot] Update Success! Row returned:', updatedData[0]);
        
        // --- 🏆 Award "First Mission" Badge ---
        const { error: badgeError } = await supabase
          .from('user_badges')
          .insert({ 
            user_id: user.id, 
            badge_id: 'first_mission' 
          });
        
        if (badgeError && badgeError.code !== '23505') { // 23505 is unique violation
          console.warn('[SeidorHoot] Failed to award First Mission badge:', badgeError);
        } else if (!badgeError) {
          console.log('[SeidorHoot] Badge "First Mission" awarded successfully!');
        }

        // Refrescamos el perfil global
        await refreshProfile();
      } catch (err) {
        console.error('[SeidorHoot] Execution Error:', err);
        setSaveError(err.message || 'Unknown error during save');
      } finally {
        setIsSaving(false);
      }
    } else if (!user) {
      console.warn('[SeidorHoot] Playing as guest. No points will be saved.');
    }
  };

  const QUESTION_OPTIONS = [
    { label: '5 Preguntas', value: 5, desc: 'Sesión Rápida' },
    { label: '10 Preguntas', value: 10, desc: 'Sesión Estándar' },
    { label: '20 Preguntas', value: 20, desc: 'Sesión Profunda' },
    { label: 'Misión Completa', value: 999, desc: 'Todas las preguntas disponibles' },
  ];

  const renderContent = () => {
    switch (gameState) {
      case 'LANDING':
        return (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', fontWeight: '900', letterSpacing: '-1px' }}>
              Seidor<span style={{ color: '#818cf8' }}>Hoot</span>! 🚀
            </h1>
            <p style={{ fontSize: '1.5rem', opacity: 1, maxWidth: '600px', margin: '0 auto 4rem', color: '#ffffff' }}>
              Sesiones de conocimiento de Salesforce profesionales y gamificadas para equipos de élite.
            </p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                className="hoot-pin-card astra-card" 
                style={{ cursor: 'pointer', flex: '1', minWidth: '300px', maxWidth: '400px' }}
                onClick={() => setGameState('CATEGORY_SELECT')}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>📡</div>
                <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem', color: '#ffffff' }}>Anfitrión de Sesión</h2>
                <p style={{ opacity: 0.9, color: '#ffffff' }}>Proyecta esto en la pantalla grande</p>
              </button>
              <button 
                className="hoot-pin-card astra-card" 
                style={{ cursor: 'pointer', flex: '1', minWidth: '300px', maxWidth: '400px' }}
                onClick={() => alert('Player mode skeleton coming soon! Use Host mode for now.')}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>📱</div>
                <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem', color: '#ffffff' }}>Unirse a una Sesión</h2>
                <p style={{ opacity: 0.9, color: '#ffffff' }}>Introduce el PIN desde tu móvil</p>
              </button>
            </div>
          </div>
        );
      case 'CATEGORY_SELECT':
        return (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '3rem', color: '#ffffff' }}>Seleccionar Tema</h1>
            <div className="hoot-options-grid">
              {CATEGORIES.map((cat, i) => (
                <button 
                  key={cat.id}
                  className={`hoot-option-card astra-card astra-opt-${i % 4}`}
                  style={{ border: 'none', cursor: 'pointer', minHeight: '150px' }}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setGameState('QUESTION_COUNT_SELECT');
                  }}
                >
                  <div className="hoot-indicator">{i + 1}</div>
                  <div style={{ fontSize: '1.8rem', color: '#ffffff' }}>{cat.name}</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 'QUESTION_COUNT_SELECT':
        return (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ffffff' }}>Duración de la Misión</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.6, marginBottom: '3rem' }}>
              Selecciona el número de preguntas para esta sesión
            </p>
            <div className="hoot-options-grid">
              {QUESTION_OPTIONS.map((opt, i) => (
                <button 
                  key={i}
                  className={`hoot-option-card astra-card astra-opt-${i % 4}`}
                  style={{ border: 'none', cursor: 'pointer', minHeight: '140px' }}
                  onClick={() => {
                    setSelectedCount(opt.value);
                    setGameState('LOBBY');
                  }}
                >
                  <div className="hoot-indicator">
                    {opt.value === 999 ? '∞' : opt.value}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ffffff' }}>{opt.label}</div>
                    <div style={{ fontSize: '1rem', opacity: 0.9, color: '#ffffff' }}>{opt.desc}</div>
                  </div>
                </button>
              ))}
            </div>
            <button 
              className="hoot-action-btn"
              style={{ marginTop: '2rem', background: 'transparent', border: '1px solid var(--astra-border)' }}
              onClick={() => setGameState('CATEGORY_SELECT')}
            >
              ← Volver a Categorías
            </button>
          </div>
        );
      case 'LOBBY':
        return (
          <LobbySkeleton 
            categoryName={selectedCategory?.name} 
            onStart={() => setGameState('PLAYING')} 
          />
        );
      case 'PLAYING':
        const slicedQuestions = selectedCategory?.data?.slice(0, selectedCount) || [];
        return (
          <QuestionSkeleton 
            questions={slicedQuestions} 
            onFinish={handleFinish} 
          />
        );
      case 'RESULTS':
        return (
          <div className="hoot-podium">
            <h1 style={{ fontSize: '3.5rem', marginBottom: '3rem' }}>¡Misión Completada!</h1>
            <div className="hoot-pin-card astra-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--astra-border)', paddingBottom: '1rem' }}>Mejores Puntuaciones</h2>
              <div style={{ fontSize: '1.4rem', textAlign: 'left', maxWidth: '300px', margin: '0 auto' }}>
                <p>🥇 {profile?.username || 'You'} <span style={{ float: 'right', opacity: 0.7 }}>{finalScore} pts</span></p>
                {isSaving ? (
                  <p style={{ fontSize: '1rem', color: 'var(--astra-text-muted)', marginTop: '1rem', textAlign: 'center', animation: 'pulse 1.5s infinite' }}>
                    Sincronizando puntos con Supabase...
                  </p>
                ) : saveError ? (
                  <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', padding: '1rem', borderRadius: '12px', marginTop: '1rem' }}>
                    <p style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '0.5rem' }}>❌ Error al actualizar</p>
                    <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>{saveError}</p>
                  </div>
                ) : (
                  finalScore > 0 && (
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                      <p style={{ fontSize: '1rem', color: 'var(--astra-gold)', fontWeight: '800' }}>¡+ {finalScore} XP Añadida!</p>
                      <p style={{ fontSize: '0.9rem', opacity: 0.5 }}>Total: {profile?.points || 0} pts</p>
                      {!user && <p style={{ fontSize: '0.8rem', color: '#6366f1', marginTop: '0.5rem' }}>Jugando como Invitado (Inicia sesión para guardar puntos)</p>}
                    </div>
                  )
                )}
              </div>
            </div>
            
            <div style={{ marginTop: '4rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', opacity: 0.8 }}>Logros Desbloqueados</h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div className="badge-item">
                  <span className="badge-icon">🎖️</span>
                  <span>Primera Misión</span>
                </div>
                <div className="badge-item">
                  <span className="badge-icon">🔥</span>
                  <span>¡En racha!</span>
                </div>
              </div>
            </div>

            <button 
              className="hoot-action-btn"
              style={{ marginTop: '4rem' }}
              onClick={() => setGameState('LANDING')}
            >
              Volver al Centro de Mando
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout title="SeidorHoot" description="Multiplayer Salesforce Quiz System">
      <main className="hoot-container" style={{ margin: '2rem auto', maxWidth: '1200px' }}>
        {renderContent()}
      </main>
    </Layout>
  );
}
