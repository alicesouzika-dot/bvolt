/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Star, Zap, Award } from "lucide-react";
import { PLAN_ITEMS } from "../data";
import { Plan } from "../types";

interface PlanosSectionProps {
  onSelectPlan: (planName: string) => void;
}

export default function PlanosSection({ onSelectPlan }: PlanosSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  // Calculate annual price based on monthly, e.g. 15% off and round down
  const getDisplayPrice = (monthlyPriceStr: string) => {
    const rawNumberHex = monthlyPriceStr.replace("R$ ", "");
    const monthlyNum = parseInt(rawNumberHex, 10);
    
    if (billingCycle === "annual") {
      // 15% off, relative per month
      const annualPerMonthVal = Math.floor(monthlyNum * 0.85);
      return `R$ ${annualPerMonthVal}`;
    }
    return monthlyPriceStr;
  };

  return (
    <section id="planos" className="py-24 bg-brand-black relative">
      {/* Light glow anchors */}
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-brand-yellow/5 rounded-full blur-[100px]  hidden md:block pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-brand-yellow/[0.04] rounded-full blur-[120px]  hidden md:block pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-brand-yellow text-glow-yellow mb-2 inline-block">
            INVISTA EM VOCÊ MESMO
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mb-4">
            PLANOS
          </h2>
          <div className="w-16 h-1.5 bg-brand-yellow mx-auto mb-6" />
          <p className="font-sans text-brand-gray text-base leading-relaxed">
            Escolha o pacote ideal para o seu nível de comprometimento. Sem taxas surpresas, com total transparência e foco em performance.
          </p>

          {/* Toggle Button SaaS Style */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`font-display font-bold text-xs uppercase tracking-wider transition-colors ${billingCycle === "monthly" ? "text-brand-yellow" : "text-brand-gray"}`}>
              Mensal
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="w-14 h-8 bg-brand-charcoal border border-white/10 rounded-full p-1 transition-all duration-300 relative focus:outline-none cursor-pointer"
              aria-label="Alternar Período de Cobrança"
            >
              <div
                className={`w-5 h-5 bg-brand-yellow rounded-full shadow-md transform transition-transform duration-300 ${
                  billingCycle === "annual" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`font-display font-bold text-xs uppercase tracking-wider transition-colors ${billingCycle === "annual" ? "text-brand-yellow" : "text-brand-gray"}`}>
                Anual
              </span>
              <span className="bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-[9px] font-display font-black uppercase tracking-widest px-2 py-0.5 rounded-full shadow-neon-yellow">
                SALVE 15%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div id="pricing-cards-container" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto text-left">
          {PLAN_ITEMS.map((plan, idx) => {
            const isPerformance = plan.id === "plan-performance";
            const priceVal = getDisplayPrice(plan.price);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col justify-between p-8 sm:p-10 rounded-xl relative transition-all duration-300 ${
                  isPerformance
                    ? "bg-brand-charcoal border-2 border-brand-yellow/80 shadow-[0_0_35px_rgba(188,207,66,0.15)] md:scale-105 z-10"
                    : "bg-brand-charcoal/45 hover:bg-brand-charcoal border border-white/5 shadow-2xl"
                }`}
              >
                {/* Popularity Badge or Standard Icon */}
                {isPerformance && (
                  <div className="absolute -top-4 right-6 bg-brand-yellow rounded-full px-4 py-1 flex items-center gap-1.5 shadow-neon-yellow">
                    <Zap size={11} className="text-brand-black fill-current" />
                    <span className="font-display font-black text-[9px] text-brand-black uppercase tracking-widest leading-none">
                      O MAIS PROMISSOR
                    </span>
                  </div>
                )}

                {/* Card Title & Cost details */}
                <div>
                  <span className="font-display font-[800] text-[10px] text-brand-yellow uppercase tracking-[0.25em] leading-none mb-3 inline-block">
                    {plan.tagLine}
                  </span>
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-2">
                    {plan.name}
                  </h3>
                  <p className="font-sans text-xs text-brand-gray leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1.5 border-b border-white/5 pb-6 mb-8">
                    <span className="font-display font-black text-4xl sm:text-5xl text-white transition-all">
                      {priceVal}
                    </span>
                    <span className="font-display font-bold text-xs text-brand-gray uppercase tracking-widest">
                      / {billingCycle === "annual" ? "per month" : plan.period}
                    </span>
                  </div>

                  {/* Feature Lists */}
                  <div className="space-y-4 mb-10">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span className="font-sans text-xs text-brand-gray hover:text-white transition-colors">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call-to-action Button */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-4 font-display font-black text-xs uppercase tracking-widest rounded transition-all duration-300 cursor-pointer ${
                      isPerformance
                        ? "bg-brand-yellow text-brand-black shadow-neon-yellow hover:bg-white hover:shadow-neon-yellow-hover"
                        : "bg-brand-black/40 hover:bg-brand-yellow border border-white/10 hover:border-brand-yellow text-white hover:text-brand-black"
                    }`}
                  >
                    COMEÇAR AGORA
                  </button>
                  <p className="text-center font-sans text-[10px] text-brand-gray mt-3">
                    Cancelamento fácil e flexibilidade contratual
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
