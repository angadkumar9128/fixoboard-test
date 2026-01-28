
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../../components/admin/AdminSidebar';
import ProtectedRoute from '../../../components/admin/ProtectedRoute';
import { 
  Image as ImageIcon, 
  Newspaper, 
  TrendingUp, 
  Clock, 
  ArrowRight, 
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { initialGalleryItems } from '../../../data/gallery';
import { initialNewsItems } from '../../../data/news';

const MotionDiv = motion.div as any;

const AdminDashboardPage: React.FC = () => {
  const [stats, setStats] = useState({
    galleryCount: 0,
    newsCount: 0,
    draftNews: 0,
    activeImages: 0
  });

  useEffect(() => {
    // Load current counts from local storage
    const gallery = JSON.parse(localStorage.getItem('fixoboard_gallery') || '[]');
    const news = JSON.parse(localStorage.getItem('fixoboard_news') || '[]');
    
    // Fallback to defaults if empty
    const finalGallery = gallery.length ? gallery : initialGalleryItems;
    const finalNews = news.length ? news : initialNewsItems;

    setStats({
      galleryCount: finalGallery.length,
      activeImages: finalGallery.filter((i: any) => i.isActive).length,
      newsCount: finalNews.filter((i: any) => i.isPublished).length,
      draftNews: finalNews.filter((i: any) => !i.isPublished).length,
    });
  }, []);

  const quickStats = [
    { label: 'Gallery Assets', value: stats.galleryCount, sub: `${stats.activeImages} Publicly Visible`, icon: <ImageIcon className="text-red-600" />, color: 'bg-red-50' },
    { label: 'Live Articles', value: stats.newsCount, sub: 'Fresh updates on site', icon: <TrendingUp className="text-red-600" />, color: 'bg-red-50' },
    { label: 'Pending Drafts', value: stats.draftNews, sub: 'Needs review/publish', icon: <Clock className="text-slate-600" />, color: 'bg-slate-100' },
    { label: 'Active Users', value: 1, sub: 'Admin session active', icon: <UserCheck className="text-slate-900" />, color: 'bg-slate-200' },
  ];

  return (
    <ProtectedRoute>
      <div className="flex bg-slate-50 min-h-screen font-sans">
        <AdminSidebar />
        
        <main className="flex-grow pl-72">
          <div className="p-10 max-w-7xl mx-auto">
            {/* Header */}
            <header className="mb-12 flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">Welcome, Admin</h1>
                <p className="text-slate-500 font-medium mt-2">Manage your industrial visual library and company announcements.</p>
              </div>
              <div className="bg-white border border-slate-200 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-sm">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">System Online</span>
              </div>
            </header>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {quickStats.map((item, idx) => (
                <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {item.icon}
                  </div>
                  <div className="text-3xl font-black text-slate-900 tracking-tighter mb-1">{item.value}</div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">{item.label}</div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter border-t border-slate-50 pt-4">{item.sub}</p>
                </MotionDiv>
              ))}
            </div>

            {/* Main Navigation Sections */}
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Gallery Management Card */}
              <MotionDiv 
                whileHover={{ scale: 1.01 }}
                className="bg-slate-950 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full group-hover:bg-red-600/20 transition-all" />
                <div className="relative z-10">
                  <ImageIcon size={48} className="text-red-600 mb-8" />
                  <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4">Manage Visual Gallery</h2>
                  <p className="text-slate-400 font-medium mb-10 max-w-md leading-relaxed">
                    Upload new project installations, manufacturing highlights, and product showcases.
                  </p>
                  <Link to="/admin/gallery" className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
                    Enter Gallery Admin
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </MotionDiv>

              {/* News Management Card */}
              <MotionDiv 
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-xl group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 blur-[100px] rounded-full group-hover:bg-red-50 transition-all" />
                <div className="relative z-10">
                  <Newspaper size={48} className="text-red-600 mb-8" />
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic mb-4">News & Announcements</h2>
                  <p className="text-slate-500 font-medium mb-10 max-w-md leading-relaxed">
                    Publish latest achievements, product launches, and press releases for SEO visibility.
                  </p>
                  <Link to="/admin/news" className="inline-flex items-center gap-3 bg-slate-950 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-red-600 transition-all shadow-xl shadow-slate-200">
                    Enter News Editor
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </MotionDiv>
            </div>

            {/* Quick Tips / System Health */}
            <div className="mt-12 p-10 bg-red-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-red-600/20">
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shrink-0">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter italic">CMS Integrity Checked</h3>
                  <p className="text-red-50 font-medium">All systems operational. Content is synchronizing with public endpoints in real-time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="px-6 py-3 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">v2.1 Stable</div>
                <div className="px-6 py-3 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">HTTPS Secure</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default AdminDashboardPage;
