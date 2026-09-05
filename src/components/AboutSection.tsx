import { motion } from 'motion/react';
import { Sparkles, Heart, Coffee, BookOpen } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface AboutSectionProps {
  onOpenStoryModal: () => void;
}

export default function AboutSection({ onOpenStoryModal }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#FAF7F2] overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Image slides & fades in from the left */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-[#E8DFD5]/40 group">
              <div className="aspect-4/3 sm:aspect-5/4 overflow-hidden">
                <img
                  id="about-main-image"
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                  alt="Brew and Bloom cozy café interior with warm wooden tables and natural sunlight"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Subtle inner overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#28211E]/40 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Floating badge over image */}
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#E8DFD5] shadow-xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#A35C3A] flex items-center justify-center font-serif font-bold text-xs">
                  BB
                </div>
                <div>
                  <p className="text-xs font-serif font-bold text-[#28211E]">The Neighborhood Table</p>
                  <p className="text-[11px] text-[#736359]">Quiet corners &bull; High-speed Wi-Fi &bull; Natural light</p>
                </div>
              </div>
            </div>

            {/* Decorative background accent card */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-3xl border-2 border-[#A35C3A]/20 -z-10 hidden sm:block"
              aria-hidden="true"
            />
          </motion.div>

          {/* Right Column: Text slides & fades in from the right */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EFEA] border border-[#E8DFD5] text-[#A35C3A] text-xs font-semibold tracking-widest uppercase mb-4">
              <Heart className="w-3.5 h-3.5 text-[#A35C3A]" />
              <span>Our Philosophy</span>
            </div>

            {/* Heading */}
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#28211E] tracking-tight mb-6 leading-[1.2]"
            >
              More Than Just Coffee.
            </h2>

            {/* Text description */}
            <p className="text-base sm:text-lg text-[#574B43] font-light leading-relaxed mb-6">
              At Brew &amp; Bloom, we believe a café should feel like your favorite corner of the city. We serve carefully brewed coffee, comforting food and a warm atmosphere where you can slow down and enjoy the moment.
            </p>

            {/* Trust badge requested */}
            <div
              id="about-trust-badge"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-[#E8DFD5] text-xs sm:text-sm text-[#28211E] font-medium shadow-xs mb-8"
            >
              <Coffee className="w-4 h-4 text-[#A35C3A]" />
              <span>Since {CAFE_INFO.foundedYear} &bull; Serving the local community</span>
            </div>

            {/* Features check list */}
            <div className="grid grid-cols-2 gap-4 w-full mb-8 text-xs sm:text-sm text-[#574B43]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A35C3A]" />
                <span>Small batch roasting</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A35C3A]" />
                <span>Hand-laminated butter pastries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A35C3A]" />
                <span>Ethically sourced beans</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A35C3A]" />
                <span>Warm pet-friendly terrace</span>
              </div>
            </div>

            {/* Our Story Button */}
            <button
              id="about-our-story-btn"
              onClick={onOpenStoryModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm sm:text-base bg-[#28211E] text-[#FAF7F2] hover:bg-[#3E332E] shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A35C3A]"
            >
              <BookOpen className="w-4 h-4 text-[#FAF7F2]/80" />
              <span>Our Story</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
