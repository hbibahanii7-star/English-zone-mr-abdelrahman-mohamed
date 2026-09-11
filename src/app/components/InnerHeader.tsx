import Link from "next/link";

export default function InnerHeader() {
  return <header className="site-header"><div className="header-inner"><Link className="brand" href="/"><span className="brand-mark"><span>✎</span></span><span>English Zone</span></Link><nav className="nav-links"><Link href="/">Home</Link><a href="/courses">Courses</a><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></nav><div className="header-actions"><a className="btn btn-link" href="/student-login">Student Login</a><a className="btn btn-outline" href="/teacher-login">Teacher Login</a></div></div></header>;
}