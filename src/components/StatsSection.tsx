/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { STATS_ITEMS } from "../data";
import { Award, ShieldAlert, CheckSquare, Target } from "lucide-react";

export default function StatsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Custom client counter hook emulation for numeric stats
  const [counts, setCounts] = useState({
    alunos: 0,
    equipamentos: 0,
    satisfacao: 0,
    anos: 0,
  });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCounts({
        alunos: Math.floor(progress * 500),
        equipamentos: Math.floor(progress * 20),
        satisfacao: Math.floor(progress * 95),
        anos: Math.floor(progress * 1),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      id="estatisticas"
      className="relative py-28 bg-brand-charcoal overflow-hidden text-center"
    >
      {/* Background Image structure */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540497077202-7c8a32792682?q=80&w=1200&auto=format&fit=crop')`,
          backgroundAttachment: "fixed" // Parallax-like floating style
        }}
      />
      
      {/* Heavy Black overlay to darken the photo and optimize reading contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-black/95 via-brand-black/90 to-brand-black/95 pointer-events-none" />

      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-[15%] w-[1px] bg-white/[0.02] z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[15%] w-[1px] bg-white/[0.02] z-10 pointer-events-none" />

      {/* Content flow */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* STAT 1: 500+ Alunos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center p-6 bg-brand-black/60 backdrop-blur-sm rounded border border-white/5"
          >
            <span className="font-display font-[900] text-4xl sm:text-5xl lg:text-6xl text-brand-yellow tracking-tighter text-glow-yellow">
              {isInView ? counts.alunos : 0}+
            </span>
            <span className="font-display font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider mt-3">
              Alunos Ativos
            </span>
            <p className="font-sans text-[11px] text-brand-gray mt-1 leading-relaxed">
              Comunidade focada em alta performance
            </p>
          </motion.div>

          {/* STAT 2: 20+ Equipamentos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center p-6 bg-brand-black/60 backdrop-blur-sm rounded border border-white/5"
          >
            <span className="font-display font-[900] text-4xl sm:text-5xl lg:text-6xl text-brand-yellow tracking-tighter text-glow-yellow">
              {isInView ? counts.equipamentos : 0}+
            </span>
            <span className="font-display font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider mt-3">
              Equipamentos importados
            </span>
            <p className="font-sans text-[11px] text-brand-gray mt-1 leading-relaxed">
              Biomecânica avançada de ponta
            </p>
          </motion.div>

          {/* STAT 3: 95% Satisfação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center p-6 bg-brand-black/60 backdrop-blur-sm rounded border border-white/5"
          >
            <span className="font-display font-[900] text-4xl sm:text-5xl lg:text-6xl text-brand-yellow tracking-tighter text-glow-yellow">
              {isInView ? counts.satisfacao : 0}%
            </span>
            <span className="font-display font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider mt-3">
              Satisfação Total
            </span>
            <p className="font-sans text-[11px] text-brand-gray mt-1 leading-relaxed">
              Resultados comprovados e relatados
            </p>
          </motion.div>

          {/* STAT 4: 1+ ano */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center p-6 bg-brand-black/60 backdrop-blur-sm rounded border border-white/5"
          >
            <span className="font-display font-[900] text-4xl sm:text-5xl lg:text-6xl text-brand-yellow tracking-tighter text-glow-yellow">
              {isInView ? counts.anos : 0}+
            </span>
            <span className="font-display font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider mt-3">
              Ano no Mercado
            </span>
            <p className="font-sans text-[11px] text-brand-gray mt-1 leading-relaxed">
              Liderança regional consolidada
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
