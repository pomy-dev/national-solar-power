import React, { useEffect, useState } from "react";
import {
  ArrowRight, BatteryCharging, BarChart3, Check, ChevronLeft, ChevronRight,
  CircleCheck, Droplets, Gauge, Leaf, Menu, PanelTop, ShieldCheck, Sparkles,
  Sun, Users, Wrench, X, Zap,
} from "lucide-react";

const heroSlides = [
  { image: "/assets/solar-hero-1.jpg", label: "Residential solar", title: "Power that feels at home." },
  { image: "/assets/solar-hero-2.jpg", label: "Smarter rooftops", title: "Make every ray count." },
  { image: "/assets/solar-hero-3.jpeg", label: "Built for tomorrow", title: "A brighter way forward." },
];

const products = [
  { name: "SunPeak 450W panel", type: "Monocrystalline · 25-year warranty", price: "$249", icon: PanelTop, featured: true },
  { name: "GridReady inverter", type: "5 kW · app-connected monitoring", price: "$1,290", icon: Zap },
  { name: "ReserveCell battery", type: "10 kWh · backup-ready storage", price: "$6,800", icon: BatteryCharging },
  { name: "Roofline mounting kit", type: "Rail + clamps · pitched roofs", price: "$420", icon: Wrench },
];

const benefits = [
  { icon: Gauge, title: "See the whole picture", body: "Benchmark consumption, identify waste and set a practical baseline for your site." },
  { icon: BarChart3, title: "Turn data into action", body: "Track performance against savings goals and spot the upgrades with the fastest payback." },
  { icon: Leaf, title: "Build lasting savings", body: "Efficient lighting, HVAC and controls reduce operating cost while improving comfort." },
];

function RequestModal({ type, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const isInstaller = type === "installer";
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="request-title">
        <button className="modal-close" onClick={onClose} aria-label="Close request form"><X size={20} /></button>
        {!submitted ? <>
          <div className="eyebrow">{isInstaller ? "Installer network" : "Free first step"}</div>
          <h2 id="request-title">{isInstaller ? "Request a solar installer" : "Request an on-site assessment"}</h2>
          <p className="modal-intro">{isInstaller ? "Tell us about your project and we’ll match you with a vetted local installer." : "We’ll look at your site, current use and goals, then map the clearest path to savings."}</p>
          <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            <div className="form-grid">
              <label>Full name<input required name="name" placeholder="Jordan Lee" /></label>
              <label>Work email<input required type="email" name="email" placeholder="jordan@company.com" /></label>
              <label>Phone number<input required type="tel" name="phone" placeholder="(555) 123-4567" /></label>
              <label>Property type<select name="property"><option>Home</option><option>Commercial building</option><option>Farm or acreage</option><option>Community / public site</option></select></label>
              <label className="full-field">Project address<input required name="address" placeholder="Street, city, state" /></label>
              <label className="full-field">Tell us a little more<textarea name="message" rows="3" placeholder={isInstaller ? "What would you like installed?" : "What would you like us to assess?"} /></label>
            </div>
            <button className="button button-primary form-submit" type="submit">Send request <ArrowRight size={17} /></button>
            <p className="form-note">No obligation. A member of our team will reply within one business day.</p>
          </form>
        </> : <div className="success-state">
          <div className="success-icon"><CircleCheck size={32} /></div><div className="eyebrow">Request received</div><h2>We’re on it.</h2><p>Thanks for reaching out. We’ll be in touch within one business day to plan your next step.</p><button className="button button-primary" onClick={onClose}>Back to the site</button>
        </div>}
      </div>
    </div>
  );
}

