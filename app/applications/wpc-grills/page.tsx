
import React from 'react';
import { motion } from 'framer-motion';
import { Grid, CheckCircle2, Scissors, Paintbrush } from 'lucide-react';

const MotionDiv = motion.div as any;

const WPCGrillsApplicationPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-900 text-white py-32 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <Grid className="text-blue-500 mx-auto mb-8" size={64} />
            <h1 className="text-6xl font-black mb-6 uppercase tracking-tighter italic">WPC <span className="text-blue-500">Grills.</span></h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">Intricate CNC-cut decorative grills for interior partitions and exterior elevation treatments.</p>
          </MotionDiv>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic">Aesthetic Flexibility</h2>
              <div className="space-y-8">
                {[
                  { icon: <Scissors className="text-blue-600" />, title: "Precision CNC Cutting", desc: "Easily carve complex geometric or floral patterns with clean edges." },
                  { icon: <CheckCircle2 className="text-blue-600" />, title: "Lightweight Structure", desc: "Reduces load on mounting surfaces compared to metal or stone grills." },
                  { icon: <Paintbrush className="text-blue-600" />, title: "Direct Finishing", desc: "Smooth material ready for high-gloss PU paint or natural wood textures." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-tight mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Decorative Grill" />
              <div className="absolute inset-0 bg-blue-600/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Interior & Exterior Scope</h2>
            <p className="text-slate-500 mt-2 font-medium">Durable in all environmental conditions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-200">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Interior Partitions</h3>
              <p className="text-slate-600 font-medium leading-relaxed">Create airy, elegant dividers in living rooms or office lobbies that allow light while maintaining privacy.</p>
            </div>
            <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-200">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Exterior Elevation</h3>
              <p className="text-slate-600 font-medium leading-relaxed">UV-resistant WPC grills designed for duct coverings, balcony privacy screens, and modern architectural façades.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WPCGrillsApplicationPage;
