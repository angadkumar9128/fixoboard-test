
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ChatWidget from './components/chat/ChatWidget';

// Pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ProductsPage from './app/products/page';
import ProductFeaturesPage from './app/products/features/page';
import PVCWPCPage from './app/products/pvc-wpc-ply/page';
import WPCDoorPage from './app/products/wpc-doors/page';
import PrelaminatePlyPage from './app/products/prelaminate-ply/page';
import WPCDoorFramePage from './app/products/wpc-door-frames/page';
import PVCMarbleSheetPage from './app/products/pvc-marble-sheets/page';

// Application Pages
import KitchenApplicationPage from './app/applications/kitchen/page';
import WardrobeApplicationPage from './app/applications/wardrobe/page';
import OfficeApplicationPage from './app/applications/office/page';
import WPCGrillsApplicationPage from './app/applications/wpc-grills/page';
import Panels3DApplicationPage from './app/applications/3d-panels/page';
import ShutteringApplicationPage from './app/applications/shuttering/page';
import OtherApplicationsPage from './app/applications/other/page';
import DoorsApplicationPage from './app/applications/doors/page';

import ContactPage from './app/contact/page';
import GetQuotePage from './app/get-quote/page';
import CertificationsPage from './app/certifications/page';
import GalleryPage from './app/gallery/page';
import NewsListingPage from './app/news/page';
import NewsDetailPage from './app/news/[slug]/page';

// Admin CMS Pages
import AdminLoginPage from './app/admin/login/page';
import AdminDashboardPage from './app/admin/dashboard/page';
import AdminGalleryPage from './app/admin/gallery/page';
import AdminNewsPage from './app/admin/news/page';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout component to hide public nav/footer on admin routes
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}
      <main className={`flex-grow ${!isAdminRoute ? 'pt-16 lg:pt-20' : ''}`}>
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>
      {!isAdminRoute && <ChatWidget />}
      {!isAdminRoute && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsListingPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/features" element={<ProductFeaturesPage />} />
          <Route path="/products/pvc-wpc-ply" element={<PVCWPCPage />} />
          <Route path="/products/wpc-doors" element={<WPCDoorPage />} />
          <Route path="/products/prelaminate-ply" element={<PrelaminatePlyPage />} />
          <Route path="/products/wpc-door-frames" element={<WPCDoorFramePage />} />
          <Route path="/products/pvc-marble-sheets" element={<PVCMarbleSheetPage />} />
          
          <Route path="/applications/kitchen" element={<KitchenApplicationPage />} />
          <Route path="/applications/wardrobe" element={<WardrobeApplicationPage />} />
          <Route path="/applications/office" element={<OfficeApplicationPage />} />
          <Route path="/applications/doors" element={<DoorsApplicationPage />} />
          <Route path="/applications/wpc-grills" element={<WPCGrillsApplicationPage />} />
          <Route path="/applications/3d-panels" element={<Panels3DApplicationPage />} />
          <Route path="/applications/shuttering" element={<ShutteringApplicationPage />} />
          <Route path="/applications/other" element={<OtherApplicationsPage />} />
          
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-quote" element={<GetQuotePage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/gallery" element={<AdminGalleryPage />} />
          <Route path="/admin/news" element={<AdminNewsPage />} />
          
          <Route path="*" element={<HomePage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
