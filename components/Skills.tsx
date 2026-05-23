// Edit these lists to match your actual skills
const skills: Record<string, string[]> = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "SQL"],
  Frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  Tools: ["Git", "Docker", "VS Code", "Linux", "PostgreSQL", "REST APIs"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-slate-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Skills
        </h2>
        <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mb-10 rounded-full" />

        <div className="grid md:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
