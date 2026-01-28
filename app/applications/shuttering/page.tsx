
import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../../data/products';
import ProductCard from '../../../components/product/ProductCard';
import { Hammer, RefreshCw, Droplets, Construction, ShieldAlert } from 'lucide-react';

const MotionDiv = motion.div as any;

const ShutteringApplicationPage: React.FC = () => {
  const product = products.find(p => p.slug === 'pvc-wpc-ply'); // Often used for shuttering too, or dedicated panels

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center bg-slate-900 text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?auto=format&fit=crop&q=80&w=2070" 
          alt="Construction Site" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="bg-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Industrial Construction Formwork</span>
            <h1 className="text-6xl font-black mb-6 uppercase tracking-tighter italic leading-none">Shuttering & <br /> <span className="text-blue-500">Centering.</span></h1>
            <p className="text-xl text-slate-300 max-w-2xl font-medium leading-relaxed">Revolutionizing concrete construction with high-reusability WPC panels that eliminate water absorption and surface finishing costs.</p>
          </MotionDiv>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <RefreshCw size={32} className="text-blue-600" />, title: 'High Reusability', desc: 'Superior repetitions (up to 60) in concrete formwork compared to traditional ply.' },
              { icon: <Droplets size={32} className="text-blue-600" />, title: 'Zero Water Soak', desc: 'Maintains weight and dimensions as it does not absorb water from concrete mix.' },
              { icon: <ShieldAlert size={32} className="text-blue-600" />, title: 'Mirror Finish', desc: 'Leaves a smooth, paint-ready concrete surface that requires zero extra plastering.' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 group hover:shadow-2xl transition-all">
                <div className="mb-6 group-hover:rotate-12 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">{feature.title}</h3>
                <p className="text-slate-500 font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-slate-50 rounded-[3rem] border border-slate-200">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div>
                 <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic">Technical Superiority</h2>
                 <p className="text-slate-600 mb-8 font-medium">Standard construction plywood fails due to delamination. FixoBoard WPC panels remain structurally sound after multiple cycles.</p>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="font-bold uppercase tracking-widest text-xs text-slate-500">Alkali & Corrosion Resistant</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="font-bold uppercase tracking-widest text-xs text-slate-500">Easy Nail & Screw Removal</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="font-bold uppercase tracking-widest text-xs text-slate-500">Zero Maintenance Requirement</span>
                    </div>
                 </div>
               </div>
               {product && (
                 <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100">
                   <ProductCard product={product} />
                 </div>
               )}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShutteringApplicationPage;