function Home() {
  const [slide, setSlide] = useState(0);
  const [modal, setModal] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const timer = window.setInterval(() => setSlide((current) => (current + 1) % heroSlides.length), 5000); return () => window.clearInterval(timer); }, []);
  const current = heroSlides[slide];
  const openModal = (type) => { setModal(type); setMenuOpen(false); };

  return <div className="site-shell">
    <header className="navbar"><a className="brand" href="#top" aria-label="National Solar Power home"><span className="brand-mark"><Sun size={20} /></span><span>national<span className="brand-accent">solar</span><small>POWER</small></span></a><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Menu size={22} /></button><nav className={menuOpen ? "nav-links open" : "nav-links"}><a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a><a href="#efficiency" onClick={() => setMenuOpen(false)}>Efficiency</a><a href="#maintenance" onClick={() => setMenuOpen(false)}>Maintenance</a><a href="#products" onClick={() => setMenuOpen(false)}>Products</a><button className="button button-small" onClick={() => openModal("installer")}>Find an installer <ArrowRight size={15} /></button></nav></header>
    <main id="top">
      <section className="hero" id="solutions"><div className="hero-glow" /><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" />Energy, made personal</div><h1>Make room for <em>more</em> power.</h1><p className="hero-lede">Solar systems designed around the way you live, work and grow. Clear advice, quality hardware and a partner for the long haul.</p><div className="hero-actions"><button className="button button-primary" onClick={() => openModal("assessment")}>Request an assessment <ArrowRight size={17} /></button><a className="text-link" href="#efficiency">Explore our approach <ChevronRight size={16} /></a></div><div className="hero-proof"><div className="avatar-stack"><span>ML</span><span>AK</span><span>TS</span></div><p><strong>4.9/5</strong> from 280+ solar owners</p></div></div><div className="hero-visual"><div className="hero-image-wrap">{heroSlides.map((item, index) => <img key={item.image} className={index === slide ? "hero-image active" : "hero-image"} src={item.image} alt={item.label} />)}<div className="hero-image-shade" /><div className="hero-image-caption"><span>{String(slide + 1).padStart(2, "0")}</span><div><strong>{current.label}</strong><small>{current.title}</small></div></div></div><div className="hero-controls"><button onClick={() => setSlide((slide - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous image"><ChevronLeft size={18} /></button><div className="slide-dots">{heroSlides.map((item, index) => <button key={item.image} className={index === slide ? "active" : ""} onClick={() => setSlide(index)} aria-label={`Show image ${index + 1}`} />)}</div><button onClick={() => setSlide((slide + 1) % heroSlides.length)} aria-label="Next image"><ChevronRight size={18} /></button><span className="slide-timer">01 / 03</span></div></div></section>
      <section className="trust-strip"><span>ONE PARTNER. EVERY STEP.</span><div><span><ShieldCheck size={16} /> 25-year panel warranty</span><span><Sparkles size={16} /> Clean energy, clearly explained</span><span><Users size={16} /> Local experts, human support</span></div></section>
      <section className="section efficiency-section" id="efficiency"><div className="section-heading"><div><div className="eyebrow">Energy efficiency management</div><h2>Efficiency is the first<br /><em>energy source.</em></h2></div><p>Before adding more generation, understand what your building already uses. Our management approach benchmarks performance, finds waste and turns the data into a plan your team can act on.</p></div><div className="efficiency-layout"><div className="management-image"><img src="/assets/energy-management.png" alt="Smart energy management system illustration" /><div className="image-label"><span className="pulse-dot" />Live system view <strong>+18.6%</strong></div></div><div className="benefit-list">{benefits.map((benefit) => <div className="benefit" key={benefit.title}><div className="icon-box"><benefit.icon size={20} /></div><div><h3>{benefit.title}</h3><p>{benefit.body}</p></div></div>)}<a className="arrow-link" href="#contact">Talk to an energy strategist <ArrowRight size={17} /></a></div></div></section>
      <section className="section maintenance-section" id="maintenance"><div className="maintenance-image"><img src="/assets/solar-cleaning.webp" alt="Technician cleaning solar panels" /><div className="maintenance-stamp"><Wrench size={17} /><span>Care is<br /><strong>power</strong></span></div></div><div className="maintenance-copy"><div className="eyebrow">Solar cleaning & maintenance</div><h2>Keep your system<br /><em>in its prime.</em></h2><p>Dust, debris and weather can quietly reduce output. A simple maintenance rhythm protects your investment and keeps your panels producing at their best.</p><div className="check-list"><span><Check size={16} /> Output monitoring & diagnostics</span><span><Check size={16} /> Gentle, professional panel cleaning</span><span><Check size={16} /> Inverter, wiring & mount inspections</span><span><Check size={16} /> Post-storm safety checks</span></div><button className="button button-outline" onClick={() => openModal("assessment")}>Schedule a care visit <ArrowRight size={17} /></button></div></section>
      <section className="section products-section" id="products"><div className="section-heading compact"><div><div className="eyebrow">The solar shop</div><h2>Good equipment.<br /><em>Better energy.</em></h2></div><p>Explore the core hardware we recommend for dependable, efficient systems. Pricing is shown for planning only; your assessment determines the right fit.</p></div><div className="product-grid">{products.map((product) => <article className={product.featured ? "product-card featured" : "product-card"} key={product.name}><div className="product-icon"><product.icon size={22} /></div><div className="product-type">{product.type}</div><h3>{product.name}</h3><div className="product-bottom"><strong>from {product.price}</strong><span>View details <ArrowRight size={16} /></span></div></article>)}</div><div className="accessory-note"><div className="accessory-icon"><Droplets size={19} /></div><div><strong>Need the small stuff?</strong><span>Monitoring gateways, cable management, bird guard and cleaning kits are available as accessories.</span></div><button className="text-link" onClick={() => openModal("assessment")}>Ask an expert <ArrowRight size={16} /></button></div></section>
      <section className="cta-section" id="contact"><div><div className="eyebrow">Your next move</div><h2>Let’s turn your<br /><em>sunlight into momentum.</em></h2></div><div className="cta-right"><p>Whether you’re starting from scratch or making an existing system work harder, we’ll help you see the clearest path forward.</p><button className="button button-primary" onClick={() => openModal("assessment")}>Start with an assessment <ArrowRight size={17} /></button></div></section>
    </main>
    <footer className="footer"><div className="brand footer-brand"><span className="brand-mark"><Sun size={20} /></span><span>national<span className="brand-accent">solar</span><small>POWER</small></span></div><p>Independent energy guidance for brighter places.</p><div className="footer-links"><a href="#solutions">Solutions</a><a href="#products">Products</a><a href="#contact">Contact</a></div><small className="source-note">Efficiency guidance informed by U.S. EPA energy management resources and Enphase solar maintenance guidance.</small></footer>
    {modal && <RequestModal type={modal} onClose={() => setModal(null)} />}
  </div>;
}

export default Home;
