import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sun, Building2, Factory, HeartPulse, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

/* =========================================================
   RESIDENTIAL PACKAGES
   Based on the supplied National Solar Power material
   ========================================================= */

const RESIDENTIAL = [
  {
    size: "6 kVA Deye Solar Kit",
    price: "R54,000",
    use: "Residential, commercial & industrial applications",
    battery: "1 × 5.12 kWh Deye Lithium-ion battery",
    panels: "6 × 620/630W solar panels",
    inverter: "1 × 6 kVA Deye Hybrid Inverter",
    extras: [
      "All mounting kits",
      "Installation & COC",
      "Free site assessment",
      "Project consulting",
      "Payment after installation",
    ],
  },

  {
    size: "8 kVA Deye Solar Kit",
    price: "R66,000",
    use: "Residential, commercial & industrial applications",
    battery: "1 × 5.12 kWh Deye Lithium-ion battery",
    panels: "8 × 620/630W solar panels",
    inverter: "1 × 8 kVA Deye Hybrid Inverter",
    extras: [
      "All mounting kits",
      "Installation & COC",
      "Free site assessment",
      "Project consulting",
      "Payment after installation",
    ],
    featured: true,
  },

  {
    size: "8 kW Hybrid",
    price: "R95,000",
    use: "Residential — large home / pool / home office",
    battery: "Deye wall-mount lithium 10.24 kWh, scalable",
    panels: "16 × 550W = 8.8 kWp",
    inverter: "Deye Hybrid 8 kW",
    extras: [
      "High-efficiency solar panels",
      "Wi-Fi monitoring & smart app",
      "Backup power during loadshedding",
      "No deposit",
      "Pay after installation",
    ],
  },

  {
    size: "10 kVA Deye Solar Kit",
    price: "R99,000",
    use: "Residential, commercial & industrial applications",
    battery: "2 × 5.12 kWh Deye Lithium-ion batteries",
    panels: "14 × 620/630W solar panels",
    inverter: "1 × 10 kVA Deye Hybrid Inverter",
    extras: [
      "All mounting kits",
      "Installation & COC",
      "Free site assessment",
      "Project consulting",
      "Payment after installation",
    ],
  },

  {
    size: "12 kW Hybrid",
    price: "R120,000",
    use: "Residential — large estate / 3-phase ready",
    battery: "Deye wall-mount lithium 15.36 kWh, scalable",
    panels: "20 × 550W = 11 kWp",
    inverter: "Deye Hybrid 12 kW",
    extras: [
      "High-efficiency solar panels",
      "Wi-Fi monitoring & smart app",
      "Backup power during loadshedding",
      "No deposit",
      "Pay after installation",
    ],
  },

  {
    size: "16 kW Hybrid",
    price: "R168,000",
    use: "Large residential applications",
    battery: "Deye wall-mount lithium 20.48 kWh, scalable",
    panels: "24 × 550W = 13.2 kWp",
    inverter: "Deye Hybrid 16 kW",
    extras: [
      "High-efficiency solar panels",
      "Wi-Fi monitoring & smart app",
      "Backup power during loadshedding",
      "No deposit",
      "Pay after installation",
    ],
  },

  {
    size: "16 kVA Deye Solar Kit",
    price: "R171,600",
    use: "Residential, commercial & industrial applications",
    battery: "4 × 5.12 kWh Deye Lithium-ion batteries",
    panels: "20 × 620/630W solar panels",
    inverter: "1 × 16 kVA Deye Hybrid Inverter",
    extras: [
      "All mounting kits",
      "Installation & COC",
      "Free site assessment",
      "Project consulting",
      "Payment after installation",
    ],
  },

  {
    size: "20 kW Hybrid",
    price: "R195,000",
    use: "Large residential / 3-phase applications",
    battery: "Deye wall-mount lithium 20.48 kWh, scalable",
    panels: "30 × 550W = 16.5 kWp",
    inverter: "Deye High Voltage Hybrid 20 kW",
    extras: [
      "High-efficiency solar panels",
      "Wi-Fi monitoring & smart app",
      "Backup power during loadshedding",
      "No deposit",
      "Pay after installation",
    ],
  },

  {
    size: "20 kVA Deye Solar Kit",
    price: "R229,850",
    use: "Large residential, commercial & industrial applications",
    battery: "2 × 16 kWh SE-F16 Deye Lithium Batteries",
    panels: "30 × 600W solar panels",
    inverter: "1 × 20 kW Deye Hybrid Inverter — 3 Phase",
    extras: [
      "All mounting materials",
      "Installation & COC",
      "Free site assessment",
      "Project consulting",
      "Free smart geyser timer",
      "Payment after installation",
    ],
  },
];

