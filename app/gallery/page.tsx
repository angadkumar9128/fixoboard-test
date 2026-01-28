
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Maximize2, X, ChevronLeft } from 'lucide-react';
import { initialGalleryItems } from '../../data/gallery';
import { GalleryItem } from '../../types/product';

const MotionDiv = motion.div as any;

const GalleryPage: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [filter, setFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const savedItems = localStorage.getItem('fixoboard_gallery');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    } else {
      setItems(initialGalleryItems);
    }
  }, []);

  const filteredItems = items.filter(item =>
    item.isActive && (filter === 'All' || item.category === filter)
  );

  const categories = ['All', 'Product', 'Application', 'Manufacturing', 'Installation'];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={10} />
              <span className="text-white">Gallery</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic leading-none">
              Visual <span className="text-blue-500">Showcase.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl font-medium">
              A visual showcase of Fixoboard products, applications, and industrial installations across the globe.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                    : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                  }`}
              >
                {cat === 'All' ? 'All Visuals' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => (
                  <MotionDiv
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all"
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title.en}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                      <span className="bg-blue-600 self-start px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-white mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-white font-black uppercase tracking-tight text-lg leading-tight">
                        {item.title.en}
                      </h3>
                      <div className="mt-4 w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-white">
                        <Maximize2 size={18} />
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="py-32 text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <Maximize2 size={32} />
              </div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">No visuals found.</h3>
              <p className="text-slate-500 font-medium">Gallery will be updated soon with new project highlights.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <div className="relative w-full max-w-6xl h-full max-h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute left-0 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all -translate-x-full hidden md:block"
                onClick={handlePrev}
              >
                <ChevronLeft size={48} />
              </button>

              <img
                src={filteredItems[selectedImage].imageUrl}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                alt="Selected"
              />

              <button
                className="absolute right-0 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all translate-x-full hidden md:block"
                onClick={handleNext}
              >
                <ChevronRight size={48} />
              </button>
            </div>

            <div className="mt-8 text-center max-w-2xl" onClick={(e) => e.stopPropagation()}>
              <span className="bg-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-4 inline-block">
                {filteredItems[selectedImage].category}
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic">
                {filteredItems[selectedImage].title.en}
              </h2>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
