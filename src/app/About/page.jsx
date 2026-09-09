import Link from "next/link";

export default function Home() {
  return (
    <main>

      <section className="hero">
        <div className="hero-content">

          <div className="badge">
            🎓 Smart School Management
          </div>

          <h1>
            Manage Your School
            <span> Smarter & Better</span>
          </h1>

          <p>
            A simple and powerful school management system to manage
            students, teachers, classes and school activities easily.
          </p>

          <div className="hero-buttons">
            <Link href="/login" className="primary-btn">
              Get Started →
            </Link>

            <Link href="/About" className="secondary-btn">
              Learn More
            </Link>
          </div>

        </div>

        <div className="hero-card">
          <div className="dashboard-top">
            <h3>School Dashboard</h3>
            <span>● Online</span>
          </div>

          <div className="stats">

            <div className="stat-card">
              <div>👨‍🎓</div>
              <h2>1,250</h2>
              <p>Students</p>
            </div>

            <div className="stat-card">
              <div>👨‍🏫</div>
              <h2>85</h2>
              <p>Teachers</p>
            </div>

            <div className="stat-card">
              <div>🏫</div>
              <h2>32</h2>
              <p>Classes</p>
            </div>

            <div className="stat-card">
              <div>📚</div>
              <h2>48</h2>
              <p>Subjects</p>
            </div>

          </div>

          <div className="progress-box">
            <div>
              <span>Student Attendance</span>
              <strong>92%</strong>
            </div>

            <div className="progress">
              <div></div>
            </div>
          </div>

        </div>
      </section>

      <section className="features">

        <div className="section-heading">
          <span>FEATURES</span>
          <h2>Everything You Need</h2>
          <p>
            Manage your complete school system from one simple platform.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">👨‍🎓</div>
            <h3>Student Management</h3>
            <p>
              Easily manage student records, profiles and academic details.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👨‍🏫</div>
            <h3>Teacher Management</h3>
            <p>
              Keep teacher information and responsibilities organized.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Attendance</h3>
            <p>
              Track daily attendance and monitor student performance.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Reports</h3>
            <p>
              View useful reports and get a clear overview of your school.
            </p>
          </div>

        </div>
      </section>

      <section className="cta">
        <h2>Ready to Manage Your School?</h2>
        <p>Start using a simple and modern school management system.</p>

        <Link href="/login" className="primary-btn">
          Login to Dashboard →
        </Link>
      </section>

    </main>
  );
}