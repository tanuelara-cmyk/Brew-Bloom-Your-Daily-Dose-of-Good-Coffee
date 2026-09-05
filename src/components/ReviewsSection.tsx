import { motion } from 'motion/react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/cafeData';

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-[#F4EFEA]/40 border-t border-[#E8DFD5]/60"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header - Compact and Elegant */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E8DFD5] text-[#A35C3A] text-xs font-semibold tracking-widest uppercase mb-2.5"
          >
            <Star className="w-3.5 h-3.5 fill-[#A35C3A]" />
            <span>Community Stories</span>
          </motion.div>

          <motion.h2
            id="reviews-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-serif font-semibold text-[#28211E] tracking-tight"
          >
            Loved by Coffee People
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-[#574B43] mt-2 font-light"
          >
            What our regulars say about their mornings at Brew &amp; Bloom.
          </motion.p>
        </div>

        {/* 3 Realistic Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              key={review.id}
              id={`testimonial-${review.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFD5]/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#A35C3A]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#A35C3A]" />
                  ))}
                </div>

                {/* Exact user quote */}
                <p className="text-sm sm:text-[15px] text-[#28211E] font-serif italic leading-relaxed mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#F4EFEA] flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#28211E]">
                    &mdash; {review.name}
                  </h3>
                  {review.role && (
                    <p className="text-[11px] text-[#7A6C63] mt-0.5">
                      {review.role}
                    </p>
                  )}
                </div>

                {review.favoriteItem && (
                  <span className="text-[10px] text-[#A35C3A] bg-[#F4EFEA] px-2 py-0.5 rounded-md font-medium">
                    Order: {review.favoriteItem.split(' ')[0]}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
