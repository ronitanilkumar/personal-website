"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

function applyTheme(theme: Theme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "dark" || (theme === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", isDark);
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) ?? "system";
    setTheme(saved);
    applyTheme(saved);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if ((localStorage.getItem("theme") ?? "system") === "system") {
        applyTheme("system");
      }
    };
    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function cycleTheme() {
    const next: Theme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-300 ease-snap ${
          scrolled
            ? "bg-bg/80 border-border backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(0,0,0,0.15)]"
            : "bg-bg/0 border-transparent"
        }`}
      >
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="/resume.pdf" external>Resume</NavLink>
        <div className="mx-1 h-4 w-px bg-border" />
        <button
          onClick={cycleTheme}
          aria-label={`Theme: ${theme}. Click to cycle.`}
          title={`Theme: ${theme}`}
          className="flex items-center justify-center w-8 h-8 rounded-full text-muted transition-colors duration-200 hover:text-ink hover:bg-surface"
        >
          {theme === "light" ? <SunIcon /> : theme === "dark" ? <MoonIcon /> : <SystemIcon />}
        </button>
      </nav>
    </div>
  );
}

function NavLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-muted transition-colors duration-200 hover:text-ink hover:bg-surface"
    >
      {children}
    </a>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}
