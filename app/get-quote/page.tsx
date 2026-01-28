
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Send, 
  ChevronRight, 
  CheckCircle2, 
  ClipboardList, 
  Truck, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Clock,
  ArrowRight,
  Award,
  Globe,
  Factory,
  History as HistoryIcon
} from 'lucide-react';

const MotionDiv = motion.div as any;

const GetQuotePage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen selection:bg-red-100 selection:text-red-900">
      {/* 1. GET QUOTE HERO SECTION */}
      <section className="bg-slate-50 border-b border-slate-200 py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 -mr-32 -mt-32 rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <nav className="flex justify-center items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
              <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
              <ChevronRight size={10} />
              <span className="text-slate-900">Get Quote</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic leading-none">
              Get Pricing Tailored to <br /> <span className="text-red-600 text-4xl md:text-5xl">Your Requirement.</span>
            </h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Share your product needs and application details. Our team will get back to you 
              with the most suitable industrial solution and project-specific pricing.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* 2. WHY REQUEST A QUOTE */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock size={20} />, text: "Direct Response" },
              { icon: <ShieldCheck size={20} />, text: "SGS Tested Products" },
              { icon: <Award size={20} />, text: "Project Pricing Support" },
              { icon: <CheckCircle2 size={20} />, text: "Application Advice" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center gap-3 text-slate-400">
                <div className="text-red-600">{item.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUOTE REQUEST FORM */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-50 rounded-[4rem] p-8 md:p-16 border border-slate-100 shadow-sm">
            <div className="mb-12">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic mb-2">Tell Us Your Requirement.</h2>
              <p className="text-slate-500 font-medium">Please fill in the form below for a customized industrial quote.</p>
            </div>

            {formStatus === 'success' ? (
              <MotionDiv 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-[3rem] text-center border border-green-200 shadow-2xl"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-xl shadow-green-100">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 uppercase mb-4 tracking-tighter italic">Quote Requested!</h3>
                <p className="text-slate-500 font-medium max-w-md mx-auto mb-8">
                  Thank you for your interest in FixoBoard. Our technical sales team will review your requirement 
                  and contact you within 24 hours.
                </p>
                <Link to="/products" className="text-red-600 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:gap-4 transition-all">
                  Continue Browsing Products
                  <ArrowRight size={16} />
                </Link>
              </MotionDiv>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name *</label>
                    <input required type="text" className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 transition-all outline-none font-medium" placeholder="First Last" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Company Name</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 transition-all outline-none font-medium" placeholder="Enter your business name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address *</label>
                    <input required type="email" className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 transition-all outline-none font-medium" placeholder="name@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number *</label>
                    <input required type="tel" className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 transition-all outline-none font-medium" placeholder="+91 XXXX XXXX" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Product Category *</label>
                    <select required className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 transition-all outline-none font-medium appearance-none">
                      <option value="">Select Category</option>
                      <option value="pvc-wpc-ply">PVC / WPC Ply</option>
                      <option value="wpc-door">WPC Door</option>
                      <option value="prelaminate-ply">Prelaminate Ply</option>
                      <option value="wpc-door-frames">WPC Door Frames</option>
                      <option value="pvc-marble-sheets">PVC Marble Sheets</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Application *</label>
                    <select required className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 transition-all outline-none font-medium appearance-none">
                      <option value="">Select Application</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="wardrobe">Wardrobe & Cabinet</option>
                      <option value="office">Office</option>
                      <option value="grills">WPC Grills</option>
                      <option value="3d-panels">3D Wall Panels</option>
                      <option value="shuttering">Shuttering & Centering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Quantity Requirement</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 transition-all outline-none font-medium" placeholder="e.g. 100 Sheets / 20 Doors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Thickness / Size (Optional)</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 transition-all outline-none font-medium" placeholder="e.g. 18mm, 8x4ft" />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Project Message / Requirement Description</label>
                    <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 transition-all outline-none font-medium" placeholder="Tell us more about your project timeline and location..."></textarea>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    disabled={formStatus === 'submitting'}
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-red-200 uppercase tracking-[0.2em] text-xs"
                  >
                    {formStatus === 'submitting' ? 'Processing...' : (
                      <>
                        Request Quote
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. WHAT HAPPENS NEXT */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block italic">Our Process</span>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">What Happens After You Submit?</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { icon: <ClipboardList size={32} />, step: "01", title: "Internal Review", desc: "Our team reviews your specific material requirements." },
              { icon: <Factory size={32} />, step: "02", title: "Suitability Check", desc: "We ensure the chosen specs match your application." },
              { icon: <ShieldCheck size={32} />, step: "03", title: "Pricing Draft", desc: "We calculate bulk/project pricing and availability." },
              { icon: <Phone size={32} />, step: "04", title: "Direct Contact", desc: "A technical sales expert reaches out with the final offer." }
            ].map((item, idx) => (
              <div key={idx} className="relative group text-center">
                <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-red-600 mx-auto mb-8 shadow-sm group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div className="text-red-600 font-black text-xs mb-2 tracking-widest">{item.step}</div>
                <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-2 italic">{item.title}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEED IMMEDIATE ASSISTANCE? */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic mb-8">Need Immediate Assistance?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <a href="tel:+919930349472" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Call Technical Sales</span>
                <span className="font-black text-slate-900 tracking-tight text-lg">+91 99303 49472</span>
              </div>
            </a>
            <a href="mailto:info@fixoboard.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Direct Email</span>
                <span className="font-black text-slate-900 tracking-tight text-lg underline decoration-red-200">info@fixoboard.com</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 6. TRUST SIGNAL STRIP */}
      <section className="py-12 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-red-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">SGS Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-red-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">100% Lead-Free</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-red-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Pan-India Distribution</span>
            </div>
            <div className="flex items-center gap-2">
              <HistoryIcon size={16} className="text-red-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">30+ Years Legacy</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuotePage;
