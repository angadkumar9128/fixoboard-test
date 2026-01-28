
import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../../data/products';
import ProductComparisonTable from '../../../components/product/ProductComparisonTable';
// Added Sparkles to the import list below
import { CheckCircle2, Hammer, Droplets, ShieldCheck, Layers, FileText, Sparkles } from 'lucide-react';

// Fix for framer-motion type mismatch
const MotionDiv = motion.div as any;

const PVCWPCPage: React.FC = () => {
  const product = products.find(p => p.slug === 'pvc-wpc-ply')!;

  return (
    <MotionDiv 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-24"
    >
      {/* Product Hero */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm block mb-4">Industrial Grade Boards</span>
              <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
                PVC / WPC Ply <br />
                <span className="text-blue-500 font-extrabold text-3xl">Advanced Marine Grade Solution</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                FixoBoard PVC / WPC Ply is a new generation eco-friendly board. Highly durable with features superior 
                to traditional plywood. Resistant to weather, moisture, fire, and termites.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                  Request Pricing
                </button>
                <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                  <FileText size={20} />
                  Download Catalog
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="font-bold text-slate-900">Lead Free Certified</span>
                </div>
                <p className="text-xs text-slate-500">Safe for healthcare & food prep areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Comparative Performance</h2>
              <ProductComparisonTable />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Technical Data</h2>
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-slate-800 pb-4">
                      <span className="block text-slate-400 text-xs font-bold uppercase mb-1 tracking-wider">{key}</span>
                      <span className="text-xl font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 size={18} />
                    Custom Sizes
                  </h4>
                  <p className="text-sm text-slate-300">We offer custom cutting and thickness production for project-specific requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surface Treatments */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Infinite Finish Possibilities</h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
              FixoBoard surface acts as a perfect canvas for all traditional and modern finishing techniques.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'PU Gloss / Matt', icon: <Sparkles className="text-blue-500" /> },
              { name: 'Direct Paint', icon: <Hammer className="text-blue-500" /> },
              { name: 'Digital Printing', icon: <Layers className="text-blue-500" /> },
              { name: 'PVC Foil / Laminate', icon: <ShieldCheck className="text-blue-500" /> },
            ].map((fin, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 text-center flex flex-col items-center hover:border-blue-500 transition-colors">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  {fin.icon}
                </div>
                <span className="font-bold text-slate-900">{fin.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotionDiv>
  );
};

export default PVCWPCPage;
