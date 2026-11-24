import { LayoutDashboard } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";
export default function Dashboard() {
  return (<div><h1 className="mb-4 text-xl font-semibold">Dashboard</h1>
    <EmptyState icon={LayoutDashboard} title="Figures will appear here" text="Every card and chart is computed from ledger data. The database schema arrives in Phase 2 and the dashboard in Phase 3, so nothing is shown yet." /></div>);
}
