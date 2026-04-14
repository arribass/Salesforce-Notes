import { useEffect, useState } from 'react';
import { useSupabase } from './supabaseClient';

export const usePrizes = () => {
  const supabase = useSupabase();
  const [prizes, setPrizes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) return;

    const fetchPrizes = async () => {
      const { data, error } = await supabase
        .from('prizes')
        .select('*')
        .order('cost', { ascending: true });

      if (!error) {
        setPrizes(data);
      }
      setLoading(false);
    };

    fetchPrizes();
  }, [supabase]);

  return { prizes, loading };
};

export const useRedemptions = (userId) => {
  const supabase = useSupabase();
  const [redemptions, setRedemptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const refreshRedemptions = () => setRefreshTrigger(prev => prev + 1);

  useEffect(() => {
    if (!supabase || !userId) return;

    const fetchRedemptions = async () => {
      const { data, error } = await supabase
        .from('redemptions')
        .select('*, prizes(name, image_url, cost)')
        .eq('user_id', userId)
        .order('redeemed_at', { ascending: false });

      if (!error) {
        setRedemptions(data);
      }
      setLoading(false);
    };

    fetchRedemptions();
  }, [supabase, userId, refreshTrigger]);

  return { redemptions, loading, refreshRedemptions };
};
