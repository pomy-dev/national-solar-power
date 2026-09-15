import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedWords from "./AnimatedWords";
import { Image } from "@/components/ui/image";

const HERO_IMG = "https://media.base44.com/images/public/6aa9b4a2cbd2193708bea50f/16c56a1bc_generated_ad5ea5b3.jpg";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.25);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-obsidian">
      <div className="absolute inset-0" style={{ transform: `translateY(${offset}px)` }}>
        <Image
          src={HERO_IMG}
          alt="Vast solar panel array at dawn with amber sky"
          className="w-full h-[120%]"
          fittingType="fill"
        />
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