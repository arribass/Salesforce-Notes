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
  xp integer DEFAULT 0,
  office text,
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

-- 4. Badges Table (Achievement Catalog)
CREATE TABLE IF NOT EXISTS public.badges (
  id text PRIMARY KEY,
  name text NOT NULL,
  description text,
  icon text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- 5. User Badges Table (Earned Achievements)
CREATE TABLE IF NOT EXISTS public.user_badges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  badge_id text REFERENCES public.badges(id) ON DELETE CASCADE NOT NULL,
  earned_at timestamptz DEFAULT now(),
  UNIQUE(user_id, badge_id)
);

-- ==========================================
-- RLS (ROW LEVEL SECURITY)
-- ==========================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prizes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.redemptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;

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

-- Badges Policies
DROP POLICY IF EXISTS "Badges are viewable by everyone" ON public.badges;
CREATE POLICY "Badges are viewable by everyone" ON public.badges FOR SELECT USING (true);

-- User Badges Policies
DROP POLICY IF EXISTS "Users can view own badges" ON public.user_badges;
CREATE POLICY "Users can view own badges" ON public.user_badges FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "System can insert user badges" ON public.user_badges;
CREATE POLICY "System can insert user badges" ON public.user_badges FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ==========================================
-- SEIDORHOOT MULTIPLAYER SYSTEM
-- ==========================================

-- 6. Hoot Sessions (Game Instance)
CREATE TABLE IF NOT EXISTS public.hoot_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pin text UNIQUE NOT NULL,
  host_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  category_id text NOT NULL,
  question_count integer NOT NULL,
  status text NOT NULL DEFAULT 'LOBBY', -- LOBBY, PLAYING, FINISHED
  current_question_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- 7. Hoot Participants (Players in a session)
CREATE TABLE IF NOT EXISTS public.hoot_participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid REFERENCES public.hoot_sessions(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  username text NOT NULL,
  score integer DEFAULT 0,
  joined_at timestamptz DEFAULT now(),
  UNIQUE(session_id, user_id)
);

-- Enable RLS for Multiplayer
ALTER TABLE public.hoot_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hoot_participants ENABLE ROW LEVEL SECURITY;

-- Session Policies
DROP POLICY IF EXISTS "Sessions are viewable by everyone" ON public.hoot_sessions;
CREATE POLICY "Sessions are viewable by everyone" ON public.hoot_sessions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Hosts can manage own sessions" ON public.hoot_sessions;
CREATE POLICY "Hosts can manage own sessions" ON public.hoot_sessions FOR ALL USING (auth.uid() = host_id);

-- Participant Policies
DROP POLICY IF EXISTS "Participants are viewable by everyone" ON public.hoot_participants;
CREATE POLICY "Participants are viewable by everyone" ON public.hoot_participants FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can manage own participation" ON public.hoot_participants;
CREATE POLICY "Users can manage own participation" ON public.hoot_participants FOR ALL USING (auth.uid() = user_id);

-- Enable Realtime for multiplayer sync (Indempotent addition)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime') THEN
    IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND tablename = 'hoot_sessions') THEN
      ALTER PUBLICATION supabase_realtime ADD TABLE public.hoot_sessions;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND tablename = 'hoot_participants') THEN
      ALTER PUBLICATION supabase_realtime ADD TABLE public.hoot_participants;
    END IF;
  END IF;
END $$;

-- ==========================================
-- SEED INITIAL DATA
-- ==========================================

-- Seed Prizes
INSERT INTO public.prizes (name, description, cost, image_url, stock) VALUES
('Cangrejo de Oficina', 'Cangrejo de oficina - para sujetar tu boli.', 1000, '/Salesforce-Notes/img/cangrejo.png', 10),
('Taza Force Notes', 'Una taza cerámica de alta calidad para tus sesiones de estudio.', 2000, '/Salesforce-Notes/img/taza.png', 15),
('Pegatinas Trailblazer', 'Set de pegatinas exclusivas para decorar tu portátil.', 100, '/Salesforce-Notes/img/pegatinas.png', 100)
ON CONFLICT DO NOTHING;

-- Seed Badges
INSERT INTO public.badges (id, name, description, icon) VALUES
('first_mission', 'Primera Misión', 'Completaste tu primer SeidorHoot', '🎖️'),
('quiz_master', 'Maestro del Quiz', 'Respondiste correctamente a 50 preguntas', '🧠'),
('on_fire', '¡En racha!', '3 respuestas correctas seguidas', '🔥'),
('early_bird', 'Madrugador', 'Completaste un quiz antes de las 9 AM', '🌅')
ON CONFLICT (id) DO UPDATE SET 
  name = EXCLUDED.name, 
  description = EXCLUDED.description, 
  icon = EXCLUDED.icon;

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
