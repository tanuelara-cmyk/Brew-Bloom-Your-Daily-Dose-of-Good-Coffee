import { useState, useMemo } from 'react';
import { X, Search, Coffee, Sparkles, MessageCircle, Check } from 'lucide-react';
import { FULL_MENU, CAFE_INFO } from '../data/cafeData';
import { MenuItem } from '../types';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: MenuItem | null;
}

export default function MenuModal({ isOpen, onClose, selectedItem }: MenuModalProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [orderedNotice, setOrderedNotice] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'coffee', label: 'Hot Brews & Espresso' },
    { id: 'cold', label: 'Chilled & Cold Brew' },
    { id: 'bakery', label: 'Artisan Bakery' },
    { id: 'savory', label: 'Savory Plates' },
    { id: 'dessert', label: 'Desserts' },
  ];

  const filteredItems = useMemo(() => {
    return FULL_MENU.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  if (!isOpen) return null;

  const handleOrderWhatsApp = (item: MenuItem) => {
    const text = encodeURIComponent(
      `Hi Brew & Bloom! I would like to order: ${item.name} (₹${item.price}). Please confirm table / delivery availability.`
    );
    window.open(`https://wa.me/${CAFE_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
    setOrderedNotice(`Opening WhatsApp for ${item.name}...`);
    setTimeout(() => setOrderedNotice(null), 4000);
  };

  return (
    <div
      id="full-menu-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="full-menu-title"
    >
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative bg-[#FAF7F2] w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl border border-[#E8DFD5] flex flex-col overflow-hidden z-10 my-auto">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-white border-b border-[#E8DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A35C3A] uppercase mb-1">
              <Coffee className="w-3.5 h-3.5" />
              <span>Artisan Food &amp; Coffee Menu</span>
            </div>
            <h2 id="full-menu-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#28211E]">
              Brew &amp; Bloom Menu
            </h2>
            <p className="text-xs sm:text-sm text-[#736359] mt-0.5">
              Prepared to order with single-origin beans and farm-fresh ingredients.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick call link */}
            <a
              id="modal-call-link"
              href={`tel:${CAFE_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-[#D8CDC1] hover:bg-[#F3EEE7] text-[#28211E]"
            >
              <span>Call: {CAFE_INFO.displayPhone}</span>
            </a>

            <button
              id="close-menu-modal-btn"
              onClick={onClose}
              className="p-2.5 rounded-full hover:bg-[#F3EEE7] text-[#574B43] hover:text-[#28211E] transition-colors focus:outline-none"
              aria-label="Close menu modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter bar & search */}
        <div className="px-6 py-4 bg-[#FAF7F2] border-b border-[#E8DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-btn-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#28211E] text-[#FAF7F2] shadow-xs'
                    : 'bg-white text-[#574B43] border border-[#E8DFD5] hover:bg-[#F4EFEA]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[200px]">
            <Search className="w-4 h-4 text-[#8C7B71] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="menu-search-input"
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-full bg-white border border-[#E8DFD5] text-[#28211E] placeholder:text-[#8C7B71] focus:outline-none focus:ring-1 focus:ring-[#A35C3A]"
            />
          </div>
        </div>

        {/* WhatsApp Notification Banner if triggered */}
        {orderedNotice && (
          <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-2 text-xs font-medium text-emerald-800 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              {orderedNotice}
            </span>
          </div>
        )}

        {/* Menu Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-[#736359]">
              <p className="text-base font-serif">No menu items found</p>
              <p className="text-xs mt-1">Try searching for coffee, croissant, or cold brew</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => {
                const isHighlighted = selectedItem?.id === item.id;
                return (
                  <div
                    key={item.id}
                    id={`menu-modal-item-${item.id}`}
                    className={`bg-white p-4 rounded-2xl border transition-all duration-200 flex gap-4 items-center justify-between ${
                      isHighlighted
                        ? 'border-[#A35C3A] ring-2 ring-[#A35C3A]/20 shadow-sm'
                        : 'border-[#E8DFD5]/80 hover:border-[#D0C2B4]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 flex-1 min-w-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#F3EEE7]"
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif font-bold text-sm text-[#28211E] truncate">
                            {item.name}
                          </h4>
                          {item.dietary && (
                            <span className="shrink-0 text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-medium">
                              {item.dietary === 'veg' ? 'Veg' : 'Vegan'}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#574B43] line-clamp-1 mt-0.5">
                          {item.description}
                        </p>
                        <div className="text-xs font-semibold text-[#A35C3A] mt-1">
                          ₹{item.price}
                        </div>
                      </div>
                    </div>

                    <button
                      id={`modal-order-btn-${item.id}`}
                      onClick={() => handleOrderWhatsApp(item)}
                      title="Order on WhatsApp"
                      className="shrink-0 px-3 py-2 rounded-xl text-xs font-medium bg-[#28211E] text-[#FAF7F2] hover:bg-[#A35C3A] transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span className="hidden sm:inline">Order</span>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E8DFD5] flex items-center justify-between text-xs text-[#736359]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#A35C3A]" />
            <span>Taxes included. Milk substitutes (Oat / Almond) available upon request (+₹40).</span>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#28211E] hover:underline"
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  );
}
