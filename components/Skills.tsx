import { SectionGrid } from "./SectionGrid";

// Edit these lists to match your actual skills
const skills: Record<string, string[]> = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "SQL"],
  Frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  Tools: ["Git", "Docker", "VS Code", "Linux", "PostgreSQL", "REST APIs"],
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-16 px-6 bg-white/[0.05]">
      <SectionGrid glow="top-left" dots={[{ top: "30%", left: "94%" }, { top: "70%", left: "18%" }]} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-3">// 03 — Skills</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-8">Tech Stack</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-cyan-400/70 uppercase tracking-widest mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] text-slate-300 text-sm rounded-md"
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
