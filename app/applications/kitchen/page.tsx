
import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../../data/products';
import ProductCard from '../../../components/product/ProductCard';
import { CheckCircle2, Droplets, Flame, ChefHat, ThermometerSun, ShieldCheck } from 'lucide-react';

const MotionDiv = motion.div as any;

const KitchenApplicationPage: React.FC = () => {
  const recommendedSlugs = ['pvc-wpc-ply', 'prelaminate-ply'];
  const recommendedProducts = products.filter(p => recommendedSlugs.includes(p.slug));

  const swatches = [
    { name: 'Pure White', color: '#FFFFFF' },
    { name: 'Sleek Grey', color: '#94A3B8' },
    { name: 'Modern Oak', color: '#B5A08A' },
    { name: 'Ebony Matt', color: '#1E293B' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Kitchen" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <ChefHat size={16} />
              Modular Kitchen & Storage
            </span>
            <h1 className="text-6xl font-black mb-6 leading-tight uppercase italic tracking-tighter">Kitchen <br /> <span className="text-blue-500">Excellence.</span></h1>
            <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
              Industrial grade boards designed to withstand moisture, heat, and high-frequency usage 
              typical in modern modular kitchen systems.
            </p>
          </MotionDiv>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { icon: <Droplets size={32} className="text-blue-600" />, title: 'Moisture Resistance', desc: 'Impervious to steam and water exposure near sinks and appliances.' },
              { icon: <ShieldCheck size={32} className="text-blue-600" />, title: 'Hygienic Finish', desc: 'Anti-bacterial surface that prevents fungal growth in humid cabinets.' },
              { icon: <ThermometerSun size={32} className="text-blue-600" />, title: 'Heat Tolerance', desc: 'Stable under ambient kitchen temperatures near ovens and hobs.' }
            ].map((box, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{box.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">{box.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-10 uppercase tracking-tighter italic">Recommended Products</h2>
              <div className="space-y-8">
                {recommendedProducts.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Visual Shade Options</h3>
              <p className="text-slate-500 mb-10 font-medium">For Prelaminate Ply and factory finishes, choose from our high-gloss and matt palettes.</p>
              <div className="grid grid-cols-2 gap-6">
                {swatches.map((s, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="w-full h-24 rounded-2xl shadow-inner border border-slate-100" style={{ backgroundColor: s.color }} />
                    <span className="block text-xs font-black uppercase tracking-widest text-slate-400">{s.name}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 bg-slate-900 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all">Request Swatch Catalog</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitchenApplicationPage;
