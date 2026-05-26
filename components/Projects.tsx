import { SectionGrid } from "./SectionGrid";

// Replace image paths with real screenshots in /public/images/
const projects = [
  {
    title: "Project One",
    tagline: "Brief tagline describing what it is",
    description:
      "End-to-end description of what this project does and the problem it solves. Keep it to 1–2 sentences.",
    bullets: [
      "Key feature or technical highlight",
      "Another notable feature",
      "Third highlight (auth, performance, etc.)",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express"],
    github: "https://github.com/yourusername/project-one",
    live: null as string | null,
    image: null as string | null, // e.g. "/images/project-one.png"
  },
  {
    title: "Project Two",
    tagline: "Brief tagline describing what it is",
    description:
      "End-to-end description of what this project does and the problem it solves. Keep it to 1–2 sentences.",
    bullets: [
      "Key feature or technical highlight",
      "Another notable feature",
      "Third highlight",
    ],
    tags: ["Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/yourusername/project-two",
    live: null as string | null,
    image: null as string | null,
  },
  {
    title: "Project Three",
    tagline: "Brief tagline describing what it is",
    description:
      "End-to-end description of what this project does and the problem it solves. Keep it to 1–2 sentences.",
    bullets: [
      "Key feature or technical highlight",
      "Another notable feature",
      "Third highlight",
    ],
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/yourusername/project-three",
    live: null as string | null,
    image: null as string | null,
  },
  {
    title: "Project Four",
    tagline: "Brief tagline describing what it is",
    description:
      "End-to-end description of what this project does and the problem it solves. Keep it to 1–2 sentences.",
    bullets: [
      "Key feature or technical highlight",
      "Another notable feature",
      "Third highlight",
    ],
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project-four",
    live: null as string | null,
    image: null as string | null,
  },
];

// GitHub icon
function GithubIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

// External link icon
function ExternalIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-32 px-6">
      <SectionGrid glow="bottom-left" dots={[{ top: "15%", left: "88%" }, { top: "75%", left: "5%" }]} />
      <div className="relative z-10 max-w-7xl mx-auto">

        <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-3">// 02 — Projects</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-3">Things I&apos;ve Built</h2>
        <p className="text-slate-400 mb-12 max-w-xl text-lg">
          Real-world projects focused on system design, scalability, and clean engineering.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col bg-[#0d1321] border border-white/[0.07] rounded-xl overflow-hidden hover:border-cyan-500/40 transition-colors duration-300"
            >
              {/* Image / placeholder */}
              <div className="relative h-44 shrink-0 bg-gradient-to-br from-slate-900 via-[#0d1829] to-slate-900 overflow-hidden">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-end justify-start p-4">
                    {/* Gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1321] via-[#0d1321]/40 to-transparent" />
                    <div className="relative z-10">
                      <p className="text-white font-bold text-lg leading-tight">{project.title}</p>
                      <p className="text-cyan-400 text-xs mt-0.5">{project.tagline}</p>
                    </div>
                  </div>
                )}
                {/* Overlay for real images */}
                {project.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1321] via-[#0d1321]/30 to-transparent" />
                )}
                {project.image && (
                  <div className="absolute bottom-0 left-0 p-4 z-10">
                    <p className="text-white font-bold text-lg leading-tight">{project.title}</p>
                    <p className="text-cyan-400 text-xs mt-0.5">{project.tagline}</p>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  {project.description}
                </p>

                <ul className="space-y-1 mb-4">
                  {project.bullets.map((b) => (
                    <li key={b} className="text-xs text-slate-500 flex gap-2">
                      <span className="text-cyan-500 shrink-0">•</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-white/[0.05] border border-white/[0.10] text-slate-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-cyan-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-cyan-400 transition-colors"
                      aria-label="Live site"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
