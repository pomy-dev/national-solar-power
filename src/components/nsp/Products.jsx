import React from "react";
import { ArrowUpRight, BatteryCharging, Cable, Gauge, SunMedium } from "lucide-react";

const PRODUCTS = [
  { icon: SunMedium, name: "Mono PV module", detail: "550 W · Tier 1 module", price: "From R2,450" },
  { icon: BatteryCharging, name: "Home battery", detail: "5 kWh usable storage", price: "From R48,900" },
  { icon: Gauge, name: "Hybrid inverter", detail: "5 kW · Wi-Fi monitoring", price: "From R19,800" },
  { icon: Cable, name: "Installation essentials", detail: "DC isolator, cabling & protection", price: "From R3,950" },
];

export default function Products() { return <section id="products" className="border-t border-white/5 bg-[#e9eee8] px-6 py-28 text-[#101412]"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#39884f]">Solar products</p><h2 className="max-w-2xl font-heading text-3xl font-bold md:text-5xl">The components behind a dependable system.</h2></div><p className="max-w-sm text-[#101412]/60">Indicative supply prices. Final selection and installed pricing depend on your site assessment.</p></div><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{PRODUCTS.map((product) => { const Icon = product.icon; return <article key={product.name} className="group border border-[#101412]/10 bg-white/60 p-7 transition-colors hover:bg-white"><div className="flex items-start justify-between"><Icon className="h-8 w-8 text-[#39884f]" strokeWidth={1.3} /><ArrowUpRight className="h-5 w-5 text-[#101412]/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h3 className="mt-14 font-heading text-xl font-bold">{product.name}</h3><p className="mt-2 text-sm text-[#101412]/55">{product.detail}</p><p className="mt-8 border-t border-[#101412]/10 pt-4 text-lg font-semibold text-[#39884f]">{product.price}</p></article>; })}</div></div></section>; }