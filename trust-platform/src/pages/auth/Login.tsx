import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/auth/AuthContext";
import { Button } from "@/components/ui/button";
import { SetupNotice } from "@/components/SetupNotice";

const schema = z.object({ email: z.string().email("Enter a valid email"), password: z.string().min(8, "At least 8 characters") });
type V = z.infer<typeof schema>;
export const inputCls = "h-9 w-full rounded-md border border-forest-200 bg-white px-3 text-sm";

export default function Login() {
  const { session, roles } = useAuth();
  const nav = useNavigate(); const loc = useLocation();
  const [err, setErr] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<V>({ resolver: zodResolver(schema) });
  if (session && roles.length) return <Navigate to={roles.includes("donor") && roles.length === 1 ? "/donor" : "/admin"} replace />;
  const onSubmit = async (v: V) => {
    setErr("");
    const { error } = await supabase.auth.signInWithPassword(v);
    if (error) setErr(error.message); else nav((loc.state as any)?.from ?? "/admin", { replace: true });
  };
  return (<div><SetupNotice /><div className="mx-auto mt-24 w-full max-w-sm rounded-lg border border-forest-100 bg-white p-6">
    <h1 className="text-lg font-semibold">Sign in</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3" noValidate>
      <div><label className="text-sm" htmlFor="email">Email</label><input id="email" type="email" autoComplete="email" className={inputCls} {...register("email")} />{errors.email && <p className="mt-1 text-xs text-red-700">{errors.email.message}</p>}</div>
      <div><label className="text-sm" htmlFor="pw">Password</label><input id="pw" type="password" autoComplete="current-password" className={inputCls} {...register("password")} />{errors.password && <p className="mt-1 text-xs text-red-700">{errors.password.message}</p>}</div>
      {err && <p role="alert" className="text-sm text-red-700">{err}</p>}
      <Button type="submit" className="w-full" disabled={isSubmitting}>{isSubmitting ? "Signing in…" : "Sign in"}</Button>
    </form><Link to="/forgot-password" className="mt-3 block text-sm text-forest-700">Forgot password?</Link></div></div>);
}
