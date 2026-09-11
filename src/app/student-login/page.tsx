import AuthForm from "../components/AuthForm";
import InnerHeader from "../components/InnerHeader";

export default function StudentLoginPage() {
  return <div className="page-shell"><InnerHeader /><main className="simple-page section-inner"><div className="auth-card"><span className="eyebrow">Student space</span><h1>Welcome back</h1><p className="hero-copy">Sign in to see your courses, payment status, attendance, exams, and progress.</p><AuthForm mode="login" role="student" /><p>New here? <a href="/register" style={{ color: "var(--blue)", fontWeight: 900 }}>Create an account</a></p></div></main></div>;
}