import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { inputCls } from "./Login";
export default function ForgotPassword() {
  const [email, setEmail] = useState(""); const [msg, setMsg] = useState("");
  const submit = async (e: React.FormEvent) => { e.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${location.origin}/reset-password` });
    setMsg(error ? error.message : "If that email has an account, a reset link is on its way."); };
  return (<form onSubmit={submit} className="mx-auto mt-24 w-full max-w-sm space-y-3 rounded-lg border border-forest-100 bg-white p-6">
    <h1 className="text-lg font-semibold">Reset password</h1>
    <label className="text-sm" htmlFor="e">Email</label><input id="e" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} />
    {msg && <p role="status" className="text-sm">{msg}</p>}<Button type="submit" className="w-full">Send reset link</Button></form>);
}
