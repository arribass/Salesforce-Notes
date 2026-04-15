import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import { useAuth } from '@site/src/utils/AuthProvider';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function LogoutPage() {
  const { signOut } = useAuth();
  const history = useHistory();
  const homePath = useBaseUrl('/');

  useEffect(() => {
    const performLogout = async () => {
      await signOut();
      // Use window.location for a hard redirect to the home path to ensure 
      // the project root is loaded correctly on GitHub Pages
      window.location.href = homePath;
    };
    performLogout();
  }, [signOut, homePath]);

  return (
    <Layout title="Cerrando Sesión">
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column',
        height: '60vh',
        color: '#1e293b',
        fontSize: '1.2rem',
        background: '#f3f3f2'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👋</div>
        Desconectando del Centro de Mando...
      </div>
    </Layout>
  );
}
