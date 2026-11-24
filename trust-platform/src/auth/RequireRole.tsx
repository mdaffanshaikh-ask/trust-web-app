import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import type { Role } from "@/lib/roles";
export function RequireRole({ allow }: { allow: Role[] }) {
  const { session, roles, loading } = useAuth();
  const loc = useLocation();
  if (loading) return <div className="p-8 text-sm text-ink/60">Loading…</div>;
  if (!session) return <Navigate to="/login" state={{ from: loc.pathname }} replace />;
  if (!roles.some((r) => allow.includes(r))) return <div className="p-8"><h1 className="text-lg font-semibold">No access</h1><p className="mt-1 text-sm text-ink/60">Your account doesn't have a role for this area. Ask a Super Admin to assign one.</p></div>;
  return <Outlet />;
}
