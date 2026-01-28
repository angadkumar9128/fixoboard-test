
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { ArrowRight, Box } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

// Fix for framer-motion type mismatch
const MotionDiv = motion.div as any;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <MotionDiv 
      whileHover={{ y: -8 }}
      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-red-100"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-red-600/90 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase font-bold text-white tracking-widest">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-2">
          {product.description}
        </p>
        
        <div className="grid grid-cols-2 gap-2 mb-6">
          {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
            <div key={key} className="bg-slate-50 p-2 rounded-lg">
              <span className="block text-[10px] text-slate-400 uppercase font-bold mb-1">{key}</span>
              <span className="block text-xs font-semibold text-slate-700">{value}</span>
            </div>
          ))}
        </div>

        <Link 
          to={`/products/${product.slug}`}
          className="flex items-center justify-center gap-2 w-full py-3 bg-slate-950 text-white rounded-xl font-bold text-sm transition-all group-hover:bg-red-600 group-hover:shadow-lg group-hover:shadow-red-200"
        >
          View Specifications
          <ArrowRight size={16} />
        </Link>
      </div>
    </MotionDiv>
  );
};

export default ProductCard;
