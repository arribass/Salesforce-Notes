import React, { useState } from 'react';
import Layout from '@theme/Layout';
import ProfileHeader from '@site/src/components/Profile/ProfileHeader';
import PrizeCard from '@site/src/components/Profile/PrizeCard';
import BadgeGallery from '@site/src/components/Profile/BadgeGallery';
import { usePrizes } from '@site/src/utils/hooks';
import { useAuth } from '@site/src/utils/AuthProvider';
import '@site/src/components/Profile/styles.css';

export default function ProfilePage() {
  const { prizes, loading: prizesLoading } = usePrizes();
  const { user, loading: authLoading } = useAuth();
  const [successMessage, setSuccessMessage] = useState(null);

  const handleRedeemSuccess = (prize) => {
    setSuccessMessage(`Success! You redeemed: ${prize.name}`);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <Layout title="Your Profile" description="Manage your Salesforce points and rewards">
      <main className="profile-page-container">
        <ProfileHeader />

        {user && (
          <>
            <BadgeGallery />

            <section className="prize-store-section">
              <div className="section-header">
                <span style={{ fontSize: '2rem' }}>🎁</span>
                <h2>Office Prize Store</h2>
              </div>
              
              {prizesLoading ? (
                <div className="prize-loading" style={{ textAlign: 'center', padding: '3rem', opacity: 0.5 }}>
                  Synthesizing perks...
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
