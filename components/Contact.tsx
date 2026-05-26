import { SectionGrid } from "./SectionGrid";

// Update these links with your real URLs and email
const contactLinks = [
  {
    label: "Email",
    href: "mailto:rashiqkayhaan@gmail.com",
    display: "rashiqkayhaan@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/ImpulseChaos",
    display: "github.com/KayhaanRashiq",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kayhaan-rashiq/",
    display: "linkedin.com/in/kayhaan-rashiq",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 px-6">
      <SectionGrid glow="bottom-left" dots={[{ top: "18%", left: "7%" }, { top: "60%", left: "85%" }]} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-3">// 04 — Contact</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">Get In Touch</h2>
        <div className="w-10 h-0.5 bg-cyan-400/60 mb-8 rounded-full" />

        <div className="max-w-xl">
          <p className="text-slate-400 mb-8 leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a
            question, a job offer, or just want to say hi — feel free to reach out!
          </p>

          <div className="space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0d1321] border border-white/[0.07] rounded-xl hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <span className="text-cyan-400 shrink-0">{link.icon}</span>
                <div>
                  <p className="text-xs text-slate-600 mb-0.5">{link.label}</p>
                  <p className="text-sm font-medium">{link.display}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
