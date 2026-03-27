"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "דף הבית" },
  { href: "#about", label: "אודות" },
  { href: "#lab", label: "הצוות" },
  { href: "#members", label: "חברי הצוות" },
  { href: "#achievements", label: "הישגים" },
  { href: "#sponsors", label: "שותפים" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "var(--dark)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-white font-bold text-lg tracking-wide"
          style={{ letterSpacing: "0.05em" }}
        >
          Exodus <span style={{ color: "var(--accent)" }}>11480</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="תפריט"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: "var(--dark-secondary)", borderColor: "#334155" }}
        >
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
