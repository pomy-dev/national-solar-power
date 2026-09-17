import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, Building2, ClipboardCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedWords from "./AnimatedWords";
import { Image } from "@/components/ui/image";

const SOLAR_IMAGES = [
  { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=90", alt: "Solar panels catching the morning light" },
  { src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2200&q=90", alt: "Solar array viewed across a field" },
  { src: "https://media.istockphoto.com/id/2212331081/photo/workers-are-installing-awning-solar-panels.webp?a=1&b=1&s=612x612&w=0&k=20&c=EMvsRWjouEXw-1Vb2pIvXXnoJLOR-ivuepDwAjZu8Jw=", alt: "Close view of photovoltaic panels" },
];

export default function Hero({ onOpenRequest }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveImage((image) => (image + 1) % SOLAR_IMAGES.length), 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-obsidian">
      <div className="absolute inset-0" aria-label="Solar project highlights">
        {SOLAR_IMAGES.map((image, index) => (
          <motion.div
            key={image.src}
            initial={false}
            animate={{
              opacity: index === activeImage ? [0, 1, 1, 0] : 0,
              scale: index === activeImage ? [1.06, 1, 1.02, 1.06] : 1.06,
              x: index === activeImage ? ["-3%", "0%", "1%", "3%"] : "-3%",
            }}
            transition={{ duration: 7, times: [0, 0.18, 0.82, 1], ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <Image src={image.src} alt={image.alt} className="h-full w-full" fittingType="fill" />
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/70 to-obsidian" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-plasma uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-semibold"
        >
          Solar PV · Battery Storage · Microgrids · EV Charging · EPC · PPA · O&amp;M
        </motion.p>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-silver leading-[1.05] max-w-4xl">
          <AnimatedWords text="Powering Africa." className="block" />
          <AnimatedWords text="Protecting your operations." className="block" delay={0.3} />
          <AnimatedWords text="Reducing your energy cost." className="block text-plasma text-glow-plasma" delay={0.6} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 text-silver/70 text-lg md:text-xl max-w-xl leading-relaxed"
        >
          National Solar Power is an African energy infrastructure partner — engineering solar,
          storage and microgrid systems for homes, businesses, industry, mining, agriculture and
          government.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button asChild size="lg" className="relative overflow-hidden shine-sweep bg-plasma text-obsidian hover:bg-plasma/90 font-semibold uppercase tracking-wide">
            <a href="#quote">Get My Energy Plan <ArrowRight className="w-4 h-4 ml-2" /></a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 backdrop-blur-md text-silver hover:bg-white/10 uppercase tracking-wide">
            <a href="#pricing"><Calculator className="w-4 h-4 mr-2" /> Calculate Savings</a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-silver/80 hover:text-plasma uppercase tracking-wide">
            <a href="#government"><Building2 className="w-4 h-4 mr-2" /> Corporate / Government</a>
          </Button>
        </motion.div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-silver/50">
          <button type="button" onClick={() => onOpenRequest("assessment")} className="inline-flex items-center gap-2 hover:text-plasma transition-colors"><ClipboardCheck className="h-4 w-4 text-plasma" /> On-site assessment</button>
          <button type="button" onClick={() => onOpenRequest("installer")} className="inline-flex items-center gap-2 hover:text-plasma transition-colors"><Wrench className="h-4 w-4 text-plasma" /> Find an installer</button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 grid grid-cols-3 sm:grid-cols-3 gap-6 max-w-xl border-t border-white/10 pt-8"
        >
          {[
            { value: "10.1 GW+", label: "SA installed solar capacity" },
            { value: "9", label: "Sectors served nationally" },
            { value: "24/7", label: "Remote monitoring & O&M" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-plasma font-heading text-2xl md:text-3xl font-bold">{stat.value}</p>
              <p className="text-silver/50 text-xs md:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}