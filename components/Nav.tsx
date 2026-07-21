"use client";

import { navLinks } from "@/lib/data";

export default function Nav() {
  return (
    <nav
      role="navigation"
      className="flex items-center justify-between px-6 py-8 sm:px-10 md:px-16"
    >
      <a href="#top" className="font-jost text-2xl tracking-widest text-cream">
        TDC<span className="text-pink">.</span>
      </a>

      <ul className="flex list-none items-center gap-8 sm:gap-12">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="underline-grow font-jost text-lg text-cream transition-colors hover:text-pink"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
