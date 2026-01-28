
import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import ProductCard from '../../components/product/ProductCard';
import { Filter, Search } from 'lucide-react';

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white border-b border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">Product Catalog.</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
            Explore our comprehensive range of high-performance PVC and WPC materials engineered for 
            structural integrity and environmental sustainability.
          </p>
          
          <div className="max-w-xl mx-auto flex gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search products or specs..." 
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 transition-all outline-none"
              />
            </div>
            <button className="bg-white border border-slate-200 p-4 rounded-xl text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
              <Filter size={20} />
              <span className="hidden sm:inline font-bold">Filter</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
