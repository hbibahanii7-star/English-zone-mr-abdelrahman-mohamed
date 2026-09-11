"use client";

import { FormEvent, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase-browser";

type AuthFormProps = { mode: "login" | "register"; role: "student" | "teacher" };

export default function AuthForm({ mode, role }: AuthFormProps) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setMessage("");
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email")); const password = String(form.get("password"));
    const supabase = createSupabaseBrowserClient();
    const result = mode === "login"
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password, options: { data: { full_name: form.get("fullName"), phone: form.get("phone"), educational_level: form.get("level"), role } } });
    setLoading(false);
    if (result.error) { setMessage(result.error.message); return; }
    setMessage(mode === "login" ? "Welcome back. Redirecting to your dashboard..." : "Account created. Check your email to confirm your account.");
    if (mode === "login") window.location.href = role === "teacher" ? "/teacher-dashboard" : "/student-dashboard";
  }

  return <form className="form-grid" onSubmit={submit}>{mode === "register" && <><label>Full Name<input name="fullName" required placeholder="Your full name" /></label><label>Phone Number<input name="phone" required placeholder="01xxxxxxxxx" /></label><label>Educational Level / Grade<select name="level" defaultValue=""><option value="" disabled>Select your level</option><option>Primary</option><option>Preparatory</option><option>Secondary</option><option>University</option></select></label></>}<label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Password<input name="password" type="password" required minLength={6} placeholder="At least 6 characters" /></label><button className="btn btn-primary" disabled={loading}>{loading ? "Please wait..." : mode === "login" ? "Sign in" : "Create account"}</button>{message && <p role="status" style={{ color: message.includes("error") ? "#b42318" : "#248455" }}>{message}</p>}</form>;
}