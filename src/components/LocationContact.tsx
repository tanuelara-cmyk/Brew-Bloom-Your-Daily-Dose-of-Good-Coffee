import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink, Plus, Minus } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function LocationContact() {
  const [zoomLevel, setZoomLevel] = useState(1);

  const whatsappUrl = `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Brew & Bloom! 👋 I would like to visit the café. Could you share seating availability or directions?'
  )}`;

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#E8DFD5]/70"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Contact details & Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EFEA] border border-[#E8DFD5] text-[#A35C3A] text-xs font-semibold tracking-widest uppercase mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#A35C3A]" />
              <span>Find Your Corner</span>
            </div>

            {/* Heading */}
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#28211E] tracking-tight mb-4"
            >
              Come Say Hello.
            </h2>

            <p className="text-base text-[#574B43] font-light mb-8">
              We&apos;re tucked away in the leafy heart of Park Street. Walk in for your early morning espresso or unwind over slow conversation.
            </p>

            {/* Info Badges Card */}
            <div className="w-full bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs space-y-5 mb-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#A35C3A] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#736359] uppercase tracking-wider">
                    Address
                  </div>
                  <div className="text-base font-serif font-bold text-[#28211E] mt-0.5">
                    {CAFE_INFO.address}, {CAFE_INFO.city}
                  </div>
                  <div className="text-xs text-[#736359] mt-0.5">
                    Landmark: Near Historic Park Circle
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#A35C3A] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#736359] uppercase tracking-wider">
                    Opening Hours
                  </div>
                  <div className="text-base font-serif font-bold text-[#28211E] mt-0.5">
                    {CAFE_INFO.hours}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Serving hot fresh bakes daily</span>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#A35C3A] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#736359] uppercase tracking-wider">
                    Phone &amp; Reservations
                  </div>
                  <a
                    href={`tel:${CAFE_INFO.phone}`}
                    className="text-base font-serif font-bold text-[#28211E] hover:text-[#A35C3A] transition-colors mt-0.5 block"
                  >
                    {CAFE_INFO.displayPhone}
                  </a>
                  <div className="text-xs text-[#736359] mt-0.5">
                    Walk-ins always welcome
                  </div>
                </div>
              </div>
            </div>

            {/* Three Strong Conversion Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              <a
                id="contact-get-directions-btn"
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-[#28211E] text-[#FAF7F2] hover:bg-[#3E332E] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2 shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#FAF7F2]/90" />
                <span>Get Directions</span>
              </a>

              <a
                id="contact-call-us-btn"
                href={`tel:${CAFE_INFO.phone}`}
                className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white text-[#28211E] border border-[#D8CDC1] hover:bg-[#F4EFEA] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#A35C3A]" />
                <span>Call Us</span>
              </a>

              <a
                id="contact-whatsapp-us-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-[#25D366] text-white hover:bg-[#20BE5C] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Maps-style location placeholder / map area */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-[#E8DFD5] aspect-4/3 sm:aspect-16/10 flex flex-col justify-between group">
              {/* Styled Vector Map Canvas Mockup */}
              <div
                className="absolute inset-0 bg-[#EFE9E1] transition-transform duration-500 ease-out"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'center center',
                }}
              >
                {/* SVG roads, blocks & water illustration representing South Mumbai / Park St */}
                <svg className="w-full h-full opacity-65" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="street-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                      <rect width="80" height="80" fill="#F4EFEA" />
                      <path d="M 0 40 L 80 40 M 40 0 L 40 80" stroke="#E1D7CC" strokeWidth="6" fill="none" />
                      <path d="M 0 80 L 80 80 M 80 0 L 80 80" stroke="#DDD2C6" strokeWidth="8" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#street-grid)" />
                  
                  {/* Parks & green zones */}
                  <rect x="15%" y="20%" width="18%" height="22%" rx="8" fill="#DCE5D8" stroke="#CDDAC8" strokeWidth="1" />
                  <rect x="65%" y="55%" width="22%" height="28%" rx="8" fill="#DCE5D8" stroke="#CDDAC8" strokeWidth="1" />
                  
                  {/* Diagonal main avenue: Park Street */}
                  <path d="M-50 400 L 900 -50" stroke="#CBBFB2" strokeWidth="24" fill="none" />
                  <path d="M-50 400 L 900 -50" stroke="#FFFBF5" strokeWidth="18" fill="none" strokeDasharray="16 10" />

                  {/* Street Labels */}
                  <text x="35%" y="60%" fill="#7A6C63" fontSize="12" fontWeight="600" letterSpacing="2">
                    PARK STREET
                  </text>
                  <text x="18%" y="32%" fill="#5E7058" fontSize="11" fontWeight="500">
                    OVAL HERITAGE GARDENS
                  </text>
                  <text x="68%" y="70%" fill="#5E7058" fontSize="11" fontWeight="500">
                    COLABA PROMENADE
                  </text>
                </svg>

                {/* Central Cafe Marker Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-10">
                  {/* Pulse wave around pin */}
                  <span className="absolute -top-3 w-16 h-16 rounded-full bg-[#A35C3A]/20 animate-ping" />
                  
                  {/* Info bubble */}
                  <div className="bg-[#28211E] text-[#FAF7F2] px-3.5 py-1.5 rounded-xl shadow-lg text-xs font-serif font-bold whitespace-nowrap mb-1 flex items-center gap-1.5 border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-[#A35C3A]" />
                    <span>BREW &amp; BLOOM</span>
                  </div>

                  {/* Pin icon */}
                  <div className="w-10 h-10 rounded-full bg-[#A35C3A] text-white flex items-center justify-center shadow-md border-2 border-white">
                    <MapPin className="w-5 h-5 fill-white" />
                  </div>
                </div>
              </div>

              {/* Map Controls Header */}
              <div className="relative z-20 p-4 flex items-center justify-between">
                <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#E8DFD5] shadow-xs text-xs font-medium text-[#28211E] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>24 Park Street, Mumbai</span>
                </div>

                <div className="flex items-center gap-1 bg-white/95 backdrop-blur-md p-1 rounded-xl border border-[#E8DFD5] shadow-xs">
                  <button
                    onClick={() => setZoomLevel((prev) => Math.min(prev + 0.2, 1.6))}
                    className="p-1.5 hover:bg-[#F4EFEA] text-[#28211E] rounded-lg transition-colors"
                    title="Zoom in"
                    aria-label="Zoom in map"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setZoomLevel((prev) => Math.max(prev - 0.2, 0.8))}
                    className="p-1.5 hover:bg-[#F4EFEA] text-[#28211E] rounded-lg transition-colors"
                    title="Zoom out"
                    aria-label="Zoom out map"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Map Footer Prompt with direct Google Maps link */}
              <div className="relative z-20 p-4">
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/95 backdrop-blur-md hover:bg-white text-[#28211E] p-3 rounded-2xl border border-[#E8DFD5] shadow-sm flex items-center justify-between text-xs font-medium transition-all group-hover:border-[#A35C3A]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#FAF7F2] text-[#A35C3A] flex items-center justify-center">
                      <Navigation className="w-3.5 h-3.5" />
                    </div>
                    <span>Open in Google Maps for live directions &amp; traffic</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#A35C3A]" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
