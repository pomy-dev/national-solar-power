import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const RESIDENTIAL = [
  { size: "5 kW Hybrid", battery: "5-10 kWh storage", use: "Typical 2-4 bedroom home", price: "From R74,900" },
  { size: "8 kW Hybrid", battery: "10-15 kWh storage", use: "Large home, pool, home office", price: "From R129,900", featured: true },
  { size: "12 kW Hybrid", battery: "15-25 kWh storage", use: "Large estate, 3-phase ready", price: "From R169,900" },
];

const COMMERCIAL = [
  { size: "50 kWp Grid-Tied", battery: "PV-only EPC", use: "Retail, school, small warehouse", price: "R10,400 - R17,000 /kWp" },
  { size: "200 kWp Grid-Tied", battery: "PV-only EPC", use: "Factory, packhouse, shopping centre", price: "R7,850 - R13,000 /kWp", featured: true },
  { size: "1 MWp Engineered", battery: "PV + BESS scoped", use: "Industrial estate, mining support", price: "Custom Investment Band" },
];

export default function Pricing() {
  const [mode, setMode] = useState("residential");
  const tiers = mode === "residential" ? RESIDENTIAL : COMMERCIAL;

  return (
    <section id="pricing" className="relative bg-obsidian py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <p className="text-plasma uppercase tracking-[0.25em] text-xs font-semibold mb-3">2026 Investment Matrix</p>
            <h2 className="font-heading text-3xl md:text-5xl text-silver font-bold max-w-xl">
              Transparent tiers. Engineered outcomes.
            </h2>
          </div>

          <div className="flex bg-white/5 border border-white/10 rounded-full p-1 w-fit">
            {["residential", "commercial"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all ${
                  mode === m ? "bg-plasma text-obsidian font-semibold" : "text-silver/60"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.size + mode}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 border rounded-sm flex flex-col ${
                t.featured ? "border-plasma bg-plasma/[0.06]" : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 bg-plasma text-obsidian text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                  Most Selected
                </span>
              )}
              <h3 className="font-heading text-xl text-silver font-bold mt-2">{t.size}</h3>
              <p className="text-silver/50 text-sm mt-1">{t.use}</p>

              <div className="mt-6 flex items-center gap-2 text-silver/70">
                <Check className="w-4 h-4 text-plasma" />
                <span className="text-sm">{t.battery}</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-silver/70">
                <Check className="w-4 h-4 text-plasma" />
                <span className="text-sm">Commissioning &amp; CoC included</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-silver/70">
                <Check className="w-4 h-4 text-plasma" />
                <span className="text-sm">Remote monitoring app</span>
              </div>

              <p className="mt-8 font-heading text-2xl text-plasma font-bold">{t.price}</p>

              <Button asChild className="mt-6 bg-plasma text-obsidian hover:bg-plasma/90 font-semibold uppercase tracking-wide">
                <a href="#quote">Request Quote</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-silver/30 text-xs mt-10 max-w-2xl">
          Indicative 2026 South African planning benchmarks, not binding quotations. Final pricing
          requires a site audit, structural and electrical assessment, equipment tier, battery
          duration and municipal/grid requirements.
        </p>
      </div>
    </section>
  );
}