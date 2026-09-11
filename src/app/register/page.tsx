import AuthForm from "../components/AuthForm";
import InnerHeader from "../components/InnerHeader";

export default function RegisterPage() {
  return <div className="page-shell"><InnerHeader /><main className="simple-page section-inner"><div className="auth-card"><span className="eyebrow">Start learning</span><h1>Create Student Account</h1><p className="hero-copy">Create your account, then choose a course and submit your payment for teacher approval.</p><AuthForm mode="register" role="student" /><p>Already registered? <a href="/student-login" style={{ color: "var(--blue)", fontWeight: 900 }}>Student Login</a></p></div></main></div>;
}