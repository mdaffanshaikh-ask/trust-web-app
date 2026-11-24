import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
export const isConfigured = Boolean(url && key);
// Placeholder values keep the app bootable so the setup notice can render.
export const supabase = createClient(url ?? "http://localhost:54321", key ?? "missing-anon-key");
