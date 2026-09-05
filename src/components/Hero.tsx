import { motion } from 'motion/react';
import { Coffee, MapPin, Sparkles, ArrowDown } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface HeroProps {
  onOpenMenuModal: () => void;
}

export default function Hero({ onOpenMenuModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
      aria-label="Welcome to Brew & Bloom"
    >
      {/* Soft background ambient glow */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#EFE7DE]/50 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Description, CTAs, Trust Line */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEE7] border border-[#E8DFD5] text-[#A35C3A] text-xs font-semibold tracking-wider uppercase mb-5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{CAFE_INFO.tagline}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              id="hero-main-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-[#28211E] tracking-tight leading-[1.12] mb-5"
            >
              Your Daily Dose of <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#A35C3A] relative">
                Good Coffee.
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-[#A35C3A]/25"
                  viewBox="0 0 100 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2 9C28 2 72 2 98 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            {/* Short Description */}
            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-[#574B43] leading-relaxed max-w-xl mb-8 font-light"
            >
              Freshly brewed coffee, handcrafted bites and a cozy space made for conversations, work and slow mornings.
            </motion.p>

            {/* Buttons: View Our Menu & Visit Us */}
            <motion.div
              id="hero-cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto"
            >
              <button
                id="hero-view-menu-btn"
                onClick={onOpenMenuModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-medium text-sm sm:text-base bg-[#28211E] text-[#FAF7F2] hover:bg-[#3E332E] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A35C3A]"
              >
                <Coffee className="w-4 h-4 text-[#FAF7F2]/80 transition-transform group-hover:scale-110" />
                <span>View Our Menu</span>
              </button>

              <a
                id="hero-visit-us-btn"
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-medium text-sm sm:text-base bg-[#FAF7F2] text-[#28211E] border border-[#D8CDC1] hover:border-[#28211E] hover:bg-[#F4EFEA] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A35C3A]"
              >
                <MapPin className="w-4 h-4 text-[#A35C3A]" />
                <span>Visit Us</span>
              </a>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              id="hero-trust-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-2 text-xs sm:text-sm text-[#736359] font-medium tracking-wide"
            >
              <span>Freshly brewed</span>
              <span className="w-1 h-1 rounded-full bg-[#A35C3A]/60" aria-hidden="true" />
              <span>Locally loved</span>
              <span className="w-1 h-1 rounded-full bg-[#A35C3A]/60" aria-hidden="true" />
              <span>Made with care</span>
            </motion.div>
          </div>

          {/* Right Column: Hero Image with Floating effect and subtle decorative badge */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF7F2] bg-[#E8DFD5]/40 animate-subtle-float group">
                <div className="aspect-4/5 overflow-hidden">
                  <img
                    id="hero-main-image"
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"
                    alt="Artisanal freshly brewed cappuccino with latte art on a warm rustic table at Brew & Bloom"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                </div>

                {/* Subtle soft gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#28211E]/40 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Decorative Caption inside image corner */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[#FAF7F2] text-xs">
                  <div className="bg-[#28211E]/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-medium tracking-wide">Open Now &bull; 8:00 AM &ndash; 10:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Badge: Coffee Roast notes */}
              <div
                id="hero-decorative-badge"
                className="absolute -bottom-5 -left-4 sm:-left-8 bg-[#FAF7F2] border border-[#E8DFD5] shadow-lg rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 z-10 transition-transform duration-300 hover:scale-105"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F3EEE7] text-[#A35C3A] flex items-center justify-center border border-[#E8DFD5]">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-serif font-bold text-[#28211E]">
                    100% Arabica
                  </div>
                  <div className="text-[11px] text-[#736359]">
                    Single estate Chikmagalur beans
                  </div>
                </div>
              </div>

              {/* Subtle background decorative leaf ring */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-dashed border-[#A35C3A]/30 -z-10 animate-spin"
                style={{ animationDuration: '40s' }}
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator prompt */}
        <div className="hidden lg:flex justify-center mt-12 text-[#928277]">
          <a
            href="#menu"
            className="flex flex-col items-center gap-1.5 text-xs tracking-wider uppercase hover:text-[#28211E] transition-colors"
            aria-label="Scroll to menu section"
          >
            <span>Explore</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
