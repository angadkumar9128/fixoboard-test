
import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../../data/products';
import ProductCard from '../../../components/product/ProductCard';
import { Briefcase, CheckCircle2, Zap, ShieldAlert } from 'lucide-react';

const MotionDiv = motion.div as any;

const OfficeApplicationPage: React.FC = () => {
  const officeProducts = products.filter(p => ['pvc-wpc-ply', 'prelaminate-ply'].includes(p.slug));

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative h-[50vh] flex items-center bg-slate-900 text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070" 
          alt="Office" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Professional Workspaces</span>
            <h1 className="text-6xl font-black mb-6 uppercase tracking-tighter italic">Office <br /> <span className="text-blue-500">Workstations.</span></h1>
            <p className="text-xl text-slate-300 max-w-xl font-medium">Modular partitions and workstations designed for acoustic performance and long-term durability.</p>
          </MotionDiv>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic">Modern Corporate Standard</h2>
              <p className="text-slate-600 mb-10 text-lg leading-relaxed font-medium">
                Fixoboard products are increasingly specified for corporate fit-outs due to their low maintenance 
                and high dimensional stability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Zap className="text-blue-600" />, title: "Quick Install", desc: "Easy routing and cutting for modular components." },
                  { icon: <ShieldAlert className="text-blue-600" />, title: "Noise Reduction", desc: "Dense composite material provides better acoustics than thin MDF." }
                ].map((item, idx) => (
                  <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <div className="mb-4">{item.icon}</div>
                    <h4 className="font-black uppercase tracking-tight text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-xs font-bold text-slate-500 uppercase leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900 uppercase italic">Key Advantages</h3>
              {[
                "Zero maintenance requirements.",
                "High resistance to daily wear and tear.",
                "Compatible with advanced cabling and routing.",
                "Lead-free for a healthy work environment."
              ].map((adv, idx) => (
                <div key={idx} className="flex gap-4 items-center p-5 bg-blue-50 rounded-2xl border border-blue-100">
                  <CheckCircle2 className="text-blue-600" />
                  <span className="font-black uppercase text-xs tracking-widest text-blue-900">{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tighter text-center">Suggested Materials</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {officeProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficeApplicationPage;
