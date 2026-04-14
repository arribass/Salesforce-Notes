import { createClient } from '@supabase/supabase-js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

let supabaseInstance = null;

export const useSupabase = () => {
  const { siteConfig: { customFields } } = useDocusaurusContext();
  
  if (supabaseInstance) return supabaseInstance;

  const supabaseUrl = customFields.supabaseUrl;
  const supabaseAnonKey = customFields.supabaseAnonKey;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase URL or Anon Key missing in customFields");
    return null;
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
};

// For non-hook usage (if needed)
// Note: This won't work server-side easily without more setup, 
// but Docusaurus customFields are available in the browser.
