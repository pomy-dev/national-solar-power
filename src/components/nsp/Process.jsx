import React from "react";
import { motion } from "framer-motion";
import { Search, Ruler, Wallet, Hammer, BadgeCheck, Activity } from "lucide-react";

const STEPS = [
  { icon: Search, title: "Assess", desc: "Energy audit, load profile and site survey." },
  { icon: Ruler, title: "Engineer", desc: "PV/BESS sizing, electrical design and simulation." },
  { icon: Wallet, title: "Finance", desc: "Cash, asset finance, lease or PPA structuring." },
  { icon: Hammer, title: "Install", desc: "Procurement, construction and safety-led delivery." },
  { icon: BadgeCheck, title: "Commission", desc: "QA, sign-off and utility/municipal handover." },
  { icon: Activity, title: "Monitor", desc: "Remote telemetry, alerts and O&M for the long term." },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-obsidian py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-plasma uppercase tracking-[0.25em] text-xs font-semibold mb-3">Delivery methodology</p>
        <h2 className="font-heading text-3xl md:text-5xl text-silver font-bold max-w-xl mb-16">
          Six disciplined stages, one accountable partner.
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-white/10" />
          <div className="grid md:grid-cols-6 gap-8">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 140, damping: 14 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-16 h-16 rounded-full border border-plasma/40 bg-obsidian flex items-center justify-center mb-5 group hover:border-plasma transition-colors">
                    <Icon className="w-6 h-6 text-plasma group-hover:scale-110 transition-transform" strokeWidth={1.3} />
                  </div>
                  <p className="text-xs text-plasma font-semibold uppercase tracking-widest mb-1">0{i + 1}</p>
                  <h3 className="text-silver font-heading font-bold mb-2">{s.title}</h3>
                  <p className="text-silver/50 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}