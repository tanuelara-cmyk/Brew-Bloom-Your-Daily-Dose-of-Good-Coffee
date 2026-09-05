import { motion } from 'motion/react';
import { Coffee, Croissant, Sparkles, Heart } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/cafeData';

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#A35C3A]" />;
      case 'Croissant':
        return <Croissant className="w-5 h-5 text-[#A35C3A]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#A35C3A]" />;
      case 'Heart':
      default:
        return <Heart className="w-5 h-5 text-[#A35C3A]" />;
    }
  };

  return (
    <section
      id="why-choose-us"
      className="py-16 md:py-24 bg-[#F4EFEA]/60 border-y border-[#E8DFD5]/60"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <motion.h2
            id="why-us-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-serif font-semibold text-[#28211E] tracking-tight"
          >
            The Brew &amp; Bloom Standard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#574B43] mt-2 font-light"
          >
            We take pride in doing the simple things exceptionally well.
          </motion.p>
        </div>

        {/* 4-column minimal section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              id={`why-card-${item.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white/80 rounded-2xl p-6 sm:p-7 border border-[#E8DFD5]/70 hover:border-[#D0C2B4] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center mb-5">
                  {getIcon(item.icon)}
                </div>

                <h3 className="font-serif font-bold text-lg text-[#28211E] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#574B43] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F4EFEA] flex items-center justify-between text-[11px] text-[#A35C3A] font-medium uppercase tracking-wider">
                <span>Guaranteed</span>
                <span className="w-1 h-1 rounded-full bg-[#A35C3A]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
