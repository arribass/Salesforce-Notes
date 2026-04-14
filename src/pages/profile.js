import React, { useState } from 'react';
import Layout from '@theme/Layout';
import ProfileHeader from '@site/src/components/Profile/ProfileHeader';
import BadgeGallery from '@site/src/components/Profile/BadgeGallery';
import PrizeCard from '@site/src/components/Profile/PrizeCard';
import RedeemedPrizes from '@site/src/components/Profile/RedeemedPrizes';
import { usePrizes, useRedemptions } from '@site/src/utils/hooks';
import { useAuth } from '@site/src/utils/AuthProvider';
import '@site/src/components/Profile/styles.css';

export default function ProfilePage() {
  const { prizes, loading: prizesLoading } = usePrizes();
  const { user, loading: authLoading } = useAuth();
  const [successMessage, setSuccessMessage] = useState(null);
  const [refreshCounter, setRefreshCounter] = useState(0);

  const handleRedeemSuccess = (prize) => {
    setSuccessMessage(`¡Éxito! Has canjeado: ${prize.name}`);
    setRefreshCounter(prev => prev + 1);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <Layout title="Tu Perfil" description="Gestiona tus puntos y recompensas de Salesforce">
      <main className="profile-page-container">
        <ProfileHeader />

        {user && (
          <>
            <BadgeGallery />

            <RedeemedPrizes userId={user.id} key={`redemptions-${refreshCounter}`} />

            <section id="rewards" className="prize-store-section">
              <div className="section-header">
                <span style={{ fontSize: '2rem' }}>🎁</span>
                <h2>Tienda de Premios</h2>
              </div>
              
              {prizesLoading ? (
                <div className="prize-loading" style={{ textAlign: 'center', padding: '3rem', opacity: 0.5 }}>
                  Sintezando ventajas...
                </div>
              ) : (
                <div className="prize-grid">
                  {prizes.map(prize => (
                    <PrizeCard 
                      key={prize.id} 
                      prize={prize} 
                      onRedeem={handleRedeemSuccess} 
                    />
                  ))}
                </div>
              )}
            </section>
          </>
        )}

        {!user && !authLoading && (
          <div style={{ marginTop: '4rem' }}>
            {/* Handled by ProfileHeader's empty state */}
          </div>
        )}

        {successMessage && (
          <div className="success-notification">
            ✨ {successMessage}
          </div>
        )}
      </main>
    </Layout>
  );
}
