import React, { useState } from 'react';
import Layout from '@theme/Layout';
import ProfileHeader from '@site/src/components/Profile/ProfileHeader';
import BadgeGallery from '@site/src/components/Profile/BadgeGallery';
import PrizeCard from '@site/src/components/Profile/PrizeCard';
import RedeemedPrizes from '@site/src/components/Profile/RedeemedPrizes';
import { usePrizes, useRedemptions } from '@site/src/utils/hooks';
import { useAuth } from '@site/src/utils/AuthProvider';
import { useSupabase } from '@site/src/utils/supabaseClient';
import '@site/src/components/Profile/styles.css';

export default function ProfilePage() {
  const { prizes, loading: prizesLoading } = usePrizes();
  const { user, profile, refreshProfile, loading: authLoading } = useAuth();
  const supabase = useSupabase();
  const [successMessage, setSuccessMessage] = useState(null);
  const [refreshCounter, setRefreshCounter] = useState(0);
  
  // Edit Profile State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editUsername, setEditUsername] = useState('');
  const [editOffice, setEditOffice] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleRedeemSuccess = (prize) => {
    setSuccessMessage(`¡Éxito! Has canjeado: ${prize.name}`);
    setRefreshCounter(prev => prev + 1);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const openEditModal = () => {
    setEditUsername(profile?.username || '');
    setEditOffice(profile?.office || '');
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          username: editUsername,
          office: editOffice,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (error) throw error;
      
      await refreshProfile();
      setIsEditModalOpen(false);
      setSuccessMessage('Perfil actualizado correctamente ✨');
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      alert(`Error al actualizar: ${err.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Layout title="Tu Perfil" description="Gestiona tus puntos y recompensas de Salesforce">
      <main className="profile-page-container">
        <ProfileHeader onEdit={openEditModal} />

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

        {isEditModalOpen && (
          <div className="edit-profile-modal-overlay" onClick={() => !isSaving && setIsEditModalOpen(false)}>
            <div className="edit-profile-card astra-card" onClick={e => e.stopPropagation()}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem', color: '#1e293b' }}>Editar Perfil</h2>
              
              <form onSubmit={handleSaveProfile} className="auth-form">
                <div className="astra-input-group">
                  <label>Nombre de Usuario</label>
                  <input 
                    type="text" 
                    className="astra-input" 
                    value={editUsername}
                    onChange={e => setEditUsername(e.target.value)}
                    placeholder="Tu alias trailblazer"
                    required
                  />
                </div>

                <div className="astra-input-group">
                  <label>Tu Oficina</label>
                  <div className="office-selector-grid">
                    {['Pamplona', 'Zaragoza', 'Bilbao'].map(office => (
                      <div 
                        key={office}
                        className={`office-option ${editOffice === office ? 'active' : ''}`}
                        onClick={() => setEditOffice(office)}
                      >
                        {office}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <button 
                    type="button" 
                    className="hoot-action-btn" 
                    style={{ background: 'transparent', color: '#64748b', border: '1px solid #cbd5e1', flex: 1 }}
                    onClick={() => setIsEditModalOpen(false)}
                    disabled={isSaving}
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit" 
                    className="hoot-action-btn" 
                    style={{ flex: 1 }}
                    disabled={isSaving}
                  >
                    {isSaving ? 'Guardando...' : 'Guardar Cambios'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
