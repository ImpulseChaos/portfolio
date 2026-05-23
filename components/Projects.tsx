const projects = [
  {
    title: "Project One",
    description:
      "A brief description of what this project does and the problem it solves. Edit this with your actual project details, tech stack, and key outcomes.",
    tags: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/yourusername/project-one",
    live: null as string | null,
  },
  {
    title: "Project Two",
    description:
      "A brief description of what this project does and the problem it solves. Edit this with your actual project details, tech stack, and key outcomes.",
    tags: ["Python", "Flask", "PostgreSQL"],
    github: "https://github.com/yourusername/project-two",
    live: null as string | null,
  },
  {
    title: "Project Three",
    description:
      "A brief description of what this project does and the problem it solves. Edit this with your actual project details, tech stack, and key outcomes.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/yourusername/project-three",
    live: null as string | null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Projects
        </h2>
        <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 flex flex-col"
            >
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Live →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
