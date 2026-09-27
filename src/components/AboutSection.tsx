/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CUSTOM_ASSETS } from "../data";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-brand-black relative">
      {/* Absolute glow balls */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-brand-yellow/5 rounded-full blur-[100px]  hidden md:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo - Imagem grande da academia */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Outline yellow container styling */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-brand-yellow rounded-tl" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-brand-yellow rounded-br" />

            <div className="relative rounded-lg overflow-hidden border border-white/5 shadow-2xl group">
              <img
                src={CUSTOM_ASSETS.aboutBg}
                alt="Equipamentos modernizados BVolt"
                referrerPolicy="no-referrer"
                className="w-full h-[350px] sm:h-[450px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/00 to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Float badge overlay */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 p-6 bg-brand-charcoal/95 border border-brand-yellow/20 rounded shadow-[0_4px_30px_rgba(0,0,0,0.8)] backdrop-blur-md max-w-sm">
              <h5 className="font-display font-black text-brand-yellow text-sm tracking-widest uppercase mb-1">
                EXCELÊNCIA TECNOLÓGICA
              </h5>
              <p className="font-sans text-brand-gray text-xs leading-relaxed font-medium">
                Sinta a diferença de aparelhos com biomecânica avançada que preservam suas articulações e isolam a musculatura desejada.
              </p>
            </div>
          </motion.div>

          {/* Lado Direito - Texto institucional e cards removidos */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-left"
          >
            <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-brand-yellow text-glow-yellow mb-2 inline-block">
              MAIS QUE UMA ACADEMIA
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mb-6">
              SOBRE
            </h2>
            <div className="font-sans text-brand-gray text-base leading-relaxed mb-4 space-y-4">
              <p>
                A <strong className="text-white font-semibold">BVOLT</strong> nasceu com o propósito de elevar a experiência de treino em Guapimirim, unindo estrutura moderna, tecnologia e acompanhamento de qualidade em um ambiente acolhedor e inspirador.
              </p>
              <p>
                Mais do que uma academia, somos uma comunidade comprometida com a evolução de cada aluno. Acreditamos que resultados duradouros são construídos com orientação especializada, constância e um espaço onde as pessoas se sintam motivadas a superar seus próprios limites.
              </p>
              <p>
                Nossa missão é oferecer uma experiência completa de saúde, performance and bem-estar, ajudando cada pessoa a alcançar seus objetivos com segurança, confiança e excelência.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
