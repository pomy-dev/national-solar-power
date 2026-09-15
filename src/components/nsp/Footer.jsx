import React from "react";
import { Sun, Facebook, Linkedin, Twitter } from "lucide-react";

const COLUMNS = [
  {
    title: "Solutions",
    links: ["Solar PV", "Battery Storage", "Microgrids", "EV Charging", "Monitoring"],
  },
  {
    title: "Sectors",
    links: ["Residential", "Commercial", "Industrial", "Mining", "Agriculture", "Government"],
  },
  {
    title: "Company",
    links: ["About NSP", "Projects", "Careers", "Knowledge Centre"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-6 h-6 text-plasma" strokeWidth={1.5} />
              <span className="font-heading text-silver text-lg font-semibold">
                NATIONAL <span className="text-plasma">SOLAR</span> POWER
              </span>
            </div>
            <p className="text-silver/50 max-w-sm leading-relaxed">
              Powering Africa's homes, businesses, industries, mines, farms and public
              infrastructure with reliable, intelligent and clean energy.
            </p>
            <div className="flex gap-4 mt-6">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#top" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-silver/50 hover:text-plasma hover:border-plasma transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-silver text-sm uppercase tracking-widest font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#solutions" className="text-silver/50 hover:text-plasma transition-colors text-sm">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-silver/40 text-sm">
          <p>© {new Date().getFullYear()} National Solar Power. All rights reserved.</p>
          <p>Residential · Commercial · Industrial · Mining · Agriculture · Public Sector</p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-silver/50 text-sm">
          <p>
            Powered by:{" "}
            <a
              href="https://indabuko-global.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-plasma hover:underline"
            >
              Indabuko Tech Crafts
            </a>
          </p>
          <p>
            Call:{" "}
            <a href="tel:+27745032009" className="hover:text-plasma transition-colors">+27 74 503 2009</a>
            {" / "}
            <a href="tel:+26876957019" className="hover:text-plasma transition-colors">+268 7695 7019</a>
          </p>
        </div>
      </div>
    </footer>
  );
}