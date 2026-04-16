-- ==========================================
-- SEIDORHOOT MULTIPLAYER SYSTEM
-- ==========================================

-- 1. Hoot Sessions (La instancia de la partida)
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

-- 2. Hoot Participants (Los jugadores dentro de una sesión)
CREATE TABLE IF NOT EXISTS public.hoot_participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid REFERENCES public.hoot_sessions(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  username text NOT NULL,
  score integer DEFAULT 0,
  joined_at timestamptz DEFAULT now(),
  UNIQUE(session_id, user_id)
);

-- Habilitar RLS
ALTER TABLE public.hoot_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hoot_participants ENABLE ROW LEVEL SECURITY;

-- Políticas para Sesiones
DROP POLICY IF EXISTS "Sessions are viewable by everyone" ON public.hoot_sessions;
CREATE POLICY "Sessions are viewable by everyone" ON public.hoot_sessions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Hosts can manage own sessions" ON public.hoot_sessions;
CREATE POLICY "Hosts can manage own sessions" ON public.hoot_sessions FOR ALL USING (auth.uid() = host_id);

-- Políticas para Participantes
DROP POLICY IF EXISTS "Participants are viewable by everyone" ON public.hoot_participants;
CREATE POLICY "Participants are viewable by everyone" ON public.hoot_participants FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can manage own participation" ON public.hoot_participants;
CREATE POLICY "Users can manage own participation" ON public.hoot_participants FOR ALL USING (auth.uid() = user_id);

-- IMPORTANTE: Activar Realtime para estas tablas
-- Esto es lo que permite la sincronización en vivo
ALTER PUBLICATION supabase_realtime ADD TABLE public.hoot_sessions;
ALTER PUBLICATION supabase_realtime ADD TABLE public.hoot_participants;
