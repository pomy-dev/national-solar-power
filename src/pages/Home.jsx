import React from "react";
import Navbar from "@/components/nsp/Navbar";
import Hero from "@/components/nsp/Hero";
import SectorSelector from "@/components/nsp/SectorSelector";
import Solutions from "@/components/nsp/Solutions";
import Consulting from "@/components/nsp/Consulting";
import Pricing from "@/components/nsp/Pricing";
import Process from "@/components/nsp/Process";
import ProofStats from "@/components/nsp/ProofStats";
import Projects from "@/components/nsp/Projects";
import Government from "@/components/nsp/Government";
import FAQ from "@/components/nsp/FAQ";
import CTAQuote from "@/components/nsp/CTAQuote";
import Footer from "@/components/nsp/Footer";

export default function Home() {
  return (
    <div className="bg-obsidian">
      <Navbar />
      <Hero />
      <SectorSelector />
      <Solutions />
      <Consulting />
      <Pricing />
      <Process />
      <ProofStats />
      <Projects />
      <Government />
      <FAQ />
      <CTAQuote />
      <Footer />
    </div>
  );
}