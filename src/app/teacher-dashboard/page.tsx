import InnerHeader from "../components/InnerHeader";

const areas = ["Students", "Courses", "Payments", "Attendance", "Exams", "Grades", "Announcements", "Settings"];

export default function TeacherDashboardPage() {
  return <div className="page-shell"><InnerHeader /><main className="section"><div className="section-inner"><div className="section-heading"><span className="eyebrow">Teacher workspace</span><h1 className="font-display">Platform overview</h1><p>Manage students, courses, payments, and progress from one focused workspace.</p></div><div className="tools-grid">{areas.map((area, index) => <article className="tool-card" key={area}><span className={`icon-box ${index % 2 ? "purple" : ""}`}>{["♙", "▦", "◇", "◷", "✦", "↗", "✉", "⚙"][index]}</span><h3>{area}</h3><p>{index === 1 ? "Add courses, edit details, and save the Course Link." : "Connect Supabase to manage this area securely."}</p><button className="btn btn-outline">Open {area}</button></article>)}</div></div></main></div>;
}