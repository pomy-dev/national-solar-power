import { useState } from "react";
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
import EnergyManagement from "@/components/nsp/EnergyManagement";
import Maintenance from "@/components/nsp/Maintenance";
import Products from "@/components/nsp/Products";
import RequestModal from "@/components/nsp/RequestModal";

export default function Home() {
  const [requestType, setRequestType] = useState(null);

  return (
    <div className="bg-obsidian">
      <Navbar onOpenRequest={setRequestType} />
      <Hero onOpenRequest={setRequestType} />
      <SectorSelector />
      <Solutions />
      <EnergyManagement />
      <Maintenance />
      <Products />
      <Consulting />
      <Pricing />
      <Process />
      <ProofStats />
      <Projects />
      <Government />
      <FAQ />
      <CTAQuote />
      <Footer />
      <RequestModal open={Boolean(requestType)} onOpenChange={(open) => !open && setRequestType(null)} type={requestType || "assessment"} />
    </div>
  );
}