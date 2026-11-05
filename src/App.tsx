import { FormEvent, ReactNode, useEffect, useState } from "react"

type IconName = "arrow" | "briefcase" | "calendar" | "code" | "download" | "external" | "github" | "instagram" | "layers" | "linkedin" | "location" | "mail" | "menu" | "moon" | "send" | "server" | "sun" | "terminal" | "x"

const paths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  briefcase: (
    <>
      <rect width="18" height="14" x="3" y="7" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </>
  ),
  calendar: (
    <>
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  code: (
    <>
      <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m0 0 5-5m-5 5-5-5" />
      <path d="M5 21h14" />
    </>
  ),
  external: (
    <>
      <path d="M15 3h6v6M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </>
  ),
  github: (
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.5S18.1.1 15 2a13.4 13.4 0 0 0-7 0C4.9.1 3.8.5 3.8.5A5.1 5.1 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4m0-3c-3 .9-3-1.5-4-2" />
  ),
  instagram: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />,
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </>
  ),
  server: (
    <>
      <rect width="20" height="8" x="2" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 6h.01M6 18h.01" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
    </>
  ),
  terminal: (
    <>
      <path d="m4 17 6-6-6-6M12 19h8" />
    </>
  ),
  x: (
    <>
      <path d="M6 6l12 12M18 6 6 18" />
    </>
  ),
}

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

