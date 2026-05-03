/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Cctv, 
  Monitor, 
  Smartphone, 
  Cloud, 
  Wrench, 
  Activity, 
  Cpu, 
  Network, 
  Lock, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  Play,
  ArrowRight,
  TrendingDown,
  Clock,
  Globe,
  Database
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-cyan-500/20 p-2 rounded-lg border border-cyan-500/30">
            <Shield className="w-6 h-6 text-cyan-400" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-white">Sentinel<span className="text-cyan-400">Remote</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#demo" className="hover:text-cyan-400 transition-colors">Demo</a>
          <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
          <a href="#contact" className="px-5 py-2 glass rounded-full text-cyan-400 hover:neon-glow transition-all">Contact Now</a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, centered = false }: { title: string, subtitle: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block px-4 py-1.5 glass rounded-full text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4"
    >
      {subtitle}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
    >
      {title}
    </motion.h2>
  </div>
);

// --- Sections ---

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Abstract Background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full animate-pulse delay-1000" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
    </div>

    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-7xl font-display font-bold leading-[1.1] text-white mb-6">
          Remote CCTV <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Monitoring</span> <br />
          Solutions
        </h1>
        <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
          24/7 Smart Security. Monitor Anytime, Anywhere. Experience the future of surveillance with our AI-powered remote dashboard.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:neon-glow hover:scale-105 transition-all flex items-center gap-2">
            View Live Demo <Play className="w-4 h-4 fill-current text-slate-950" />
          </button>
          <button className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all">
            Contact Now
          </button>
        </div>
        
        <div className="mt-12 flex items-center gap-8">
          <div>
            <div className="text-2xl font-bold text-white tracking-tight">500+</div>
            <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Clients</div>
          </div>
          <div className="w-px h-8 bg-slate-800" />
          <div>
            <div className="text-2xl font-bold text-white tracking-tight">99.9%</div>
            <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Uptime</div>
          </div>
          <div className="w-px h-8 bg-slate-800" />
          <div>
            <div className="text-2xl font-bold text-white tracking-tight">10+ yr</div>
            <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Experience</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative"
      >
        <div className="glass-card p-4 relative z-10">
          <img 
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200" 
            alt="CCTV Dashboard" 
            className="rounded-xl w-full h-auto object-cover border border-white/5"
          />
          <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 bg-red-600/80 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest animate-pulse">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            Live Feed: Camera 04
          </div>
        </div>
        <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl -z-10 rounded-full" />
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <SectionHeading 
            subtitle="Who We Are" 
            title="Expert Security for a Digital World" 
          />
          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p>
              With over 10 years of specialized experience in CCTV, VMS, and Remote Monitoring, we bridge the gap between traditional security and modern digital infrastructure. Our mission is to provide peace of mind through relentless vigilance and cutting-edge technology.
            </p>
            <p>
              We've served 500+ clients across the globe, from retail chains to industrial warehouses, delivering a consistent 99.9% uptime. Our international freelance experience allows us to adapt to various regulatory environments and technical standards seamlessly.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
             {['Certified Engineers', 'Global Support', 'AI Driven', 'Scalable Solutions'].map((tag) => (
               <span key={tag} className="flex items-center gap-1.5 text-xs font-bold text-white py-2 px-4 glass rounded-full ring-1 ring-white/5">
                 <CheckCircle2 className="w-3 h-3 text-cyan-400" /> {tag}
               </span>
             ))}
          </div>
        </motion.div>
        
        <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="glass-card p-8 text-center translate-y-8">
               <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
               <div className="text-3xl font-bold text-white">Global</div>
               <div className="text-xs text-slate-500 uppercase mt-1">Scale</div>
            </div>
            <div className="glass-card p-8 text-center ring-1 ring-cyan-500/20">
               <Activity className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
               <div className="text-3xl font-bold text-white">24/7</div>
               <div className="text-xs text-slate-500 uppercase mt-1">Monitoring</div>
            </div>
          </div>
          <div className="space-y-4 pt-4">
            <div className="glass-card p-8 text-center">
               <Database className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
               <div className="text-3xl font-bold text-white">Encrypted</div>
               <div className="text-xs text-slate-500 uppercase mt-1">Storage</div>
            </div>
            <div className="glass-card p-8 text-center -translate-y-8">
               <CheckCircle2 className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
               <div className="text-3xl font-bold text-white">Certified</div>
               <div className="text-xs text-slate-500 uppercase mt-1">Expertise</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { icon: <Activity />, title: "24/7 Live Monitoring", desc: "Expert operators watching your premises every second of every day." },
    { icon: <Monitor />, title: "Remote DVR/NVR Setup", desc: "Seamless configuration of recording systems for remote accessibility." },
    { icon: <Smartphone />, title: "Mobile Configuration", desc: "Access your camera feeds from iOS and Android devices with ease." },
    { icon: <Cpu />, title: "AI Motion Detection", desc: "Reduce false alarms with smart people and vehicle identification." },
    { icon: <Cloud />, title: "Cloud Backup", desc: "Secure off-site storage for your critical surveillance data." },
    { icon: <Wrench />, title: "Tech Support", desc: "Troubleshooting and regular maintenance of your security stack." },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Core Offerings" title="Security Services We Provide" centered />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-cyan-500/40 transition-all hover:-translate-y-2 cursor-default"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                {s.icon}
              </div>
              <h3 className="text-xl text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const categories = [
    { title: "Hardware Systems", items: ["IP Dome", "Bullet Cameras", "PTZ Systems", "Dahua", "Hikvision", "Uniview"] },
    { title: "VMS Platforms", items: ["iVMS-4200", "SmartPSS", "AxxonNext", "DW Spectrum", "Milestone", "Aipone"] },
    { title: "Network & Tools", items: ["Port Forwarding", "VLAN Config", "DDNS Setup", "TeamViewer", "AnyDesk", "Static IP"] },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading subtitle="Technical Skillset" title="Our Surveillance Expertise" />
            <p className="text-slate-400 mb-8 max-w-lg">
              We work with industry-leading platforms and hardware to ensure your security system is robust, compatible, and always reachable.
            </p>
            <div className="space-y-8">
              {categories.map((cat, i) => (
                <div key={cat.title}>
                  <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full" /> {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map(item => (
                      <span key={item} className="px-3 py-1 px-4 py-1.5 bg-slate-800/50 border border-white/5 rounded-lg text-xs font-medium text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="glass-card aspect-square flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
                <div className="relative grid grid-cols-3 gap-4 rotate-12 scale-125 opacity-40">
                   {[...Array(9)].map((_, i) => (
                     <div key={i} className="w-32 h-32 glass border border-cyan-500/20 rounded-2xl" />
                   ))}
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                   <Shield className="w-20 h-20 text-cyan-400 mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                   <h3 className="text-3xl mb-2 text-white">Hardened Protocol</h3>
                   <p className="text-slate-400 text-sm">Military-grade encryption and secure networking protocols for every setup.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      title: "Retail Shop Monitoring",
      problem: "High theft rates in multi-location stores.",
      solution: "Centralized Remote Monitoring with AI triggers.",
      result: "45% reduction in theft within 3 months.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Industrial Logistics Hub",
      problem: "Inefficient loading bay security tracking.",
      solution: "PTZ Auto-Tracking with VMS Integration.",
      result: "100% incident tracking accuracy achieved.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Proven Success" title="Security Case Studies" />
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              whileHover={{ y: -5 }}
              className="glass-card overflow-hidden flex flex-col md:flex-row group"
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-950/40" />
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl text-white mb-6 group-hover:text-cyan-400 transition-colors">{c.title}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Problem</div>
                    <div className="text-sm text-slate-300">{c.problem}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Solution</div>
                    <div className="text-sm text-slate-300">{c.solution}</div>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                      <TrendingDown className="w-4 h-4" /> {c.result}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DemoDashboard = () => {
  const [activeCam, setActiveCam] = useState(0);
  const cams = [
    { title: "Main Lobby", status: "Online", time: "14:22:04" },
    { title: "Server Room", status: "Online", time: "14:22:04" },
    { title: "Rear Loading", status: "Alert", time: "14:21:45" },
    { title: "Parking Lot", status: "Online", time: "14:22:04" }
  ];

  return (
    <section id="demo" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Simulation" title="Remote Monitoring Dashboard" centered />
        
        <div className="glass-card p-4 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Cams */}
            <div className="md:w-64 space-y-3">
              {cams.map((cam, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveCam(i)}
                  className={`w-full text-left p-4 rounded-xl transition-all border flex flex-col gap-1 ${activeCam === i ? 'bg-cyan-500/10 border-cyan-500/40' : 'bg-slate-900 border-white/5 hover:bg-slate-800'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{cam.title}</span>
                    <span className={`w-2 h-2 rounded-full ${cam.status === 'Alert' ? 'bg-red-500 animate-ping' : 'bg-green-500'}`} />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                    <span>CAM-0{i+1}</span>
                    <span>{cam.time}</span>
                  </div>
                </button>
              ))}
              <div className="p-4 glass rounded-xl mt-4">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-2">System Status</div>
                <div className="flex items-center gap-2 text-xs font-medium text-green-400">
                  <Activity className="w-3 h-3" /> All Systems Nominal
                </div>
              </div>
            </div>
            
            {/* Main Feed */}
            <div className="flex-1 space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-white/10 group">
                <img 
                  src={`https://images.unsplash.com/photo-1558237255-037bd177e034?auto=format&fit=crop&q=80&w=1200&sig=${activeCam}`} 
                  className="w-full h-full object-cover" 
                  alt="Camera Feed"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4 flex items-center gap-4">
                  <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[10px] font-mono text-cyan-400 border border-white/5">
                    REC // CH-0{activeCam + 1}
                  </div>
                  <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[10px] font-mono text-white/80 border border-white/5">
                    1080P // 60FPS
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                   {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/60 hover:text-cyan-400 hover:scale-110 transition-all">
                        <Monitor className="w-4 h-4" />
                      </div>
                   ))}
                </div>
                <div className="absolute inset-0 pointer-events-none border-[20px] border-black/10 opacity-50" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                  {['Motion', 'People', 'Vehicle', 'Line Cross'].map(feature => (
                    <div key={feature} className="p-4 glass rounded-xl text-center">
                      <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">{feature}</div>
                      <div className="text-xs font-bold text-white">Active</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$299",
      period: "per setup",
      desc: "Perfect for single home or small office.",
      features: ["Remote Mobile Setup", "Multi-user Access", "7 Days Launch Support", "Basic Motion Configuring", "Port Forwarding Setup"],
      color: "bg-slate-900"
    },
    {
      name: "Standard",
      price: "$699",
      period: "per setup",
      desc: "Enterprise grade for retail and business.",
      features: ["Advanced VMS Integration", "AI Human Detection", "15 Days Priority Support", "Local Backup Config", "Remote Troubleshooting", "Mobile App Customization"],
      recommended: true,
      color: "bg-cyan-500/10 border-cyan-500/40"
    },
    {
      name: "Premium",
      price: "Custom",
      period: "quote",
      desc: "Full site surveillance infrastructure.",
      features: ["Unlimited Monitoring", "Cloud Storage Integration", "30 Days On-Call Support", "Quarterly System Audit", "Cybersecurity Hardening", "Direct Engineer Access"],
      color: "bg-slate-900"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Invest in Safety" title="Transparent Service Packages" centered />
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 flex flex-col relative ${plan.color}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-cyan-500 text-slate-950 font-bold text-[10px] uppercase tracking-widest rounded-full">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.desc}</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                <span className="text-slate-500 text-sm">/{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.recommended ? 'bg-cyan-500 text-slate-950 hover:neon-glow' : 'glass text-white hover:bg-white/10'}`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Robert Chen", role: "Mall Operations Director", text: "Sentinel transformed our security protocol. The remote dashboard is incredibly intuitive and reliable. We've seen a massive decrease in incident response times." },
    { name: "Sarah Williams", role: "Boutique Owner", text: "Setting up remote access was always a headache until I found these experts. Everything works perfectly on my phone, and the tech support is unmatched." },
    { name: "James Miller", role: "Warehouse Manager", text: "The AI motion detection setup saved us thousands in false alarm fees. Their knowledge of Hikvision and VMS platforms is truly professional-grade." }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Reviews" title="What Our Clients Say" centered />
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass-card p-10 relative overflow-hidden"
            >
              <MessageSquare className="absolute -top-4 -right-4 w-24 h-24 text-cyan-400/5 rotate-12" />
              <div className="flex items-center gap-1 text-cyan-400 mb-6">
                {[...Array(5)].map((_, j) => <div key={j} className="w-1.5 h-1.5 bg-current rounded-full" />)}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500" />
                <div>
                  <div className="text-white font-bold text-sm tracking-tight">{r.name}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section id="contact" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-cyan-500/5 -z-10" />
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card p-12 md:p-20 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.5)]">
           <Lock className="w-8 h-8" />
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Secure your property with <br /> smart surveillance today
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          Don't leave your assets to chance. Partner with global experts in remote monitoring and experience true security peace of mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-5 bg-cyan-500 text-slate-950 font-bold rounded-2xl hover:neon-glow hover:scale-105 transition-all text-lg tracking-tight">
            Contact Now
          </button>
          <button className="px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-lg tracking-tight">
            WhatsApp Messenger <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8">
           <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
             <CheckCircle2 className="w-4 h-4 text-cyan-400" /> SECURE ENCRYPTION
           </div>
           <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
             <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 24/7 SUPPORT
           </div>
           <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
             <CheckCircle2 className="w-4 h-4 text-cyan-400" /> CERTIFIED EXPERTS
           </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm">
      <div className="flex items-center gap-2">
        <Shield className="w-5 h-5 text-cyan-400" />
        <span className="text-white font-display font-bold">Sentinel<span className="text-cyan-400">Remote</span></span>
      </div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Fiverr Profile</a>
      </div>
      <div>© 2024 Sentinel Remote Monitoring. All rights reserved.</div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Expertise />
      <CaseStudies />
      <DemoDashboard />
      
      {/* Security & Reliability Highlight */}
      <section className="py-12 bg-cyan-500/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: "Encrypted Access", icon: <Lock /> },
             { label: "Data Privacy", icon: <Shield /> },
             { label: "Backup System", icon: <Database /> },
             { label: "99.9% Uptime", icon: <Clock /> }
           ].map(item => (
             <div key={item.label} className="flex items-center justify-center gap-3 text-white/60">
                <div className="text-cyan-400">{item.icon}</div>
                <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
             </div>
           ))}
        </div>
      </section>

      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

