import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
type P = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" | "ghost" };
export function Button({ variant = "primary", className, ...p }: P) {
  return <button {...p} className={cn("inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-colors disabled:opacity-50",
    variant === "primary" && "bg-forest-700 text-white hover:bg-forest-800",
    variant === "outline" && "border border-forest-200 bg-white hover:bg-forest-50",
    variant === "ghost" && "hover:bg-forest-50", className)} />;
}
