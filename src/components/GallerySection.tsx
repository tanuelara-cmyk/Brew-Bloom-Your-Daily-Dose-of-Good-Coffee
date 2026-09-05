import { useState } from 'react';
import type { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Camera, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cafeData';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  };

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#E8DFD5]/70"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EFEA] border border-[#E8DFD5] text-[#A35C3A] text-xs font-semibold tracking-widest uppercase mb-3"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Moments &amp; Spaces</span>
          </motion.div>

          <motion.h2
            id="gallery-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-[#28211E] tracking-tight mb-4"
          >
            Glimpses of Brew &amp; Bloom
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#574B43] font-light"
          >
            A cozy sanctuary crafted for quiet mornings, warm reunions, and mindful coffee pauses.
          </motion.p>
        </div>

        {/* 6-image modern grid with rounded corners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              id={`gallery-item-${item.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-[#F3EEE7] shadow-xs hover:shadow-lg border border-[#E8DFD5] cursor-pointer"
            >
              {/* Image with gentle hover zoom */}
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Subtle dark overlay */}
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex flex-col justify-between p-5 opacity-0 group-hover:opacity-100"
                aria-hidden="true"
              >
                <div className="self-end">
                  <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs text-[#28211E] flex items-center justify-center shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Search className="w-4 h-4" />
                  </div>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FAF7F2]/80">
                    {item.category}
                  </span>
                  <h3 className="font-serif font-bold text-base text-white mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Enlarged photo gallery view"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_ITEMS[activeLightboxIndex].image}
              alt={GALLERY_ITEMS[activeLightboxIndex].alt}
              className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/20"
            />
            <div className="mt-4 text-center text-white">
              <p className="font-serif font-bold text-lg">
                {GALLERY_ITEMS[activeLightboxIndex].title}
              </p>
              <p className="text-xs sm:text-sm text-[#D8CDC1] mt-1 max-w-lg">
                {GALLERY_ITEMS[activeLightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
