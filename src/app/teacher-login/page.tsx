import AuthForm from "../components/AuthForm";
import InnerHeader from "../components/InnerHeader";

export default function TeacherLoginPage() {
  return <div className="page-shell"><InnerHeader /><main className="simple-page section-inner"><div className="auth-card"><span className="eyebrow">Teacher access</span><h1>Teacher Login</h1><p className="hero-copy">Private access for Mr. Abdelrahman Mohamed to manage the learning space.</p><AuthForm mode="login" role="teacher" /></div></main></div>;
}