const navItems = [
  ["Home", "#home"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
]

const skillGroups: { icon: IconName; title: string; skills: string[] }[] = [
  {
    icon: "code",
    title: "Languages",
    skills: ["Python", "Go", "C", "C++", "C#", "HTML", "SQL", "Shell"],
  },
  {
    icon: "layers",
    title: "Development",
    skills: ["Django", "Gorilla Mux", "GORM", "REST APIs", "CRUD", "RSA"],
  },
  {
    icon: "server",
    title: "Systems & Graphics",
    skills: ["OpenGL", "SDL2", "Linux", "Data Structures", "OOP", "2D Graphics"],
  },
  {
    icon: "terminal",
    title: "Tools & Engineering",
    skills: ["Git", "GitHub", "Makefiles", "VS Code", "Build Automation", "Documentation"],
  },
]

const projects = [
  {
    title: "Sudoku Solver",
    description:
      "A Django Sudoku platform with puzzle generation, authentication, gameplay, and a solver comparing Backtracking, Heuristics, and DLX through execution-time analysis.",
    image:
      "https://raw.githubusercontent.com/SafalNarshing/Sudoku-Solver/main/imgs/Homepage.png",
    tags: ["Python", "Django", "PostgreSQL", "Supabase", "JavaScript", "DLX"],
    github: "https://github.com/SafalNarshing/Sudoku-Solver",
    demo: "https://solversudoku.vercel.app/",
  },
  {
    title: "Let'sGoDB",
    description:
      "A lightweight SQL-like database built from scratch with query processing, B-tree indexing, page-based storage, table operations, and data persistence.",
    image:
      "https://opengraph.githubassets.com/portfolio-letsgo/razzat008/letsgodb",
    tags: ["Go", "B-Tree", "SQL", "File I/O", "Data Structures"],
    github: "https://github.com/razzat008/letsgodb",
    demo: null,
  },
  {
    title: "Django RSA Chat",
    description:
      "A secure chat application built with Django and RSA encryption to explore encrypted communication and the foundations of public-key cryptography.",
    image: new URL("./imports/rsa-chat-placeholder.svg", import.meta.url).href,
    tags: ["Python", "Django", "RSA", "HTML", "CSS"],
    github: "https://github.com/apekshyya/Chat-Application-with-RSA-Encryption",
    demo: null,
  },
  {
    title: "2D Road-Crossing Game",
    description:
      "A Frogger-inspired arcade game featuring player movement, moving traffic, collision detection, coin collection, and integrated audio.",
    image:
      "https://raw.githubusercontent.com/apekshyya/2D-Road-Crossing-Arcade-Game-Using-OpenGL/main/screenshots/gamepreview.png",
    tags: ["C++", "OpenGL", "GLUT", "OpenAL"],
    github:
      "https://github.com/apekshyya/2D-Road-Crossing-Arcade-Game-Using-OpenGL",
    demo: null,
  },
  {
    title: "Traffic Simulation",
    description:
      "An interactive SDL2 simulation demonstrating vehicle movement and queue-based traffic management through a practical data-structures scenario.",
    image: new URL("./imports/traffic-simulation-placeholder.svg", import.meta.url)
      .href,
    tags: ["C++", "SDL2", "Queues", "Data Structures"],
    github: "https://github.com/apekshyya/dsa-queue-simulator",
    demo: null,
  },
  {
    title: "Smart Contract Vulnerability Detector",
    description:
      "A static-analysis and machine-learning tool for identifying potential Solidity vulnerabilities, with a web dashboard for presenting scan results.",
    image:
      "https://opengraph.githubassets.com/portfolio-contracts/poojapathak0/Smart-Contract-Vulnerability-Detection-Tool",
    tags: ["Python", "Solidity", "Slither", "Scikit-learn", "React", "MongoDB"],
    github:
      "https://github.com/poojapathak0/Smart-Contract-Vulnerability-Detection-Tool",
    demo: "https://smart-contract-vulnerability-detect.vercel.app/",
  },
]

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body: string
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(
    () => localStorage.getItem("portfolio-theme") === "dark",
  )
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light")
  }, [dark])

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
    window.setTimeout(() => setSent(false), 4500)
  }

  return (
    <div className="app-shell">
      <nav className="nav" aria-label="Primary navigation">
        <div className="nav-inner">
          <a className="wordmark" href="#home" aria-label="Apekshya Bhattarai home">
            AB<span>.</span>
          </a>
          <div className="desktop-nav">
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button
              className="icon-button"
              onClick={() => setDark(!dark)}
              aria-label={dark ? "Use light theme" : "Use dark theme"}
            >
              <Icon name={dark ? "sun" : "moon"} size={18} />
            </button>
            <button
              className="icon-button menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <Icon name={menuOpen ? "x" : "menu"} size={22} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-nav">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                <span>Hello, I’m</span> Apekshya Bhattarai
              </h1>
              <p
                className="hero-lead"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "16px",
                }}
              >
                A Computer Science student who enjoys learning how technology
                works and exploring what can be done with it. I like working on
                projects, tackling problems that make me think, and occasionally
                going down a rabbit hole trying to understand something new.
              </p>
              <p className="hero-detail" style={{ paddingTop: "5px" }}>
                I'm still learning, experimenting, and figuring out the kind of
                things I want to build along the way.
              </p>
              <div className="hero-buttons">
                <a
                  className="button primary-button"
                  href={
                    new URL(
                      "./imports/apekshya-bhattarai-resume.txt",
                      import.meta.url,
                    ).href
                  }
                  download
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Icon name="download" /> Download resume
                </a>
                <a className="button secondary-button" href="#projects">
                  View my work <Icon name="arrow" />
                </a>
              </div>
              <div className="social-row">
                <a
                  href="https://github.com/apekshyya"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Icon name="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/apekshya-bhattarai-8309b9364/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Icon name="linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/apekshyyaa_/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <Icon name="instagram" />
                </a>
                <a href="mailto:apkshabhattarai34@gmail.com" aria-label="Email">
                  <Icon name="mail" />
                </a>
              </div>
              <div className="stats">
                <div>
                  <strong>01</strong>
                  <span>Research paper</span>
                </div>
                <div>
                  <strong>05+</strong>
                  <span>Academic projects</span>
                </div>
                <div>
                  <strong>03+</strong>
                  <span>Technologies explored</span>
                </div>
                <div>
                  <strong>∞</strong>
                  <span>Curiosity to explore</span>
                </div>
              </div>
            </div>
            <div className="portrait-wrap">
              <div className="portrait-ring">
                <img
                  src={
                    new URL("./imports/IMG_4068-1.JPG", import.meta.url).href
                  }
                  alt="Apekshya Bhattarai"
                />
              </div>
              <div className="code-chip">&lt;/&gt;</div>
            </div>
          </div>
          <a
            className="scroll-cue"
            href="#skills"
            aria-label="Scroll to skills"
          >
            <span>Scroll</span>
            <i />
          </a>
        </section>

        <section className="skills section" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="Expertise"
              title="A versatile technical toolkit"
              body="From first commit to production, I build with modern tools selected for performance, clarity, and long-term scale."
            />
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article className="skill-card" key={group.title}>
                  <div className="card-number">0{index + 1}</div>
                  <div className="skill-icon">
                    <Icon name={group.icon} />
                  </div>
                  <h3>{group.title}</h3>
                  <div className="tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects built through curiosity"
              body="A collection of academic and personal projects spanning algorithms, databases, graphics, security, and simulation."
            />
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <img src={project.image} alt={`${project.title} project preview`} />
                    <span className="project-index">0{index + 1}</span>
                    {(project.demo || project.github) && (
                      <a
                        href={project.demo || project.github || "#contact"}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title}`}
                      >
                        <Icon name="external" />
                      </a>
                    )}
                  </div>
                  <div className="project-copy">
                    <div className="tags outline-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-actions">
                      {project.github ? (
                        <a
                          className="text-link"
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="github" size={17} /> GitHub
                        </a>
                      ) : (
                        <span className="project-private">Course project</span>
                      )}
                      {project.demo && (
                        <a
                          className="text-link"
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live demo <Icon name="external" size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-glow" />
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">Start a conversation</span>
              <h2>
                Have a bold idea?
                <br />
                <em>Let’s build it.</em>
              </h2>
              <p>
                I’m always interested in thoughtful products, difficult
                technical problems, and minds that care about craft.
              </p>
              <a href="mailto:apkshabhattarai34@gmail.com" className="email-link">
                <span>
                  <Icon name="mail" />
                </span>
                <div>
                  <small>Email me directly</small>apkshabhattarai34@gmail.com
                </div>
              </a>
            </div>
            <form className="contact-form" onSubmit={submit}>
              <label>
                Name
                <input name="name" required placeholder="Your name" />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                />
              </label>
              <label>
                What are you working on?
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about the project..."
                />
              </label>
              <button className="button primary-button" type="submit">
                <Icon name="send" /> Send message
              </button>
              {sent && (
                <p className="success" role="status">
                  Thanks—your note is ready for the next step. I’ll be in touch
                  soon.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <a className="wordmark" href="#home">
            AB<span>.</span>
          </a>
          <p>Curious. Driven. Adaptable.</p>
          <p>{new Date().getFullYear()} Apekshya Bhattarai</p>
        </div>
      </footer>
    </div>
  )
}
