import type { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Utensils, MessageCircle, ArrowRight } from 'lucide-react';
import { FEATURED_ITEMS, CAFE_INFO } from '../data/cafeData';
import { MenuItem } from '../types';

interface FeaturedMenuProps {
  onOpenMenuModal: () => void;
  onSelectItem?: (item: MenuItem) => void;
}

export default function FeaturedMenu({ onOpenMenuModal, onSelectItem }: FeaturedMenuProps) {
  const handleQuickOrderWhatsApp = (item: MenuItem, e: MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello Brew & Bloom! 👋 I would like to order: ${item.name} (₹${item.price}). Is it available for pick-up/dine-in?`
    );
    window.open(`https://wa.me/${CAFE_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="menu"
      className="py-20 md:py-28 bg-[#FAF7F2] relative"
      aria-labelledby="menu-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EFEA] border border-[#E8DFD5] text-[#A35C3A] text-xs font-semibold tracking-widest uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Selections</span>
          </motion.div>

          <motion.h2
            id="menu-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#28211E] tracking-tight mb-4"
          >
            A Few Favorites
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#574B43] font-light"
          >
            Every single item is roasted, hand-pressed, or oven-baked in-house each morning with simple, honest ingredients.
          </motion.p>
        </div>

        {/* 6 Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_ITEMS.map((item, index) => (
            <motion.article
              key={item.id}
              id={`featured-card-${item.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              onClick={() => onSelectItem ? onSelectItem(item) : onOpenMenuModal()}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8DFD5]/80 hover:border-[#D0C2B4] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image container with rounded corners and gentle hover zoom */}
                <div className="relative aspect-16/11 overflow-hidden bg-[#F3EEE7]">
                  <img
                    id={`menu-img-${item.id}`}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"
                    aria-hidden="true"
                  />

                  {/* Dietary badge */}
                  {item.dietary && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md text-[11px] font-semibold text-[#606E54] border border-[#E8DFD5] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span>{item.dietary === 'veg' ? '100% Veg' : 'Vegan'}</span>
                    </div>
                  )}

                  {/* Price Tag Pill - always clear and distinct */}
                  <div
                    id={`menu-price-${item.id}`}
                    className="absolute top-3 right-3 bg-[#28211E]/90 backdrop-blur-xs text-[#FAF7F2] px-3 py-1 rounded-full text-sm font-semibold tracking-wide shadow-xs"
                  >
                    ₹{item.price}
                  </div>
                </div>

                {/* Content info */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3
                      id={`menu-title-${item.id}`}
                      className="text-xl font-serif font-bold text-[#28211E] group-hover:text-[#A35C3A] transition-colors duration-200"
                    >
                      {item.name}
                    </h3>
                  </div>

                  <p
                    id={`menu-desc-${item.id}`}
                    className="text-sm text-[#574B43] leading-relaxed line-clamp-2"
                  >
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Quick Actions */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 flex items-center justify-between border-t border-[#F4EFEA] mt-2 pt-3">
                <span className="text-xs font-medium text-[#7A6C63] group-hover:text-[#28211E] transition-colors flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </span>

                <button
                  id={`order-whatsapp-btn-${item.id}`}
                  onClick={(e) => handleQuickOrderWhatsApp(item, e)}
                  title="Order via WhatsApp"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#F4EFEA] hover:bg-[#EADBCC] text-[#28211E] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Quick Order</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Explore Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <button
            id="explore-full-menu-btn"
            onClick={onOpenMenuModal}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-medium text-base bg-[#28211E] text-[#FAF7F2] hover:bg-[#3E332E] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A35C3A]"
          >
            <Utensils className="w-4 h-4 text-[#FAF7F2]/80" />
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-[#7A6C63] mt-3">
            Espresso &bull; Filter &bull; Artisan Pastries &bull; Sourdough Toasts &bull; Specialty Teas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
