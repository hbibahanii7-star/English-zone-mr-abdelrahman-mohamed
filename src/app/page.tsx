import Link from "next/link";

const features = [
  ["▦", "Structured Courses", "Learn with a clear path"],
  ["✦", "Online Exams", "Practice with purpose"],
  ["↗", "Student Progress", "See every milestone"],
  ["✎", "Teacher Support", "Guidance when it matters"],
];

const tools = [
  ["▦", "Organized Courses", "Clear learning paths built around your level and goals."],
  ["✦", "Online Exams", "Practice, submit, and understand your results in one place."],
  ["↗", "Grades Tracking", "See your improvement over time with simple progress signals."],
  ["◷", "Attendance Tracking", "Build consistency and keep your learning routine visible."],
  ["◇", "Easy Payments", "Submit payment details and follow every review status."],
  ["✎", "Teacher Support", "Get thoughtful guidance throughout your English journey."],
];

const courses = [
  ["A1", "English Foundations", "Build confident everyday English from the ground up.", "$40"],
  ["B1", "Confident Conversation", "Practice the vocabulary and speaking patterns that matter.", "$55"],
  ["B2", "Academic English", "Strengthen your writing, reading, and exam-ready skills.", "$65"],
];

function Header() {
  return <header className="site-header"><div className="header-inner"><Link className="brand" href="/"><span className="brand-mark"><span>✎</span></span><span>English Zone</span></Link><nav className="nav-links"><Link href="/">Home</Link><a href="#courses">Courses</a><a href="#about">About</a><a href="#contact">Contact</a></nav><div className="header-actions"><a className="btn btn-link" href="/student-login">Student Login</a><a className="btn btn-outline" href="/teacher-login">Teacher Login</a><a className="btn btn-primary" href="/register">Create Account</a></div><button className="mobile-menu" aria-label="Open menu">☰</button></div></header>;
}

function Footer() {
  return <footer className="footer"><div className="section-inner"><div className="footer-grid"><div><div className="brand"><span className="brand-mark"><span>✎</span></span><span>English Zone</span></div><p>Learn with clarity. Grow with confidence.</p></div><div><h3>Explore</h3><div className="footer-links"><Link href="/">Home</Link><a href="#courses">Courses</a><a href="#about">About</a><a href="#contact">Contact</a></div></div><div><h3>Access</h3><div className="footer-links"><a href="/student-login">Student Login</a><a href="/teacher-login">Teacher Login</a><a href="/register">Create Account</a></div></div></div><div className="copyright">© 2026 English Zone · Mr. Abdelrahman Mohamed</div></div></footer>;
}

export default function Home() {
  return <><Header /><main><section className="hero"><div className="section-inner hero-grid"><div><span className="eyebrow">Your next chapter starts here</span><h1>Ready to Improve Your <span>English?</span></h1><p className="hero-copy">Join a focused learning space built around your progress. Learn with structure, practice with purpose, and grow with steady support from Mr. Abdelrahman Mohamed.</p><div className="hero-buttons"><a className="btn btn-primary" href="/register">Create Student Account <span>→</span></a><a className="btn btn-outline" href="#courses">Explore Courses</a></div><div className="trust-line"><span className="trust-icon">AM</span><div><strong>Teacher-led progress</strong><span>Clear lessons. Confident results.</span></div></div></div><div className="artboard" aria-label="English learning illustration"><div className="orbit"></div><div className="orbit two"></div><div className="speech font-display">Let&apos;s learn English</div><div className="check-card"><div>✓ Speak</div><div>✓ Read</div><div>✓ Write</div><div>✓ Grow</div></div><div className="pencil">✎</div><div className="abc"><span>A</span><span>B</span><span>C</span></div><div className="clock">◷</div><div className="spark one">✦</div><div className="spark two">★</div></div></div></section><section className="feature-strip"><div className="section-inner feature-grid">{features.map(([icon, title, text], index) => <div className="feature-card" key={title}><span className={`icon-box ${index % 2 ? "purple" : ""}`}>{icon}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section><section className="section" id="about"><div className="section-inner"><div className="section-heading"><span className="eyebrow">Everything in one place</span><h2 className="font-display">Everything You Need to Learn Better</h2><p>Thoughtful tools for a focused, confident learning routine.</p></div><div className="tools-grid">{tools.map(([icon, title, text], index) => <article className="tool-card" key={title}><span className={`icon-box ${index % 2 ? "purple" : ""}`}>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section><section className="section tint" id="courses"><div className="section-inner"><div className="section-top"><div className="section-heading"><span className="eyebrow">Learn at your pace</span><h2 className="font-display">Explore Our Courses</h2><p>Simple structure, useful practice, and a pace you can trust.</p></div><a className="btn btn-outline" href="/courses">View all courses →</a></div><div className="courses-grid">{courses.map(([level, title, text, price]) => <article className="course-card" key={title}><div className="course-art">✦</div><div className="course-body"><span className="status">Open for enrollment</span><h3>{title}</h3><p>{text}</p><div className="course-meta"><span>Level {level}</span><span className="price">{price}</span></div><a className="btn btn-primary" href="/register">View course</a></div></article>)}</div></div></section></main><div id="contact"><Footer /></div></>;
}
