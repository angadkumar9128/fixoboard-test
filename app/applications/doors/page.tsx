
import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../../data/products';
import ProductCard from '../../../components/product/ProductCard';
import { ShieldCheck, DoorOpen, Palette, ChevronRight } from 'lucide-react';

const MotionDiv = motion.div as any;

const DoorsApplicationPage: React.FC = () => {
  const doorProduct = products.find(p => p.slug === 'wpc-doors');

  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center bg-slate-900 text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Door" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="bg-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Residential & Commercial Doors</span>
            <h1 className="text-6xl font-black mb-6 uppercase tracking-tighter italic">Entrance <br /> <span className="text-blue-500">Excellence.</span></h1>
            <p className="text-xl text-slate-300 max-w-xl font-medium">Why settle for wooden doors that rot and warp? WPC doors offer lifetime durability with zero maintenance.</p>
          </MotionDiv>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-10 uppercase tracking-tighter italic leading-tight">Total Protection <br /> For Your Entries.</h2>
              <div className="space-y-6">
                {[
                  { title: "100% Termite Proof", desc: "Solid WPC material is naturally repellent to all wood-eating pests." },
                  { title: "Lifetime Moisture Guard", desc: "Ideal for bathroom doors where water exposure is constant." },
                  { title: "No Warping or Cracking", desc: "Unlike natural wood, WPC remains dimensionally stable in all seasons." },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-slate-50 rounded-2xl">
                    <ShieldCheck className="text-blue-600 shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-sm tracking-tight mb-1">{benefit.title}</h4>
                      <p className="text-slate-500 text-sm font-medium">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 rounded-3xl aspect-[3/4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="CNC Door" />
              </div>
              <div className="bg-slate-100 rounded-3xl aspect-[3/4] mt-12 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Decorative Finish" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">Design Possibilities</h2>
            <p className="text-slate-500 mt-2 font-medium">From plain minimalist to complex CNC carvings.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center">
              <DoorOpen className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-xl font-black mb-4 uppercase">Plain WPC</h3>
              <p className="text-slate-500 text-sm">Sleek, modern, and ready for lamination or paint.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center">
              <Palette className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-xl font-black mb-4 uppercase">CNC Designed</h3>
              <p className="text-slate-500 text-sm">Deep routing for classical or abstract patterns.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center">
              <ShieldCheck className="text-blue-600 mx-auto mb-6" size={48} />
              <h3 className="text-xl font-black mb-4 uppercase">Decorative Finishes</h3>
              <p className="text-slate-500 text-sm">Industrial foil bonding for wood-like texture.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoorsApplicationPage;
