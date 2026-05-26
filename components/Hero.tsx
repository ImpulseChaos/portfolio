import HeroBg from "./HeroBg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden bg-[#0d0221]"
    >
      <HeroBg />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="font-mono text-xs tracking-[0.35em] text-fuchsia-400 uppercase mb-6">
          &gt;_ Hello, World. I&apos;m
        </p>

        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          style={{ animation: "glow-pulse 4s ease-in-out infinite" }}
        >
          Kayhaan Rashiq
        </h1>

        <p className="font-mono text-lg md:text-xl text-pink-300/80 mb-6 tracking-wide">
          Software Developer / CS Graduate
        </p>

        <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          I build clean, efficient software. Recently graduated with a B.S. in
          Computer Science and eager to contribute on a great team.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 font-medium text-white rounded transition-all"
            style={{
              background: "linear-gradient(135deg, #ff2d78, #c850c0)",
              boxShadow: "0 0 22px rgba(255, 45, 120, 0.45), 0 0 44px rgba(200, 80, 192, 0.20)",
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 font-medium text-pink-300 rounded border border-pink-500/50 hover:border-pink-400 hover:text-pink-200 hover:shadow-[0_0_18px_rgba(255,45,120,0.30)] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
