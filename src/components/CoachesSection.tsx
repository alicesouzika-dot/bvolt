/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Instagram, Youtube, Award, Dumbbell } from "lucide-react";

// Inline custom SVG for TikTok to match the visual perfectly
interface TikTokIconProps {
  className?: string;
}

const TikTokIcon: React.FC<TikTokIconProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12.525.01c1.306-.022 2.616-.01 3.921-.01.071 1.777.94 3.322 2.373 4.298v3.985a8.321 8.321 0 01-4.183-1.073c-.012 3.656.035 6.313-.056 7.425a5.525 5.525 0 0 1-3.642 4.417 5.51 5.51 0 0 1-6.602-2.903 5.517 5.517 0 0 1 2.592-6.912c1.1-.3 2.115-.17 2.855.45V5.59a9.55 9.55 0 0 0-4.045-.25 9.507 9.507 0 0 0-4.99 4.341c-2.3 4.4-1.125 9.49 2.503 12.355a9.522 9.522 0 0 0 10.937-.435c4.646-.864 7.21-4.7 7.075-8.91V6.98c1.375-.78 2.165-1.93 2.725-3.39V0h-4.81a6.38 6.38 0 0 1-2.365-2.025l.02.01l-4.32-.005z" />
  </svg>
);

interface Coach {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  badge: string;
  instagram: string;
  tiktok: string;
}

export default function CoachesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const coaches: Coach[] = [
    {
      id: "coach-1",
      name: "DANI",
      role: "O QUE FAZ VOCÊ SER BVOLT?",
      badge: "FORÇA & POWERLIFTING",
      bio: "Eu sou BVOLT porque levo qualidade de vida para os meus clientes.",
      imageUrl: "/src/assets/images/dani-bvolt.png",
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
    },
    {
      id: "coach-2",
      name: "JOSÉ",
      role: "O QUE FAZ VOCÊ SER BVOLT?",
      badge: "ALTA PERFORMANCE",
      bio: "Eu sou BVOLT porque aqui tem a melhor qualidade de atendimento.",
      imageUrl: "/src/assets/images/jose-bvolt.png",
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
    },
    {
      id: "coach-3",
      name: "STHEFANY",
      role: "O QUE FAZ VOCÊ SER BVOLT?",
      badge: "HIPERTROFIA ESTÉTICA",
      bio: "Eu sou BVOLT porque aqui tem segurança e qualidade de vida!",
      imageUrl: "/src/assets/images/sthefany-bvolt.png",
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
    },
    {
      id: "coach-4",
      name: "MARCELO",
      role: "O QUE FAZ VOCÊ SER BVOLT?",
      badge: "",
      bio: "Eu sou BVOLT porque aqui estão os melhores!",
      imageUrl: "/src/assets/images/marcelo-bvolt.png",
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
    },
  ];

  return (
    <section id="coaches" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Decorative premium backing glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block matching the exact premium screenshot */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-1.5 mb-3"
          >
            <span className="font-display font-black text-xs uppercase tracking-[0.3em] text-brand-yellow text-glow-yellow">
              FAMÍLIA BVOLT
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase mb-4"
          >
            EQUIPE
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1.5 bg-brand-yellow mx-auto mb-6 origin-center"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans text-brand-gray text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Profissionais certificados que acompanham de perto sua evolução, com foco em técnica, movimento correto e resultados consistentes.
          </motion.p>
        </div>

        {/* Coaches Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {coaches.map((coach, index) => {
            const isHovered = hoveredId === coach.id;
            
            // To emulate the screenshot, let's treat the third card as selected/glowing by default when nothing else is hovered
            const isActive = hoveredId ? isHovered : coach.id === "coach-3";

            return (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredId(coach.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative bg-brand-charcoal rounded-xl overflow-hidden transition-all duration-300 flex flex-col cursor-pointer border-2 ${
                  isActive 
                    ? "border-brand-yellow shadow-neon-yellow shadow-2xl scale-[1.02]" 
                    : "border-white/5 shadow-lg"
                }`}
              >
                {/* Image Box */}
                <div className="relative aspect-[3/4] overflow-hidden w-full group">
                  <img
                    src={coach.imageUrl}
                    alt={coach.name}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-all duration-700 ease-out transform ${
                      isActive 
                        ? "grayscale-0 scale-105" 
                        : "grayscale brightness-[0.7] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                    }`}
                  />
                  
                  {/* Premium overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-black/30 pointer-events-none" />

                  {/* Slide-Up Social Action Bar matching the exact screenshot layout */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 py-3 bg-brand-yellow text-brand-black flex items-center justify-center gap-6 transition-transform duration-300 ease-out z-20 ${
                      isActive ? "translate-y-0" : "translate-y-full"
                    }`}
                  >
                    <a 
                      href={coach.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:scale-125 hover:text-white transition-all text-brand-black"
                    >
                      <Instagram size={20} className="stroke-[2.5]" />
                    </a>
                  </div>
                </div>

                {/* Info Box */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Line accent below image (always visible but colors on active) */}
                    <div className={`h-[3px] w-full mb-4 rounded transition-all duration-300 ${
                      isActive ? "bg-brand-yellow" : "bg-white/10"
                    }`} />

                    <h3 className={`font-display font-[900] text-xl transition-colors duration-300 ${
                      isActive ? "text-brand-yellow" : "text-white"
                    }`}>
                      {coach.name}
                    </h3>
                    
                    <p className="font-display font-bold text-xs text-brand-yellow tracking-wider uppercase mt-1 mb-3">
                      {coach.role}
                    </p>
                    
                    <p className="font-sans text-xs text-brand-gray/90 leading-relaxed mb-4">
                      {coach.bio}
                    </p>
                  </div>

                  {/* Micro indicator footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="font-display font-bold text-[9px] tracking-widest text-brand-gray/50 uppercase">
                      PERSONAL
                    </span>
                    <Dumbbell size={12} className={`stroke-[2] transition-colors duration-300 ${
                      isActive ? "text-brand-yellow" : "text-white/25"
                    }`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
