import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { useSupabase } from '@site/src/utils/supabaseClient';
import { useAuth } from '@site/src/utils/AuthProvider';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '@site/src/components/Profile/styles.css';

export default function LoginPage() {
  const supabase = useSupabase();
  const { user } = useAuth();
  const history = useHistory();
  const profileUrl = useBaseUrl('/profile');
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (user) {
      history.push(profileUrl);
    }
  }, [user, history, profileUrl]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    let finalEmail = email;

    // Login Bridge: Resolve username to email if necessary
    if (!isSignUp && !email.includes('@')) {
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('email')
        .eq('username', email)
        .single();

      if (profileError || !profileData?.email) {
        setMessage({ type: 'error', text: 'Usuario no encontrado en la base de datos.' });
        setLoading(false);
        return;
      }
      finalEmail = profileData.email;
    }

    const { error } = isSignUp 
      ? await supabase.auth.signUp({ 
          email: finalEmail, 
          password,
          options: {
            data: {
              username: username,
              full_name: username,
            }
          }
        })
      : await supabase.auth.signInWithPassword({ email: finalEmail, password });

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else if (isSignUp) {
      setMessage({ type: 'success', text: '¡Registro completado! Revisa tu email para confirmar la cuenta.' });
    }
    
    setLoading(false);
  };

  return (
    <Layout title="Login Centro de Mando">
      <main className="profile-page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="auth-container astra-card">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
          <h1 style={{ fontWeight: '900', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            {isSignUp ? 'Únete a la Flota' : 'Centro de Mando'}
          </h1>
          <p style={{ opacity: 0.6, marginBottom: '2rem' }}>
            {isSignUp ? 'Crea tus credenciales para empezar tu misión.' : 'Accede a tu perfil de maestría de Salesforce.'}
          </p>

          <form className="auth-form" onSubmit={handleAuth}>
            {isSignUp && (
            <div className="astra-input-group">
              <label>Nombre de Usuario</label>
              <input 
                type="text" 
                className="astra-input" 
                placeholder="TheTrailblazer"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required={isSignUp}
              />
            </div>
          )}

          <div className="astra-input-group">
            <label>Usuario o Email</label>
            <input 
              type="text" 
              className="astra-input" 
              placeholder="pilot@salesforce.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="astra-input-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              className="astra-input" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            className="hoot-action-btn" 
            style={{ padding: '1.2rem', marginTop: '1rem' }}
            disabled={loading}
            type="submit"
          >
            {loading ? 'Autenticando...' : isSignUp ? 'Crear Cuenta' : 'Establecer Conexión'}
          </button>
        </form>

        {message && (
          <div 
            className={message.type === 'error' ? 'error-message' : 'success-notification'} 
            style={{ position: 'relative', bottom: 'auto', right: 'auto', marginTop: '2rem', animation: 'none' }}
          >
            {message.text}
          </div>
        )}

        <div className="auth-mode-toggle">
          {isSignUp ? '¿Ya tienes una cuenta?' : '¿Nuevo Trailblazer?'}
          <span className="auth-mode-link" onClick={() => { setIsSignUp(!isSignUp); setMessage(null); }}>
            {isSignUp ? 'Acceder al Login' : 'Crear Credenciales'}
          </span>
        </div>
        </div>
      </main>
    </Layout>
  );
}
