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
  const [gameState, setGameState] = useState('LANDING'); // LANDING, CATEGORY_SELECT, LOBBY, PLAYING, RESULTS
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderContent = () => {
    switch (gameState) {
      case 'LANDING':
        return (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>SeidorHoot! 🚀</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Gamified Salesforce Quizzes for the Office</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem' }}>
              <button 
                className="hoot-pin-card" 
                style={{ cursor: 'pointer', border: '2px solid transparent' }}
                onClick={() => setGameState('CATEGORY_SELECT')}
              >
                <h2>Host a Session</h2>
                <p>Project this on the big screen</p>
              </button>
              <button 
                className="hoot-pin-card" 
                style={{ cursor: 'pointer', border: '2px solid transparent' }}
                onClick={() => alert('Player mode skeleton coming soon! Use Host mode for now.')}
              >
                <h2>Join a Session</h2>
                <p>Play from your mobile</p>
              </button>
            </div>
          </div>
        );
      case 'CATEGORY_SELECT':
        return (
          <div style={{ textAlign: 'center' }}>
            <h1>Select a Category</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat.id}
                  className="hoot-option-card hoot-option-blue"
                  style={{ border: 'none', cursor: 'pointer' }}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setGameState('LOBBY');
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
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
        return (
          <QuestionSkeleton 
            questions={selectedCategory?.data} 
            onFinish={() => setGameState('RESULTS')} 
          />
        );
      case 'RESULTS':
        return (
          <div className="hoot-podium">
            <h1>Game Finished!</h1>
            <div className="hoot-pin-card">
              <h2>Podium</h2>
              <p>🥇 Arribas - 4500 pts</p>
              <p>🥈 SalesforceExpert - 3200 pts</p>
              <p>🥉 CloudRider - 2100 pts</p>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <h3>Badges Earned</h3>
              <div className="badge-item">
                <span className="badge-icon">🎖️</span>
                <span>First Hoot!</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">🔥</span>
                <span>On Fire! (3 correct in a row)</span>
              </div>
            </div>

            <button 
              className="hoot-action-btn"
              style={{ marginTop: '2rem', padding: '1rem 2rem', cursor: 'pointer' }}
              onClick={() => setGameState('LANDING')}
            >
              Back to Home
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
