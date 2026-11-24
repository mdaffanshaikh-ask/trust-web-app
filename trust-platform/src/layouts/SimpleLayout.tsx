import { Link, NavLink, Outlet } from "react-router-dom";
import { SetupNotice } from "@/components/SetupNotice";
import { useAuth } from "@/auth/AuthContext";
export function SimpleLayout({ title, links, area }: { title: string; links: { to: string; label: string; end?: boolean }[]; area: "public" | "donor" }) {
  const { session, signOut } = useAuth();
  return (<div className="min-h-screen"><SetupNotice />
    <header className="border-b border-forest-100 bg-white"><div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4">
      <Link to={area === "public" ? "/" : "/donor"} className="font-semibold text-forest-700">{title}</Link>
      <nav aria-label="Main" className="flex flex-1 gap-4 overflow-x-auto text-sm">{links.map((l) => <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => isActive ? "font-medium text-forest-700" : "text-ink/70 hover:text-ink"}>{l.label}</NavLink>)}</nav>
      {session ? <button onClick={signOut} className="text-sm text-ink/70">Sign out</button> : <Link to="/login" className="text-sm font-medium text-forest-700">Sign in</Link>}
    </div></header>
    <main className="animate-fade mx-auto max-w-6xl p-6"><Outlet /></main></div>);
}
