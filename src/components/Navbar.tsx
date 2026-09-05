import { useState, useEffect } from 'react';
import { Coffee, Menu as MenuIcon, X, ArrowRight } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface NavbarProps {
  onOpenMenuModal: () => void;
}

export default function Navbar({ onOpenMenuModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / totalHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* 12. Minimal Scroll Progress Indicator */}
      <div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-[2px] bg-[#A35C3A] z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* 1. Sticky Navigation Bar */}
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD5]/80 py-3.5'
            : 'bg-[#FAF7F2]/80 backdrop-blur-xs border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo with text & coffee/leaf icon */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A35C3A] rounded-md"
            aria-label="Brew & Bloom Home"
          >
            <div className="w-9 h-9 rounded-full bg-[#F3EEE7] border border-[#E8DFD5] flex items-center justify-center text-[#A35C3A] transition-transform duration-300 group-hover:rotate-6">
              <Coffee className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-widest text-lg font-bold text-[#28211E] uppercase leading-none">
                BREW &amp; BLOOM
              </span>
              <span className="text-[10px] tracking-wider text-[#705F55] uppercase font-medium mt-0.5">
                Coffee &bull; Roastery
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#4A3D36]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                className="relative py-1 text-[#4A3D36] hover:text-[#28211E] transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A35C3A] transition-all duration-200 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA: View Menu */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="navbar-view-menu-btn"
              onClick={onOpenMenuModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[#28211E] text-[#FAF7F2] hover:bg-[#3E332E] shadow-xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A35C3A]"
            >
              <span>View Menu</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#28211E] hover:bg-[#F3EEE7] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A35C3A]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Panel */}
      <div
        id="mobile-nav-backdrop"
        className={`fixed inset-0 bg-black/30 backdrop-blur-xs z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-nav-drawer"
        className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#FAF7F2] z-50 md:hidden shadow-xl border-l border-[#E8DFD5] flex flex-col justify-between p-6 transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header inside drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E8DFD5]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#F3EEE7] flex items-center justify-center text-[#A35C3A]">
                <Coffee className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-base text-[#28211E] tracking-wider uppercase">
                BREW &amp; BLOOM
              </span>
            </div>
            <button
              id="mobile-drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#574B43] hover:text-[#28211E] rounded-md"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col py-6 space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-[#28211E] hover:text-[#A35C3A] py-1 border-b border-dashed border-[#E8DFD5]/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="space-y-3 pt-6 border-t border-[#E8DFD5]">
          <button
            id="mobile-drawer-menu-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenMenuModal();
            }}
            className="w-full py-3 px-4 rounded-xl bg-[#28211E] text-[#FAF7F2] text-center font-medium flex items-center justify-center gap-2 text-sm shadow-xs"
          >
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            id="mobile-drawer-directions-btn"
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-[#F3EEE7] text-[#28211E] border border-[#E8DFD5] text-center font-medium block text-sm hover:bg-[#ECE4DC] transition-colors"
          >
            Get Directions
          </a>
          <p className="text-[11px] text-center text-[#7A6C63] pt-2">
            24 Park Street, Mumbai &bull; Open 8 AM &ndash; 10 PM
          </p>
        </div>
      </div>
    </>
  );
}
