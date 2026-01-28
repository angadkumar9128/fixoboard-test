
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  Zap,
  Flame,
  MoveUpRight,
  ChevronDown,
  Microscope,
  Thermometer,
  Activity,
  HardHat,
  Layers,
  Download,
  ExternalLink
} from 'lucide-react';

const MotionDiv = motion.div as any;

const CertificationsPage: React.FC = () => {
  const [openTest, setOpenTest] = useState<number | null>(0);

  const trustCards = [
    { icon: <Activity />, title: "Mechanical Strength", desc: "High-load performance tested under extreme pressure." },
    { icon: <Flame />, title: "Fire Safety", desc: "Self-extinguishing materials certified for safety." },
    { icon: <Zap />, title: "Electrical Safety", desc: "Excellent dielectric strength for safe installations." },
    { icon: <Thermometer />, title: "Thermal Stability", desc: "Maintains structural integrity in varying temperatures." },
    { icon: <Layers />, title: "Structural Integrity", desc: "Superior density and bonding for long-term use." }
  ];

  const testResults = [
    {
      title: "Impact Strength",
      test: "Charpy Notched Impact Strength Test",
      standard: "ASTM D6110-18",
      result: "16 J/m (Complete break)",
      explanation: "Demonstrates the board’s ability to withstand sudden impact without brittle failure, ensuring durability during installation and use."
    },
    {
      title: "Heat Resistance",
      test: "Deflection Temperature Under Load",
      standard: "ASTM D648-18 (Method B)",
      result: "56.5°C",
      explanation: "Confirms thermal stability under load, making the product suitable for kitchens, interiors, and warm environments."
    },
    {
      title: "Electrical Insulation",
      test: "Dielectric Breakdown Voltage & Strength",
      standard: "ASTM D149-09",
      result: "Voltage: 33.36 kV | Strength: 10.86 kV/mm",
      explanation: "Indicates strong electrical insulation properties, enhancing safety in residential and commercial installations."
    },
    {
      title: "Flexural Properties",
      test: "Flexural Strength & Modulus",
      standard: "ASTM D790-17",
      result: "Strength: 14.5 MPa | Modulus: 1100 MPa",
      explanation: "Shows excellent load-bearing capacity and stiffness, ensuring structural reliability under bending stress."
    },
    {
      title: "Fire Behavior",
      test: "Horizontal Burning Test",
      standard: "ASTM D635-14",
      result: "Rate: 0 mm/min | Classification: HB",
      explanation: "Confirms fire resistance and self-extinguishing behavior, significantly improving safety in interior applications."
    },
    {
      title: "Falling Weight Impact",
      test: "Striker Impacted By A Falling Weight",
      standard: "ASTM D5420-16",
      result: "Mean Failure Energy: 5.9 J",
      explanation: "Demonstrates high resistance against sudden heavy impact loads, proving material toughness."
    },
    {
      title: "Tensile Properties",
      test: "Tensile Modulus & Strength",
      standard: "ASTM D638-14",
      result: "Modulus: 1150 MPa | Strength: 10.5 MPa",
      explanation: "Confirms material flexibility and strength balance, preventing cracking and breakage during stress."
    },
    {
      title: "Screw Withdrawal Resistance",
      test: "Resistance to Screw Withdrawal",
      standard: "ASTM D1037-12",
      result: "Screw Withdrawal Strength: 1027 N",
      explanation: "Ensures excellent screw-holding capacity, making the product highly reliable and carpenter-friendly."
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* 1. HERO SECTION */}
      <section className="bg-slate-950 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center items-center gap-6 mb-12 grayscale opacity-30">
              <span className="text-white font-black text-4xl italic tracking-tighter">SGS</span>
              <div className="w-px h-8 bg-white/20" />
              <span className="text-white font-black text-4xl italic tracking-tighter">ASTM</span>
              <div className="w-px h-8 bg-white/20" />
              <span className="text-white font-black text-4xl italic tracking-tighter">ISO</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic">
              Tested. <span className="text-blue-500">Certified.</span> Trusted.
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Fixoboard PVC / WPC products are independently tested by globally recognized
              laboratories to ensure safety, durability, and international quality standards.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* 2. CERTIFICATION OVERVIEW */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Compliance Overview</span>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">International Compliance.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {trustCards.map((card, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:border-blue-500 transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {/* Fixed TypeScript error by casting React.ReactElement to any to allow 'size' property */}
                  {React.cloneElement(card.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="text-sm font-black text-slate-900 mb-2 uppercase tracking-tight">{card.title}</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase leading-relaxed tracking-wider">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED CERTIFICATE – SGS TEST REPORT */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1 sticky top-32">
              <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 -mr-12 -mt-12 rounded-full" />
                <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic leading-none">Primary SGS <br /> Test Report.</h3>
                <div className="space-y-6 mb-10">
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Testing Agency</span>
                    <span className="text-lg font-black text-slate-900 uppercase">SGS India Pvt. Ltd.</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Report No.</span>
                    <span className="text-lg font-black text-blue-600 uppercase tracking-tight">MAN:HL:1048003979</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Standard</span>
                    <span className="text-lg font-black text-slate-900 uppercase">ASTM Standards</span>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
                  <Download size={18} />
                  View Full Report (PDF)
                </button>
              </div>
            </div>

            {/* 4. DETAILED TEST RESULTS (ACCORDION) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="mb-10">
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Key Performance Metrics</h3>
                <p className="text-slate-500 font-medium mt-2">Independently verified laboratory results for FixoBoard PVC/WPC Ply.</p>
              </div>

              {testResults.map((item, idx) => (
                <div key={idx} className={`rounded-[2rem] border transition-all overflow-hidden ${openTest === idx ? 'bg-white border-blue-200 shadow-xl' : 'bg-white/50 border-slate-200'}`}>
                  <button
                    onClick={() => setOpenTest(openTest === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${openTest === idx ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-100 text-slate-400'}`}>
                        <Microscope size={24} />
                      </div>
                      <div>
                        <h4 className={`text-lg font-black uppercase tracking-tight ${openTest === idx ? 'text-blue-600' : 'text-slate-900'}`}>{item.title}</h4>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Standard: {item.standard}</span>
                      </div>
                    </div>
                    <div className={`transition-transform duration-300 ${openTest === idx ? 'rotate-180 text-blue-600' : 'text-slate-300'}`}>
                      <ChevronDown size={24} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {openTest === idx && (
                      <MotionDiv
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-8 pt-2">
                          <div className="grid md:grid-cols-2 gap-10">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                              <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-3">Test Result</span>
                              <div className="text-2xl font-black text-slate-900 tracking-tighter italic">{item.result}</div>
                            </div>
                            <div>
                              <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 italic">What It Means</span>
                              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                                {item.explanation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </MotionDiv>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MULTIPLE CERTIFICATES GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Additional Evidence</span>
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">Other Test Certificates.</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Tensile Strength Report", body: "SGS India", type: "Mechanical" },
              { title: "Fire Safety (HB) Report", body: "ASTM Labs", type: "Safety" },
              { title: "Lead-Free Validation", body: "Third Party QC", type: "Health" },
              { title: "Screw Holding capacity", body: "In-House QC", type: "Industrial" },
              { title: "Electrical Insulation", body: "SGS India", type: "Safety" },
              { title: "Heat Deflection (HDT)", body: "SGS Labs", type: "Thermal" }
            ].map((cert, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-[2rem] border border-slate-200 hover:border-blue-600 hover:shadow-2xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-slate-50 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    {cert.type}
                  </div>
                  <FileText className="text-slate-300 group-hover:text-blue-500 transition-colors" size={24} />
                </div>
                <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2 italic">{cert.title}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase mb-8">Verified by {cert.body}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-[10px] hover:gap-3 transition-all">
                    View <ExternalLink size={14} />
                  </button>
                  <button className="flex items-center gap-2 text-slate-400 font-black uppercase tracking-widest text-[10px] hover:text-slate-900 transition-colors">
                    PDF <Download size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT THIS MEANS FOR YOU */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-16">Why These Certifications <span className="text-blue-500">Matter.</span></h2>
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 text-left">
            {[
              { title: "Safer Interiors", desc: "Lead-free and fire-resistant certifications ensure a healthy and safe environment for occupants." },
              { title: "Longer Lifespan", desc: "Mechanical strength tests guarantee that the product won't warp, crack, or rot over decades." },
              { title: "Architectural Trust", desc: "Standardized data allows architects to specify Fixoboard with scientific confidence." },
              { title: "Global Compliance", desc: "Our ASTM and SGS testing ensures compatibility with international building codes and standards." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <CheckCircle2 className="text-blue-500 shrink-0" size={32} />
                <div>
                  <h4 className="text-lg font-black uppercase mb-2 tracking-tight italic">{item.title}</h4>
                  <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-600 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic mb-8 relative z-10">
              Ready for certified, <br /> future-ready materials?
            </h2>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:scale-105 transition-all">
                Download All Certificates
              </button>
              <button className="bg-blue-800 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs border border-blue-500 hover:bg-blue-900 transition-all">
                Contact Technical Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;
