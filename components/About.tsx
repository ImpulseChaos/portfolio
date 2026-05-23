export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-slate-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          About Me
        </h2>
        <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I&apos;m a Computer Science graduate passionate about building
              software that solves real problems. I enjoy working across the
              full stack and am always eager to learn new technologies and best
              practices.
            </p>
            <p>
              During my studies I worked on a variety of projects spanning web
              development, algorithms, and systems programming. I&apos;m looking
              for a role where I can keep growing and make meaningful
              contributions from day one.
            </p>
            <p>
              Outside of coding, I enjoy [your hobbies here]. Feel free to edit
              this section to make it more personal!
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Quick Facts
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 shrink-0">→</span>
                B.S. Computer Science
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 shrink-0">→</span>
                Open to full-time roles
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 shrink-0">→</span>
                [Your Location]
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 shrink-0">→</span>
                Available immediately
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
