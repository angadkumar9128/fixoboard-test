
import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../../data/products';
import { DoorOpen, ShieldCheck, Droplets, CheckCircle2, ChevronRight } from 'lucide-react';

// Fix for framer-motion type mismatch
const MotionDiv = motion.div as any;

const WPCDoorPage: React.FC = () => {
  const product = products.find(p => p.slug === 'wpc-doors')!;

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <MotionDiv initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-6 block">Industrial Products</span>
              <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic leading-none">
                WPC <br /> <span className="text-blue-500">Solid Doors.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">
                Plain WPC and CNC-designed doors that are moisture-resistant, warp-free, and termite proof. 
                Maintenance-free aesthetic solution for modern architecture.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-xl shadow-blue-200">Get Quote</button>
                <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-slate-50">Catalogue</button>
              </div>
            </MotionDiv>
            <div className="relative">
              <img src={product.images[0]} className="rounded-[3rem] shadow-2xl border-4 border-white" alt="WPC Door" />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                <div className="flex items-center gap-3 text-blue-600 font-black italic">
                  <ShieldCheck />
                  WARP-FREE FOR LIFE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter italic">Technical Benefits</h2>
              <div className="space-y-6">
                {[
                  { title: "Moisture & Damp Proof", desc: "Ideal for bathrooms and balconies where traditional wood doors swell or rot." },
                  { title: "Warp-Free Construction", desc: "Solid extruded composite material ensures dimensions remain stable for decades." },
                  { title: "Termite Proof", desc: "Naturally resistant to all biological pests without chemical coating." },
                  { title: "Design Flexibility", desc: "Easily CNC-machined for decorative patterns or surface treatments." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-lg">
                    <CheckCircle2 className="text-blue-600 shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 mb-1 uppercase text-sm tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl">
              <h2 className="text-3xl font-black mb-10 uppercase tracking-tighter italic">Specifications</h2>
              <div className="space-y-6">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-slate-800 pb-4">
                    <span className="text-slate-400 font-black uppercase tracking-widest text-xs">{key}</span>
                    <span className="font-bold text-lg">{val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <h4 className="text-blue-500 font-black uppercase tracking-widest text-xs mb-4">Core Use Cases</h4>
                <div className="grid grid-cols-2 gap-4">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300 font-bold text-sm">
                      <ChevronRight size={14} className="text-blue-500" />
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WPCDoorPage;
