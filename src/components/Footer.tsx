import { Coffee, Instagram, Facebook, MessageCircle, MapPin, Phone, Clock, Mail, Heart } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface FooterProps {
  onOpenMenuModal: () => void;
  onOpenStoryModal: () => void;
}

export default function Footer({ onOpenMenuModal, onOpenStoryModal }: FooterProps) {
  const currentYear = 2026; // As specified in the example: © 2026 Brew & Bloom. All rights reserved.

  return (
    <footer
      id="main-footer"
      className="bg-[#201A17] text-[#FAF7F2] pt-16 pb-24 md:pb-16 border-t border-[#362C26]"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 id="footer-heading" className="sr-only">Footer Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Col 1: Logo & Short Description (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a
              id="footer-brand-logo"
              href="#home"
              className="flex items-center gap-2.5 mb-4 group"
              aria-label="Brew & Bloom Home"
            >
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#A35C3A]">
                <Coffee className="w-4 h-4 text-[#EADBCC]" />
              </div>
              <span className="font-serif tracking-widest text-lg font-bold text-white uppercase">
                BREW &amp; BLOOM
              </span>
            </a>

            <p className="text-sm text-[#B8AAA0] leading-relaxed max-w-sm mb-6">
              A neighborhood café dedicated to single-origin brews, fresh-baked pastries, and slow mornings in the heart of Mumbai.
            </p>

            {/* Social Icons requested: Instagram, Facebook, WhatsApp */}
            <div className="flex items-center gap-3">
              <a
                id="social-instagram-link"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#A35C3A] text-white flex items-center justify-center transition-colors duration-200"
                aria-label="Follow Brew & Bloom on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                id="social-facebook-link"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#A35C3A] text-white flex items-center justify-center transition-colors duration-200"
                aria-label="Visit Brew & Bloom Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                id="social-whatsapp-link"
                href={`https://wa.me/${CAFE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors duration-200"
                aria-label="Chat with Brew & Bloom on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-sm font-bold tracking-wider uppercase text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-[#B8AAA0]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Featured Menu
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenMenuModal}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Full Menu
                </button>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenStoryModal}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Story
                </button>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Opening Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-sm font-bold tracking-wider uppercase text-white mb-4">
              Opening Hours
            </h3>
            <div className="space-y-2.5 text-sm text-[#B8AAA0]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#A35C3A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Monday &ndash; Sunday</div>
                  <div>8:00 AM &ndash; 10:00 PM</div>
                </div>
              </div>
              <div className="pt-2 text-xs text-[#998A80]">
                Kitchen closes at 9:30 PM.<br />
                Coffee &amp; pastries available till close.
              </div>
            </div>
          </div>

          {/* Col 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-sm font-bold tracking-wider uppercase text-white mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm text-[#B8AAA0]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A35C3A] shrink-0 mt-0.5" />
                <span>{CAFE_INFO.address}, {CAFE_INFO.city}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A35C3A] shrink-0" />
                <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-white transition-colors">
                  {CAFE_INFO.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A35C3A] shrink-0" />
                <a href={`mailto:${CAFE_INFO.email}`} className="hover:text-white transition-colors">
                  {CAFE_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7D73]">
          <p id="copyright-text">
            &copy; {currentYear} {CAFE_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Good coffee. Slow mornings. Better moments.</span>
            <Heart className="w-3 h-3 text-[#A35C3A]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
