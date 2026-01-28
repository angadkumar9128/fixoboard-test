
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Hospital, School, Building2, CheckCircle2 } from 'lucide-react';

const MotionDiv = motion.div as any;

const OtherApplicationsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Industrial Versatility</span>
            <h1 className="text-6xl font-black mb-8 uppercase tracking-tighter italic">Beyond <br /> <span className="text-blue-500">The Traditional.</span></h1>
            <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">From retail to critical healthcare environments, Fixoboard provides the necessary certification and durability for specialized infrastructure.</p>
          </MotionDiv>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShoppingBag />, title: "Retail Interiors", desc: "Durable display units and partitions for high-traffic stores." },
              { icon: <Hospital />, title: "Hospitals", desc: "Anti-bacterial and lead-free surfaces essential for clinical zones." },
              { icon: <School />, title: "Schools", desc: "Impact-resistant furniture that withstands intense daily usage." },
              { icon: <Building2 />, title: "Commercial", desc: "Long-term cladding and utility solutions for public buildings." }
            ].map((sector, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-500 transition-all">
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 text-blue-600">{sector.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{sector.title}</h3>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-white">
            <h2 className="text-3xl font-black mb-10 uppercase tracking-tighter italic">Certified for Specialized Use</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-slate-400 font-medium leading-relaxed mb-10 text-lg">
                  Fixoboard is often selected for projects requiring strict environmental and safety compliance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-500" />
                    <span className="font-bold uppercase tracking-widest text-xs">SGS Laboratory Tested</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-500" />
                    <span className="font-bold uppercase tracking-widest text-xs">Hospital-Grade Hygiene</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-500" />
                    <span className="font-bold uppercase tracking-widest text-xs">Public Safety Compliance</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-[2.5rem] p-10 border border-white/10">
                <h4 className="font-black text-blue-500 uppercase tracking-widest text-xs mb-6">Expert Consultation</h4>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                  Discuss your specific institutional requirements with our technical team to identify the right density and shore hardness for your project.
                </p>
                <button className="w-full bg-blue-600 py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-500/20">Talk to a Tech Expert</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherApplicationsPage;
