import { motion } from 'motion/react';
import { Coffee, MapPin, ArrowRight, Heart } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface FinalCTAProps {
  onPlanVisit: () => void;
}

export default function FinalCTA({ onPlanVisit }: FinalCTAProps) {
  return (
    <section
      id="plan-visit"
      className="relative py-24 md:py-32 bg-[#28211E] text-[#FAF7F2] overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Very subtle background decorative moving coffee-bean / leaf shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {/* Floating subtle bean shape 1 */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-10 left-[10%] w-32 h-20 rounded-full border border-white/40"
        />

        {/* Floating subtle leaf shape 2 */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -12, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-12 right-[12%] w-40 h-28 rounded-full border border-[#A35C3A]"
        />

        {/* Floating subtle motif 3 */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/10"
        />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
        {/* Decorative Leaf / Cup Icon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-6 text-[#EADBCC]"
        >
          <Coffee className="w-5 h-5" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          id="final-cta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#FAF7F2] tracking-tight mb-4 leading-tight"
        >
          Coffee is better when shared.
        </motion.h2>

        {/* Description */}
        <motion.p
          id="final-cta-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#D8CDC1] font-light max-w-xl mx-auto mb-10"
        >
          Drop by for your next cup.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            id="final-plan-your-visit-btn"
            onClick={onPlanVisit}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-base bg-[#FAF7F2] text-[#28211E] hover:bg-[#FFFFFF] shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A35C3A]"
          >
            <MapPin className="w-4 h-4 text-[#A35C3A]" />
            <span>Plan Your Visit</span>
            <ArrowRight className="w-4 h-4 text-[#28211E]" />
          </button>

          <a
            id="final-whatsapp-inquire-btn"
            href={`https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Hi Brew & Bloom! I would like to plan a visit this week.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-full font-medium text-base bg-white/10 hover:bg-white/15 text-[#FAF7F2] border border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>Ask via WhatsApp</span>
          </a>
        </motion.div>

        {/* Small trust note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-xs text-[#A89A90] flex items-center justify-center gap-2"
        >
          <Heart className="w-3.5 h-3.5 text-[#A35C3A]" />
          <span>Walk-ins always welcomed &bull; Outdoor seating available &bull; Pet friendly</span>
        </motion.div>
      </div>
    </section>
  );
}
