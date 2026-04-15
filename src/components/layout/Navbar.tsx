"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { COPY } from "@/constants/copy";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 z-50 flex h-16 md:h-[72px] w-full items-center justify-between gap-4 px-4 md:px-12 transition-all duration-400",
          scrolled
            ? "bg-[var(--bg-dark)]/95 backdrop-blur-lg border-b border-[var(--divider-dark)]"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {COPY.nav.links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="nav-link font-[family-name:var(--font-dm-sans)] font-medium text-xs uppercase tracking-[0.15em] text-[var(--gold)] bg-transparent border-none cursor-pointer relative pb-0.5"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer text-[var(--gold)]"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-[var(--bg-dark)]/98 flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-5 right-6 bg-transparent border-none cursor-pointer text-[var(--gold)]"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {COPY.nav.links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-[family-name:var(--font-cormorant-garamond)] text-2xl font-light text-[var(--text-light)] bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      {/* Nav link hover underline */}
      <style jsx>{`
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
};
