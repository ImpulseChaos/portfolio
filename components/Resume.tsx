export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Resume
        </h2>
        <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mb-10 rounded-full" />

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-8 max-w-lg">
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            Interested in my full experience? Download my resume to learn more
            about my education, projects, and technical skills.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            Download Resume
          </a>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-4">
            Place your resume at{" "}
            <code className="text-indigo-500">public/resume.pdf</code> to
            enable the download link.
          </p>
        </div>
      </div>
    </section>
  );
}
