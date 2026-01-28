
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../../components/admin/AdminSidebar';
import ProtectedRoute from '../../../components/admin/ProtectedRoute';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Eye, 
  EyeOff, 
  Save, 
  X, 
  Upload,
  CheckCircle2,
  AlertCircle,
  Link as LinkIcon,
  Search,
  Globe,
  Languages
} from 'lucide-react';
import { initialNewsItems } from '../../../data/news';
import { NewsItem } from '../../../types/product';

const MotionDiv = motion.div as any;

const AdminNewsPage: React.FC = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error', msg: string } | null>(null);
  const [activeLang, setActiveLang] = useState<'en' | 'hi'>('en');
  const [uploadMethod, setUploadMethod] = useState<'file' | 'url'>('file');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [form, setForm] = useState({
    titleEn: '',
    titleHi: '',
    summaryEn: '',
    summaryHi: '',
    contentEn: '',
    contentHi: '',
    category: 'Company' as NewsItem['category'],
    tags: '',
    featuredImage: '',
    isPublished: true,
    metaTitle: '',
    metaDescription: ''
  });

  useEffect(() => {
    const savedNews = localStorage.getItem('fixoboard_news');
    if (savedNews) {
      setItems(JSON.parse(savedNews));
    } else {
      setItems(initialNewsItems);
      localStorage.setItem('fixoboard_news', JSON.stringify(initialNewsItems));
    }
  }, []);

  const saveToStorage = (newItems: NewsItem[]) => {
    localStorage.setItem('fixoboard_news', JSON.stringify(newItems));
    setItems(newItems);
  };

  const showNotify = (type: 'success' | 'error', msg: string) => {
    setNotification({ type, msg });
    setTimeout(() => setNotification(null), 3000);
  };

  const resetForm = () => {
    setForm({
      titleEn: '', titleHi: '',
      summaryEn: '', summaryHi: '',
      contentEn: '', contentHi: '',
      category: 'Company',
      tags: '',
      featuredImage: '',
      isPublished: true,
      metaTitle: '',
      metaDescription: ''
    });
    setEditingItem(null);
    setIsAdding(false);
    setActiveLang('en');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(prev => ({ ...prev, featuredImage: reader.result as string }));
        showNotify('success', 'Featured image processed');
      };
      reader.readAsDataURL(file);
    }
  };

  const createSlug = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.featuredImage) {
      showNotify('error', 'Featured image is required');
      return;
    }

    const itemSlug = createSlug(form.titleEn);
    const tagsArray = form.tags.split(',').map(t => t.trim()).filter(t => t);

    const newsData = {
      slug: itemSlug,
      title: { en: form.titleEn, hi: form.titleHi },
      summary: { en: form.summaryEn, hi: form.summaryHi },
      content: { en: form.contentEn, hi: form.contentHi },
      category: form.category,
      tags: tagsArray,
      featuredImage: form.featuredImage,
      isPublished: form.isPublished,
      seo: {
        metaTitle: form.metaTitle || form.titleEn,
        metaDescription: form.metaDescription || form.summaryEn
      }
    };

    if (editingItem) {
      const updated = items.map(item => item.id === editingItem.id ? {
        ...item,
        ...newsData
      } : item);
      saveToStorage(updated);
      showNotify('success', 'Article updated successfully');
    } else {
      const newItem: NewsItem = {
        id: Date.now().toString(),
        publishDate: new Date().toISOString(),
        ...newsData as any
      };
      saveToStorage([newItem, ...items]);
      showNotify('success', 'New article published');
    }
    resetForm();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this article permanently?')) {
      const updated = items.filter(i => i.id !== id);
      saveToStorage(updated);
      showNotify('success', 'Article removed');
    }
  };

  const startEdit = (item: NewsItem) => {
    setEditingItem(item);
    setForm({
      titleEn: item.title.en, titleHi: item.title.hi || '',
      summaryEn: item.summary.en, summaryHi: item.summary.hi || '',
      contentEn: item.content.en, contentHi: item.content.hi || '',
      category: item.category,
      tags: item.tags.join(', '),
      featuredImage: item.featuredImage,
      isPublished: item.isPublished,
      metaTitle: item.seo?.metaTitle || '',
      metaDescription: item.seo?.metaDescription || ''
    });
    setUploadMethod(item.featuredImage.startsWith('data:') ? 'file' : 'url');
    setIsAdding(true);
  };

  return (
    <ProtectedRoute>
      <div className="flex bg-slate-50 min-h-screen">
        <AdminSidebar />
        
        <main className="flex-grow pl-72">
          <div className="p-10 max-w-7xl mx-auto">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">News Manager</h1>
                <p className="text-slate-500 font-medium mt-2">Publish announcements and product highlights.</p>
              </div>
              <button 
                onClick={() => setIsAdding(true)}
                className="bg-red-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-xl shadow-red-600/20 hover:scale-105 transition-all"
              >
                <Plus size={18} />
                New Article
              </button>
            </header>

            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-all group">
                  <div className="w-full md:w-64 relative aspect-video md:aspect-square bg-slate-100 shrink-0">
                    <img src={item.featuredImage} alt={item.title.en} className="w-full h-full object-cover" />
                    {!item.isPublished && (
                      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center">
                        <span className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Draft</span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-slate-50 px-3 py-1 rounded-full text-[8px] font-black uppercase text-slate-400 tracking-widest">{item.category}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{new Date(item.publishDate).toLocaleDateString()}</span>
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic mb-4 leading-tight">{item.title.en}</h3>
                      <p className="text-slate-500 text-sm font-medium line-clamp-2">{item.summary.en}</p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <div className="flex gap-3">
                        <button onClick={() => startEdit(item)} className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors"><Edit3 size={18} /></button>
                        <button onClick={() => handleDelete(item.id)} className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors"><Trash2 size={18} /></button>
                      </div>
                      <Link to={`/news/${item.slug}`} className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:text-red-600"><Globe size={18} /></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <AnimatePresence>
              {isAdding && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                  <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" onClick={resetForm} />
                  <MotionDiv initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative bg-white w-full max-w-5xl rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto" >
                    <div className="p-8 md:p-12">
                      <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">Article Editor</h2>
                        <div className="flex gap-3">
                          <button onClick={() => setActiveLang('en')} className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeLang === 'en' ? 'bg-red-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}>English</button>
                          <button onClick={() => setActiveLang('hi')} className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeLang === 'hi' ? 'bg-slate-950 text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}>Hindi (हिंदी)</button>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div onClick={() => fileInputRef.current?.click()} className={`relative border-2 border-dashed rounded-[2rem] p-12 flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden aspect-[21/9] ${form.featuredImage ? 'border-red-600 bg-red-50' : 'border-slate-200 bg-slate-50 hover:border-red-300'}`}>
                          <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                          {form.featuredImage ? <img src={form.featuredImage} className="absolute inset-0 w-full h-full object-cover" alt="Preview" /> : <><Upload size={40} className="text-red-600 mb-4" /><p className="text-slate-500 font-black uppercase tracking-widest text-[10px]">Featured Image</p></>}
                        </div>

                        {activeLang === 'en' ? (
                          <div className="space-y-6">
                            <input required value={form.titleEn} onChange={e => setForm({...form, titleEn: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 outline-none font-bold text-xl" placeholder="English Title" />
                            <textarea required rows={2} value={form.summaryEn} onChange={e => setForm({...form, summaryEn: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 outline-none font-medium" placeholder="English Summary"></textarea>
                            <textarea required rows={8} value={form.contentEn} onChange={e => setForm({...form, contentEn: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 outline-none font-medium" placeholder="Full Article Body (English)"></textarea>
                          </div>
                        ) : (
                          <div className="space-y-6">
                            <input value={form.titleHi} onChange={e => setForm({...form, titleHi: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 outline-none font-bold text-xl" placeholder="हिंदी शीर्षक (Hindi Title)" />
                            <textarea rows={2} value={form.summaryHi} onChange={e => setForm({...form, summaryHi: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 outline-none font-medium" placeholder="हिंदी सारांश (Hindi Summary)"></textarea>
                            <textarea rows={8} value={form.contentHi} onChange={e => setForm({...form, contentHi: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 outline-none font-medium" placeholder="पूर्ण लेख (Hindi Content)"></textarea>
                          </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-8">
                          <select required value={form.category} onChange={e => setForm({...form, category: e.target.value as any})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-red-600 outline-none font-medium appearance-none"><option value="Company">Company Update</option><option value="Product">Product Launch</option><option value="Certification">Certification</option><option value="Event">Event</option><option value="Press">Press Release</option></select>
                          <div className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200 h-[62px] items-center">
                            <label className="flex items-center gap-3 cursor-pointer"><input type="radio" checked={form.isPublished} onChange={() => setForm({...form, isPublished: true})} className="w-4 h-4 text-red-600" /><span className="text-[11px] font-black uppercase text-slate-600 tracking-widest">Live</span></label>
                            <label className="flex items-center gap-3 cursor-pointer"><input type="radio" checked={!form.isPublished} onChange={() => setForm({...form, isPublished: false})} className="w-4 h-4 text-red-600" /><span className="text-[11px] font-black uppercase text-slate-600 tracking-widest">Draft</span></label>
                          </div>
                        </div>

                        <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                          <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-2"><Search size={18} className="text-red-600" /> SEO Management</h4>
                          <div className="grid md:grid-cols-2 gap-8">
                            <input value={form.metaTitle} onChange={e => setForm({...form, metaTitle: e.target.value})} className="w-full bg-white border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-red-600 transition-all font-medium text-sm" placeholder="Meta Title" />
                            <input value={form.metaDescription} onChange={e => setForm({...form, metaDescription: e.target.value})} className="w-full bg-white border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-red-600 transition-all font-medium text-sm" placeholder="Meta Description" />
                          </div>
                        </div>

                        <button type="submit" className="w-full bg-slate-950 hover:bg-red-600 text-white font-black py-6 rounded-2xl flex items-center justify-center gap-3 shadow-xl transition-all uppercase tracking-[0.2em] text-xs">Save Article <Save size={18} /></button>
                      </form>
                    </div>
                  </MotionDiv>
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {notification && (
                <MotionDiv initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className={`fixed bottom-10 left-1/2 -translate-x-1/2 px-10 py-5 rounded-2xl flex items-center gap-4 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl z-[100] ${notification.type === 'success' ? 'bg-red-600' : 'bg-red-700'}`}><CheckCircle2 size={20} />{notification.msg}</MotionDiv>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default AdminNewsPage;
