
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, ArrowLeft, Tag, Share2, Clock, Newspaper } from 'lucide-react';
import { initialNewsItems } from '../../../data/news';
import { NewsItem } from '../../../types/product';

const MotionDiv = motion.div as any;

const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<NewsItem | null>(null);
  const [related, setRelated] = useState<NewsItem[]>([]);

  useEffect(() => {
    const savedNews = localStorage.getItem('fixoboard_news');
    const allItems: NewsItem[] = savedNews ? JSON.parse(savedNews) : initialNewsItems;
    
    const found = allItems.find(n => n.slug === slug && n.isPublished);
    if (!found) {
      navigate('/news');
      return;
    }
    
    setItem(found);
    setRelated(allItems.filter(n => n.id !== found.id && n.isPublished && n.category === found.category).slice(0, 2));

    // Update Meta Data
    if (found.seo) {
      document.title = `${found.seo.metaTitle} | Fixoboard News`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', found.seo.metaDescription);
    }

    return () => {
      document.title = 'FixoBoard | Advanced PVC/WPC Solutions';
    };
  }, [slug, navigate]);

  if (!item) return null;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header / Breadcrumb */}
      <section className="bg-slate-50 border-b border-slate-100 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight size={10} />
              <Link to="/news" className="hover:text-blue-600 transition-colors">News</Link>
              <ChevronRight size={10} />
              <span className="text-slate-900 truncate max-w-[150px]">{item.title.en}</span>
            </div>
            <Link to="/news" className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-[10px]">
              <ArrowLeft size={14} /> Back to News
            </Link>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left"
          >
            <div className="flex flex-wrap items-center gap-6 mb-8 justify-center md:justify-start">
              <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                {item.category}
              </span>
              <div className="flex items-center gap-2 text-slate-400">
                <Calendar size={14} className="text-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-widest">{formatDate(item.publishDate)}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock size={14} className="text-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-widest">3 Min Read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic leading-tight">
              {item.title.en}
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-blue-500 pl-8">
              {item.summary.en}
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[21/9]"
          >
            <img src={item.featuredImage} alt={item.title.en} className="w-full h-full object-cover" />
          </MotionDiv>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <div className="text-slate-700 leading-relaxed space-y-8 text-lg font-medium">
              {item.content.en.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap gap-3">
              {item.tags.map(tag => (
                <span key={tag} className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                  <Tag size={12} className="text-blue-500" />
                  {tag}
                </span>
              ))}
            </div>
            <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-all shadow-xl">
              <Share2 size={18} />
              Share Article
            </button>
          </div>
        </div>
      </section>

      {/* Related News */}
      {related.length > 0 && (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block mb-4 italic">Fresh from Fixoboard</span>
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">Related News.</h2>
              </div>
              <Link to="/news" className="text-blue-600 font-black uppercase tracking-widest text-[10px] hover:underline">View All Updates</Link>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {related.map(item => (
                <Link 
                  key={item.id} 
                  to={`/news/${item.slug}`}
                  className="group flex gap-8 bg-white p-6 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all"
                >
                  <div className="w-40 aspect-square rounded-2xl overflow-hidden shrink-0">
                    <img src={item.featuredImage} alt={item.title.en} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-2">{item.category}</span>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic mb-2 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">{item.title.en}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{formatDate(item.publishDate)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter / CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-600 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <Newspaper className="text-white/20 mx-auto mb-8" size={64} />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic mb-8">
              Stay ahead with <br /> industrial updates.
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/get-quote" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:scale-105 transition-all">
                Request Project Pricing
              </Link>
              <Link to="/contact" className="bg-blue-800 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs border border-blue-500 hover:bg-blue-900 transition-all">
                Contact Technical Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetailPage;
