import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSupabase } from './supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const supabase = useSupabase();
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
      setLoading(false);
    });

    // 2. Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  useEffect(() => {
    if (session?.user) {
      fetchProfile(session.user.id);
    }
  }, [session, supabase]);

  const fetchProfile = async (userId) => {
    if (!userId) return null;
    console.log('[Auth] Fetching profile for userID:', userId);
    
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      console.error('[Auth] Error fetching profile:', error);
      return null;
    }

    // Si no existe la fila, la creamos automáticamente
    if (!data) {
      console.warn('[Auth] Profile missing. Attempting auto-creation...');
      
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      
      const newProfile = {
        id: userId,
        email: currentUser?.email,
        username: currentUser?.user_metadata?.username || currentUser?.email?.split('@')[0],
        points: 0,
      };

      const { data: createdData, error: createError } = await supabase
        .from('profiles')
        .insert(newProfile)
        .select()
        .maybeSingle();

      if (createError) {
        console.error('[Auth] Failed to auto-create profile:', createError);
        return null;
      }

      console.log('[Auth] Profile auto-created successfully:', createdData);
      setProfile(createdData);
      return createdData;
    }

    console.log('[Auth] Profile fetched successfully:', data);
    setProfile(data);
    return data;
  };

  const signOut = () => supabase.auth.signOut();

  const value = {
    user,
    session,
    profile,
    loading,
    signOut,
    refreshProfile: () => fetchProfile(user?.id),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;
