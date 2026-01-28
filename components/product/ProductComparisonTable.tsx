
import React from 'react';
import { materialComparison } from '../../data/comparisonCharts';
import { Check, X } from 'lucide-react';

const ProductComparisonTable: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-5 text-sm font-bold text-slate-900 border-b border-slate-200">Feature</th>
            <th className="p-5 text-sm font-bold text-slate-500 border-b border-slate-200">Plywood</th>
            <th className="p-5 text-sm font-bold text-slate-500 border-b border-slate-200">MDF</th>
            <th className="p-5 text-sm font-bold text-slate-500 border-b border-slate-200">Particle Board</th>
            <th className="p-5 text-sm font-bold text-blue-600 border-b border-slate-200 bg-blue-50/50">FixoBoard</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {materialComparison.map((row, idx) => (
            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
              <td className="p-5 text-sm font-medium text-slate-700">{row.feature}</td>
              <td className="p-5 text-center">{row.plywood ? <Check className="text-green-500 mx-auto" size={18} /> : <X className="text-red-300 mx-auto" size={18} />}</td>
              <td className="p-5 text-center">{row.mdf ? <Check className="text-green-500 mx-auto" size={18} /> : <X className="text-red-300 mx-auto" size={18} />}</td>
              <td className="p-5 text-center">{row.particleBoard ? <Check className="text-green-500 mx-auto" size={18} /> : <X className="text-red-300 mx-auto" size={18} />}</td>
              <td className="p-5 text-center bg-blue-50/30">{row.fixoBoard ? <Check className="text-blue-600 mx-auto stroke-[3]" size={20} /> : <X className="text-red-300 mx-auto" size={20} />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparisonTable;
