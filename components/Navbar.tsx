"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GlassFilter } from "@/components/ui/liquid-glass";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted]   = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      {/* SVG filter lives in DOM once — used by any GlassEffect on the page */}
      <GlassFilter />

      {/* pointer-events-none on the container so empty space around the pill stays scrollable */}
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={[
            "relative flex items-center justify-between gap-6",
            "w-full max-w-2xl rounded-full px-6 py-2",
            "bg-white/15 backdrop-blur-xl backdrop-saturate-150",
            "border border-white/25",
            "shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.35)]",
            "pointer-events-auto transition-all duration-300",
          ].join(" ")}
        >
          {/* Logo */}
          <a
            href="#"
            className="text-base font-bold text-white shrink-0 hover:opacity-70 transition-opacity"
          >
            KR
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-3.5 py-2 text-sm font-semibold text-white rounded-full hover:bg-white/30 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-1 shrink-0">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full text-white hover:bg-white/30 transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                )}
              </button>
            )}

            <button
              className="md:hidden p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile dropdown — floats below the pill */}
      {menuOpen && (
        <div className="fixed top-[4.5rem] inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
          <div
            className={[
              "relative w-full max-w-2xl rounded-2xl px-3 py-3",
              "bg-white/15 backdrop-blur-xl backdrop-saturate-150",
              "border border-white/25",
              "shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.35)]",
              "pointer-events-auto",
            ].join(" ")}
          >
            <ul className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm font-semibold text-white rounded-xl hover:bg-white/30 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
