
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, Flame, HeartPulse, Sun, Hammer, Microscope, Leaf, Zap } from 'lucide-react';
import ProductComparisonTable from '../../../components/product/ProductComparisonTable';

// Fix for framer-motion type mismatch
const MotionDiv = motion.div as any;

const ProductFeaturesPage: React.FC = () => {
  const featureGroups = [
    {
      title: "Core Resilience",
      features: [
        { icon: <ShieldCheck />, title: "Termite Proof", desc: "Naturally resistant to biological decay and all types of pests without toxic chemical treatments." },
        { icon: <Droplets />, title: "Water Proof", desc: "Guarantees zero symptoms of delamination, swelling, or water damage even if submerged." },
        { icon: <Flame />, title: "Fire Resistant", desc: "Self-extinguishing properties that ensure structural safety in high-risk zones like kitchens." }
      ]
    },
    {
      title: "Health & Safety",
      features: [
        { icon: <HeartPulse />, title: "100% Lead Free", desc: "Zero lead content prevents damage to kidneys, liver, and nervous system. Essential for healthcare." },
        { icon: <Leaf />, title: "Non-Toxic / Zero Emission", desc: "VOC-free boards that maintain indoor air quality. 100% recyclable and eco-friendly." },
        { icon: <Microscope />, title: "Anti-Bacterial", desc: "Anti-fungal and hygienic surface that is easy to sanitize, perfect for kitchens and hospitals." }
      ]
    },
    {
      title: "Industrial Performance",
      features: [
        { icon: <Sun />, title: "UV & Chemical Resistant", desc: "Resistant to mild acids, alkalis, and sunlight. Ideal for both interior and exterior use." },
        { icon: <Zap />, title: "No Shrinkage or Swelling", desc: "High dimensional stability ensures boards do not warp or expand under varying weather conditions." },
        { icon: <Hammer />, title: "Carpenter Friendly", desc: "Engineered for superior screw-holding. Compatible with standard woodworking tools." }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-6 block">Technical Data Hub</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-tight">
              Why Choose <br /> <span className="text-blue-500">Fixoboard?</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
              Industrial performance metrics that explain why Fixoboard is the definitive substitute 
              for traditional plywood and MDF.
            </p>
          </MotionDiv>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {featureGroups.map((group, gIdx) => (
              <div key={gIdx}>
                <h2 className="text-2xl font-black text-slate-900 mb-12 uppercase tracking-tighter flex items-center gap-4">
                  <span className="w-12 h-1 bg-blue-600 rounded-full" />
                  {group.title}
                </h2>
                <div className="grid md:grid-cols-3 gap-10">
                  {group.features.map((feature, fIdx) => (
                    <MotionDiv 
                      key={fIdx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fIdx * 0.1 }}
                      className="group"
                    >
                      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {/* Fix for cloneElement type mismatch by casting to any */}
                        {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 32 })}
                      </div>
                      <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{feature.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic">Comparison Table</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Technical Performance Analysis</p>
          </div>
          <ProductComparisonTable />
        </div>
      </section>
    </div>
  );
};

export default ProductFeaturesPage;
