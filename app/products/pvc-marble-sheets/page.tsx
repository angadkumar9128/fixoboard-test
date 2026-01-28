
import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../../data/products';
import { Palette, Droplets, HeartPulse, CheckCircle2 } from 'lucide-react';

// Fix for framer-motion type mismatch
const MotionDiv = motion.div as any;

const PVCMarbleSheetPage: React.FC = () => {
  const product = products.find(p => p.slug === 'pvc-marble-sheets')!;

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-6 block">Interior Decorative</span>
              <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic leading-none">
                PVC <br /> <span className="text-blue-500">Marble Sheets.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">
                Premium high-gloss wall panels with natural marble aesthetics. 
                Lightweight, moisture-proof, and designed for modern, hygienic interiors.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <Palette className="text-blue-600" />
                  <span className="font-black uppercase tracking-widest text-[10px] text-slate-900">Marble Aesthetics</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <HeartPulse className="text-blue-600" />
                  <span className="font-black uppercase tracking-widest text-[10px] text-slate-900">Hygienic Finish</span>
                </div>
              </div>
            </MotionDiv>
            <div className="relative">
              <img src={product.images[0]} className="rounded-[3rem] shadow-2xl border-4 border-white" alt="Marble Sheet" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter italic">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Lightweight Material", desc: "Easy to handle and install even on vertical walls without heavy structural reinforcement." },
                  { title: "Hygienic & Anti-Bacterial", desc: "Non-porous surface prevents bacterial growth. Ideal for hospitals and wet areas." },
                  { title: "Quick Installation", desc: "Directly adhesive-based application on smooth surfaces. No curing time required." },
                  { title: "Waterproof Performance", desc: "Perfect for high-moisture zones like bathrooms and kitchens where natural marble may stain." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <CheckCircle2 className="text-blue-600 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 mb-1 uppercase tracking-tight text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 text-white rounded-[3rem] p-10">
              <h3 className="text-2xl font-black mb-10 uppercase tracking-tighter italic">Technical Data</h3>
              <div className="space-y-6">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="border-b border-slate-800 pb-4">
                    <span className="text-slate-400 font-black uppercase tracking-widest text-[10px] block mb-1">{key}</span>
                    <span className="font-bold">{val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-600/10 p-6 rounded-2xl border border-blue-600/20">
                <h4 className="font-black uppercase tracking-widest text-[10px] mb-2 text-blue-500">Applications</h4>
                <div className="text-xs font-bold text-slate-300">Lobbies, Bathrooms, Retail Walls, Elevators, Showrooms.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PVCMarbleSheetPage;
