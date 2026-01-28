
import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../../data/products';
import ProductCard from '../../../components/product/ProductCard';
import { Layout, CheckCircle2, Bed, Bath, Hotel } from 'lucide-react';

const MotionDiv = motion.div as any;

const WardrobeApplicationPage: React.FC = () => {
  const recommended = products.filter(p => ['pvc-wpc-ply', 'prelaminate-ply'].includes(p.slug));

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center bg-slate-900 text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=2070" 
          alt="Wardrobe" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <span className="bg-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Living & Commercial Storage</span>
            <h1 className="text-6xl font-black mb-6 uppercase tracking-tighter italic">Wardrobes & <br /> <span className="text-blue-500">Cabinets.</span></h1>
            <p className="text-xl text-slate-300 max-w-2xl font-medium">Stable, swell-proof, and aesthetic storage solutions for residential and high-traffic commercial projects.</p>
          </MotionDiv>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Bed className="text-blue-600" />, title: 'Bedrooms', desc: 'Sleek, no-maintenance wardrobes that maintain structural integrity for life.' },
              { icon: <Bath className="text-blue-600" />, title: 'Bathrooms', desc: 'Moisture-proof cabinets that will not swell or delaminate under damp conditions.' },
              { icon: <Hotel className="text-blue-600" />, title: 'Hotels', desc: 'High-durability storage units designed for heavy use and long-term ROI.' }
            ].map((useCase, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mb-6">{useCase.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">{useCase.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter italic">Why FixoBoard?</h2>
              <div className="space-y-6">
                {[
                  "No Swelling: Impervious to ambient humidity and direct moisture.",
                  "Lead Free: Non-toxic storage for personal items and clothing.",
                  "High Screw Holding: Hinges and hardware remain secure after years of use.",
                  "Clean Finishes: Smooth factory-bonded prelaminated surfaces."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <CheckCircle2 className="text-blue-500 shrink-0" />
                    <span className="font-bold uppercase tracking-tight text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {recommended.map(p => (
                <div key={p.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WardrobeApplicationPage;
