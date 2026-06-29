"use client";

import Link from "next/link";
import { useEffect, useState } from "react"; // useState kept for future sound feature
import { useTheme } from "next-themes";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  // const [soundOn, setSoundOn] = useState(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // const stored = localStorage.getItem("sound");
    // if (stored !== null) setSoundOn(stored === "true");
  }, []);

  // const playClick = () => {
  //   const audio = new Audio("/sounds/apple-crunch.mp3");
  //   audio.play();
  //   setTimeout(() => {
  //     audio.pause();
  //     audio.currentTime = 0;
  //   }, 1500);
  // };

  // const toggleSound = () => {
  //   const next = !soundOn;
  //   setSoundOn(next);
  //   localStorage.setItem("sound", String(next));
  //   playClick();
  // };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 144);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-sm border-b border-edge"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 h-full flex items-center justify-between">
        <Link href="/" aria-label="Home" />

        <nav className="flex items-center gap-10">
          {(["About", "Work", "Writing"] as const).map((label) => (
            <a
              key={label}
              href={`/#${label.toLowerCase()}`}
              className="text-[14px] font-medium text-mid hover:text-ink transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="/#contact"
            className="text-[14px] font-medium text-ink hover:text-accent transition-colors duration-200"
          >
            Contact
          </a>

          {/* Sound button — banked for future use
          {mounted && (
            <button
              onClick={toggleSound}
              aria-label={soundOn ? "Mute" : "Unmute"}
              className="w-8 h-8 flex items-center justify-center rounded-full text-mid hover:text-ink transition-colors duration-200"
            >
              {soundOn ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <line x1="23" y1="9" x2="17" y2="15"/>
                  <line x1="17" y1="9" x2="23" y2="15"/>
                </svg>
              )}
            </button>
          )} */}

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark mode"
              className="w-8 h-8 flex items-center justify-center rounded-full text-mid hover:text-ink transition-colors duration-200"
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
