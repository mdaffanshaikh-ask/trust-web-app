import { Hammer } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";
export function Stub({ title, phase }: { title: string; phase: number }) {
  return (<div><h1 className="mb-4 text-xl font-semibold">{title}</h1>
    <EmptyState icon={Hammer} title="Not built yet" text={`This module is scheduled for Phase ${phase}. No data is shown until it is connected to the database.`} /></div>);
}
