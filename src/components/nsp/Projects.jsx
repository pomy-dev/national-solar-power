import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    img: "https://media.base44.com/images/public/6aa9b4a2cbd2193708bea50f/6e12cb539_generated_18c26f4b.jpg",
    sector: "Commercial",
    title: "Retail Rooftop Portfolio",
    stat: "620 kWp installed · R1.1m annual savings",
  },
  {
    img: "https://media.base44.com/images/public/6aa9b4a2cbd2193708bea50f/227fc9b71_generated_8ce9fcf5.jpg",
    sector: "Mining",
    title: "Behind-the-Meter Hybrid Microgrid",
    stat: "4 MWp PV + 2 MWh BESS · 30% diesel displaced",
  },
  {
    img: "https://media.base44.com/images/public/6aa9b4a2cbd2193708bea50f/b53fb4f2c_generated_d6a5729e.jpg",
    sector: "Agriculture",
    title: "Irrigation & Cold-Chain Solar",
    stat: "180 kWp + pump integration · Full daytime offset",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-obsidian py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-plasma uppercase tracking-[0.25em] text-xs font-semibold mb-3">Flagship delivery</p>
        <h2 className="font-heading text-3xl md:text-5xl text-silver font-bold max-w-xl mb-16">
          Measurable outcomes, not brochure claims.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group relative overflow-hidden border border-white/10"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-6 w-full">
                <p className="text-plasma text-xs uppercase tracking-widest font-semibold mb-2">{p.sector}</p>
                <h3 className="text-silver font-heading text-lg font-bold flex items-center justify-between">
                  {p.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-plasma" />
                </h3>
                <p className="text-silver/50 text-sm mt-2">{p.stat}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}