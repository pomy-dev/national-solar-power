import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: "10.1 GW+", label: "Installed solar PV capacity, South Africa 2026" },
  { value: "9 Sectors", label: "Residential to public infrastructure, one platform" },
  { value: "24/7", label: "Remote telemetry, alerts and O&M coverage" },
  { value: "R17k+/kW", label: "Typical registered project investment benchmark" },
];

export default function ProofStats() {
  return (
    <section className="relative bg-obsidian py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center md:text-left"
          >
            <p className="font-heading text-3xl md:text-4xl text-plasma font-bold">{s.value}</p>
            <p className="text-silver/50 text-sm mt-2 leading-relaxed">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}