/* =========================================================
   COMMERCIAL
   ========================================================= */

const COMMERCIAL = [
  {
    size: "50 kW Full Hybrid",
    price: "Price on Request",
    use: "Retail, schools, warehouses & commercial facilities",
    battery: "61.44 kWh Deye HV Lithium Battery Set",
    panels: "48 × 615W bifacial modules = 29.52 kWp",
    inverter: "50 kW Deye Full Hybrid Inverter — 3 Phase",
    extras: [
      "Grid-tied with battery backup",
      "Peak shaving",
      "Load management",
      "Commercial protection & isolation",
      "Smart monitoring",
      "Intelligent energy control",
      "Professional installation",
      "Ongoing support",
      "Free site assessment",
      "Project consulting",
    ],
  },

  {
    size: "80 kW Full Hybrid",
    price: "R1,080,000",
    use: "Large commercial facilities & high-energy operations",
    battery: "106.12 kWh Deye HV Lithium Battery Rack",
    panels: "96 × 615W bifacial modules = 59.04 kWp",
    inverter: "80 kW Deye Full Hybrid Inverter — 3 Phase",
    extras: [
      "Grid-tied with battery backup",
      "Peak shaving & load management",
      "Commercial protection & isolation",
      "Smart monitoring",
      "Intelligent energy control",
      "Professional installation",
      "Ongoing support",
      "Free site assessment",
      "Project consulting",
    ],
    featured: true,
  },

  {
    size: "100 kW Full Hybrid",
    price: "R1,325,720",
    use: "Large commercial & high-demand energy applications",
    battery: "Deye HV Lithium Battery Rack",
    panels: "Bifacial solar modules = 78.72 kWp",
    inverter: "100 kW Deye Full Hybrid Inverter — 3 Phase",
    extras: [
      "Grid-tied with battery backup",
      "Peak shaving",
      "Load management",
      "Smart monitoring",
      "Intelligent energy control",
      "Professional installation",
      "Ongoing support",
      "Installation included",
    ],
  },
];

/* =========================================================
   INDUSTRIAL
   ========================================================= */

const INDUSTRIAL = [
  {
    size: "50 kW Industrial Hybrid",
    price: "Price on Request",
    use: "Industrial facilities & energy-intensive operations",
    battery: "61.44 kWh Deye HV Lithium Battery Set",
    panels: "48 × 615W bifacial modules = 29.52 kWp",
    inverter: "50 kW Deye Full Hybrid Inverter — 3 Phase",
    extras: [
      "Grid-tied battery backup",
      "Peak shaving",
      "Load management",
      "Commercial protection & isolation",
      "Smart monitoring",
      "Intelligent energy control",
      "Professional installation",
      "Ongoing support",
    ],
  },

  {
    size: "80 kW Industrial Hybrid",
    price: "R1,080,000",
    use: "Factories, production facilities & large operations",
    battery: "106.12 kWh Deye HV Lithium Battery Rack",
    panels: "96 × 615W bifacial modules = 59.04 kWp",
    inverter: "80 kW Deye Full Hybrid Inverter — 3 Phase",
    extras: [
      "Grid-tied battery backup",
      "Peak shaving & load management",
      "Commercial protection & isolation",
      "Smart monitoring",
      "Intelligent energy control",
      "Professional installation",
      "Ongoing support",
    ],
    featured: true,
  },

  {
    size: "100 kW Industrial Hybrid",
    price: "R1,325,720",
    use: "High-demand industrial energy applications",
    battery: "Deye HV Lithium Battery Rack",
    panels: "Bifacial solar modules = 78.72 kWp",
    inverter: "100 kW Deye Full Hybrid Inverter — 3 Phase",
    extras: [
      "Grid-tied battery backup",
      "Peak shaving",
      "Load management",
      "Smart monitoring",
      "Intelligent energy control",
      "Professional installation",
      "Ongoing support",
      "Installation included",
    ],
  },
];

