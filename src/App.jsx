import { useEffect, useRef, useState } from 'react'
import './App.css'

const NAV_LINKS = ['about', 'experience', 'projects', 'skills', 'contact']

const TITLES = [
  'AI & ML Engineer',
  'Computer Vision Dev',
  'GUI Developer',
  'Full Stack Builder',
  'Open Source Creator',
]

const EXPERIENCE = [
  {
    role: 'GUI Developer',
    company: 'DRDO – CASDIC',
    period: 'Feb 2025 – Apr 2025',
    type: 'On-site',
    desc: 'Developed a Python-based GUI for the Coolant System of a Fighter Jet Aircraft — safety-critical software for one of India\'s premier defence research organisations.',
    stack: ['Python', 'Tkinter', 'GUI'],
  },
  {
    role: 'Project Intern',
    company: 'Tech Mahindra Limited',
    period: 'Dec 2024 – Feb 2025',
    type: 'On-site',
    desc: 'Integrated semiconductor wafer processing into software applications and studied ATM application development pipelines at enterprise scale.',
    stack: ['Python', 'Software Integration'],
  },
  {
    role: 'GUI Developer',
    company: 'ISRO – URSC',
    period: 'Sep 2024 – Oct 2024',
    type: 'On-site',
    desc: 'Built a GUI tool to compute real-time satellite distances, latitude, longitude, and altitude — deployed at the U R Rao Satellite Centre, Bengaluru.',
    stack: ['Python', 'Tkinter', 'Satellite Data'],
  },
  {
    role: 'Web Developer',
    company: 'Hindustan Aeronautics Limited (HAL)',
    period: 'Oct 2023 – Nov 2023',
    type: 'On-site',
    desc: 'Built a full e-commerce platform for HAL\'s family welfare organisation, featuring Add-to-Cart, real-time price calculations, and dynamic quantity management.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Django'],
  },
]

const PROJECTS = [
  {
    num: '01',
    name: 'Flood Extent Mapping with SAR',
    desc: 'CNN-based semantic segmentation on Sentinel-1 SAR imagery using the Sen1Floods11 dataset. Full modular PyTorch pipeline for flood detection from satellite data.',
    tags: ['Python', 'PyTorch', 'CNN', 'Sentinel-1', 'Remote Sensing'],
    link: 'https://github.com/GauravManju',
  },
  {
    num: '02',
    name: 'task-cli',
    desc: 'Sleek terminal task manager with SQLite persistence, Rich UI, Typer CLI, colour-coded priorities, overdue detection, and 11 pytest unit tests.',
    tags: ['Python', 'SQLite', 'Typer', 'Rich', 'pytest'],
    link: 'https://github.com/GauravManju/task-cli',
  },
  {
    num: '03',
    name: 'Anywhere Voting System',
    desc: 'Django-based remote voting platform with facial recognition (LBPH + Haar Cascade), 2FA via OTP & email, and a responsive frontend.',
    tags: ['Django', 'Python', 'OpenCV', 'MySQL', 'JavaScript'],
    link: 'https://github.com/GauravManju',
  },
  {
    num: '04',
    name: 'Insider Guard',
    desc: 'Cybersecurity app for threat detection and prevention, focusing on anomaly-based intrusion detection (IDS) and ML-powered risk assessment modelling.',
    tags: ['Python', 'Machine Learning', 'MySQL', 'IDS'],
    link: 'https://github.com/GauravManju',
  },
]

const SKILLS = [
  { group: 'Languages', items: ['Python', 'Java', 'JavaScript', 'HTML/CSS', 'PHP', 'Bash'] },
  { group: 'AI / ML', items: ['PyTorch', 'CNNs', 'Scikit-learn', 'OpenCV', 'NumPy', 'Pandas'] },
  { group: 'Web & Backend', items: ['Django', 'Angular JS', 'MySQL', 'PHP/XAMPP'] },
  { group: 'Tools & Cloud', items: ['Git', 'GitHub', 'GCP', 'VS Code', 'Canva', 'Tkinter'] },
]

const CERTS = [
  { name: 'Cybersecurity Analyst Simulation', issuer: 'TATA – Forage', year: '2024' },
  { name: 'Front & Back-End Development', issuer: 'Meta – Coursera', year: '2023' },
  { name: 'Problem Solving', issuer: 'HackerRank', year: '2024' },
  { name: 'Getting Started with Python', issuer: 'Coursera', year: '2023' },
  { name: 'Gen-AI Study Jams', issuer: 'Google Developer Groups', year: '2025' },
  { name: 'Design Thinking – A Primer', issuer: 'NPTEL / IIT Madras', year: '2022' },
]

function TypeWriter({ words }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink(b => !b), 500)
    return () => clearInterval(blinkTimer)
  }, [])

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1500)
      return
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false)
      setIndex(i => (i + 1) % words.length)
      return
    }
    const timeout = setTimeout(() => {
      setSubIndex(s => s + (deleting ? -1 : 1))
    }, deleting ? 60 : 100)
    return () => clearTimeout(timeout)
  }, [subIndex, index, deleting, words])

  return (
    <span className="typewriter">
      {words[index].substring(0, subIndex)}
      <span className="cursor" style={{ opacity: blink ? 1 : 0 }}>|</span>
    </span>
  )
}

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = target / 40
        const timer = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 40)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

