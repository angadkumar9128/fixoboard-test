
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle2, Sparkles, Droplets } from 'lucide-react';

const MotionDiv = motion.div as any;

const Panels3DApplicationPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center bg-slate-900 text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=2070" 
          alt="3D Wall" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="bg-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Decorative Wall Elevation</span>
            <h1 className="text-6xl font-black mb-6 uppercase tracking-tighter italic leading-none">3D <br /> <span className="text-blue-500">Wall Panels.</span></h1>
            <p className="text-xl text-slate-300 max-w-xl font-medium">Textured, moisture-resistant surfaces that add depth and luxury to modern interior wall treatments.</p>
          </MotionDiv>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { icon: <Layers className="text-blue-600" />, title: "Rich Patterns", desc: "Available in wave, brick, and geometric textures that react beautifully to lighting." },
              { icon: <Droplets className="text-blue-600" />, title: "Moisture Resistant", desc: "Unlike gypsum or wood panels, FixoBoard will not rot or decay in humid wall environments." },
              { icon: <Sparkles className="text-blue-600" />, title: "Easy Maintenance", desc: "Washable surface that remains clean and hygienic for years." }
            ].map((card, idx) => (
              <div key={idx} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">{card.title}</h3>
                <p className="text-slate-500 font-medium">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter italic">Industrial Aesthetics</h2>
              <div className="space-y-6">
                {[
                  "Compatible with PU paint and metallic finishes.",
                  "Zero shrinkage ensures joint gaps remain invisible.",
                  "Lightweight panels for fast wall installation.",
                  "Non-toxic and Lead-Free for residential interiors."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <CheckCircle2 className="text-blue-500 shrink-0" />
                    <span className="font-bold text-slate-300 uppercase tracking-tight text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button className="mt-12 bg-blue-600 px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs">Download Pattern Catalog</button>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="w-full aspect-square bg-white/5 rounded-full border border-white/10 flex items-center justify-center p-10">
                 <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=500" className="rounded-2xl shadow-2xl" alt="Panel Sample" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Panels3DApplicationPage;
