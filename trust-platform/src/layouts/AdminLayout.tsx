import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LayoutDashboard, HeartHandshake, Banknote, Landmark, FolderKanban, Receipt, Users, FileText, CheckSquare, BarChart3, Sparkles, MapPin, ScrollText, Settings, Menu, PanelLeftClose, LogOut, Bell } from "lucide-react";
import { useAuth } from "@/auth/AuthContext";
import { SetupNotice } from "@/components/SetupNotice";
import { cn } from "@/lib/utils";

export const adminNav = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/donors", label: "Donors", icon: HeartHandshake },
  { to: "/admin/donations", label: "Donations", icon: Banknote },
  { to: "/admin/funds", label: "Funds", icon: Landmark },
  { to: "/admin/projects", label: "Projects", icon: FolderKanban },
  { to: "/admin/expenses", label: "Expenses", icon: Receipt },
  { to: "/admin/beneficiaries", label: "Beneficiaries", icon: Users },
  { to: "/admin/documents", label: "Documents", icon: FileText },
  { to: "/admin/approvals", label: "Approvals", icon: CheckSquare },
  { to: "/admin/reports", label: "Reports", icon: BarChart3 },
  { to: "/admin/assistant", label: "AI assistant", icon: Sparkles },
  { to: "/admin/map", label: "Impact map", icon: MapPin },
  { to: "/admin/audit", label: "Audit log", icon: ScrollText },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const { session, signOut } = useAuth();
  const nav = (
    <nav aria-label="Main" className="flex flex-col gap-0.5 p-2">
      {adminNav.map(({ to, label, icon: Icon, end }) => (
        <NavLink key={to} to={to} end={end} onClick={() => setOpen(false)} title={label}
          className={({ isActive }) => cn("flex h-9 items-center gap-3 rounded-md px-3 text-sm text-forest-100 transition-colors hover:bg-forest-800", isActive && "bg-forest-800 font-medium text-white")}>
          <Icon className="h-4 w-4 shrink-0" aria-hidden />{!collapsed && <span>{label}</span>}
        </NavLink>))}
    </nav>);
  return (
    <div className="flex min-h-screen">
      <aside className={cn("hidden shrink-0 bg-forest-900 transition-[width] duration-200 md:block", collapsed ? "w-14" : "w-56")}>
        <div className="flex h-14 items-center justify-between px-4 font-semibold text-gold-300">{!collapsed && "Trust Ledger"}
          <button aria-label="Collapse sidebar" onClick={() => setCollapsed(!collapsed)}><PanelLeftClose className="h-4 w-4 text-forest-200" /></button></div>
        {nav}
      </aside>
      {open && <div className="fixed inset-0 z-40 md:hidden" onClick={() => setOpen(false)}><div className="h-full w-60 bg-forest-900" onClick={(e) => e.stopPropagation()}><div className="flex h-14 items-center px-4 font-semibold text-gold-300">Trust Ledger</div>{nav}</div></div>}
      <div className="flex min-w-0 flex-1 flex-col">
        <SetupNotice />
        <header className="flex h-14 items-center gap-3 border-b border-forest-100 bg-white px-4">
          <button className="md:hidden" aria-label="Open menu" onClick={() => setOpen(true)}><Menu className="h-5 w-5" /></button>
          <div className="flex-1" />
          <button aria-label="Notifications" className="rounded-md p-2 hover:bg-forest-50"><Bell className="h-4 w-4" /></button>
          <span className="hidden text-sm text-ink/70 sm:inline">{session?.user.email}</span>
          <button aria-label="Sign out" onClick={signOut} className="rounded-md p-2 hover:bg-forest-50"><LogOut className="h-4 w-4" /></button>
        </header>
        <main className="animate-fade flex-1 p-6"><Outlet /></main>
      </div>
    </div>);
}
