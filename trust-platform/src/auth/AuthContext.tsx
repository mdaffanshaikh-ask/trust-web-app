import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase, isConfigured } from "@/lib/supabase";
import type { Role } from "@/lib/roles";

type Ctx = { session: Session | null; roles: Role[]; loading: boolean; signOut: () => Promise<void> };
const AuthCtx = createContext<Ctx>({ session: null, roles: [], loading: true, signOut: async () => {} });
export const useAuth = () => useContext(AuthCtx);

// UI convenience only. Real authorization is enforced by RLS (Phase 2).
export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(isConfigured);

  useEffect(() => {
    if (!isConfigured) return;
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); if (!data.session) setLoading(false); });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) { setRoles([]); return; }
    supabase.from("user_roles").select("roles(code)").eq("user_id", session.user.id)
      .then(({ data }) => {
        const codes = (data ?? []).flatMap((r: any) => (r.roles?.code ? [r.roles.code as Role] : []));
        setRoles(codes); setLoading(false);
      });
  }, [session]);

  return <AuthCtx.Provider value={{ session, roles, loading, signOut: async () => { await supabase.auth.signOut(); } }}>{children}</AuthCtx.Provider>;
}
