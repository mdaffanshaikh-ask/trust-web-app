import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { inputCls } from "./Login";
export default function ResetPassword() {
  const [pw, setPw] = useState(""); const [msg, setMsg] = useState(""); const nav = useNavigate();
  const submit = async (e: React.FormEvent) => { e.preventDefault();
    if (pw.length < 8) return setMsg("Use at least 8 characters.");
    const { error } = await supabase.auth.updateUser({ password: pw });
    if (error) setMsg(error.message); else nav("/login"); };
  return (<form onSubmit={submit} className="mx-auto mt-24 w-full max-w-sm space-y-3 rounded-lg border border-forest-100 bg-white p-6">
    <h1 className="text-lg font-semibold">Choose a new password</h1>
    <label className="text-sm" htmlFor="p">New password</label><input id="p" type="password" autoComplete="new-password" value={pw} onChange={(e) => setPw(e.target.value)} className={inputCls} />
    {msg && <p role="alert" className="text-sm text-red-700">{msg}</p>}<Button type="submit" className="w-full">Save password</Button></form>);
}
