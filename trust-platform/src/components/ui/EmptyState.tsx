import type { LucideIcon } from "lucide-react";
export function EmptyState({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return <div className="flex flex-col items-center rounded-lg border border-dashed border-forest-200 bg-white px-6 py-16 text-center">
    <Icon className="h-8 w-8 text-gold-500" aria-hidden /><h2 className="mt-3 font-semibold">{title}</h2><p className="mt-1 max-w-md text-sm text-ink/60">{text}</p></div>;
}
