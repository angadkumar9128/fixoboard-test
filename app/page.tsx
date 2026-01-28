
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Droplets, 
  Leaf, 
  Flame, 
  ArrowRight, 
  Award, 
  Zap, 
  Globe, 
  Factory, 
  History as HistoryIcon, 
  Microscope, 
  HardHat, 
  Compass, 
  Hammer, 
  FileDown, 
  HeartPulse, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const MotionDiv = motion.div as any;

const HomePage: React.FC = () => {
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaAnswer === '12') {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
    } else {
      alert("Incorrect verification answer. Please try again.");
    }
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950 text-white pt-10">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518005020453-1bb7446ef47c?auto=format&fit=crop&q=80&w=2070" 
            alt="Advanced Manufacturing" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <MotionDiv 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-red-600 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-xl shadow-red-600/20 italic">
                AN ADVANCED MARINE PLY
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tighter uppercase italic leading-none">
                Advanced PVC / WPC Ply <br />
                <span className="text-red-600">for a Sustainable Future.</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium">
                30+ years of mastery in the polymer industry. One of India's largest producers, 
                listed in the <span className="text-white border-b border-red-600">Limca Book of Indian Records</span> for innovation and pioneering achievements.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <Link 
                  to="/products"
                  className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-3 shadow-2xl shadow-red-600/20 hover:scale-105"
                >
                  Explore Catalog
                  <ArrowRight size={18} />
                </Link>
                <a 
                  href="#"
                  className="bg-white/5 border border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-3 backdrop-blur-md"
                >
                  <FileDown size={18} />
                  Online Catalogue
                </a>
              </div>
            </MotionDiv>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-red-600 rounded-full" />
          </div>
        </div>
      </section>

      {/* 2. BRAND LEGACY & GLOBAL STRENGTH */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { 
                icon: <Globe className="text-red-600" />, 
                title: 'Global Sourcing', 
                desc: 'Strategic partnerships with major petrochemical giants globally.' 
              },
              { 
                icon: <HistoryIcon className="text-red-600" />, 
                title: 'Polymer Expertise', 
                desc: 'Over three decades of core industrial indenting and sales mastery.' 
              },
              { 
                icon: <Factory className="text-red-600" />, 
                title: 'Dubai Operations', 
                desc: 'Global footprint with a dedicated branch office in Dubai.' 
              },
              { 
                icon: <Zap className="text-red-600" />, 
                title: 'Wide Network', 
                desc: 'Extensive and robust distribution channels spanning the nation.' 
              }
            ].map((card, idx) => (
              <MotionDiv 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all group hover:bg-white hover:shadow-2xl hover:border-red-600"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight italic">{card.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed uppercase tracking-tighter">{card.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MANUFACTURING EXCELLENCE & R&D */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block italic">Innovation Hub</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic leading-tight">
                Manufacturing Excellence <br /> <span className="text-red-600">& Global Innovation.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium mb-12">
                <p>
                  FIXOBOARD is produced at our state-of-the-art manufacturing facility in <strong className="text-slate-900 uppercase">Silvassa</strong>. 
                  Our operations integrate international quality standards with economical pricing to deliver a superior alternative to wood.
                </p>
                <p>
                  With a commitment to time-bound and uninterrupted delivery schedules, our dedicated R&D wing continuously innovates to meet the 
                  evolving needs of the furniture and construction industries.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <span className="block text-4xl font-black text-red-600 mb-1 italic tracking-tighter">30+</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Years Legacy</span>
                </div>
                <div>
                  <span className="block text-4xl font-black text-red-600 mb-1 italic tracking-tighter">100%</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Quality Checked</span>
                </div>
                <div>
                  <span className="block text-4xl font-black text-red-600 mb-1 italic tracking-tighter">24/7</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Support Hub</span>
                </div>
              </div>
            </MotionDiv>
            
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                  alt="R&D Lab" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 max-w-xs hidden md:block">
                <Microscope className="text-red-600 mb-4" size={40} />
                <h4 className="font-black text-slate-900 uppercase tracking-tight mb-2">Continuous R&D</h4>
                <p className="text-xs text-slate-500 font-bold leading-relaxed uppercase">Developing the next generation of composites for specialized industrial needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. A STEP TOWARDS GREEN REVOLUTION - Retaining functional green but using brand red for CTA */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-green-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block italic">Pro-Earth Alternative</span>
            <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter italic">A Step Towards Green Revolution.</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-slate-200">
                  <Leaf size={120} strokeWidth={1} />
                </div>
                <div className="relative z-10 space-y-8">
                  <p className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">
                    "Fixoboard is not just a brand, but an industrial initiative to save our ecosystems."
                  </p>
                  <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
                    <p>
                      Illegal logging contributes to 14% of total global deforestation. Traditional plywood and wood panels 
                      place a heavy toll on our forests.
                    </p>
                    <p>
                      Fixoboard PVC/WPC Ply serves as a sustainable, eco-friendly substitute that prevents tree harvesting 
                      while delivering superior performance.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-slate-200 grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-600" size={20} />
                      <span className="font-black uppercase tracking-widest text-[10px] text-slate-900">100% Environment Friendly</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-600" size={20} />
                      <span className="font-black uppercase tracking-widest text-[10px] text-slate-900">Zero Emission</span>
                    </div>
                  </div>
                  <button className="bg-red-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl shadow-red-200 hover:bg-red-700 transition-all">
                    GO GREEN WITH FIXOBOARD
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-1 gap-6">
                 {[
                   { label: 'Deforestation Impact', value: '14%', sub: 'Global ecological damage' },
                   { label: 'Material Lifecycle', value: '100%', sub: 'Fully recyclable composite' },
                   { label: 'Future Guarantee', value: 'Zero', sub: 'Toxic chemical emissions' }
                 ].map((stat, idx) => (
                   <div key={idx} className="flex items-center gap-8 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <div className="text-5xl font-black text-red-600 italic tracking-tighter">{stat.value}</div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">{stat.label}</h4>
                        <p className="text-xs font-bold text-slate-500 uppercase">{stat.sub}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY FIXOBOARD? (VALUE PROPOSITION) */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block italic">Value Proposition</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter italic">Why Fixoboard?</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-medium">A new generation eco-friendly ply that serves as a lifetime investment.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Droplets />, title: 'Weather & Moisture', desc: 'Impervious to humid climates and direct water exposure.' },
              { icon: <Flame />, title: 'Fire Resistant', desc: 'Self-extinguishing build for high-risk industrial safety.' },
              { icon: <ShieldCheck />, title: 'Termite Proof', desc: 'Natural biological resistance against all types of pests.' },
              { icon: <HeartPulse />, title: '100% Lead Free', desc: 'Safe for healthcare, food storage, and clinical environments.' },
              { icon: <Zap />, title: 'Mouldable', desc: 'Can be moulded and extruded into any shape or size required.' },
              { icon: <Leaf />, title: 'Recyclable', desc: 'Fully environment friendly and zero emission during lifespan.' },
              { icon: <Award />, title: 'Lifetime Asset', desc: 'Highly durable construction that maintains value for decades.' },
              { icon: <CheckCircle2 />, title: 'Hygienic', desc: 'Anti-bacterial surface easy to sanitize and maintain.' }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-red-600 hover:border-red-600 transition-all group">
                <div className="text-red-600 mb-6 group-hover:text-white transition-colors">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight mb-2 italic group-hover:text-white">{feature.title}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase leading-relaxed group-hover:text-red-100">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEAD-FREE & INTERNATIONAL QUALITY */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="w-64 h-64 bg-slate-950 rounded-full flex items-center justify-center p-12 text-white border-8 border-red-600">
                  <div className="text-center">
                    <span className="block text-5xl font-black italic mb-1 uppercase tracking-tighter leading-none">0%</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Lead Content</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                  <CheckCircle2 className="text-green-500" size={32} />
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic">Lead-Free & International Quality.</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                Fixoboard PVC/WPC Ply is 100% lead-free and SGS Certified. Our thorough in-house testing ensures that 
                every board meets international standards for safety, durability, and compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 border border-slate-200">SGS Laboratory Tested</div>
                <div className="px-6 py-3 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 border border-slate-200">ISO 9001 Compliance</div>
                <div className="px-6 py-3 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 border border-slate-200">Lead-Free Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRODUCT FEATURES ENTRY POINT */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block italic">Technical Data</span>
              <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter italic">Product Features.</h2>
            </div>
            <Link 
              to="/products/features"
              className="group flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl shadow-red-200 hover:scale-105 transition-all"
            >
              View All Features
              <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {products.slice(0, 3).map(p => (
               <ProductCard key={p.id} product={p} />
             ))}
          </div>
        </div>
      </section>

      {/* 8. ARCHITECT’S CORNER */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-3xl rounded-full" />
             <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
               <div>
                 <Compass className="text-red-600 mb-8" size={64} />
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic mb-8">Architect’s Corner.</h2>
                 <p className="text-xl text-slate-300 font-medium leading-relaxed mb-10">
                   WPC is the definitive next-generation solution for architects. It eliminates the structural and biological problems 
                   associated with plywood, enabling quality portfolios that last a lifetime.
                 </p>
                 <Link to="/applications/kitchen" className="inline-flex items-center gap-2 text-red-600 font-black uppercase tracking-widest text-xs hover:gap-4 transition-all">
                   Explore Professional Applications
                   <ArrowRight size={16} />
                 </Link>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/5 rounded-3xl p-8 border border-white/10 text-center">
                    <h4 className="text-2xl font-black mb-2 italic tracking-tighter">Zero Warp</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Structural Stability</p>
                 </div>
                 <div className="bg-white/5 rounded-3xl p-8 border border-white/10 text-center">
                    <h4 className="text-2xl font-black mb-2 italic tracking-tighter">Anti-Pest</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Biological Guard</p>
                 </div>
                 <div className="bg-white/5 rounded-3xl p-8 border border-white/10 text-center">
                    <h4 className="text-2xl font-black mb-2 italic tracking-tighter">Moisture Proof</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Marine Grade</p>
                 </div>
                 <div className="bg-white/5 rounded-3xl p-8 border border-white/10 text-center">
                    <h4 className="text-2xl font-black mb-2 italic tracking-tighter">Fire Safe</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Class 1 Certified</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 9. CARPENTER’S CORNER */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800" alt="Carpentry Work" />
               <div className="absolute inset-0 bg-red-600/10" />
             </div>
             <div>
               <Hammer className="text-red-600 mb-8" size={64} />
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic mb-8">Carpenter’s Corner.</h2>
               <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                 Revolutionizing the carpentry industry with materials designed for easy assembling, permanent bonding, 
                 and faster installation. Compatible with all traditional tools and hardware.
               </p>
               <div className="grid grid-cols-2 gap-8 mb-10">
                 <div className="flex gap-4 items-center">
                    <CheckCircle2 className="text-red-600" />
                    <span className="font-black uppercase tracking-widest text-[10px] text-slate-900">High Screw Holding</span>
                 </div>
                 <div className="flex gap-4 items-center">
                    <CheckCircle2 className="text-red-600" />
                    <span className="font-black uppercase tracking-widest text-[10px] text-slate-900">Standard Tools Compatible</span>
                 </div>
                 <div className="flex gap-4 items-center">
                    <CheckCircle2 className="text-red-600" />
                    <span className="font-black uppercase tracking-widest text-[10px] text-slate-900">No Edge Banding Needs</span>
                 </div>
                 <div className="flex gap-4 items-center">
                    <CheckCircle2 className="text-red-600" />
                    <span className="font-black uppercase tracking-widest text-[10px] text-slate-900">Faster Project Turnaround</span>
                 </div>
               </div>
               <button className="bg-slate-950 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl shadow-slate-200 hover:bg-red-600 transition-colors">Read Tech Guides</button>
             </div>
           </div>
        </div>
      </section>

      {/* 10. CONTACT / INQUIRY SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-slate-50 rounded-[4rem] p-12 md:p-20 border border-slate-100 shadow-sm">
            <div className="text-center mb-12">
               <MessageSquare className="text-red-600 mx-auto mb-6" size={48} />
               <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic mb-4">Drop Us a Line.</h2>
               <p className="text-slate-500 font-medium">Quick interaction without navigating away. Our team responds within 24 hours.</p>
            </div>

            {formStatus === 'success' ? (
              <MotionDiv initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white p-12 rounded-3xl border border-green-200 text-center shadow-xl">
                 <CheckCircle2 className="text-green-500 mx-auto mb-4" size={64} />
                 <h3 className="text-2xl font-black text-slate-900 uppercase mb-2">Message Received!</h3>
                 <p className="text-slate-500 font-medium">Thank you for reaching out. We will get back to you shortly.</p>
              </MotionDiv>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input required type="text" placeholder="Full Name" className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 transition-all outline-none font-medium" />
                  <input required type="email" placeholder="Email Address" className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 transition-all outline-none font-medium" />
                </div>
                <textarea required rows={5} placeholder="Your Message" className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 transition-all outline-none font-medium"></textarea>
                
                <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-black uppercase tracking-widest text-slate-400">Verification: 6 + 6 = </span>
                    <input 
                      required 
                      type="number" 
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      placeholder="?" 
                      className="w-20 bg-slate-50 border-none rounded-xl p-3 text-center font-black text-red-600 focus:ring-2 focus:ring-red-600 transition-all" 
                    />
                  </div>
                  <button type="submit" className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-black px-12 py-5 rounded-2xl uppercase tracking-[0.2em] text-xs shadow-xl shadow-red-200 transition-all">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
