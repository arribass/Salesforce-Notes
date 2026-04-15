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
      history.push(homePath);
    };
    performLogout();
  }, [signOut, history, homePath]);

  return (
    <Layout title="Cerrando Sesión">
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '50vh',
        color: '#ffffff',
        fontSize: '1.5rem',
        opacity: 0.5
      }}>
        Desconectando de la flota...
      </div>
    </Layout>
  );
}
