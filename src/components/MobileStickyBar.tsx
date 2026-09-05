import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function MobileStickyBar() {
  const whatsappUrl = `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Brew & Bloom! 👋 I would like to check table availability or place an order.'
  )}`;

  return (
    <aside
      id="mobile-sticky-cta-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8DFD5] shadow-[0_-4px_12px_rgba(0,0,0,0.06)] px-4 py-2"
      aria-label="Quick Actions"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          id="mobile-bar-call-btn"
          href={`tel:${CAFE_INFO.phone}`}
          className="flex items-center justify-center gap-1.5 min-h-[44px] py-2 px-2 rounded-xl bg-white border border-[#E8DFD5] text-[#28211E] text-xs font-semibold shadow-2xs active:bg-[#F4EFEA] transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#A35C3A]" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          id="mobile-bar-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 min-h-[44px] py-2 px-2 rounded-xl bg-[#25D366] text-white text-xs font-semibold shadow-2xs active:bg-[#20BE5C] transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a
          id="mobile-bar-directions-btn"
          href={CAFE_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 min-h-[44px] py-2 px-2 rounded-xl bg-[#28211E] text-[#FAF7F2] text-xs font-semibold shadow-2xs active:bg-[#3E332E] transition-colors"
        >
          <Navigation className="w-3.5 h-3.5 text-[#FAF7F2]" />
          <span>Directions</span>
        </a>
      </div>
    </aside>
  );
}
