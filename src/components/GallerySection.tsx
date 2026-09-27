/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS } from "../data";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ["Todos", "Estrutura", "Equipamentos", "Aulas"];

  // Filter gallery items based on selected tab category
  const filteredItems = selectedCategory === "Todos"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  // Close lightbox helper
  const closeLightbox = () => setSelectedImageIndex(null);

  // Show previous image in lightbox
  const showPrevImage = () => {
    if (selectedImageIndex === null) return;
    const prevIndex = selectedImageIndex === 0 ? filteredItems.length - 1 : selectedImageIndex - 1;
    setSelectedImageIndex(prevIndex);
  };

  // Show next image in lightbox
  const showNextImage = () => {
    if (selectedImageIndex === null) return;
    const nextIndex = selectedImageIndex === filteredItems.length - 1 ? 0 : selectedImageIndex + 1;
    setSelectedImageIndex(nextIndex);
  };

  // Listen to keyboard press events (Escape and left/right arrows)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrevImage();
      if (e.key === "ArrowRight") showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, selectedCategory]);

  return (
    <section id="estrutura" className="py-24 bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-brand-yellow text-glow-yellow mb-2 inline-block">
              VISUALIZE NOSSOS TREINOS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              GALERIA
            </h2>
          </div>

          {/* Filtering Tabs */}
          <div id="gallery-category-tabs" className="flex flex-wrap gap-2 md:gap-3 bg-brand-black/45 p-1.5 rounded border border-white/5 self-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedImageIndex(null);
                }}
                className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider rounded transition-all duration-300 pointer-events-auto cursor-pointer ${
                  selectedCategory === category
                    ? "bg-brand-yellow text-brand-black shadow-neon-yellow"
                    : "text-brand-gray hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              // Get the absolute index of this item in the global system context to allow seamless navigation
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => setSelectedImageIndex(idx)}
                  className="relative h-[250px] sm:h-[280px] lg:h-[300px] rounded overflow-hidden shadow-2xl group border border-white/5 cursor-pointer"
                >
                  {/* Gallery Image */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Dark mask overlay */}
                  <div className="absolute inset-0 bg-brand-black/00 group-hover:bg-brand-black/75 transition-colors duration-400 flex flex-col justify-end p-6" />

                  {/* Icon/Metadata showing up on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[10px] font-display font-extrabold uppercase text-brand-yellow tracking-[0.2em] mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-display font-black text-white text-lg tracking-wide uppercase">
                      {item.title}
                    </h3>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-brand-yellow/10 border border-brand-yellow/20 rounded-full flex items-center justify-center text-brand-yellow opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              id="gallery-lightbox-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-brand-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-charcoal border border-white/10 flex items-center justify-center text-white hover:text-brand-yellow hover:border-brand-yellow transition-colors duration-200 z-50 cursor-pointer"
              >
                <X size={22} />
              </button>

              {/* Prev Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevImage();
                }}
                className="absolute left-6 w-12 h-12 rounded-full bg-brand-charcoal border border-white/10 flex items-center justify-center text-white hover:text-brand-yellow hover:border-brand-yellow transition-colors duration-200 z-50 cursor-pointer"
                aria-label="Imagem Anterior"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNextImage();
                }}
                className="absolute right-6 w-12 h-12 rounded-full bg-brand-charcoal border border-white/10 flex items-center justify-center text-white hover:text-brand-yellow hover:border-brand-yellow transition-colors duration-200 z-50 cursor-pointer"
                aria-label="Próxima Imagem"
              >
                <ChevronRight size={22} />
              </button>

              {/* Lightbox Content Sheet */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[85vh] flex flex-col justify-center items-center pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredItems[selectedImageIndex].imageUrl}
                  alt={filteredItems[selectedImageIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[72vh] object-contain rounded border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                />

                <div className="w-full text-center mt-6">
                  <span className="text-xs font-display font-extrabold uppercase text-brand-yellow tracking-[0.25em]">
                    {filteredItems[selectedImageIndex].category}
                  </span>
                  <h4 className="font-display font-black text-xl text-white tracking-widest uppercase mt-1">
                    {filteredItems[selectedImageIndex].title}
                  </h4>
                  <p className="font-sans text-[10px] text-brand-gray mt-2">
                    Foto {selectedImageIndex + 1} de {filteredItems.length}
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
