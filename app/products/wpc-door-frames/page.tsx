
import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../../data/products';
import { Construction, ShieldCheck, Droplets, CheckCircle2 } from 'lucide-react';

// Fix for framer-motion type mismatch
const MotionDiv = motion.div as any;

const WPCDoorFramePage: React.FC = () => {
  const product = products.find(p => p.slug === 'wpc-door-frames')!;

  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <MotionDiv initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-6 block">Structural Solutions</span>
              <h1 className="text-5xl font-black mb-8 tracking-tighter uppercase italic leading-none">
                WPC <br /> <span className="text-blue-500">Door Frames.</span>
              </h1>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
                The high-strength replacement for traditional wooden door frames. 
                Termite-proof, moisture-proof, and engineered for high structural stability.
              </p>
              <div className="flex gap-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-blue-500" />
                  <span className="font-black uppercase tracking-widest text-xs">High Stability</span>
                </div>
                <div className="flex items-center gap-3">
                  <Construction className="text-blue-500" />
                  <span className="font-black uppercase tracking-widest text-xs">Easy Installation</span>
                </div>
              </div>
            </MotionDiv>
            <div className="relative">
              <img src={product.images[0]} className="rounded-[3rem] shadow-2xl border-4 border-white/10" alt="Door Frame" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200">
                <h3 className="text-2xl font-black text-slate-900 mb-10 uppercase tracking-tighter italic">Technical Data Sheet</h3>
                <div className="space-y-6">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} className="flex justify-between border-b border-slate-200 pb-4">
                      <span className="text-slate-400 font-black uppercase tracking-widest text-[10px]">{key}</span>
                      <span className="font-bold text-slate-900">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic leading-tight">Better Than <br /> Natural Wood.</h2>
              <div className="space-y-8">
                {[
                  { title: "No Cracking or Splitting", desc: "Unlike natural wood, WPC profiles do not expand or contract with heat." },
                  { title: "Paintable & Laminatable", desc: "Smooth surface allows for direct painting or foil lamination to match interiors." },
                  { title: "Zero Maintenance", desc: "Does not require polishing or pest treatments during its entire lifespan." },
                  { title: "High Screw Retention", desc: "Solid composite core ensures hinges remain firm and doors do not sag." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-black text-slate-900 mb-1 uppercase tracking-tight text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WPCDoorFramePage;
