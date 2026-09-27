/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MODALIDADES_ITEMS } from "../data";
import { Eye } from "lucide-react";

interface ModalitiesSectionProps {
  onOpenEnrollModal: () => void;
}

export default function ModalitiesSection({ onOpenEnrollModal }: ModalitiesSectionProps) {
  return (
    <section id="modalidades" className="py-24 bg-brand-charcoal relative">
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-brand-yellow text-glow-yellow mb-2 inline-block">
            TREINAMENTO QUE GERA EVOLUÇÃO
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mb-4">
            MODALIDADES
          </h2>
          <div className="w-16 h-1.5 bg-brand-yellow mx-auto mb-6" />
          <p className="font-sans text-brand-gray text-sm sm:text-base leading-relaxed">
            Oferecemos treinos específicos focados no seu bem-estar e progresso acelerado. Escolha a sua meta inicial e treine com os melhores.
          </p>
        </div>

        {/* Categories Grid */}
        <div id="modalities-cards-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODALIDADES_ITEMS.map((modality, idx) => (
            <motion.div
              key={modality.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative h-[320px] sm:h-[380px] rounded-lg overflow-hidden group border border-white/5 shadow-2xl cursor-pointer"
            >
              {/* Image with ZOOM */}
              <img
                src={modality.imageUrl}
                alt={modality.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/80 transition-opacity duration-300 pointer-events-none" />

              {/* Central/Bottom Text */}
              <div className="absolute inset-0 px-6 py-8 flex flex-col justify-end text-center z-10">
                <h3 className="font-display font-[900] text-xl sm:text-2xl text-white tracking-wide uppercase transition-colors duration-300 group-hover:text-brand-yellow">
                  {modality.title}
                </h3>

                {/* Smooth Expandable Description on Hover */}
                <p className="font-sans text-xs text-brand-gray leading-relaxed font-medium mt-2 max-w-sm mx-auto transition-all duration-300 opacity-80 group-hover:opacity-100 max-h-[100px] overflow-hidden">
                  {modality.description}
                </p>

                {/* Action indicator shown on hover */}
                <div className="mt-4 overflow-hidden h-0 group-hover:h-8 transition-all duration-300 flex items-center justify-center gap-2">
                  <span 
                    onClick={onOpenEnrollModal}
                    className="font-display font-bold text-[10px] uppercase tracking-widest text-brand-yellow hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    Fazer Matrícula <Eye size={12} className="stroke-[2.5]" />
                  </span>
                </div>
              </div>

              {/* Outline gold glowing layer */}
              <div className="absolute inset-0 border border-brand-yellow/0 group-hover:border-brand-yellow/30 transition-all duration-300 pointer-events-none rounded-lg" />
            </motion.div>
          ))}
        </div>

        {/* Bottom micro CTA */}
        <div className="mt-16 text-center">
          <p className="font-sans text-brand-gray text-xs mb-4 font-semibold uppercase tracking-wider">
            DÚVIDAS SOBRE QUAL SE ADAPTA MELHOR AO SEU PERFIL?
          </p>
          <button
            id="modalities-consult-btn"
            onClick={onOpenEnrollModal}
            className="font-display font-semibold text-xs uppercase tracking-widest py-3 px-8 bg-transparent text-brand-yellow border border-brand-yellow/30 hover:border-brand-yellow rounded shadow-neon-yellow transition-all duration-300 cursor-pointer"
          >
            CONSULTAR
          </button>
        </div>

      </div>
    </section>
  );
}
