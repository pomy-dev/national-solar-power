import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { FileText, Users, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const MANAGEMENT_IMG = "https://media.base44.com/images/public/6aa9b4a2cbd2193708bea50f/993465850_generated_a04f45d9.jpg";

const POINTS = [
  { icon: FileText, text: "Procurement pack, B-BBEE and compliance dossier available on request." },
  { icon: Users, text: "Local artisan training, supplier development and job creation reporting." },
  { icon: Leaf, text: "Carbon, diesel-displacement and community impact dashboards." },
];

export default function Government() {
  return (
    <section id="government" className="relative bg-blueprint py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-plasma uppercase tracking-[0.25em] text-xs font-semibold mb-3">
            Government &amp; Public Infrastructure
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white font-bold leading-tight max-w-lg">
            Tender-ready clean energy for schools, clinics and municipalities.
          </h2>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-lg">
            NSP delivers portfolio-scale EPC and O&amp;M for public infrastructure — with the
            documentation, local participation record and impact reporting that procurement
            teams require.
          </p>

          <div className="mt-10 space-y-5">
            {POINTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.text}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <Icon className="w-5 h-5 text-plasma mt-1 flex-shrink-0" strokeWidth={1.3} />
                  <p className="text-white/70">{p.text}</p>
                </motion.div>
              );
            })}
          </div>

          <Button asChild size="lg" className="mt-10 bg-plasma text-obsidian hover:bg-plasma/90 font-semibold uppercase tracking-wide">
            <a href="#quote">Corporate / Government Enquiry</a>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[420px] border border-white/10"
        >
          <Image
            src={MANAGEMENT_IMG}
            alt="Engineer overseeing a large solar construction site"
            className="w-full h-full"
            fittingType="fill"
          />
        </motion.div>
      </div>
    </section>
  );
}