/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { CUSTOM_ASSETS } from "../data";

interface HeroSectionProps {
  onOpenEnrollModal: () => void;
}

export default function HeroSection({ onOpenEnrollModal }: HeroSectionProps) {
  const scrollToPlans = (e: React.MouseEvent) => {
    e.preventDefault();
    const plansSec = document.querySelector("#planos");
    if (plansSec) {
      plansSec.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Zoom-in Entrance */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center select-none"
        style={{
          backgroundImage: `url(${CUSTOM_ASSETS.heroBg})`,
        }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      {/* Cinematic Dark Overlay with bottom fade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-black/95 via-brand-black/75 to-brand-black pointer-events-none" />

      {/* Subtly Glowing abstract dust pattern */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-brand-yellow/10 blur-[120px]  hidden md:block pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-brand-yellow/5 blur-[150px]  hidden md:block pointer-events-none animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[calc(100vh-80px)] pt-12 pb-16">
        


        {/* Heavy Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-[900] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tighter leading-[0.9] max-w-5xl mb-6 uppercase"
        >
          A SUA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-white to-brand-yellow text-glow-yellow">
            NOVA VERSÃO
          </span>{" "}
          COMEÇA AQUI
        </motion.h1>

        {/* Clean Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-brand-gray text-base sm:text-lg md:text-xl max-w-2xl mb-12 font-medium leading-relaxed"
        >
          Um novo conceito de autocuidado em Guapimirim.
        </motion.p>

        {/* Staggered CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-16 w-full sm:w-auto"
        >
          <button
            id="hero-cta-train-btn"
            onClick={onOpenEnrollModal}
            className="w-full sm:w-auto px-8 py-4.5 bg-brand-yellow text-brand-black font-display font-black text-xs uppercase tracking-widest rounded-sm shadow-neon-yellow hover:shadow-neon-yellow-hover hover:bg-white hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            QUERO TREINAR
          </button>
          
          <button
            id="hero-cta-plans-btn"
            onClick={scrollToPlans}
            className="w-full sm:w-auto px-8 py-4.5 bg-transparent text-white border border-white/20 hover:border-brand-yellow hover:text-brand-yellow font-display font-bold text-xs uppercase tracking-widest rounded-sm hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            VER PLANOS
          </button>
        </motion.div>

        {/* Dynamic Key Performance Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.0 }}
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/5"
        >
          {/* Indicator Item 1 */}
          <div className="flex items-center justify-center p-5 rounded-xl bg-brand-charcoal/30 backdrop-blur-sm border border-white/5 hover:border-brand-yellow/20 transition-all duration-300">
            <h4 className="font-display font-black text-white text-base uppercase tracking-[0.2em] leading-none text-glow-yellow">
              SEM DESCULPAS
            </h4>
          </div>

          {/* Indicator Item 2 */}
          <div className="flex items-center justify-center p-5 rounded-xl bg-brand-charcoal/30 backdrop-blur-sm border border-white/5 hover:border-brand-yellow/20 transition-all duration-300">
            <h4 className="font-display font-black text-white text-base uppercase tracking-[0.2em] leading-none text-glow-yellow">
              SEM ADIAMENTOS
            </h4>
          </div>

          {/* Indicator Item 3 */}
          <div className="flex items-center justify-center p-5 rounded-xl bg-brand-charcoal/30 backdrop-blur-sm border border-white/5 hover:border-brand-yellow/20 transition-all duration-300">
            <h4 className="font-display font-black text-white text-base uppercase tracking-[0.2em] leading-none text-glow-yellow">
              COMECE HOJE
            </h4>
          </div>
        </motion.div>
      </div>

      {/* Floating Bottom Scroll Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none hidden sm:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-brand-gray hover:text-brand-yellow cursor-pointer"
        >
          <ChevronDown size={28} />
        </motion.div>
      </div>
    </section>
  );
}
