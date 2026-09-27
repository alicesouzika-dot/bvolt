/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { DIFERENCIAIS_ITEMS } from "../data";

export default function DifferentialsSection() {
  return (
    <section id="estrutura" className="py-24 bg-brand-black relative">
      {/* Background glow layers */}
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-brand-yellow/[0.04] rounded-full blur-[120px]  hidden md:block pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[350px] h-[350px] bg-brand-yellow/[0.03] rounded-full blur-[100px]  hidden md:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-brand-yellow text-glow-yellow mb-2 inline-block">
            VIVA A EXPERIÊNCIA BVOLT
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mb-4">
            DIFERENCIAIS
          </h2>
          <div className="w-16 h-1.5 bg-brand-yellow mx-auto mb-6" />
          <p className="font-sans text-brand-gray text-sm sm:text-base leading-relaxed">
            Na BVolt, cada detalhe é planejado para elevar seu rendimento físico e assegurar máximo conforto. Veja os pilares de nossa excelência.
          </p>
        </div>

        {/* 6 Premium Cards */}
        <div id="differentials-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFERENCIAIS_ITEMS.map((diff, idx) => (
            <motion.div
              key={diff.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative p-8 rounded-lg bg-brand-charcoal border border-white/5 transition-all duration-300 hover:border-brand-yellow/30 hover:-translate-y-1.5 shadow-2xl shadow-neon-yellow-hover group overflow-hidden"
            >
              {/* Outer decorative light-up corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card Title */}
              <h3 className="font-display font-[900] text-lg text-white uppercase tracking-wider mb-3 transition-colors duration-200 group-hover:text-brand-yellow">
                {diff.title}
              </h3>

              {/* Card Description */}
              <p className="font-sans text-xs text-brand-gray leading-relaxed font-medium transition-colors duration-200 group-hover:text-white/80">
                {diff.description}
              </p>

              {/* Optional card image */}
              {diff.imageUrl && (
                <div id={`diff-image-container-${diff.id}`} className="mt-5 rounded-md overflow-hidden border border-white/10 aspect-video relative group-hover:border-brand-yellow/20 transition-all duration-300">
                  <img
                    id={`diff-img-${diff.id}`}
                    src={diff.imageUrl}
                    alt={diff.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}

              {/* Bottom decorative neon strike */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
