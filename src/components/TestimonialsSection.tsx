/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS_ITEMS } from "../data";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_ITEMS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const selectSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  const activeTestimonial = TESTIMONIALS_ITEMS[currentIndex];

  return (
    <section id="depoimentos" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-brand-yellow/5 rounded-full blur-[100px]  hidden md:block pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-[250px] h-[250px] bg-brand-yellow/[0.03] rounded-full blur-[90px]  hidden md:block pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Title */}
        <div id="testimonials-header" className="mb-16">
          <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-brand-yellow text-glow-yellow mb-2 inline-block">
            RESULTADOS COMPROVADOS E REAIS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mb-4">
            FEEDBACKS
          </h2>
          <div className="w-16 h-1.5 bg-brand-yellow mx-auto" />
        </div>

        {/* Testimonials Slider Wrapper */}
        <div className="relative bg-brand-charcoal/40 border border-white/5 rounded-xl px-6 py-12 sm:p-16 shadow-2xl">
          
          {/* Giant Quote icon backdrop */}
          <div className="absolute top-6 left-8 text-brand-yellow/10 pointer-events-none select-none">
            <Quote size={80} className="transform -scale-x-100" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              {/* Stars Row */}
              <div className="flex items-center gap-1.5 mb-6 text-brand-yellow">
                {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-current stroke-[2]" />
                ))}
              </div>

              {/* Comment text */}
              <blockquote className="font-sans text-brand-gray text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-medium italic">
                "{activeTestimonial.comment}"
              </blockquote>

              {/* User Bio Panel */}
              <div className="flex items-center gap-4 text-left">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-yellow shadow-neon-yellow">
                  <img
                    src={activeTestimonial.avatarUrl}
                    alt={activeTestimonial.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <cite className="not-italic font-display font-black text-white uppercase tracking-wider text-sm sm:text-base">
                    {activeTestimonial.name}
                  </cite>
                  <p className="font-sans text-[11px] text-brand-yellow font-semibold tracking-wider uppercase mt-0.5">
                    {activeTestimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-brand-charcoal hover:bg-brand-yellow hover:text-brand-black border border-white/5 flex items-center justify-center text-brand-gray transition-all pointer-events-auto cursor-pointer shadow-lg hover:scale-105"
              aria-label="Depoimento Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-brand-charcoal hover:bg-brand-yellow hover:text-brand-black border border-white/5 flex items-center justify-center text-brand-gray transition-all pointer-events-auto cursor-pointer shadow-lg hover:scale-105"
              aria-label="Próximo Depoimento"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Tracker Page Dots */}
        <div id="testimonials-tracker-dots" className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS_ITEMS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => selectSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 pointer-events-auto cursor-pointer ${
                currentIndex === idx
                  ? "bg-brand-yellow w-7 shadow-neon-yellow"
                  : "bg-brand-gray/30 hover:bg-brand-gray/60"
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
