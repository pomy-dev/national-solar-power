import React from "react";
import {
  ArrowUpRight,
  BatteryCharging,
  Cable,
  Car,
  Gauge,
  ShieldCheck,
  SunMedium,
  Zap,
  Ruler,
  Boxes,
} from "lucide-react";

const PRODUCTS = [
  {
    icon: SunMedium,
    name: "Mono PV Module",
    brand: "JA Solar",
    detail: "550 W · Mono half-cell · High-efficiency PV",
    price: "From R2,450",
    image:
      "https://image.made-in-china.com/155f0j00JoMhmilrldRU/Ja-Solar-Panel-Jam72s30-550-Mr-550W-Mono-Perc-Half-Cells-Photovoltaic-Module.webp",
    tag: "Solar Generation",
  },

  {
    icon: BatteryCharging,
    name: "Home Battery",
    brand: "Deye",
    detail: "5.12 kWh · LiFePO₄ · 51.2 V",
    price: "From R17,995",
    image:
      "https://image.made-in-china.com/2f0j00UfDvYAuIhjcB/Deye-Ess-Se-G5-1-PRO-B-Best-Solar-LiFePO4-Battery-Storage-for-Home.jpg",
    tag: "Energy Storage",
  },

  {
    icon: Gauge,
    name: "Hybrid Inverter",
    brand: "Deye",
    detail: "5 kW · Hybrid operation · Smart monitoring",
    price: "From R19,800",
    image:
      "https://www.vimartgt.com/web/image/product.product/914/image_1024/%5BDeye%205%20kW%20MS%20monof%C3%A1sico%5D%20Inversor%20h%C3%ADbrido%20Deye%20SUN-5K-SG03LP1-EU%205%20kW%20monof%C3%A1sico?unique=37a3b00",
    tag: "Power Conversion",
  },

  {
    icon: Cable,
    name: "Installation Essentials",
    brand: "System Components",
    detail: "DC isolators · Cabling · Surge protection",
    price: "From R3,950",
    image:
      "https://m.media-amazon.com/images/I/71mhvmzu1cL._SX466_.jpg",
    tag: "Installation",
  },

  {
    icon: BatteryCharging,
    name: "SE-G5.1 Pro-B",
    brand: "Deye",
    detail: "5.12 kWh · LiFePO₄ · Scalable storage",
    price: "Quote",
    image:
      "https://liriksolar.com/image/cache/webp/catalog/products/Battery/LiFePo4/Battery%20DEYE%20SE-G5.1%20PRO%20LiFePo4%20%285.12%20kWh%2051.2V%20100Ah%29/2-500x500.webp",
    tag: "Premium Storage",
  },

  {
    icon: Boxes,
    name: "BOS-G High Voltage",
    brand: "Deye",
    detail: "5.12 kWh modules · C&I · High-voltage storage",
    price: "Quote",
    image:
      "https://viatec.ua/upload/2/bos-g-pro-12.webp",
    tag: "Commercial Storage",
  },

  {
    icon: Zap,
    name: "20 kW Hybrid Inverter",
    brand: "Deye",
    detail: "20 kW · 3-phase · Hybrid inverter",
    price: "Quote",
    image:
      "https://e-c.storage.googleapis.com/res/f1b26b70-0aeb-4666-922b-ae41bc074ba1/original",
    tag: "Commercial Power",
  },

  {
    icon: Car,
    name: "EV Charging Station",
    brand: "Victron Energy",
    detail: "Up to 22 kW AC · Single / three-phase",
    price: "Quote",
    image:
      "https://c.cdnmp.net/178278256/p/l/8/victron-energy-ev-charging-station-22kw~2478.jpg",
    tag: "EV Charging",
  },

  {
    icon: Ruler,
    name: "Solar Mounting System",
    brand: "PV Structures",
    detail: "Roof & ground mounting · Engineered for site",
    price: "Quote",
    image:
      "https://www.xmkseng.com/uploadfile/202401/16/1bb0af121b9ed89549f17ac278f99ec1_medium.jpg",
    tag: "Mounting",
  },

  {
    icon: ShieldCheck,
    name: "Solar Protection Kit",
    brand: "Electrical Protection",
    detail: "DC/AC isolation · Surge protection · Distribution",
    price: "Quote",
    image:
      "https://m.media-amazon.com/images/I/71mhvmzu1cL._SX466_.jpg",
    tag: "System Protection",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="border-t border-white/5 bg-[#e9eee8] px-6 py-28 text-[#101412]"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#39884f]">
              Solar products
            </p>

            <h2 className="max-w-2xl font-heading text-3xl font-bold md:text-5xl">
              The components behind a dependable system.
            </h2>

            <p className="mt-5 max-w-2xl text-[#101412]/60 leading-relaxed">
              Quality solar generation, energy storage, power conversion,
              protection and EV charging components — selected for
              professionally engineered energy systems.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#101412]/40">
            <span>Swipe</span>
            <span className="h-px w-8 bg-[#101412]/20" />
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {/* PRODUCT CAROUSEL */}
        <div className="relative mt-14">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#e9eee8] to-transparent" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#e9eee8] to-transparent" />

          <div
            className="
              flex
              gap-5
              overflow-x-auto
              pb-8
              snap-x
              snap-mandatory
              scroll-smooth
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {PRODUCTS.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  key={product.name}
                  className="
                    group
                    relative
                    min-w-[310px]
                    snap-start
                    overflow-hidden
                    border
                    border-[#101412]/10
                    bg-[#101412]
                    sm:min-w-[350px]
                    lg:min-w-[380px]
                  "
                >
                  {/* BACKGROUND IMAGE */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-cover
                      bg-center
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                    style={{
                      backgroundImage: `url(${product.image})`,
                    }}
                  />

                  {/* DARK OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#07100b]
                      via-[#07100b]/75
                      to-[#07100b]/20
                      transition-all
                      duration-500
                      group-hover:from-[#07100b]
                      group-hover:via-[#07100b]/65
                    "
                  />

                  {/* CONTENT */}
                  <div className="relative flex min-h-[470px] flex-col p-7 text-white">

                    {/* TOP ROW */}
                    <div className="flex items-start justify-between">

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          border
                          border-white/20
                          bg-black/20
                          backdrop-blur-sm
                        "
                      >
                        <Icon
                          className="h-6 w-6 text-[#8ee6a5]"
                          strokeWidth={1.4}
                        />
                      </div>

                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          border
                          border-white/20
                          bg-black/20
                          backdrop-blur-sm
                          transition-all
                          duration-300
                          group-hover:border-[#8ee6a5]/60
                        "
                      >
                        <ArrowUpRight
                          className="
                            h-4
                            w-4
                            text-white/70
                            transition-transform
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          "
                        />
                      </div>

                    </div>

                    {/* TAG */}
                    <div className="mt-24">
                      <span
                        className="
                          inline-flex
                          border
                          border-[#8ee6a5]/30
                          bg-[#39884f]/30
                          px-3
                          py-1
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-[#b8f4c7]
                          backdrop-blur-sm
                        "
                      >
                        {product.tag}
                      </span>
                    </div>

                    {/* PRODUCT INFORMATION */}
                    <div className="mt-auto">

                      <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                        {product.brand}
                      </p>

                      <h3 className="font-heading text-2xl font-bold text-white">
                        {product.name}
                      </h3>

                      <p className="mt-3 max-w-[290px] text-sm leading-relaxed text-white/65">
                        {product.detail}
                      </p>

                      {/* PRICE */}
                      <div className="mt-7 flex items-end justify-between border-t border-white/15 pt-5">

                        <div>
                          <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                            Supply
                          </p>

                          <p className="mt-1 text-lg font-semibold text-[#8ee6a5]">
                            {product.price}
                          </p>
                        </div>

                        <span className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                          Enquire
                        </span>

                      </div>

                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* SCROLL INDICATOR */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="h-1 w-16 rounded-full bg-[#39884f]/30">
              <div className="h-full w-1/3 rounded-full bg-[#39884f]" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.18em] text-[#101412]/35">
              10 products
            </span>
          </div>

        </div>

        {/* FOOTNOTE */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#101412]/10 pt-6 md:flex-row">

          <p className="max-w-2xl text-md leading-relaxed text-[#101412]/45">
            Indicative supply pricing only. Product availability, equipment
            selection and final pricing depend on system design, stock,
            installation requirements and site assessment.
          </p>

          <a
            href="#quote"
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#39884f]
              transition-colors
              hover:text-[#101412]
            "
          >
            Build your system
            <ArrowUpRight className="h-4 w-4" />
          </a>

        </div>

      </div>
    </section>
  );
}