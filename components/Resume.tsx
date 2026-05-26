import { SectionGrid } from "./SectionGrid";

export default function Resume() {
  return (
    <section id="resume" className="relative overflow-hidden py-16 px-6">
      <SectionGrid glow="top-right" dots={[{ top: "25%", left: "75%" }]} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-3">// 04 — Resume</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-8">Experience &amp; Education</h2>

        <div className="bg-[#0d1321] border border-white/[0.07] rounded-xl p-8 max-w-lg">
          <p className="text-slate-400 mb-6 leading-relaxed">
            Want to see my full background? My resume covers my education,
            experience, and the projects I&apos;ve worked on.
          </p>
          <a
            href="/Final_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
