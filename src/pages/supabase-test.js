import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { useSupabase } from '@site/src/utils/supabaseClient';

export default function SupabaseTest() {
  const supabase = useSupabase();
  const [status, setStatus] = useState('Initializing...');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!supabase) {
      setStatus('Client not initialized (missing credentials?)');
      return;
    }

    async function testConnection() {
      try {
        // Try fetching something simple from Supabase
        // Even if the table doesn't exist, we can check if it returns 404 or something else
        const { data, error } = await supabase
          .from('test_connection') // Placeholder table name
          .select('*')
          .limit(1);

        if (error && error.code !== 'PGRST116' && error.code !== '42P01') { 
          // 42P01 is "relation does not exist", which is fine for a test
          setStatus('Connected but error: ' + error.message);
        } else {
          setStatus('Successfully connected to Supabase! (Table might not exist, but client works)');
          setData(data);
        }
      } catch (err) {
        setStatus('Error: ' + err.message);
      }
    }

    testConnection();
  }, [supabase]);

  return (
    <Layout title="Supabase Test">
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Supabase Connection Test</h1>
        <div style={{ 
          padding: '1rem', 
          borderRadius: '8px', 
          backgroundColor: status.includes('Successfully') ? '#d4edda' : '#f8d7da',
          color: status.includes('Successfully') ? '#155724' : '#721c24',
          marginBottom: '1rem'
        }}>
          <strong>Status:</strong> {status}
        </div>
        
        {data && (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}

        <p>If you see a success message, the integration is working. You can now start using Supabase in your components.</p>
      </div>
    </Layout>
  );
}
