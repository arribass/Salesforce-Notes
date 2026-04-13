import React, { useState } from 'react';
import Layout from '@theme/Layout';
import LobbySkeleton from '../../components/SeidorHoot/LobbySkeleton';
import QuestionSkeleton from '../../components/SeidorHoot/QuestionSkeleton';
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

  const QUESTION_OPTIONS = [
    { label: '5 Questions', value: 5, desc: 'Quick Pulse' },
    { label: '10 Questions', value: 10, desc: 'Standard Session' },
    { label: '20 Questions', value: 20, desc: 'Deep Dive' },
    { label: 'Full Mission', value: 999, desc: 'All available questions' },
  ];

  const renderContent = () => {
    switch (gameState) {
      case 'LANDING':
        return (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', fontWeight: '900' }}>
              Seidor<span style={{ color: '#6366f1' }}>Hoot</span>! 🚀
            </h1>
            <p style={{ fontSize: '1.5rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto 4rem' }}>
              Professional, gamified Salesforce knowledge sessions for elite teams.
            </p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                className="hoot-pin-card astra-card" 
                style={{ cursor: 'pointer', flex: '1', minWidth: '300px', maxWidth: '400px' }}
                onClick={() => setGameState('CATEGORY_SELECT')}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📡</div>
                <h2 style={{ fontSize: '2rem' }}>Host a Session</h2>
                <p style={{ opacity: 0.6 }}>Project this on the big screen</p>
              </button>
              <button 
                className="hoot-pin-card astra-card" 
                style={{ cursor: 'pointer', flex: '1', minWidth: '300px', maxWidth: '400px' }}
                onClick={() => alert('Player mode skeleton coming soon! Use Host mode for now.')}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                <h2 style={{ fontSize: '2rem' }}>Join a Session</h2>
                <p style={{ opacity: 0.6 }}>Enter the PIN from your mobile</p>
              </button>
            </div>
          </div>
        );
      case 'CATEGORY_SELECT':
        return (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Select Experience</h1>
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
                  <div style={{ fontSize: '1.8rem' }}>{cat.name}</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 'QUESTION_COUNT_SELECT':
        return (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Mission Length</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.6, marginBottom: '3rem' }}>
              Select the number of questions for this session
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
                    <div style={{ fontSize: '1.6rem', fontWeight: '800' }}>{opt.label}</div>
                    <div style={{ fontSize: '1rem', opacity: 0.7 }}>{opt.desc}</div>
                  </div>
                </button>
              ))}
            </div>
            <button 
              className="hoot-action-btn"
              style={{ marginTop: '2rem', background: 'transparent', border: '1px solid var(--astra-border)' }}
              onClick={() => setGameState('CATEGORY_SELECT')}
            >
              ← Back to Categories
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
            onFinish={() => setGameState('RESULTS')} 
          />
        );
      case 'RESULTS':
        return (
          <div className="hoot-podium">
            <h1 style={{ fontSize: '3.5rem', marginBottom: '3rem' }}>Mission Complete!</h1>
            <div className="hoot-pin-card astra-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--astra-border)', paddingBottom: '1rem' }}>Elite Performers</h2>
              <div style={{ fontSize: '1.4rem', textAlign: 'left', maxWidth: '300px', margin: '0 auto' }}>
                <p>🥇 Arribas <span style={{ float: 'right', opacity: 0.7 }}>4500 pts</span></p>
                <p>🥈 SalesforceExpert <span style={{ float: 'right', opacity: 0.7 }}>3200 pts</span></p>
                <p>🥉 CloudRider <span style={{ float: 'right', opacity: 0.7 }}>2100 pts</span></p>
              </div>
            </div>
            
            <div style={{ marginTop: '4rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', opacity: 0.8 }}>Achievements Unlocked</h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div className="badge-item">
                  <span className="badge-icon">🎖️</span>
                  <span>First Mission</span>
                </div>
                <div className="badge-item">
                  <span className="badge-icon">🔥</span>
                  <span>On Fire!</span>
                </div>
              </div>
            </div>

            <button 
              className="hoot-action-btn"
              style={{ marginTop: '4rem' }}
              onClick={() => setGameState('LANDING')}
            >
              Back to Command Center
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
