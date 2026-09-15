import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, ShieldCheck, Network, FileCheck2, ArrowRight } from "lucide-react";
import AnimatedWords from "./AnimatedWords";
import { Image } from "@/components/ui/image";

const CONSULTING_IMG = "https://media.base44.com/images/public/6aa9b4a2cbd2193708bea50f/27cf030d1_generated_a2da4efd.jpg";

const CARDS = [
  {
    icon: ClipboardCheck,
    title: "Feasibility Studies",
    desc: "Energy audits, interval-data analysis and bankable engineering studies before a single panel is specified.",
  },
  {
    icon: Network,
    title: "Grid Integration",
    desc: "LV/MV design, protection, power-quality studies and grid-tie interconnection engineering.",
  },
  {
    icon: FileCheck2,
    title: "Regulatory Compliance",
    desc: "SSEG, utility and municipal submissions, safety sign-off and documentation for insurers and lenders.",
  },
  {
    icon: ShieldCheck,
    title: "Project Governance",
    desc: "Milestones, HSE, QA/QC and commissioning oversight from survey through to handover.",
  },
];

const LIFECYCLE = ["Consult", "Design", "Approve", "Finance", "Build", "Commission"];

export default function Consulting() {
  return (
    <section id="consulting" className="relative bg-silver py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-blueprint uppercase tracking-[0.25em] text-xs font-semibold mb-3">
              Strategic Partner, Not Just an Installer
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-obsidian font-bold leading-tight">
              <AnimatedWords text="Solar Project Management" className="block" />
              <AnimatedWords text="& Consulting" className="block text-blueprint" delay={0.25} />
            </h2>
            <p className="mt-6 text-obsidian/60 text-lg leading-relaxed max-w-lg">
              National Solar Power moves beyond installation to manage the full energy project
              lifecycle — feasibility, engineering, regulatory approval, financing structure and
              on-site delivery — so corporate, mining, agricultural and public-sector clients get
              a bankable, de-risked outcome.
            </p>

            <div className="mt-10 rounded-sm overflow-hidden border border-obsidian/10">
              <Image
                src={CONSULTING_IMG}
                alt="Architectural blueprint with digital energy schematics"
                className="w-full h-64"
                fittingType="fill"
              />
            </div>
          </div>

          <div>
            <div className="grid sm:grid-cols-2 gap-px bg-obsidian/10 mb-12">
              {CARDS.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group relative bg-silver p-8 transition-all hover:bg-blueprint"
                  >
                    <Icon className="w-7 h-7 text-blueprint group-hover:text-plasma mb-4 group-hover:scale-110 transition-all" strokeWidth={1.2} />
                    <h3 className="text-lg font-heading font-bold text-obsidian group-hover:text-white uppercase tracking-tight mb-2 transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-obsidian/60 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                      {c.desc}
                    </p>
                    <div className="mt-5 flex items-center text-blueprint group-hover:text-plasma opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-bold uppercase tracking-widest">Explore Strategy</span>
                      <ArrowRight className="ml-2 w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Lifecycle Path */}
            <div className="relative pl-6">
              <p className="text-obsidian/50 uppercase tracking-[0.2em] text-xs font-semibold mb-6">
                The Lifecycle Path: Consulting to Completion
              </p>
              <div className="absolute left-[7px] top-12 bottom-2 w-px bg-obsidian/15" />
              <div className="space-y-6">
                {LIFECYCLE.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative flex items-center gap-4"
                  >
                    <span className="absolute -left-6 w-3.5 h-3.5 rounded-full bg-blueprint border-2 border-plasma" />
                    <span className="text-obsidian font-medium">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}