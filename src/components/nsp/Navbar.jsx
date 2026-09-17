import React, { useEffect, useState } from "react";
import { Sun, Menu, X, ChevronDown } from "lucide-react";

const LINKS = [
  { label: "Solutions", href: "#solutions" },
  // { label: "Efficiency", href: "#energy-management" },
  // { label: "Maintenance", href: "#maintenance" },
  // { label: "Products", href: "#products" },
  { label: "Consulting", href: "#consulting" },
  { label: "Pricing", href: "#pricing" },
  // { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Government", href: "#government" },
];

const MORE_LINKS = [
  { label: "Efficiency", href: "#energy-management" },
  { label: "Maintenance", href: "#maintenance" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

/**
 * @param {{ onOpenRequest: (type: string) => void }} props
 */
export default function Navbar({ onOpenRequest }) {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [quoteMenuOpen, setQuoteMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  /** @param {string} type */
  const openRequest = (type) => {
    setOpen(false);
    setQuoteMenuOpen(false);
    onOpenRequest(type);
  };

  const scrollToCtaQuote = () => {
    setOpen(false);
    setQuoteMenuOpen(false);
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      setProgress(scrolled || 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="backdrop-blur-xl bg-obsidian/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 group">
            <Sun className="w-6 h-6 text-plasma group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <span className="font-heading text-silver text-lg font-semibold tracking-tight">
              NATIONAL <span className="text-plasma">SOLAR</span> POWER
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm uppercase tracking-widest text-silver/70 hover:text-plasma transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreMenuOpen((value) => !value)}
                className="flex items-center gap-1 text-sm uppercase tracking-widest text-silver/70 hover:text-plasma transition-colors"
                aria-expanded={moreMenuOpen}
              >
                More
                <ChevronDown className={`h-4 w-4 transition-transform ${moreMenuOpen ? "rotate-180" : ""}`} />
              </button>
              {moreMenuOpen && (
                <div className="absolute right-0 top-full mt-4 w-56 border border-white/10 bg-obsidian/95 p-2 shadow-xl">
                  {MORE_LINKS.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setMoreMenuOpen(false)}
                      className="block px-3 py-3 text-xs uppercase tracking-widest text-silver/80 transition-colors hover:bg-white/10 hover:text-plasma"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="group relative hidden lg:block">
            <button type="button" className="relative overflow-hidden shine-sweep bg-plasma px-4 py-2 text-sm text-obsidian hover:bg-plasma/90 font-semibold uppercase tracking-wide">
              Make Request
            </button>
            <div className="invisible absolute right-0 top-full w-56 translate-y-2 border border-white/10 bg-obsidian/95 p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {[
                ["Get quote", "quote"],
                ["Site assessment", "assessment"],
                ["Solar installer", "installer"],
              ].map(([label, type]) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => type === "quote" ? scrollToCtaQuote() : openRequest(type)}
                  className="block w-full px-3 py-3 text-left text-xs uppercase tracking-widest text-silver/80 transition-colors hover:bg-white/10 hover:text-plasma"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <button className="lg:hidden text-silver" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden px-6 pb-6 flex flex-col gap-4 bg-obsidian/95">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-silver/80 uppercase text-sm tracking-widest">
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setMoreMenuOpen((value) => !value)}
              className="flex w-full items-center justify-between text-left text-silver/80 uppercase text-sm tracking-widest"
              aria-expanded={moreMenuOpen}
            >
              More
              <ChevronDown className={`h-4 w-4 transition-transform ${moreMenuOpen ? "rotate-180" : ""}`} />
            </button>
            {moreMenuOpen && (
              <div className="flex flex-col gap-4 border-l border-plasma/40 pl-4">
                {MORE_LINKS.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => { setOpen(false); setMoreMenuOpen(false); }} className="text-silver/70 uppercase text-sm tracking-widest hover:text-plasma">
                    {l.label}
                  </a>
                ))}
              </div>
            )}
            <button
              type="button"
              onClick={() => setQuoteMenuOpen((value) => !value)}
              className="w-full bg-plasma px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-obsidian"
            >
              Get Quote
            </button>
            {quoteMenuOpen && (
              <div className="flex flex-col gap-2 border-l border-plasma/40 pl-4">
                {[
                  ["Get quote", "quote"],
                  ["Site assessment", "assessment"],
                  ["Solar installer", "installer"],
                ].map(([label, type]) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => type === "quote" ? scrollToCtaQuote() : openRequest(type)}
                    className="text-left text-sm uppercase tracking-widest text-silver/70 hover:text-plasma"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </nav>
      <div className="h-[2px] bg-white/5">
        <div className="h-full bg-plasma transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
}