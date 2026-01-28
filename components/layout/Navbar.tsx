
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Box, LayoutPanelLeft, Phone, Mail, Search, Globe } from 'lucide-react';

const MotionDiv = motion.div as any;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Products',
      path: '/products',
      mega: [
        { name: 'Product Features', path: '/products/features' },
        { name: 'PVC / WPC Ply', path: '/products/pvc-wpc-ply' },
        { name: 'WPC Doors', path: '/products/wpc-doors' },
        { name: 'Prelaminate Ply', path: '/products/prelaminate-ply' },
        { name: 'WPC Door Frames', path: '/products/wpc-door-frames' },
        { name: 'PVC Marble Sheets', path: '/products/pvc-marble-sheets' }
      ]
    },
    {
      name: 'Applications',
      path: '/applications/kitchen',
      mega: [
        { name: 'Modular Kitchen', path: '/applications/kitchen' },
        { name: 'WPC Doors Application', path: '/applications/doors' },
        { name: 'Wardrobes & Cabinets', path: '/applications/wardrobe' },
        { name: 'Office Workstations', path: '/applications/office' },
        { name: 'WPC Grills', path: '/applications/wpc-grills' },
        { name: '3D Wall Panels', path: '/applications/3d-panels' },
        { name: 'Shuttering & Centering', path: '/applications/shuttering' },
        { name: 'Other Applications', path: '/applications/other' }
      ]
    },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Global Top Bar */}
      <div className="bg-slate-900 text-white py-2.5 px-4 hidden lg:block border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="tel:+919930349472" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-red-500 transition-colors">
              <Phone size={12} className="text-red-600" />
              +91 99303 49472
            </a>
            <a href="mailto:info@fixoboard.com" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-red-500 transition-colors">
              <Mail size={12} className="text-red-600" />
              info@fixoboard.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <Globe size={12} />
              Mumbai | Dubai | Silvassa
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="bg-white/95 backdrop-blur-md border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                  <div className="flex items-center">
                    <Link to="/" className="flex items-center gap-3">

                      {/* Logo Image */}
                      <img
                        src="assets/logo/fix_logo.svg"
                        alt="Fixoboard – An Advanced Marine Ply"
                        className="h-12 w-auto object-contain"
                      />

                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setActiveMenu(link.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    to={link.path}
                    className={`text-sm font-bold transition-colors flex items-center gap-1.5 py-2 ${(location.pathname.startsWith(link.path.split('/')[1]) && link.path !== '/') || location.pathname === link.path ? 'text-red-600' : 'text-slate-600 hover:text-red-600'
                      }`}
                  >
                    {link.name}
                    {link.mega && <ChevronDown size={14} className={`transition-transform duration-200 ${activeMenu === link.name ? 'rotate-180' : ''}`} />}
                  </Link>

                  {link.mega && (
                    <AnimatePresence>
                      {activeMenu === link.name && (
                        <MotionDiv
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-4"
                        >
                          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 mega-menu-gradient grid grid-cols-2 gap-x-8 gap-y-2 overflow-hidden">
                            {link.mega.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                className="group flex items-center gap-3 p-3 text-sm font-semibold text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all"
                              >
                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-white transition-colors">
                                  {link.name === 'Products' ? <Box size={16} /> : <LayoutPanelLeft size={16} />}
                                </div>
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </MotionDiv>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 text-slate-400 hover:text-red-600 transition-colors"
              >
                <Search size={20} />
              </button>

              <Link
                to="/get-quote"
                className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-red-700 transition-all shadow-xl shadow-red-100 uppercase tracking-wider"
              >
                Get Quote
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-4">
              <button onClick={() => setShowSearch(!showSearch)} className="p-2 text-slate-400"><Search size={20} /></button>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 focus:outline-none">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {showSearch && (
            <MotionDiv
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-slate-50 border-b border-slate-200 overflow-hidden"
            >
              <div className="max-w-3xl mx-auto py-8 px-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search products, applications, or technical data..."
                    className="w-full pl-14 pr-4 py-6 bg-white border border-slate-200 rounded-2xl text-xl font-medium focus:ring-4 focus:ring-red-100 transition-all outline-none"
                  />
                  <button onClick={() => setShowSearch(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900"><X size={24} /></button>
                </div>
                <div className="mt-4 flex gap-3 flex-wrap">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Popular:</span>
                  <Link to="/products/pvc-wpc-ply" className="text-[10px] font-bold text-red-600 hover:underline">PVC Ply</Link>
                  <Link to="/products/wpc-doors" className="text-[10px] font-bold text-red-600 hover:underline">CNC Doors</Link>
                  <Link to="/applications/kitchen" className="text-[10px] font-bold text-red-600 hover:underline">Kitchen Boards</Link>
                </div>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <MotionDiv
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-y-auto max-h-[calc(100vh-5rem)] overscroll-contain"
            >
              <div className="px-6 py-8 space-y-6 pb-20">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                    <Link
                      to={link.path}
                      className="block py-2 text-xl font-black text-slate-900 uppercase tracking-tighter italic"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.mega && (
                      <div className="grid grid-cols-1 gap-1 pl-4 mt-3 border-l-2 border-red-50">
                        {link.mega.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="text-slate-500 font-bold py-2.5 text-sm flex items-center gap-3 hover:text-red-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-red-200" />
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-6 space-y-4">
                  <Link
                    to="/get-quote"
                    className="w-full bg-red-600 text-white py-5 rounded-2xl text-center block font-black uppercase tracking-widest text-xs shadow-xl shadow-red-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Quote
                  </Link>
                  <div className="flex justify-center items-center gap-6 pt-4 text-slate-400">
                    <a href="tel:+919930349472" className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-red-600"><Phone size={18} /></div>
                      <span className="text-[8px] font-black uppercase">Call</span>
                    </a>
                    <a href="mailto:info@fixoboard.com" className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-red-600"><Mail size={18} /></div>
                      <span className="text-[8px] font-black uppercase">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
