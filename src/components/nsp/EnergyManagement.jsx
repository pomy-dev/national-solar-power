import React from "react";
import { motion } from "framer-motion";
import { Activity, BarChart3, Lightbulb, ShieldCheck } from "lucide-react";

const FEATURES = [
  { icon: Activity, title: "Measure the load", text: "Smart meters and interval data reveal where energy is used, when demand peaks, and what it costs." },
  { icon: Lightbulb, title: "Reduce waste", text: "Target lighting, HVAC, pumps and compressed air with practical efficiency upgrades before adding generation." },
  { icon: BarChart3, title: "Control the spend", text: "A live dashboard tracks demand, solar yield, battery state and savings across every site." },
  { icon: ShieldCheck, title: "Keep improving", text: "Monthly reviews turn energy data into a managed plan for resilience, carbon and operating cost." },
];

export default function EnergyManagement() {
  return <section id="energy-management" className="border-t border-white/5 bg-[#121916] px-6 py-28"><div className="mx-auto max-w-7xl"><div className="grid items-end gap-10 lg:grid-cols-[1fr_1.2fr]"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-plasma">Energy efficiency management</p><h2 className="max-w-xl font-heading text-3xl font-bold text-silver md:text-5xl">Use less energy before you generate more.</h2></div><p className="max-w-xl text-lg leading-relaxed text-silver/60">We pair practical efficiency measures with live energy intelligence, so each rand saved strengthens the business case for solar.</p></div><div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">{FEATURES.map((feature, index) => { const Icon = feature.icon; return <motion.article key={feature.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-[#121916] p-8"><Icon className="mb-8 h-8 w-8 text-plasma" strokeWidth={1.3} /><h3 className="mb-3 font-heading text-lg font-bold text-silver">{feature.title}</h3><p className="leading-relaxed text-silver/50">{feature.text}</p></motion.article>; })}</div></div></section>;
}