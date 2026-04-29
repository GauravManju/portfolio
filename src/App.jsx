import { useEffect, useRef } from 'react'
import './App.css'

const NAV_LINKS = ['about', 'experience', 'projects', 'skills', 'contact']

const EXPERIENCE = [
  {
    role: 'Software Engineer',
    company: 'Tech Mahindra',
    period: '2022 – 2023',
    type: 'Full-time',
    desc: 'Worked on enterprise software solutions, contributing to backend development and system integration across client-facing projects.',
  },
  {
    role: 'Research Intern',
    company: 'DRDO – CASDIC',
    period: '2021',
    type: 'Internship',
    desc: 'Contributed to defence research at the Centre for Artificial Intelligence and Software Development. Worked on data-driven systems under government research infrastructure.',
  },
  {
    role: 'Research Intern',
    company: 'ISRO – Indian Space Research Organisation',
    period: '2020',
    type: 'Internship',
    desc: 'Worked with satellite data and remote sensing pipelines at one of the world\'s leading space agencies. Gained hands-on experience with geospatial data processing.',
  },
]

const PROJECTS = [
  {
    num: '01',
    name: 'Flood Extent Mapping with SAR',
    desc: 'CNN-based semantic segmentation on Sentinel-1 SAR imagery using the Sen1Floods11 dataset. Built a full modular PyTorch pipeline for flood detection from satellite data.',
    tags: ['Python', 'PyTorch', 'CNN', 'Remote Sensing', 'Sentinel-1'],
    link: 'https://github.com/GauravManju',
  },
  {
    num: '02',
    name: 'task-cli',
    desc: 'A sleek terminal task manager backed by SQLite, rendered with Rich, and driven by Typer. Features colour-coded priorities, overdue detection, stats panel, and 11 pytest unit tests.',
    tags: ['Python', 'SQLite', 'Typer', 'Rich', 'pytest'],
    link: 'https://github.com/GauravManju/task-cli',
  },
]

const SKILLS = [
  {
    group: 'Languages',
    items: ['Python', 'SQL', 'JavaScript', 'Bash'],
  },
  {
    group: 'AI / ML',
    items: ['PyTorch', 'CNNs', 'Scikit-learn', 'NumPy', 'Pandas'],
  },
  {
    group: 'Remote Sensing',
    items: ['Sentinel-1 SAR', 'Geospatial Data', 'Sen1Floods11', 'GDAL'],
  },
  {
    group: 'Tools & Infra',
    items: ['Git', 'GitHub', 'Linux', 'VS Code', 'Jupyter'],
  },
]

export default function App() {
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    revealRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const reveal = (i = 0) => ({
    ref: el => (revealRefs.current[revealRefs.current.length] = el),
    className: 'reveal',
    style: { transitionDelay: `${i * 80}ms` },
  })

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">GM<span>.</span></div>
        <div className="nav-links">
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l}`}>{l}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-tag">Available for internships · UK visa eligible</div>
          <h1 className="hero-name">
            Gaurav<br /><span className="accent">Manju.</span>
          </h1>
          <p className="hero-tagline">
            MSc Artificial Intelligence student at the University of Leicester —
            building intelligent systems at the intersection of computer vision,
            remote sensing, and software engineering.
          </p>
          <div className="hero-links">
            <a href="mailto:Gauravsaimeena@gmail.com" className="btn btn-primary">
              Get in touch →
            </a>
            <a href="https://github.com/GauravManju" target="_blank" rel="noreferrer" className="btn btn-outline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/gaurav-manju/" target="_blank" rel="noreferrer" className="btn btn-outline">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          scroll
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-inner">
          <div {...reveal()}>
            <div className="section-label">01 — About</div>
            <h2 className="section-title">Who I am</h2>
          </div>
          <div className="about-grid">
            <div className="about-text" {...reveal(1)}>
              <p>
                I'm <strong>Gaurav Manju</strong>, an MSc AI student at the
                <strong> University of Leicester</strong>, UK. My background spans
                research at <strong>ISRO</strong> and <strong>DRDO</strong>, and
                industry experience at <strong>Tech Mahindra</strong>.
              </p>
              <p>
                My focus is on applying deep learning to real-world problems —
                particularly in computer vision, satellite imagery analysis, and
                building clean, well-engineered software.
              </p>
              <p>
                I'm actively seeking <strong>internship opportunities</strong> in
                the UK where I can contribute to AI/ML teams and keep growing as
                an engineer.
              </p>
            </div>
            <div className="about-stats" {...reveal(2)}>
              {[
                { n: '3+', l: 'Years of experience' },
                { n: 'MSc', l: 'Artificial Intelligence' },
                { n: '2', l: 'Government research orgs' },
                { n: 'UK', l: 'Visa eligible' },
              ].map(s => (
                <div className="stat-box" key={s.l}>
                  <div className="stat-number">{s.n}</div>
                  <div className="stat-label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-inner">
          <div {...reveal()}>
            <div className="section-label">02 — Experience</div>
            <h2 className="section-title">Where I've worked</h2>
          </div>
          <div className="exp-list" {...reveal(1)}>
            {EXPERIENCE.map(e => (
              <div className="exp-item" key={e.company}>
                <div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                  <div className="exp-desc">{e.desc}</div>
                  <div className="exp-badge">{e.type}</div>
                </div>
                <div className="exp-period">{e.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-inner">
          <div {...reveal()}>
            <div className="section-label">03 — Projects</div>
            <h2 className="section-title">Things I've built</h2>
          </div>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <div className="project-card" key={p.num} {...reveal(i)}>
                <div className="project-num">{p.num}</div>
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-tags">
                  {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-inner">
          <div {...reveal()}>
            <div className="section-label">04 — Skills</div>
            <h2 className="section-title">What I work with</h2>
          </div>
          <div className="skills-grid" {...reveal(1)}>
            {SKILLS.map(g => (
              <div className="skill-group" key={g.group}>
                <div className="skill-group-title">{g.group}</div>
                <div className="skill-items">
                  {g.items.map(s => (
                    <div className="skill-item" key={s}>
                      <span className="skill-dot" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="contact-inner">
          <div {...reveal()}>
            <div className="section-label" style={{ textAlign: 'center' }}>05 — Contact</div>
            <h2 className="contact-title">Let's work together.</h2>
            <p className="contact-sub">
              I'm currently open to internship opportunities in the UK.
              If you have a role or just want to chat about AI, feel free to reach out.
            </p>
            <div className="contact-links">
              <a href="mailto:Gauravsaimeena@gmail.com" className="btn btn-primary">
                Gauravsaimeena@gmail.com →
              </a>
              <a href="https://www.linkedin.com/in/gaurav-manju/" target="_blank" rel="noreferrer" className="btn btn-outline">
                LinkedIn
              </a>
              <a href="https://github.com/GauravManju" target="_blank" rel="noreferrer" className="btn btn-outline">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>© 2026 Gaurav Manju</span>
        <span style={{ color: 'var(--subtle)' }}>Built with React · Hosted on GitHub Pages</span>
      </footer>
    </>
  )
}