/* =========================================================
   HEALTHCARE
   ========================================================= */

const HEALTHCARE = [
  {
    size: "Hospital Solar Solution",
    price: "Custom Project",
    use: "Hospitals, clinics & healthcare facilities",
    battery: "Battery storage sized according to site requirements",
    panels: "Solar PV system engineered to facility demand",
    inverter: "Hybrid / grid-connected system",
    extras: [
      "Reliable power for critical operations",
      "Reduce energy costs",
      "Energy independence",
      "Lower long-term maintenance",
      "Long-term savings / ROI",
      "Clean renewable energy",
      "Reduced carbon footprint",
      "EV charging integration",
      "Professional site assessment",
      "Project consulting",
    ],
    featured: true,
  },
];

/* =========================================================
   EV CHARGING
   ========================================================= */

const EV_CHARGING = [
  {
    size: "Home EV Charger",
    price: "Custom Quote",
    use: "Convenient charging for residential properties",
    battery: "N/A",
    panels: "Solar integration available",
    inverter: "Compatible energy system required",
    extras: [
      "Convenient",
      "Compact",
      "Suitable for homes",
      "Solar-powered charging option",
      "Safe & secure",
      "Professional consultation",
    ],
  },

  {
    size: "Portable EV Charger",
    price: "Custom Quote",
    use: "Flexible charging wherever you go",
    battery: "Portable charging solution",
    panels: "Solar integration subject to system design",
    inverter: "Compatible power source required",
    extras: [
      "Portable",
      "Flexible",
      "Use anywhere",
      "Convenient charging",
      "Safe & secure",
    ],
  },

  {
    size: "Commercial EV Charger",
    price: "Custom Quote",
    use: "Businesses, fleets & public charging stations",
    battery: "Battery storage integration available",
    panels: "Solar-powered charging integration",
    inverter: "Commercial energy system",
    extras: [
      "High-capacity charging",
      "Fleet charging",
      "Public charging",
      "Solar integration",
      "Energy efficiency consulting",
      "Safe & secure",
      "Professional project consulting",
    ],
    featured: true,
  },
];

/* =========================================================
   TAB CONFIGURATION
   ========================================================= */

const MODES = [
  {
    id: "residential",
    label: "Residential",
    icon: Sun,
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: Building2,
  },
  {
    id: "industrial",
    label: "Industrial",
    icon: Factory,
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: HeartPulse,
  },
  {
    id: "ev",
    label: "EV Charging",
    icon: Car,
  },
];

/* =========================================================
   COMPONENT
   ========================================================= */

