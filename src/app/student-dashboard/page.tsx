import InnerHeader from "../components/InnerHeader";

const cards = [["My Courses", "No approved enrollments yet.", "▦"], ["Payment Status", "Submit a payment request to get started.", "◇"], ["Attendance", "Your attendance history will appear here.", "◷"], ["Progress", "Complete lessons to see your progress.", "↗"]];

export default function StudentDashboardPage() {
  return <div className="page-shell"><InnerHeader /><main className="section"><div className="section-inner"><div className="section-heading"><span className="eyebrow">Student dashboard</span><h1 className="font-display">Your learning space</h1><p>Welcome back. Your private course activity, results, and support will appear here.</p></div><div className="tools-grid">{cards.map(([title, text, icon]) => <article className="tool-card" key={title}><span className="icon-box">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="auth-card" style={{ marginTop: 28, width: "100%" }}><h2>Announcements</h2><p style={{ color: "var(--text-soft)" }}>No announcements available yet.</p></div></div></main></div>;
}