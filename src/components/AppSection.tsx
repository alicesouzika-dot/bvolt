/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Smartphone, CalendarCheck, BellRing, MapPin, CheckCircle2 } from "lucide-react";

const features = [
  { icon: Smartphone,    text: "Acessar seus treinos de forma rápida e prática." },
  { icon: CalendarCheck, text: "Consultar a agenda de aulas e conferir os horários disponíveis." },
  { icon: MapPin,        text: "Fazer check-in nas suas aulas." },
  { icon: CheckCircle2,  text: "Reservar seu lugar com facilidade." },
  { icon: BellRing,      text: "Receber notificações quando surgir uma vaga em uma aula que estava lotada." },
];

export default function AppSection() {
  return (
    <section id="nosso-app" className="py-24 bg-brand-charcoal relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-brand-yellow/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-1.5 mb-3"
          >
            <span className="font-display font-black text-xs uppercase tracking-[0.3em] text-brand-yellow text-glow-yellow">
              BVOLT Academia na palma da sua mão
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase mb-4"
          >
            NOSSO APP
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
            Baixe o app e tenha acesso a tudo o que você precisa para organizar seus treinos e aproveitar melhor nossas aulas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-yellow/15 blur-3xl scale-90 rounded-full pointer-events-none" />
              <img
                src="/images/photo-phone.png"
                alt="App BVOLT Academia no celular"
                className="relative w-64 sm:w-80 h-auto object-contain drop-shadow-[0_0_40px_rgba(188,207,66,0.2)]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <p className="font-sans text-brand-gray text-base leading-relaxed">
              Com o app <span className="text-white font-semibold">BVOLT Academia</span>, você pode:
            </p>

            <ul className="space-y-4">
              {features.map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center group-hover:bg-brand-yellow/20 transition-all duration-300">
                    <Icon size={18} className="text-brand-yellow" />
                  </div>
                  <p className="font-sans text-brand-gray text-sm leading-relaxed pt-2 group-hover:text-white transition-colors duration-300">
                    {text}
                  </p>
                </motion.li>
              ))}
            </ul>

            <div className="h-px bg-white/5" />

            <div className="space-y-5">
              <p className="font-sans text-brand-gray text-sm leading-relaxed">
                Baixe agora o app <span className="text-white font-semibold">BVOLT Academia</span> e tenha tudo na palma da sua mão.
              </p>


              <motion.a
                href="https://play.google.com/store/apps/details?id=br.com.w12.bvoltacademia&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                id="app-download-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <img
                  src="/images/playstore.png"
                  alt="Disponível no Google Play"
                  className="h-14 w-auto object-contain drop-shadow-lg"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
