
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Link as LinkIcon
} from 'lucide-react';
import { initialGalleryItems } from '../../../data/gallery';
import { GalleryItem } from '../../../types/product';

const MotionDiv = motion.div as any;

const AdminGalleryPage: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error', msg: string } | null>(null);
  const [uploadMethod, setUploadMethod] = useState<'file' | 'url'>('file');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [form, setForm] = useState({
    imageUrl: '',
    category: 'Product' as GalleryItem['category'],
    titleEn: '',
    isActive: true
  });

  useEffect(() => {
    const savedItems = localStorage.getItem('fixoboard_gallery');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    } else {
      setItems(initialGalleryItems);
      localStorage.setItem('fixoboard_gallery', JSON.stringify(initialGalleryItems));
    }
  }, []);

  const saveToStorage = (newItems: GalleryItem[]) => {
    localStorage.setItem('fixoboard_gallery', JSON.stringify(newItems));
    setItems(newItems);
  };

  const showNotify = (type: 'success' | 'error', msg: string) => {
    setNotification({ type, msg });
    setTimeout(() => setNotification(null), 3000);
  };

  const resetForm = () => {
    setForm({
      imageUrl: '',
      category: 'Product',
      titleEn: '',
      isActive: true
    });
    setEditingItem(null);
    setIsAdding(false);
    setUploadMethod('file');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        showNotify('error', 'Image too large. Max size is 2MB for local storage.');
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(prev => ({ ...prev, imageUrl: reader.result as string }));
        showNotify('success', 'Image processed successfully');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.imageUrl) {
      showNotify('error', 'Please select an image or provide a URL.');
      return;
    }

    if (editingItem) {
      const updated = items.map(item => item.id === editingItem.id ? {
        ...item,
        imageUrl: form.imageUrl,
        category: form.category,
        title: { ...item.title, en: form.titleEn },
        isActive: form.isActive
      } : item);
      saveToStorage(updated);
      showNotify('success', 'Visual updated successfully');
    } else {
      const newItem: GalleryItem = {
        id: Date.now().toString(),
        imageUrl: form.imageUrl,
        category: form.category,
        title: { en: form.titleEn },
        createdAt: new Date().toISOString(),
        isActive: form.isActive
      };
      const updated = [newItem, ...items];
      saveToStorage(updated);
      showNotify('success', 'New image added to gallery');
    }
    resetForm();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this image from the gallery?')) {
      const updated = items.filter(i => i.id !== id);
      saveToStorage(updated);
      showNotify('success', 'Image removed');
    }
  };

  const toggleActive = (id: string) => {
    const updated = items.map(item => item.id === id ? { ...item, isActive: !item.isActive } : item);
    saveToStorage(updated);
    showNotify('success', 'Visibility updated');
  };

  const startEdit = (item: GalleryItem) => {
    setEditingItem(item);
    setForm({
      imageUrl: item.imageUrl,
      category: item.category,
      titleEn: item.title.en,
      isActive: item.isActive
    });
    setUploadMethod(item.imageUrl.startsWith('data:') ? 'file' : 'url');
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
                <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">Gallery Admin</h1>
                <p className="text-slate-500 font-medium mt-1">Control center for project visuals and showcases.</p>
              </div>
              <button 
                onClick={() => setIsAdding(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-xl shadow-blue-200 hover:scale-105 transition-all"
              >
                <Plus size={18} />
                Add New Visual
              </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm group hover:shadow-xl transition-all">
                  <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
                    <img src={item.imageUrl} alt={item.title.en} className="w-full h-full object-cover" />
                    {!item.isActive && (
                      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center">
                        <span className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Hidden</span>
                      </div>
                    )}
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-[8px] font-black uppercase text-slate-900 tracking-widest shadow-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-bold text-slate-900 mb-6 truncate text-lg uppercase tracking-tight">{item.title.en}</h3>
                    <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                      <div className="flex gap-3">
                        <button 
                          onClick={() => startEdit(item)}
                          className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          title="Edit Details"
                        >
                          <Edit3 size={18} />
                        </button>
                        <button 
                          onClick={() => toggleActive(item.id)}
                          className={`p-3 rounded-xl transition-colors ${item.isActive ? 'bg-slate-50 text-slate-600 hover:bg-orange-50 hover:text-orange-600' : 'bg-green-50 text-green-600 hover:bg-green-100'}`}
                          title={item.isActive ? 'Deactivate' : 'Activate'}
                        >
                          {item.isActive ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                        <button 
                          onClick={() => handleDelete(item.id)}
                          className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors"
                          title="Delete Permanently"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal & Notifications remain same internal logic but now wrapped in sidebar layout */}
            <AnimatePresence>
              {isAdding && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                  <MotionDiv 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
                    onClick={resetForm}
                  />
                  <MotionDiv 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                  >
                    <div className="p-8 md:p-12">
                      <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">
                          {editingItem ? 'Edit Visual' : 'Upload To Gallery'}
                        </h2>
                        <button onClick={resetForm} className="p-3 bg-slate-50 rounded-full text-slate-400 hover:text-slate-900">
                          <X size={24} />
                        </button>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex p-1 bg-slate-100 rounded-2xl w-fit mb-6">
                          <button
                            type="button"
                            onClick={() => setUploadMethod('file')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${uploadMethod === 'file' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}
                          >
                            <Upload size={14} /> Upload File
                          </button>
                          <button
                            type="button"
                            onClick={() => setUploadMethod('url')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${uploadMethod === 'url' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}
                          >
                            <LinkIcon size={14} /> From URL
                          </button>
                        </div>

                        <div className="space-y-4">
                          {uploadMethod === 'file' ? (
                            <div 
                              onClick={() => fileInputRef.current?.click()}
                              className={`relative border-2 border-dashed rounded-[2.5rem] p-12 flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden aspect-[16/9] ${form.imageUrl ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-slate-50 hover:border-blue-300'}`}
                            >
                              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                              {form.imageUrl ? (
                                <div className="absolute inset-0">
                                  <img src={form.imageUrl} className="w-full h-full object-cover" alt="Preview" />
                                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <span className="bg-white text-slate-900 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest">Change Image</span>
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                                    <Upload size={32} />
                                  </div>
                                  <p className="text-slate-500 font-black uppercase tracking-widest text-[11px]">Click or Drag to Upload</p>
                                </>
                              )}
                            </div>
                          ) : (
                            <input 
                              required 
                              type="url" 
                              value={form.imageUrl}
                              onChange={e => setForm({...form, imageUrl: e.target.value})}
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 transition-all font-medium" 
                              placeholder="Paste image URL here..." 
                            />
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 pt-4">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Category *</label>
                            <select 
                              required 
                              value={form.category}
                              onChange={e => setForm({...form, category: e.target.value as any})}
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 transition-all font-medium appearance-none"
                            >
                              <option value="Product">Product Showcase</option>
                              <option value="Application">Real-World Application</option>
                              <option value="Manufacturing">Manufacturing Hub</option>
                              <option value="Installation">Field Installation</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Initial Visibility</label>
                            <div className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200 h-[62px] items-center">
                              <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" checked={form.isActive} onChange={() => setForm({...form, isActive: true})} className="w-4 h-4 text-blue-600" />
                                <span className="text-[11px] font-black uppercase text-slate-600 tracking-widest">Public</span>
                              </label>
                              <label className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" checked={!form.isActive} onChange={() => setForm({...form, isActive: false})} className="w-4 h-4 text-blue-600" />
                                <span className="text-[11px] font-black uppercase text-slate-600 tracking-widest">Draft</span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Title / Caption (English) *</label>
                          <input 
                            required 
                            type="text" 
                            value={form.titleEn}
                            onChange={e => setForm({...form, titleEn: e.target.value})}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 transition-all font-medium" 
                            placeholder="e.g. WPC Solid Door Frame Installation" 
                          />
                        </div>

                        <div className="pt-8">
                          <button type="submit" className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-slate-200 uppercase tracking-[0.2em] text-xs">
                            {editingItem ? 'Save Changes' : 'Publish To Gallery'}
                            <Save size={18} />
                          </button>
                        </div>
                      </form>
                    </div>
                  </MotionDiv>
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {notification && (
                <MotionDiv 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className={`fixed bottom-10 left-1/2 -translate-x-1/2 px-10 py-5 rounded-2xl flex items-center gap-4 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl z-[100] ${notification.type === 'success' ? 'bg-blue-600' : 'bg-red-600'}`}
                >
                  {notification.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                  {notification.msg}
                </MotionDiv>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default AdminGalleryPage;
