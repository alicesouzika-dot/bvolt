/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, ChevronLeft, ChevronRight, Trophy, Flame, Play, Clock, Sparkles } from "lucide-react";

interface CTASectionProps {
  onOpenEnrollModal: () => void;
}

interface BVoltEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  badgeColor: string;
}

export default function CTASection({ onOpenEnrollModal }: CTASectionProps) {
  const events: BVoltEvent[] = [
    {
      id: "event-1",
      title: "BVOLT OPEN 2026",
      category: "CAMPEONATO DE FORÇA",
      date: "14 de Novembro, 2026",
      location: "Sede BVolt, Guapimirim",
      description: "O maior torneio de Powerlifting e Levantamento de Força da região! Venha superar seus limites no agachamento, supino e levantamento terra em um ambiente eletrizante, com arbitragem oficial e premiação patrocinada pelas melhores marcas.",
      imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
      ctaText: "QUERO PARTICIPAR",
      badgeColor: "bg-brand-yellow text-brand-black"
    },
    {
      id: "event-2",
      title: "DESAFIO 30 DIAS SHREDDED",
      category: "PROGRAMA COLETIVO",
      date: "Início todo dia 01",
      location: "BVolt Core & Comunidade",
      description: "Um acompanhamento tático em comunidade focado em perda de gordura acelerada e definição muscular extrema. Planilhas de treino avançadas, consultoria nutricional integrada, grupo privado de suporte e premiação especial em dinheiro para as maiores evoluções.",
      imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop",
      ctaText: "INSCREVER-ME NO DESAFIO",
      badgeColor: "bg-red-500 text-white"
    },
    {
      id: "event-3",
      title: "BVOLT SUNSET RUN",
      category: "CORRIDA DE RUA",
      date: "12 de Setembro, 2026",
      location: "Partida BVolt Guapimirim",
      description: "Nossa tradicional corrida de rua ao pôr do sol pelas belas rotas de Guapimirim. Um percurso desafiador projetado para atletas experientes e iniciantes, coroado com DJ na linha de chegada, kit atleta premium e chopp artesanal de confraternização.",
      imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1200&auto=format&fit=crop",
      ctaText: "GARANTIR MEU KIT",
      badgeColor: "bg-orange-500 text-white"
    },
    {
      id: "event-4",
      title: "WORKSHOP BIOMECÂNICA APLICADA",
      category: "WORKSHOP PRÁTICO",
      date: "18 de Julho, 2026",
      location: "Área de Pesos Livres",
      description: "Aprenda a ciência por trás de cada repetição. Um workshop 100% interativo e prático comandado por nossos especialistas para corrigir sua postura em levantamentos básicos e avançados, prevenindo lesões e gerando hipertrofia otimizada.",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
      ctaText: "RESERVAR MEU ASSENTO",
      badgeColor: "bg-blue-600 text-white"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const handleGoTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Setup auto-play rotation
  useEffect(() => {
    if (!isAutoPlayPaused) {
      autoPlayTimer.current = setInterval(() => {
        handleNext();
      }, 7000); // changes every 7 seconds
    } else if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }

    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    };
  }, [currentIndex, isAutoPlayPaused]);

  // Framer Motion Animation Variants for the Event Card
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const activeEvent = events[currentIndex];

  return (
    <section 
      id="cta-transformacao" 
      className="py-24 bg-brand-charcoal overflow-hidden relative border-t border-b border-white/5"
      onMouseEnter={() => setIsAutoPlayPaused(true)}
      onMouseLeave={() => setIsAutoPlayPaused(false)}
    >
      {/* Dynamic Background Glow Layer */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[140px]  hidden md:block pointer-events-none" />
      <div className="absolute right-10 top-10 w-96 h-96 bg-brand-yellow/[0.02] rounded-full blur-[120px]  hidden md:block pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-[900] text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase mb-4 leading-none">
            EVENTOS
          </h2>
          <p className="font-sans text-brand-gray text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Muito além do treino diário. Promovemos desafios, copas de levantamento, workshops técnicos e corridas para conectar nossa comunidade e potencializar o seu espírito de superação.
          </p>
        </div>

        {/* Carousel/Slider Shell */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Card with AnimatePresence */}
          <div className="relative z-10 min-h-[480px] md:min-h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeEvent.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-12 bg-black/80 rounded-2xl overflow-hidden border border-white/5 shadow-[0_24px_50px_rgba(0,0,0,0.5)] group h-full"
              >
                {/* Event Image Column (Left on Desktop, Top on Mobile) */}
                <div className="relative md:col-span-5 h-[230px] sm:h-[300px] md:h-full overflow-hidden">
                  <img
                    src={activeEvent.imageUrl}
                    alt={activeEvent.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/30 to-transparent" />
                </div>

                {/* Event Information Column (Right on Desktop, Bottom on Mobile) */}
                <div className="p-6 sm:p-8 md:p-10 md:col-span-7 flex flex-col justify-between text-left">
                  <div>
                    {/* Event Metadata (Date & Location) */}
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-brand-yellow font-display font-bold text-[10px] sm:text-xs tracking-wider uppercase mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="shrink-0" />
                        {activeEvent.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="shrink-0" />
                        {activeEvent.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-white uppercase tracking-tight mb-4 group-hover:text-brand-yellow transition-colors duration-300">
                      {activeEvent.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-brand-gray text-xs sm:text-sm leading-relaxed mb-8 max-w-xl">
                      {activeEvent.description}
                    </p>
                  </div>

                  {/* Call to action Button */}
                  <div>
                    <motion.button
                      onClick={onOpenEnrollModal}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto px-8 py-4 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-black font-display font-[900] text-xs uppercase tracking-widest rounded shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <span>{activeEvent.ctaText}</span>
                      <ChevronRight size={14} className="stroke-[3]" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrow Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 md:-left-16 z-20">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-charcoal/80 border border-white/10 text-white hover:text-brand-yellow hover:border-brand-yellow/50 backdrop-blur-md flex items-center justify-center shadow-lg transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} className="shrink-0" />
            </motion.button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 md:-right-16 z-20">
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-charcoal/80 border border-white/10 text-white hover:text-brand-yellow hover:border-brand-yellow/50 backdrop-blur-md flex items-center justify-center shadow-lg transition-colors cursor-pointer"
              aria-label="Próximo"
            >
              <ChevronRight size={20} className="shrink-0" />
            </motion.button>
          </div>
        </div>

        {/* Carousel Dots Indicators */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {events.map((event, index) => (
            <button
              key={event.id}
              onClick={() => handleGoTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index 
                  ? "w-8 bg-brand-yellow shadow-[0_0_10px_rgba(210,255,31,0.5)]" 
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
