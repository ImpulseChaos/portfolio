export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Kayhaan Rashiq
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-6">
          Software Developer &amp; CS Graduate
        </p>
        <p className="text-slate-500 dark:text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
          I build clean, efficient software. Recently graduated with a B.S. in
          Computer Science and eager to contribute on a great team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
