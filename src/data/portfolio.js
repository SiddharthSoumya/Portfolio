export const profile = {
  name: "Siddharth Soumya",
  location: "India",
  github: "https://github.com/SiddharthSoumya",
  linkedin: "https://linkedin.com/in/siddharthsoumya/",
  portfolio: "https://siddharthsoumya.vercel.app",
};

export const projects = [
  {
    id: "drift",
    number: "01",
    name: "DriftShield",
    category: "java",
    label: "Configuration reliability",
    status: "Hackathon build",
    headline: "Catch the drift. Restore the baseline.",
    description:
      "A Spring Boot application that compares runtime configuration against a trusted baseline, records differences, and restores the runtime configuration.",
    technologies: ["Java 21", "Spring Boot", "PostgreSQL", "Docker"],
    decision:
      "Separate configuration comparison, event persistence, and remediation so each part of the workflow has a clear responsibility.",
    detail:
      "The application pairs the backend with a React/Vite dashboard. Docker packaging and a GitHub Actions workflow support validation and Render deployment.",
    recognition: "2nd place · Codorra Hackathon 2026",
    repository: "https://github.com/SiddharthSoumya/DriftShield",
    evidence:
      "https://github.com/SiddharthSoumya/DriftShield/blob/main/backend/backend/src/main/java/com/driftshield/backend/detection/drift/DriftDetectionEngine.java",
    demo: "https://youtu.be/d1kuxFRCc8o",
    demoLabel: "Watch demo",
  },
  {
    id: "recall",
    number: "02",
    name: "RecallOps",
    category: "java",
    label: "State & recovery",
    status: "MVP",
    headline: "The process stops. The context stays.",
    description:
      "A stateful investigation backend focused on deterministic reasoning, persistent working memory, state transitions, and recovery after a restart.",
    technologies: ["Java 21+", "Spring Boot", "CockroachDB", "JPA"],
    decision:
      "Keep execution separate from durable investigation memory. Use deterministic reasoning in the MVP to make decisions reproducible.",
    detail:
      "Recovery logic reconstructs unfinished investigations from stored state and working context. An interface leaves room for future LLM integration without making it a dependency of the recovery workflow.",
    repository: "https://github.com/SiddharthSoumya/RecallOps",
    evidence:
      "https://github.com/SiddharthSoumya/RecallOps/blob/main/backend/src/main/java/com/recallops/investigation/service/InvestigationRecoveryService.java",
  },
  {
    id: "offline",
    number: "03",
    name: "Offline-first billing",
    category: "fullstack",
    label: "Local persistence & synchronization",
    status: "In development",
    headline: "Local operations. A path back to sync.",
    description:
      "A billing application designed to support local operations and subsequent server synchronization. The focus is offline persistence, synchronization, and idempotency.",
    technologies: ["React", "IndexedDB / Dexie", "Express", "Prisma / Zod"],
    decision:
      "Treat local persistence and server synchronization as separate concerns, with idempotency central to handling retried operations.",
    detail:
      "The stack combines a React/Vite interface, IndexedDB through Dexie, and an Express API backed by PostgreSQL, Prisma, and Zod. This is ongoing work; no public release or demo is listed.",
  },
  {
    id: "safe",
    number: "04",
    name: "SafeSpace",
    category: "fullstack",
    label: "Full-stack deployment",
    status: "Deployed demo",
    headline: "From a reporting flow to a deployed app.",
    description:
      "A full-stack reporting demo with a separately hosted user interface and backend API. Built with Python, FastAPI, Streamlit, and SQLAlchemy.",
    technologies: ["Python", "FastAPI", "Streamlit", "Render"],
    decision:
      "Give the UI and API separate deployment boundaries, connected over HTTP, with persistence behind the API.",
    detail:
      "A learning and demonstration project. The repository documents its security and operational limitations; it is not intended for real confidential reports.",
    repository: "https://github.com/SiddharthSoumya/safespace",
    evidence:
      "https://github.com/SiddharthSoumya/safespace/blob/main/ARCHITECTURE.md",
    demo: "https://safespace-ui.onrender.com",
    demoLabel: "Open demo",
    api: "https://safespace-api-ax72.onrender.com",
  },
];

export const stack = [
  {
    label: "01 / Java backend",
    title: "The service layer.",
    skills: [
      "Java 21",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Maven",
    ],
  },
  {
    label: "02 / JavaScript backend",
    title: "Contracts & validation.",
    skills: ["Node.js", "Express.js", "Prisma ORM", "Zod", "JavaScript", "SQL"],
  },
  {
    label: "03 / Persistence",
    title: "Make the state durable.",
    skills: ["PostgreSQL", "CockroachDB", "SQLite", "IndexedDB", "Dexie"],
  },
  {
    label: "04 / Full-stack & delivery",
    title: "Connect the whole flow.",
    skills: [
      "React",
      "Vite",
      "Material UI",
      "Docker / Compose",
      "Git / GitHub",
      "Render",
      "Vercel",
      "Postman",
      "Python / FastAPI",
    ],
  },
];

export const credentials = [
  {
    number: "01",
    title: "Azure AI Apps & Agents Developer Associate",
    issuer: "Microsoft Certified",
    note: "Aug 2026 — Aug 2027",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/SiddharthSoumya-9796/DDD4457A154A34D?sharingId",
  },
  {
    number: "02",
    title: "2nd place · Codorra 2026",
    issuer: "Hackathon",
    note: "DriftShield",
    url: "https://unstop.com/certificate-preview/a1906d19-4c6a-46d7-85a0-eb763557ca7d",
  },
  {
    number: "03",
    title: "API Fundamentals Student Expert",
    issuer: "Postman",
    note: "API design & testing foundations",
    url: "https://api.badgr.io/public/assertions/uxPq8sf7SM2bzp28eVEpAg",
  },
];
