import React from "react";
import { motion } from "framer-motion";
import { SunMedium, BatteryCharging, Network, Zap, Gauge, MonitorSmartphone } from "lucide-react";

const SOLUTIONS = [
  { icon: SunMedium, title: "Solar PV", desc: "Residential, commercial and industrial rooftop and ground-mount arrays.", big: true },
  { icon: BatteryCharging, title: "Battery Storage (BESS)", desc: "Home to containerised industrial storage, peak shaving and resilience." },
  { icon: Network, title: "Hybrid & Microgrids", desc: "Solar + grid + generator systems for remote and critical sites." },
  { icon: Zap, title: "EV Charging", desc: "Home, fleet and commercial charging with solar carport integration." },
  { icon: Gauge, title: "Power Quality & Grid", desc: "LV/MV design, power-factor correction and interconnection support." },
  { icon: MonitorSmartphone, title: "Smart Monitoring", desc: "Multi-site dashboards, alerts and ROI/carbon reporting.", big: true },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative bg-obsidian py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-plasma uppercase tracking-[0.25em] text-xs font-semibold mb-3">Solution portfolio</p>
            <h2 className="font-heading text-3xl md:text-5xl text-silver font-bold max-w-xl">
              Engineering discipline, delivered as products.
            </h2>
          </div>
          <p className="text-silver/50 max-w-sm">
            From a single home to a multi-site mining or municipal portfolio — one integrated
            technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {SOLUTIONS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 120, damping: 16 }}
                className={`group relative bg-obsidian p-8 md:p-10 transition-all hover:bg-white/[0.03] ${
                  s.big ? "md:row-span-1" : ""
                }`}
              >
                <Icon className="w-8 h-8 text-plasma mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
                <h3 className="text-xl font-heading font-bold text-silver mb-2">{s.title}</h3>
                <p className="text-silver/50 leading-relaxed">{s.desc}</p>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{
                  boxShadow: "inset 0 0 60px rgba(255,214,10,0.06)"
                }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}