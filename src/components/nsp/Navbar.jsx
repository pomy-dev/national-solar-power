import React, { useEffect, useState } from "react";
import { Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Consulting", href: "#consulting" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Government", href: "#government" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

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
          </div>

          <div className="hidden lg:block">
            <Button asChild className="relative overflow-hidden shine-sweep bg-plasma text-obsidian hover:bg-plasma/90 font-semibold uppercase tracking-wide">
              <a href="#quote">Get My Energy Plan</a>
            </Button>
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
            <Button asChild className="bg-plasma text-obsidian font-semibold uppercase w-full">
              <a href="#quote" onClick={() => setOpen(false)}>Get My Energy Plan</a>
            </Button>
          </div>
        )}
      </nav>
      <div className="h-[2px] bg-white/5">
        <div className="h-full bg-plasma transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
}