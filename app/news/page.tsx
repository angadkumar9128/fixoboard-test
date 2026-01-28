
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, ArrowRight, Tag, Newspaper } from 'lucide-react';
import { initialNewsItems } from '../../data/news';
import { NewsItem } from '../../types/product';

const MotionDiv = motion.div as any;

const NewsListingPage: React.FC = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    const savedNews = localStorage.getItem('fixoboard_news');
    if (savedNews) {
      setItems(JSON.parse(savedNews));
    } else {
      setItems(initialNewsItems);
    }
  }, []);

  const filteredItems = items.filter(item => 
    item.isPublished && (filter === 'All' || item.category === filter)
  );

  const categories = ['All', 'Company', 'Product', 'Certification', 'Event', 'Press'];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={10} />
              <span className="text-white">News</span>
            </nav>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic leading-none">
              News & <span className="text-blue-500">Updates.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl font-medium">
              Latest announcements, product launches, and industrial achievements from Fixoboard.
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
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                }`}
              >
                {cat === 'All' ? 'All Updates' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <MotionDiv
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:border-blue-100 transition-all"
                  >
                    <Link to={`/news/${item.slug}`} className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={item.featuredImage} 
                        alt={item.title.en}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-[8px] font-black uppercase text-slate-900 tracking-widest shadow-sm">
                          {item.category}
                        </span>
                      </div>
                    </Link>
                    
                    <div className="p-10 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-slate-400 mb-4">
                        <Calendar size={14} className="text-blue-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{formatDate(item.publishDate)}</span>
                      </div>
                      
                      <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic leading-tight group-hover:text-blue-600 transition-colors">
                        <Link to={`/news/${item.slug}`}>{item.title.en}</Link>
                      </h3>
                      
                      <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                        {item.summary.en}
                      </p>
                      
                      <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex gap-2">
                          {item.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">#{tag}</span>
                          ))}
                        </div>
                        <Link 
                          to={`/news/${item.slug}`}
                          className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-[10px] group/btn"
                        >
                          Read More
                          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="py-32 text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <Newspaper size={32} />
              </div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">News & updates will be published here soon.</h3>
              <p className="text-slate-500 font-medium">Stay tuned for the latest industrial highlights from Fixoboard.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsListingPage;
