import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { useSupabase } from '@site/src/utils/supabaseClient';
import { useAuth } from '@site/src/utils/AuthProvider';
import { useHistory } from '@docusaurus/router';
import '@site/src/components/Profile/styles.css';

export default function LoginPage() {
  const supabase = useSupabase();
  const { user } = useAuth();
  const history = useHistory();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (user) {
      history.push('/profile');
    }
  }, [user, history]);

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
        setMessage({ type: 'error', text: 'Target handle not found in database.' });
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
      setMessage({ type: 'success', text: 'Registration successful! Check your email for confirmation.' });
    }
    
    setLoading(false);
  };

  return (
    <Layout title="Command Center Login">
      <main className="profile-page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="auth-container astra-card">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
          <h1 style={{ fontWeight: '900', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            {isSignUp ? 'Join the Fleet' : 'Command Center'}
          </h1>
          <p style={{ opacity: 0.6, marginBottom: '2rem' }}>
            {isSignUp ? 'Create your credentials to start your mission.' : 'Access your Salesforce mastery profile.'}
          </p>

          <form className="auth-form" onSubmit={handleAuth}>
            {isSignUp && (
              <div className="astra-input-group">
                <label>Username</label>
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
              <label>Username or Email</label>
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
              <label>Passcode</label>
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
              {loading ? 'Authenticating...' : isSignUp ? 'Initiate Account' : 'Establish Connection'}
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
            {isSignUp ? 'Already have an account?' : 'New Trailblazer?'}
            <span className="auth-mode-link" onClick={() => { setIsSignUp(!isSignUp); setMessage(null); }}>
              {isSignUp ? 'Access Login' : 'Create Credentials'}
            </span>
          </div>
        </div>
      </main>
    </Layout>
  );
}
