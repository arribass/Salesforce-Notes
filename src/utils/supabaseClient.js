import { createClient } from '@supabase/supabase-js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const useSupabase = () => {
  const { siteConfig: { customFields } } = useDocusaurusContext();
  
  const supabaseUrl = customFields.supabaseUrl;
  const supabaseAnonKey = customFields.supabaseAnonKey;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase URL or Anon Key missing in customFields");
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey);
};

// For non-hook usage (if needed)
// Note: This won't work server-side easily without more setup, 
// but Docusaurus customFields are available in the browser.
