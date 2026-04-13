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
