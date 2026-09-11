import InnerHeader from "../components/InnerHeader";

const courses = [
  ["A1", "English Foundations", "Build confident everyday English from the ground up.", "$40"],
  ["B1", "Confident Conversation", "Practice vocabulary and speaking patterns that matter.", "$55"],
  ["B2", "Academic English", "Strengthen writing, reading, and exam-ready skills.", "$65"],
];

export default function CoursesPage() {
  return <div className="page-shell"><InnerHeader /><main className="section"><div className="section-inner"><div className="section-heading"><span className="eyebrow">Simple structure</span><h1 className="font-display">Explore Our Courses</h1><p>Choose a course, create your student account, and follow your progress in one place.</p></div><div className="courses-grid">{courses.map(([level, name, description, price]) => <article className="course-card" key={name}><div className="course-art">✦</div><div className="course-body"><span className="status">Open for enrollment</span><h3>{name}</h3><p>{description}</p><div className="course-meta"><span>Level {level}</span><span className="price">{price}</span></div><a className="btn btn-primary" href="/register">Request enrollment</a></div></article>)}</div></div></main></div>;
}