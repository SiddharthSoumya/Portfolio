import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Sun,
  Moon,
  Menu,
  X,
  Code2,
  BriefcaseBusiness,
  Database,
  Pause,
  Play,
  Check,
  ChevronRight,
} from "lucide-react";
import { profile, projects, stack, credentials } from "./data/portfolio";

function External({ href, children, className = "", ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

function SystemConsole() {
  return (
    <figure
      className="system-console"
      aria-label="A backend delivery mindset: understand the workflow, design the API, persist the data, and iterate on deployment."
    >
      <div className="console-top">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>~/siddharth / engineering.md</span>
        <Code2 size={15} aria-hidden="true" />
      </div>
      <div className="system-map" aria-hidden="true">
        <svg viewBox="0 0 440 155" className="system-lines">
          <path className="line-base" d="M74 75 H220 H367" />
          <path className="flow-packet" d="M74 75 H220 H367" />
          <path className="line-return" d="M367 97 V135 H74 V97" />
        </svg>
        <div className="system-node">
          <span>
            <BriefcaseBusiness size={22} />
          </span>
          <b>Workflow</b>
          <small>understand</small>
        </div>
        <div className="system-node system-node--core">
          <span>
            <Code2 size={26} />
          </span>
          <b>Backend</b>
          <small>build & integrate</small>
        </div>
        <div className="system-node">
          <span>
            <Database size={24} />
          </span>
          <b>Data</b>
          <small>persist & recover</small>
        </div>
      </div>
      <div className="console-body" aria-hidden="true">
        <p>
          <span className="token-comment">// how I think about the work</span>
        </p>
        <p>
          <span className="token-purple">const</span> focus{" "}
          <span className="token-dim">= {"{"}</span>
        </p>
        <p>
          &nbsp; backend:{" "}
          <span className="token-green">"Java / Spring Boot"</span>,
        </p>
        <p>
          &nbsp; data: <span className="token-green">"durable by design"</span>,
        </p>
        <p>
          &nbsp; delivery:{" "}
          <span className="token-green">"integrate → deploy"</span>
        </p>
        <p>
          <span className="token-dim">{"}"};</span>
          <span className="console-cursor" />
        </p>
      </div>
      <figcaption>
        <span className="tiny-square" aria-hidden="true" />
        Design for the failure path.
        <span className="console-caption-right">A DELIVERY MINDSET</span>
      </figcaption>
    </figure>
  );
}

function ProjectArt({ kind }) {
  if (kind === "drift")
    return (
      <div className="project-art art-drift" aria-hidden="true">
        <span className="art-label">CONFIGURATION / COMPARE & RESTORE</span>
        <div className="config-pair">
          <div>
            <small>runtime.yml</small>
            <i />
            <i className="diff-line" />
            <i />
          </div>
          <div className="compare-symbol">↔</div>
          <div>
            <small>baseline.yml</small>
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="art-result">
          <Check size={13} /> Restore the trusted baseline
        </div>
      </div>
    );
  if (kind === "recall")
    return (
      <div className="project-art art-recall" aria-hidden="true">
        <span className="art-label">STATE / PERSIST & RECOVER</span>
        <div className="memory-flow">
          <span>INVESTIGATE</span>
          <i />
          <span className="memory-db">
            <Database size={22} />
            checkpoint
          </span>
          <i />
          <span>RESUME</span>
        </div>
        <div className="recovery-track">
          <span>process restart</span>
          <span>context persists ↗</span>
        </div>
      </div>
    );
  if (kind === "offline")
    return (
      <div className="project-art art-offline" aria-hidden="true">
        <span className="art-label">LOCAL-FIRST / SYNCHRONIZATION DESIGN</span>
        <div className="offline-receipt">
          <Code2 size={18} />
          <span>Sale recorded locally</span>
          <span className="receipt-line" />
          <span className="receipt-line short" />
          <div>
            <span>IndexedDB</span>
            <span className="queue-pill">sync queue</span>
          </div>
        </div>
        <span className="sync-route">↗&nbsp; reconnect & synchronize</span>
      </div>
    );
  return (
    <div className="project-art art-safe" aria-hidden="true">
      <span className="art-label">FULL-STACK / DEPLOYMENT BOUNDARIES</span>
      <div className="deployment-stack">
        <div>
          <span>01</span>
          <b>Streamlit UI</b>
          <small>user interface</small>
        </div>
        <ChevronRight size={18} />
        <div>
          <span>02</span>
          <b>FastAPI</b>
          <small>HTTP API</small>
        </div>
        <ChevronRight size={18} />
        <div>
          <span>03</span>
          <b>SQL</b>
          <small>persistence</small>
        </div>
      </div>
      <span className="safe-note">A deployed learning demo</span>
    </div>
  );
}

function ProjectCard({ project }) {
  const card = useRef(null);
  function trackPointer(event) {
    if (event.pointerType !== "mouse") return;
    const box = card.current.getBoundingClientRect();
    card.current.style.setProperty("--mx", `${event.clientX - box.left}px`);
    card.current.style.setProperty("--my", `${event.clientY - box.top}px`);
  }
  return (
    <article
      className={`project-card project-card--${project.id}`}
      ref={card}
      onPointerMove={trackPointer}
    >
      <ProjectArt kind={project.id} />
      <div className="project-content">
        <div className="project-meta">
          <span>
            {project.number} / {project.label}
          </span>
          <span className="project-status">{project.status}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-headline">{project.headline}</p>
        <p className="project-description">{project.description}</p>
        {project.recognition && (
          <p className="project-recognition">↗ {project.recognition}</p>
        )}
        <ul
          className="project-tags"
          aria-label={`${project.name} technologies`}
        >
          {project.technologies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <details className="project-details">
          <summary>
            Engineering decisions<span>+</span>
          </summary>
          <div>
            <p>
              <strong>The decision.</strong> {project.decision}
            </p>
            <p>{project.detail}</p>
            {project.evidence && (
              <External href={project.evidence}>
                Inspect the implementation
              </External>
            )}
          </div>
        </details>
        <div className="project-links">
          {project.repository && (
            <External href={project.repository}>Source code</External>
          )}
          {project.demo && (
            <External href={project.demo}>{project.demoLabel}</External>
          )}
          {project.api && <External href={project.api}>API</External>}
          {!project.repository && (
            <span className="work-note">
              Ongoing work · public release not listed
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

const method = [
  [
    "01",
    "Understand",
    "Start with the user's workflow, constraints, and a useful outcome.",
  ],
  [
    "02",
    "Design",
    "Model the data, shape API contracts, and make failure paths explicit.",
  ],
  [
    "03",
    "Integrate",
    "Connect the backend, interface, persistence, and external services.",
  ],
  [
    "04",
    "Deliver",
    "Package, configure, test, and document a reproducible deployment.",
  ],
  ["05", "Improve", "Use debugging and feedback to guide the next iteration."],
];

function loadPreference(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

export default function Profile() {
  const [theme, setTheme] = useState(() =>
    loadPreference("portfolio-theme", "dark"),
  );
  const [motionPaused, setMotionPaused] = useState(
    () =>
      loadPreference("portfolio-motion", "on") === "off" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const menuButton = useRef(null);
  const visibleProjects = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* Storage can be unavailable. */
    }
  }, [theme]);
  useEffect(() => {
    document.documentElement.dataset.motion = motionPaused ? "paused" : "on";
    try {
      localStorage.setItem("portfolio-motion", motionPaused ? "off" : "on");
    } catch {
      /* A session preference still works. */
    }
  }, [motionPaused]);
  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => {
      if (event.matches) setMotionPaused(true);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  const navLinks = [
    ["work", "Selected work"],
    ["method", "Approach"],
    ["stack", "Toolkit"],
    ["about", "About"],
  ];

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <a
          href="#home"
          className="brand"
          onClick={() => setMenuOpen(false)}
          aria-label="Siddharth Soumya, home"
        >
          <span className="brand-mark">
            ss<span>_</span>
          </span>
          <span className="brand-name">
            Siddharth Soumya<span>Backend developer</span>
          </span>
        </a>
        <nav
          className={menuOpen ? "primary-nav is-open" : "primary-nav"}
          id="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map(([id, label]) => (
            <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
              <span>/</span>
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setMenuOpen(false)}
          >
            Let's talk <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
        <div className="header-tools">
          <button
            type="button"
            className="icon-button motion-toggle"
            onClick={() => setMotionPaused((value) => !value)}
            aria-label={motionPaused ? "Enable motion" : "Pause motion"}
            aria-pressed={motionPaused}
            title={motionPaused ? "Enable motion" : "Pause motion"}
          >
            {motionPaused ? (
              <Play size={16} aria-hidden="true" />
            ) : (
              <Pause size={16} aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            className="icon-button"
            onClick={() =>
              setTheme((value) => (value === "dark" ? "light" : "dark"))
            }
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title="Change theme"
          >
            {theme === "dark" ? (
              <Sun size={17} aria-hidden="true" />
            ) : (
              <Moon size={17} aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            ref={menuButton}
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-controls="navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>
      <main id="main-content">
        <section className="hero shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="signal" aria-hidden="true" />
              BACKEND ENGINEERING / FULL-STACK DELIVERY
            </p>
            <h1 id="hero-title">
              Real problems.
              <br />
              <span>Reliable</span>
              <br />
              backends.
            </h1>
            <p className="hero-intro">
              I'm Siddharth. I build database-backed applications with{" "}
              <strong>
                Java, Spring Boot, and a forward deployment mindset
              </strong>{" "}
              — from understanding the workflow to connecting the pieces and
              getting them running.
            </p>
            <div className="hero-actions">
              <a href="#work" className="button button-primary">
                Explore my work <ArrowDown size={17} aria-hidden="true" />
              </a>
              <External
                href={profile.github}
                className="button button-secondary"
              >
                GitHub <Code2 size={17} aria-hidden="true" />
              </External>
            </div>
            <div className="hero-footnote">
              <span>VIT Vellore · Data Science · 2028</span>
              <span className="footnote-separator">/</span>
              <span>Based in India</span>
            </div>
          </div>
          <div className="hero-visual">
            <SystemConsole />
            <p className="visual-note">
              <span>01 / THE ENGINEERING MINDSET</span>
              <span>Understand → build → deliver</span>
            </p>
          </div>
        </section>
        <div className="signal-strip">
          <div className="shell">
            <span>
              Java 21 <i>+</i> Spring Boot
            </span>
            <span>
              APIs <i>+</i> Persistence
            </span>
            <span>
              React <i>+</i> Express
            </span>
            <span>
              Docker <i>+</i> Deployment
            </span>
          </div>
        </div>
        <section
          className="section shell"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED SYSTEMS</p>
              <h2 id="work-title">
                The work behind
                <br />
                the words<span>.</span>
              </h2>
            </div>
            <p>
              Different problems. The same focus on clear contracts, durable
              data, and software that is easier to run.
            </p>
          </div>
          <div className="project-toolbar">
            <div
              className="project-filters"
              role="group"
              aria-label="Filter projects"
            >
              {[
                ["all", "All work"],
                ["java", "Java backend"],
                ["fullstack", "Full-stack"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={filter === value}
                  className={
                    filter === value
                      ? "filter-button is-active"
                      : "filter-button"
                  }
                  onClick={() => setFilter(value)}
                >
                  {label}
                </button>
              ))}
            </div>
            <span className="project-count" aria-live="polite">
              {String(visibleProjects.length).padStart(2, "0")} projects
            </span>
          </div>
          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <section
          className="method-wrap"
          id="method"
          aria-labelledby="method-title"
        >
          <div className="shell section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / THE DELIVERY LOOP</p>
                <h2 id="method-title">
                  Build it. Connect it.
                  <br />
                  <span>Get it working.</span>
                </h2>
              </div>
              <p>
                How I approach forward-deployed engineering: stay close to the
                problem and carry it through integration, deployment, and
                feedback.
              </p>
            </div>
            <div className="method-grid">
              {method.map(([number, title, description]) => (
                <article key={number} className="method-step">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <div className="principle">
              <Code2 size={20} aria-hidden="true" />
              <p>
                Design for the whole lifecycle.{" "}
                <strong>The restart, the retry, and the handoff matter.</strong>
              </p>
            </div>
          </div>
        </section>
        <section
          className="section shell"
          id="stack"
          aria-labelledby="stack-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / THE TOOLKIT</p>
              <h2 id="stack-title">
                Depth in the backend.
                <br />
                Range across the stack<span>.</span>
              </h2>
            </div>
            <p>
              The core tools represented in my projects and internship work. The
              technology serves the problem.
            </p>
          </div>
          <div className="stack-grid">
            {stack.map((group) => (
              <article className="stack-group" key={group.label}>
                <span className="mono-label">{group.label}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <details className="broader-toolkit">
            <summary>
              Explore the broader toolkit <span>+</span>
            </summary>
            <div>
              <p>
                <strong>Additional tools:</strong> MySQL, MongoDB, Redis, Neo4j,
                Apache Cassandra, Tailwind CSS, shadcn/ui, Motion for React,
                Linux/Ubuntu, and WSL.
              </p>
              <p>
                <strong>AI & infrastructure exploration:</strong> OpenAI API,
                Microsoft Azure AI, Apache Kafka, MinIO, and distributed systems
                through implementation.
              </p>
            </div>
          </details>
          <aside className="learning-panel">
            <span className="mono-label">ON THE WORKBENCH</span>
            <div>
              <h3>Learning in public. Staying precise.</h3>
              <p>
                Going deeper into reliable application behavior, AI integration,
                and distributed systems. <strong>React Native and Expo</strong>{" "}
                are in exploration; <strong>Expo SQLite and EAS Build</strong>{" "}
                are the planned mobile stack.
              </p>
            </div>
            <span className="learning-tag">Learning & planned</span>
          </aside>
        </section>
        <section
          className="section shell about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-copy">
            <p className="eyebrow">04 / THE PERSON BEHIND THE CODE</p>
            <h2 id="about-title">
              Curious about
              <br />
              <span>what holds up.</span>
            </h2>
            <p className="about-lead">
              I'm a B.Sc. Computer Science student specializing in Data Science
              at VIT Vellore, graduating in 2028.
            </p>
            <p>
              My primary focus is backend software engineering: reliable,
              maintainable applications with clear APIs and well-modeled data.
              Full-stack development helps me understand the workflow on both
              sides of the request.
            </p>
            <p>
              I use AI-assisted development to improve productivity while
              continuing to develop independent implementation, debugging, and
              code-review skills.
            </p>
            <External href={profile.linkedin} className="text-link">
              More about me on LinkedIn
            </External>
          </div>
          <div className="experience-panel">
            <span className="mono-label">EXPERIENCE & EDUCATION</span>
            <article>
              <div className="experience-icon">
                <BriefcaseBusiness size={18} aria-hidden="true" />
              </div>
              <div>
                <span className="experience-kicker">
                  BACKEND DEVELOPER INTERN
                </span>
                <h3>Emerald Windows Pvt. Ltd.</h3>
                <p>
                  Business software for property sales and partner management,
                  expense tracking, and financial reporting.
                </p>
                <p className="experience-tools">
                  JavaScript · Express · React · PostgreSQL · Prisma · Zod ·
                  Material UI
                </p>
              </div>
            </article>
            <article>
              <div className="experience-icon">
                <Code2 size={18} aria-hidden="true" />
              </div>
              <div>
                <span className="experience-kicker">
                  B.SC. COMPUTER SCIENCE
                </span>
                <h3>VIT Vellore</h3>
                <p>Data Science specialization · Expected graduation 2028</p>
              </div>
            </article>
            <article>
              <div className="experience-icon">
                <Check size={18} aria-hidden="true" />
              </div>
              <div>
                <span className="experience-kicker">SCHOLARSHIP</span>
                <h3>Reliance Foundation Scholar</h3>
                <p>
                  Building a strong foundation through study and practical
                  engineering.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section
          className="credentials-section shell"
          aria-labelledby="credentials-title"
        >
          <div className="credentials-heading">
            <p className="eyebrow">05 / A FEW MORE SIGNALS</p>
            <h2 id="credentials-title">Learning, put to the test.</h2>
          </div>
          <div className="credentials-grid">
            {credentials.map((item) => (
              <External
                key={item.number}
                href={item.url}
                className="credential"
              >
                <span className="credential-number">{item.number}</span>
                <span className="credential-copy">
                  <small>{item.issuer}</small>
                  <strong>{item.title}</strong>
                  <span>{item.note}</span>
                </span>
              </External>
            ))}
          </div>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="shell">
            <p className="eyebrow">06 / THE NEXT CONVERSATION</p>
            <div className="contact-layout">
              <h2 id="contact-title">
                Have a real
                <br />
                problem<span>?</span>
                <br />
                <span>Let's build.</span>
              </h2>
              <div className="contact-copy">
                <p>
                  Let's talk backend systems, practical AI integrations, or a
                  workflow that needs to become working software.
                </p>
                <External
                  href={profile.linkedin}
                  className="button button-primary"
                >
                  Connect on LinkedIn{" "}
                  <BriefcaseBusiness size={17} aria-hidden="true" />
                </External>
                <External href={profile.github} className="contact-github">
                  Explore my code on GitHub
                </External>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <a className="brand-mark" href="#home" aria-label="Back to top">
          ss<span>_</span>
        </a>
        <p>
          Siddharth Soumya <span>/</span> Backend engineering · Real-world
          delivery
        </p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
