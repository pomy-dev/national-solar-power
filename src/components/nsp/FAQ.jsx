import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Is the online savings estimate a binding quote?",
    a: "No. The calculator gives an indicative estimate based on the information provided. A final system design and price require a site assessment and engineering validation.",
  },
  {
    q: "How is solar PV priced compared to battery storage?",
    a: "Solar PV is priced per kWp of panel capacity, batteries are priced per kWh of storage, and PPAs are priced per kWh of delivered energy — these are different units and are never interchanged.",
  },
  {
    q: "Can NSP manage a project without also installing it?",
    a: "Yes. Our Solar Project Management & Consulting service covers feasibility, engineering, grid integration and regulatory compliance independently of EPC delivery.",
  },
  {
    q: "What financing models are available?",
    a: "Cash EPC, asset finance / green loans, lease or rent-to-own, Power Purchase Agreements (PPA), Energy-as-a-Service, and wheeling / off-site renewable procurement.",
  },
  {
    q: "Do you work with government and municipal clients?",
    a: "Yes — we support portfolio-scale public infrastructure projects with tender-ready documentation, local participation reporting and long-term O&M contracts.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative bg-obsidian py-32 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <p className="text-plasma uppercase tracking-[0.25em] text-xs font-semibold mb-3 text-center">FAQ</p>
        <h2 className="font-heading text-3xl md:text-5xl text-silver font-bold text-center mb-14">
          Clarity before commitment.
        </h2>

        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {FAQS.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="text-silver font-medium text-lg">{f.q}</span>
                <Plus className={`w-5 h-5 text-plasma flex-shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="text-silver/60 pb-6 leading-relaxed">{f.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}