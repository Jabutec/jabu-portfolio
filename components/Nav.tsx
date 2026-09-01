// components/Nav.tsx
"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#work", label: "Work" },
    { href: "#philosophy", label: "Philosophy" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop pill nav — smoked glass */}
      <nav className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 rounded-full border border-white/20 bg-black/30 px-2 py-2 shadow-lg shadow-black/10 backdrop-blur-2xl sm:block">
        <div className="flex items-center gap-1">
          <a
            href="#home"
            className="rounded-full px-5 py-2 text-sm font-medium tracking-tight text-white transition-colors hover:bg-white/10"
          >
            Jabulani
          </a>
          <a
            href="#work"
            className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            Work
          </a>
          <a
            href="#philosophy"
            className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-[#0a0a0a] transition-all hover:-translate-y-px hover:bg-white"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile bar — same smoked glass */}
      <nav className="fixed inset-x-4 top-4 z-50 flex items-center justify-between rounded-full border border-white/20 bg-black/30 px-5 py-3 shadow-lg shadow-black/10 backdrop-blur-2xl sm:hidden">
        <a href="#home" className="text-sm font-medium tracking-tight text-white">
          Jabulani
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/10"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`h-[1.5px] w-4 bg-white transition-transform ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-4 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-4 bg-white transition-transform ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown — smoked glass panel */}
      {open && (
        <div className="fixed inset-x-4 top-20 z-40 flex flex-col gap-1 rounded-3xl border border-white/20 bg-black/40 p-3 shadow-xl backdrop-blur-2xl sm:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}