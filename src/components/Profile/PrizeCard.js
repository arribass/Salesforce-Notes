import React, { useState } from 'react';
import { useAuth } from '../../utils/AuthProvider';
import { useSupabase } from '../../utils/supabaseClient';
import './styles.css';

export default function PrizeCard({ prize, onRedeem }) {
  const { profile, refreshProfile } = useAuth();
  const supabase = useSupabase();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRedeem = async () => {
    if (!profile || profile.points < prize.cost) {
      setError('Puntos insuficientes');
      return;
    }

    setLoading(true);
    setError(null);

    const { error: redemptionError } = await supabase
      .from('redemptions')
      .insert({
        user_id: profile.id,
        prize_id: prize.id,
        status: 'pending'
      });

    if (redemptionError) {
      setError(redemptionError.message);
      setLoading(false);
      return;
    }

    // Deduct points (this should be a transaction, but for now we'll update)
    const { error: updateError } = await supabase
      .from('profiles')
      .update({ points: profile.points - prize.cost })
      .eq('id', profile.id);

    if (updateError) {
      setError(updateError.message);
    } else {
      refreshProfile();
      onRedeem(prize);
    }
    setLoading(false);
  };

  return (
    <div className="astra-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div className="prize-image-wrap">
        <img src={prize.image_url || '/img/prizes/placeholder.png'} alt={prize.name} />
      </div>
      
      <div className="prize-astra-content">
        <div className="prize-header">
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', margin: 0, color: '#1e293b' }}>{prize.name}</h3>
          <div className="prize-cost-tag">{prize.cost} PTS</div>
        </div>
        
        <p style={{ color: '#445469', fontSize: '0.95rem', margin: '1rem 0 2rem', lineHeight: '1.5', minHeight: '3rem' }}>
          {prize.description}
        </p>

        <div style={{ marginTop: 'auto' }}>
          <button 
            className="hoot-action-btn" 
            style={{ width: '100%', fontSize: '1rem' }}
            disabled={loading || profile?.points < prize.cost}
            onClick={handleRedeem}
          >
            {loading ? 'Procesando...' : profile?.points < prize.cost ? 'Bloqueado' : 'Canjear Premio'}
          </button>
          
          {error && <span className="error-message">⚠️ {error}</span>}
        </div>
      </div>
    </div>
  );
}
