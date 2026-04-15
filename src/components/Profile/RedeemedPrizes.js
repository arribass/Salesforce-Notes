import React from 'react';
import { useRedemptions } from '../../utils/hooks';
import './styles.css';

export default function RedeemedPrizes({ userId }) {
  const { redemptions, loading } = useRedemptions(userId);

  if (loading || redemptions.length === 0) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'pending': return 'Pendiente';
      case 'approved': return 'Aprobado';
      case 'delivered': return 'Entregado';
      default: return status;
    }
  };

  return (
    <section className="redeemed-prizes-section" style={{ marginBottom: '5rem' }}>
      <div className="section-header">
        <span style={{ fontSize: '2rem' }}>📜</span>
        <h2>Mis Premios</h2>
      </div>

      <div className="redemption-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {redemptions.map((redemption) => (
          <div key={redemption.id} className="redemption-item astra-card" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '1.2rem 2rem',
            gap: '2rem'
          }}>
            <div className="redemption-prize-img" style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '15px', 
              overflow: 'hidden',
              flexShrink: 0,
              border: '1px solid var(--astra-border)'
            }}>
              <img 
                src={redemption.prizes?.image_url || '/Salesforce-Notes/img/prizes/placeholder.png'} 
                alt={redemption.prizes?.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            <div className="redemption-details" style={{ flex: 1 }}>
              <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', color: '#1e293b' }}>{redemption.prizes?.name}</h4>
              <p className="redemption-date" style={{ 
                margin: '0.4rem 0 0', 
                opacity: 0.9, 
                fontSize: '0.8rem',
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '1rem' }}>📅</span>
                <strong style={{ color: '#1e293b' }}>Fecha:</strong> {formatDate(redemption.redeemed_at)}
              </p>
            </div>

            <div className="redemption-meta" style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
              <div className="redemption-points" style={{ color: '#e11d48', fontWeight: '800', fontSize: '1rem' }}>
                -{redemption.prizes?.cost} XP
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
