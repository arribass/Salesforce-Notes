-- ==========================================
-- GAMIFICATION SYSTEM SCHEMA
-- ==========================================

-- 1. Profiles Table (Extends Auth Users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  username text UNIQUE,
  email text UNIQUE,
  avatar_url text,
  points integer DEFAULT 0,
  last_check_in timestamptz,
  updated_at timestamptz DEFAULT now()
);

-- 2. Prizes Table
CREATE TABLE IF NOT EXISTS public.prizes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  cost integer NOT NULL,
  image_url text,
  stock integer DEFAULT 10,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- 3. Redemptions Table
CREATE TABLE IF NOT EXISTS public.redemptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  prize_id uuid REFERENCES public.prizes(id) ON DELETE CASCADE NOT NULL,
  status text DEFAULT 'pending', -- pending, approved, delivered
  redeemed_at timestamptz DEFAULT now()
);

-- ==========================================
-- RLS (ROW LEVEL SECURITY)
-- ==========================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prizes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.redemptions ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Prizes Policies
DROP POLICY IF EXISTS "Prizes are viewable by everyone" ON public.prizes;
CREATE POLICY "Prizes are viewable by everyone" ON public.prizes FOR SELECT USING (true);

-- Redemptions Policies
DROP POLICY IF EXISTS "Users can view own redemptions" ON public.redemptions;
CREATE POLICY "Users can view own redemptions" ON public.redemptions FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own redemptions" ON public.redemptions;
CREATE POLICY "Users can insert own redemptions" ON public.redemptions FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ==========================================
-- SEED INITIAL PRIZES
-- ==========================================

INSERT INTO public.prizes (name, description, cost, image_url, stock) VALUES
('Cangrejo de Oficina', 'Cangrejo de oficina - para sujetar tu boli.', 1000, '/Salesforce-Notes/img/cangrejo.png', 10)
ON CONFLICT DO NOTHING;

-- ==========================================
-- TRIGGER FOR NEW USERS
-- ==========================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, username, email, avatar_url)
  VALUES (
    new.id, 
    COALESCE(new.raw_user_meta_data->>'username', new.raw_user_meta_data->>'full_name'), 
    new.email,
    new.raw_user_meta_data->>'avatar_url'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
