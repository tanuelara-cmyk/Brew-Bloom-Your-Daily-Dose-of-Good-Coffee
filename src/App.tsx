import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedMenu from './components/FeaturedMenu';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import LocationContact from './components/LocationContact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import MenuModal from './components/MenuModal';
import StoryModal from './components/StoryModal';
import { MenuItem } from './types';

export default function App() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const handleOpenMenuModal = (item?: MenuItem) => {
    if (item) {
      setSelectedMenuItem(item);
    } else {
      setSelectedMenuItem(null);
    }
    setIsMenuModalOpen(true);
  };

  const handlePlanVisit = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#28211E] flex flex-col selection:bg-[#EADBCC] selection:text-[#28211E]">
      {/* 1. Navigation Bar with Scroll Progress & Mobile Drawer */}
      <Navbar onOpenMenuModal={() => handleOpenMenuModal()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenMenuModal={() => handleOpenMenuModal()} />

        {/* 3. Featured Menu ("A Few Favorites") */}
        <FeaturedMenu
          onOpenMenuModal={() => handleOpenMenuModal()}
          onSelectItem={(item) => handleOpenMenuModal(item)}
        />

        {/* 4. Why Choose Us (4 columns: Freshly Brewed, Freshly Made, Cozy Atmosphere, Made With Care) */}
        <WhyChooseUs />

        {/* 5. About Section ("More Than Just Coffee", "Since 2022") */}
        <AboutSection onOpenStoryModal={() => setIsStoryModalOpen(true)} />

        {/* 6. Gallery (6-image modern grid: coffee, interior, pastries, moments, breakfast, exterior) */}
        <GallerySection />

        {/* 7. Customer Reviews ("Loved by Coffee People") */}
        <ReviewsSection />

        {/* 8. Location / Contact ("Come Say Hello.", 24 Park Street, Mumbai, Map, CTAs) */}
        <LocationContact />

        {/* 9. Final CTA ("Coffee is better when shared.") */}
        <FinalCTA onPlanVisit={handlePlanVisit} />
      </main>

      {/* 10. Footer */}
      <Footer
        onOpenMenuModal={() => handleOpenMenuModal()}
        onOpenStoryModal={() => setIsStoryModalOpen(true)}
      />

      {/* Sticky Mobile Bottom CTA Bar: Call | WhatsApp | Directions */}
      <MobileStickyBar />

      {/* Interactive Full Menu Modal */}
      <MenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
        selectedItem={selectedMenuItem}
      />

      {/* Interactive Story Modal */}
      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />
    </div>
  );
}

