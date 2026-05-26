import { SectionGrid } from "./SectionGrid";

export default function About() {
  // Replace with your real image path, e.g. "/images/photo.jpg"
  const photoSrc: string | null = "/images/meOutside.jpg";

  return (
    <section id="about" className="relative overflow-hidden py-24 px-6 bg-white/[0.05]">
      <SectionGrid glow="top-right" dots={[{ top: "20%", left: "12%" }, { top: "65%", left: "78%" }]} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-3">// 01 — About</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">Who I Am</h2>
        <div className="w-10 h-0.5 bg-cyan-400/60 mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I'm Kayhaan, a Computer Science graduate from CU Boulder with a passion for building software that actually matters. I'm drawn to the full stack from crafting clean, responsive UIs to wiring up the backend logic that makes everything run. Lately I've been deeply interested in AI, particularly large language models, how they can be integrated into real applications, and what it takes to build software around them thoughtfully. It's the space I want to grow in and stay close to.
            </p>
            <p>
              I like learning fast, working on things that challenge me, and writing code I'm proud of. I'm looking for a role where I can keep growing, contribute meaningfully from day one, and be around people who care about building great things.
            </p>
            <a
              href="/Final_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 mt-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-colors text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Resume
            </a>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            {photoSrc ? (
              <img
                src={photoSrc}
                alt="Kayhaan Rashiq"
                className="w-64 h-64 rounded-2xl object-cover object-top border border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
              />
            ) : (
              <div className="w-64 h-64 rounded-2xl border-2 border-dashed border-cyan-400/30 flex items-center justify-center text-cyan-400/40 text-3xl font-bold select-none">
                KR
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