export default function App() {
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    revealRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const reveal = (i = 0) => ({
    ref: el => { revealRefs.current.push(el) },
    className: 'reveal',
    style: { transitionDelay: `${i * 100}ms` },
  })

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">GM<span>.</span></div>
        <div className="nav-links">
          {NAV_LINKS.map(l => <a key={l} href={`#${l}`}>{l}</a>)}
        </div>
      </nav>

      <section className="hero">
        <div className="hero-grid" />
        <div className="noise" />
        <div className="hero-content">
          <div className="hero-tag">
            <span className="dot" />
            Available for internships · UK visa eligible
          </div>
          <h1 className="hero-name">Gaurav<br /><span className="accent">Manju.</span></h1>
          <div className="hero-role"><TypeWriter words={TITLES} /></div>
          <p className="hero-tagline">
            BE Computer Science @ SJB Institute · MSc AI @ University of Leicester —
            building intelligent systems at ISRO, DRDO, HAL & Tech Mahindra.
          </p>
          <div className="hero-links">
            <a href="mailto:Gauravsaimeena@gmail.com" className="btn btn-primary">Get in touch →</a>
            <a href="https://github.com/GauravManju" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
            <a href="https://www.linkedin.com/in/gaurav-manju/" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
          </div>
        </div>
        <div className="hero-scroll"><div className="scroll-line" />scroll</div>
      </section>

      <section className="section" id="about" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-inner">
          <div {...reveal()}>
            <div className="section-label">01 — About</div>
            <h2 className="section-title">Who I am</h2>
          </div>
          <div className="about-grid">
            <div className="about-text" {...reveal(1)}>
              <p>I'm <strong>Gaurav Manju</strong>, a Computer Science graduate from <strong>SJB Institute of Technology</strong> (GPA 8.4) and incoming MSc AI student at the <strong>University of Leicester</strong>, UK.</p>
              <p>I've built real software at four organisations — satellite tools at <strong>ISRO</strong>, fighter jet systems at <strong>DRDO</strong>, defence aviation platforms at <strong>HAL</strong>, and enterprise software at <strong>Tech Mahindra</strong>.</p>
              <p>I speak <strong>6 languages</strong>, play guitar, sing, dance, and believe the best engineers are curious about everything. I'm actively seeking UK internships in AI, ML, or software engineering.</p>
            </div>
            <div className="about-stats" {...reveal(2)}>
              {[
                { n: 4, s: '', l: 'Industry orgs' },
                { n: 8, s: '.4', l: 'GPA (BE CS)' },
                { n: 6, s: '', l: 'Languages spoken' },
                { n: 6, s: '+', l: 'Certifications' },
              ].map(s => (
                <div className="stat-box" key={s.l}>
                  <div className="stat-number"><Counter target={s.n} suffix={s.s} /></div>
                  <div className="stat-label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="experience" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-inner">
          <div {...reveal()}>
            <div className="section-label">02 — Experience</div>
            <h2 className="section-title">Where I've worked</h2>
          </div>
          <div className="exp-list">
            {EXPERIENCE.map((e, i) => (
              <div className="exp-item" key={e.company} {...reveal(i)}>
                <div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                  <div className="exp-desc">{e.desc}</div>
                  <div className="exp-stack">{e.stack.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                </div>
                <div className="exp-right">
                  <div className="exp-period">{e.period}</div>
                  <div className="exp-badge">{e.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                <div className="project-tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link">View on GitHub →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="section-inner">
          <div {...reveal()}>
            <div className="section-label">04 — Skills & Certs</div>
            <h2 className="section-title">What I work with</h2>
          </div>
          <div className="skills-grid" {...reveal(1)}>
            {SKILLS.map(g => (
              <div className="skill-group" key={g.group}>
                <div className="skill-group-title">{g.group}</div>
                <div className="skill-items">
                  {g.items.map(s => (
                    <div className="skill-item" key={s}><span className="skill-dot" />{s}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="certs-grid" {...reveal(2)}>
            {CERTS.map((c, i) => (
              <div className="cert-card" key={i}>
                <div className="cert-icon">✦</div>
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-meta">{c.issuer} · {c.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="contact-inner">
          <div {...reveal()}>
            <div className="section-label" style={{ textAlign: 'center' }}>05 — Contact</div>
            <h2 className="contact-title">Let's work together.</h2>
            <p className="contact-sub">
              I'm open to internship opportunities in the UK — AI, ML, software engineering, or anything at the intersection. Drop me a message.
            </p>
            <div className="contact-links">
              <a href="mailto:Gauravsaimeena@gmail.com" className="btn btn-primary">Gauravsaimeena@gmail.com →</a>
              <a href="https://www.linkedin.com/in/gaurav-manju/" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
              <a href="https://github.com/GauravManju" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Gaurav Manju</span>
        <span className="footer-langs">EN · DE · KN · HI · TE · TA</span>
        <span style={{ color: 'var(--subtle)' }}>React · GitHub Pages</span>
      </footer>
    </>
  )
}
