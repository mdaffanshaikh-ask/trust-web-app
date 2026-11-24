import { isConfigured } from "@/lib/supabase";
export function SetupNotice() {
  if (isConfigured) return null;
  return <div role="alert" className="border-b border-gold-300 bg-gold-300/20 px-4 py-2 text-sm">Supabase isn't configured. Copy <code>.env.example</code> to <code>.env</code> and add your project URL and anon key.</div>;
}
