
import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../../data/products';
import { CheckCircle2, Layout, Zap, Package } from 'lucide-react';

// Fix for framer-motion type mismatch
const MotionDiv = motion.div as any;

const PrelaminatePlyPage: React.FC = () => {
  const product = products.find(p => p.slug === 'prelaminate-ply')!;

  return (
    <div className="bg-white">
      <section className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="bg-white/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Factory Finished Boards</span>
              <h1 className="text-5xl font-black mb-8 tracking-tighter uppercase italic leading-none">
                Prelaminate <br /> <span className="text-blue-200">WPC Ply.</span>
              </h1>
              <p className="text-xl text-blue-50 leading-relaxed font-medium mb-10">
                Ready-to-use boards factory-laminated in multiple shades and textures. 
                Eliminates the need for external lamination, saving time and labor cost.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Zap className="text-blue-200" />
                  <span className="font-black uppercase tracking-widest text-xs">Ready-to-Use</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="text-blue-200" />
                  <span className="font-black uppercase tracking-widest text-xs">Scratch Resistant</span>
                </div>
              </div>
            </MotionDiv>
            <div className="relative">
              <img src={product.images[0]} className="rounded-[3rem] shadow-2xl border-4 border-white/10" alt="Prelaminate" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter italic">Why Choose Prelaminate?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Cost Efficiency", desc: "Zero labor cost for lamination and zero raw material wastage." },
                  { title: "Surface Durability", desc: "High-pressure factory bonding ensures no edge delamination over time." },
                  { title: "Design Consistency", desc: "Uniform shades and patterns across multiple sheets for large projects." },
                  { title: "Scratch Resistance", desc: "Industrial-grade top coat protects against daily wear and tear." }
                ].map((item, idx) => (
                  <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-200 group hover:border-blue-600 transition-all">
                    <h4 className="font-black text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 text-white rounded-[3rem] p-10 flex flex-col">
              <h3 className="text-2xl font-black mb-10 uppercase tracking-tighter italic">Technical Data</h3>
              <div className="space-y-6 flex-grow">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="border-b border-slate-800 pb-4">
                    <span className="text-slate-400 font-black uppercase tracking-widest text-[10px] block mb-1">{key}</span>
                    <span className="font-bold">{val}</span>
                  </div>
                ))}
              </div>
              <button className="mt-10 w-full bg-blue-600 py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-500/20">Request Shades</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrelaminatePlyPage;
