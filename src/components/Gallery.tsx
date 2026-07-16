import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      imageUrl: 'https://images.unsplash.com/photo-1569437061241-a848be43cc82?auto=format&fit=crop&w=800&q=80',
      title: 'Zajedničke šetnje u prirodi',
      category: 'aktivnosti',
      aspectRatio: 'aspect-[4/5]',
      sizeClass: 'break-inside-avoid mb-6',
    },
    {
      id: 'gal-2',
      imageUrl: 'https://images.unsplash.com/photo-1507120410856-1f35574c3b45?auto=format&fit=crop&w=800&q=80',
      title: 'Ugodna i topla atmosfera doma',
      category: 'dom',
      aspectRatio: 'aspect-[16/10]',
      sizeClass: 'break-inside-avoid mb-6',
    },
    {
      id: 'gal-3',
      imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
      title: 'Pažljiva priprema zdravih obroka',
      category: 'njega',
      aspectRatio: 'aspect-[4/3]',
      sizeClass: 'break-inside-avoid mb-6',
    },
    {
      id: 'gal-4',
      imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
      title: 'Sigurnost i dodir podrške',
      category: 'njega',
      aspectRatio: 'aspect-square',
      sizeClass: 'break-inside-avoid mb-6',
    },
    {
      id: 'gal-5',
      imageUrl: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80',
      title: 'Mentalne vježbe i društvene igre',
      category: 'aktivnosti',
      aspectRatio: 'aspect-[4/5]',
      sizeClass: 'break-inside-avoid mb-6',
    },
    {
      id: 'gal-6',
      imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80',
      title: 'Stručna i sigurna kućna organizacija',
      category: 'strucnost',
      aspectRatio: 'aspect-[16/10]',
      sizeClass: 'break-inside-avoid mb-6',
    },
    {
      id: 'gal-7',
      imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
      title: 'Trenuci bliskosti i opuštanja',
      category: 'dom',
      aspectRatio: 'aspect-[4/3]',
      sizeClass: 'break-inside-avoid mb-6',
    },
    {
      id: 'gal-8',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      title: 'Koordinisana briga o zdravlju',
      category: 'strucnost',
      aspectRatio: 'aspect-[4/5]',
      sizeClass: 'break-inside-avoid mb-6',
    }
  ];

  const filters = [
    { value: 'all', label: 'Sve fotografije' },
    { value: 'njega', label: 'Profesionalna njega' },
    { value: 'aktivnosti', label: 'Dnevne aktivnosti' },
    { value: 'dom', label: 'Toplina doma' },
    { value: 'strucnost', label: 'Stručna podrška' },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImageIndex !== null) {
      const nextIndex = (selectedImageIndex + 1) % filteredItems.length;
      setSelectedImageIndex(nextIndex);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImageIndex !== null) {
      const prevIndex = (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedImageIndex(prevIndex);
    }
  };

  return (
    <section id="galerija" className="py-24 bg-[#fbfaf5] relative overflow-hidden">
      {/* Soft circles */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest">
            <Sparkles size={14} />
            <span>Galerija Golden Care</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Kroz objektiv našeg rada
          </h2>
          <div className="h-1 w-24 bg-gold-gradient mx-auto rounded-full" />
          <p className="font-sans text-slate-500 font-light text-base leading-relaxed">
            Pogledajte atmosferu povjerenja, topline i posvećenosti u trenucima koje naši partneri njegovatelji dijele sa korisnicima svakog dana.
          </p>
        </div>

        {/* Gallery Filter controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12" id="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => {
                setActiveFilter(filter.value);
                setSelectedImageIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none cursor-pointer ${
                activeFilter === filter.value
                  ? 'bg-gold-500 text-white shadow-md shadow-gold-500/15'
                  : 'bg-white text-slate-600 hover:bg-gold-50 hover:text-gold-600 border border-slate-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* CSS Column Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6" id="gallery-masonry-container">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className={`${item.sizeClass} group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gold-200/5 bg-white`}
                onClick={() => setSelectedImageIndex(index)}
              >
                {/* Main Image */}
                <div className={`relative w-full ${item.aspectRatio} overflow-hidden rounded-[2rem]`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glassy overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" />

                  {/* Icon zoom indicator on Hover */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <ZoomIn size={18} />
                  </div>

                  {/* Title text on Hover */}
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                    <span className="text-[10px] uppercase tracking-widest text-gold-200 font-bold mb-1 block">
                      {filters.find((f) => f.value === item.category)?.label}
                    </span>
                    <h4 className="font-display text-base font-bold text-white leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8"
              onClick={() => setSelectedImageIndex(null)}
              id="gallery-lightbox"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors cursor-pointer z-50"
                aria-label="Zatvori galeriju"
              >
                <X size={22} />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors cursor-pointer z-50"
                aria-label="Prethodna slika"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors cursor-pointer z-50"
                aria-label="Slijedeća slika"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Frame */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative max-w-4xl w-full max-h-[75vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredItems[selectedImageIndex].imageUrl}
                  alt={filteredItems[selectedImageIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />

                {/* Subtitle / Title Bar */}
                <div className="text-center mt-6 max-w-xl text-white space-y-1">
                  <h4 className="font-display text-lg font-semibold tracking-wide">
                    {filteredItems[selectedImageIndex].title}
                  </h4>
                  <p className="font-sans text-xs text-gold-300 font-medium uppercase tracking-widest">
                    {filters.find((f) => f.value === filteredItems[selectedImageIndex].category)?.label}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
