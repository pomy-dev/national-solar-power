import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Building2, Factory, Mountain, Wheat, Landmark } from "lucide-react";

const SECTORS = [
  { icon: Home, label: "Home", desc: "3-24 kW hybrid systems, backup and app monitoring for households and estates." },
  { icon: Building2, label: "Business", desc: "Rooftop and carport PV for retail, offices, hospitality and healthcare." },
  { icon: Factory, label: "Industry", desc: "Peak shaving, power quality and BESS for manufacturing and logistics." },
  { icon: Mountain, label: "Mining", desc: "Behind-the-meter PV, BESS and microgrids to displace diesel at scale." },
  { icon: Wheat, label: "Farms", desc: "Irrigation, cold-chain and remote off-grid power for agriculture." },
  { icon: Landmark, label: "Government", desc: "Municipal buildings, clinics, schools and public infrastructure." },
];

export default function SectorSelector() {
  const [active, setActive] = useState(0);
  const Active = SECTORS[active];

  return (
    <section className="relative bg-obsidian py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-plasma uppercase tracking-[0.25em] text-xs font-semibold mb-3">Choose your sector</p>
        <h2 className="font-heading text-3xl md:text-4xl text-silver font-bold max-w-2xl">
          One energy platform, every part of Africa's economy.
        </h2>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-3">
          {SECTORS.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <button
                key={s.label}
                onClick={() => setActive(i)}
                className={`group flex flex-col items-center gap-3 py-6 border transition-all rounded-sm ${
                  isActive
                    ? "border-plasma bg-plasma/10"
                    : "border-white/10 hover:border-plasma/40 hover:bg-white/5"
                }`}
              >
                <Icon
                  className={`w-6 h-6 transition-colors ${isActive ? "text-plasma" : "text-silver/60 group-hover:text-plasma"}`}
                  strokeWidth={1.2}
                />
                <span className={`text-xs uppercase tracking-widest ${isActive ? "text-plasma" : "text-silver/60"}`}>
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 max-w-2xl border-l border-plasma/50 pl-6"
        >
          <p className="text-silver/70 text-lg leading-relaxed">{Active.desc}</p>
        </motion.div>
      </div>
    </section>
  );
}