export default function Pricing() {
  const [mode, setMode] = useState("residential");

  const getTiers = () => {
    switch (mode) {
      case "commercial":
        return COMMERCIAL;

      case "industrial":
        return INDUSTRIAL;

      case "healthcare":
        return HEALTHCARE;

      case "ev":
        return EV_CHARGING;

      default:
        return RESIDENTIAL;
    }
  };

  const tiers = getTiers();

  return (
    <section
      id="pricing"
      className="relative bg-obsidian py-32 px-6 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="flex flex-col gap-8 mb-14">

          <div>
            <p className="text-plasma uppercase tracking-[0.25em] text-xs font-semibold mb-3">
              Solar Solutions & Investment
            </p>

            <h2 className="font-heading text-3xl md:text-5xl text-silver font-bold max-w-3xl">
              Energy systems engineered for your needs.
            </h2>

            <p className="text-silver/50 max-w-2xl mt-5 leading-relaxed">
              From residential backup systems to commercial, industrial,
              healthcare and electric vehicle charging solutions.
            </p>
          </div>

          {/* =================================================
              TOGGLE
          ================================================= */}

          <div className="flex flex-wrap bg-white/5 border border-white/10 rounded-full p-1 w-fit gap-1">

            {MODES.map((item) => {
              const Icon = item.icon;
              const active = mode === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setMode(item.id)}
                  className={`
                    flex items-center gap-2
                    px-5 py-2.5
                    rounded-full
                    text-xs md:text-sm
                    uppercase
                    tracking-widest
                    transition-all
                    whitespace-nowrap
                    ${active
                      ? "bg-plasma text-obsidian font-semibold"
                      : "text-silver/60 hover:text-silver hover:bg-white/5"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}

          </div>
        </div>

        {/* =================================================
            PACKAGE CARDS
        ================================================= */}

        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >

          {tiers.map((t, i) => (

            <motion.div
              key={`${t.size}-${mode}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`
                relative
                p-8
                border
                rounded-sm
                flex
                flex-col
                ${t.featured
                  ? "border-plasma bg-plasma/[0.06]"
                  : "border-white/10 bg-white/[0.02]"
                }
              `}
            >

              {/* FEATURED LABEL */}

              {t.featured && (
                <span
                  className="
                    absolute
                    -top-3
                    left-8
                    bg-plasma
                    text-obsidian
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    px-3
                    py-1
                    rounded-sm
                  "
                >
                  Featured
                </span>
              )}

              {/* SYSTEM NAME */}

              <h3 className="font-heading text-xl text-silver font-bold mt-2">
                {t.size}
              </h3>

              {/* USE CASE */}

              <p className="text-silver/50 text-sm mt-2 leading-relaxed">
                {t.use}
              </p>

              {/* PRICE */}

              <p className="mt-7 font-heading text-2xl text-plasma font-bold">
                {t.price}
              </p>

              {/* SPECIFICATIONS */}

              <div className="mt-7 space-y-3">

                <div className="flex items-start gap-3 text-silver/70">
                  <Check className="w-4 h-4 text-plasma mt-0.5 shrink-0" />
                  <span className="text-sm">
                    <strong className="text-silver/90">Inverter:</strong>{" "}
                    {t.inverter}
                  </span>
                </div>

                <div className="flex items-start gap-3 text-silver/70">
                  <Check className="w-4 h-4 text-plasma mt-0.5 shrink-0" />
                  <span className="text-sm">
                    <strong className="text-silver/90">Solar:</strong>{" "}
                    {t.panels}
                  </span>
                </div>

                <div className="flex items-start gap-3 text-silver/70">
                  <Check className="w-4 h-4 text-plasma mt-0.5 shrink-0" />
                  <span className="text-sm">
                    <strong className="text-silver/90">Storage:</strong>{" "}
                    {t.battery}
                  </span>
                </div>

              </div>

              {/* ADDITIONAL FEATURES */}

              <div className="mt-5 space-y-2">

                {t.extras.map((extra) => (
                  <div
                    key={extra}
                    className="flex items-center gap-3 text-silver/60"
                  >
                    <Check className="w-4 h-4 text-plasma shrink-0" />
                    <span className="text-sm">{extra}</span>
                  </div>
                ))}

              </div>

              {/* CTA */}

              <Button
                asChild
                className="
                  mt-8
                  bg-plasma
                  text-obsidian
                  hover:bg-plasma/90
                  font-semibold
                  uppercase
                  tracking-wide
                "
              >
                <a href="#quote">Request Quote</a>
              </Button>

            </motion.div>

          ))}

        </motion.div>

        {/* =================================================
            FOOTER NOTE
        ================================================= */}

        <div className="mt-10 max-w-full space-y-3">

          <p className="text-silver/40 text-md leading-relaxed">
            Residential package prices and commercial system prices shown
            above are based on the supplied National Solar Power promotional
            material. Final pricing may vary according to site requirements,
            system configuration, equipment selection, installation conditions,
            electrical requirements and project scope.
          </p>

          <p className="text-silver/40 text-md leading-relaxed">
            Large commercial, industrial, healthcare and EV charging projects
            require a site assessment and project-specific quotation.
          </p>

        </div>

      </div>
    </section>
  );
}