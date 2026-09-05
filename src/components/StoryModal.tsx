import { X, Coffee, Heart, MapPin, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StoryModal({ isOpen, onClose }: StoryModalProps) {
  if (!isOpen) return null;

  return (
    <div
      id="story-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-[#FAF7F2] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#E8DFD5] overflow-hidden z-10 my-auto">
        {/* Cover Photo */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#28211E]">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
            alt="Coffee beans roasting"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#28211E] via-[#28211E]/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            aria-label="Close story modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-widest text-[#EADBCC] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#A35C3A]" />
              <span>Founded {CAFE_INFO.foundedYear} &bull; Mumbai</span>
            </span>
            <h2 id="story-modal-title" className="text-2xl sm:text-3xl font-serif font-bold mt-1 text-white">
              The Story of Brew &amp; Bloom
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-5 text-[#574B43] text-sm sm:text-base leading-relaxed max-h-[60vh] overflow-y-auto">
          <p>
            Brew &amp; Bloom began with a simple craving: a sanctuary in South Mumbai where the clock slows down, the espresso is extracted with obsessive precision, and strangers become familiar faces across reclaimed oak tables.
          </p>

          <h3 className="font-serif font-bold text-lg text-[#28211E] pt-2">
            Estate-Direct Beans from Chikmagalur
          </h3>
          <p>
            We partner directly with fourth-generation shade-grown estates nestled in the Bababudangiri hills. Our beans grow under silver oaks and fig trees at 4,200 feet, developing gentle stone-fruit sweetness and rich dark chocolate undertones that taste delicious in black pour-overs and creamy flat whites alike.
          </p>

          <h3 className="font-serif font-bold text-lg text-[#28211E] pt-2">
            Handcrafted with Intention
          </h3>
          <p>
            Nothing on our counters is rushed. Our sourdough ferments for 24 hours. Our butter croissants are hand-laminated before dawn. And our house cold brew is steeped gently on ice for 16 slow hours.
          </p>

          <div className="p-4 rounded-2xl bg-[#F4EFEA] border border-[#E8DFD5] flex items-center gap-3 text-xs text-[#28211E]">
            <Heart className="w-4 h-4 text-[#A35C3A] shrink-0" />
            <span>
              "We don't aim to be the biggest café in town — only the most thoughtful one you visit today."
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 bg-white border-t border-[#E8DFD5] flex items-center justify-between">
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A35C3A] hover:underline"
          >
            <MapPin className="w-4 h-4" />
            <span>Visit us at 24 Park Street</span>
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#28211E] text-white hover:bg-[#3E332E] transition-colors"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
}
