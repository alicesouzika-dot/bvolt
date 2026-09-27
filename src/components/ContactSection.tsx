/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Send, CheckCircle2, Target, Dumbbell, Users, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  const [formErrors, setFormErrors] = useState({
    nome: "",
    telefone: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let isValid = true;
    const errors = { nom: "", tel: "", mail: "" };

    if (!formData.nome.trim()) {
      errors.nom = "Nome completo é obrigatório.";
      isValid = false;
    }

    if (!formData.telefone.trim()) {
      errors.tel = "Telefone para contato é obrigatório.";
      isValid = false;
    } else if (formData.telefone.replace(/\D/g, "").length < 10) {
      errors.tel = "Forneça um número com DDD válido.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.mail = "Endereço de e-mail é obrigatório.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.mail = "Endereço de e-mail inválido.";
      isValid = false;
    }

    setFormErrors({
      nome: errors.nom,
      telefone: errors.tel,
      email: errors.mail,
    });

    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error inline as they type
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate a elegant API call of 1 second
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nome: "",
        telefone: "",
        email: "",
        mensagem: "",
      });
    }, 1200);
  };

  return (
    <section id="contato" className="py-24 bg-brand-charcoal relative">
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-brand-yellow text-glow-yellow mb-2 inline-block">
            ESTAMOS PRONTOS PARA VOCÊ
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mb-4">
            ENTRE EM CONTATO CONOSCO
          </h2>
          <div className="w-16 h-1.5 bg-brand-yellow mx-auto" />
        </div>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-stretch">
          
          {/* Lado Esquerdo - Diferenciais BVolt */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between py-2 text-left"
          >
            <div>
              <h3 className="font-display font-[900] text-2xl sm:text-3xl text-white tracking-tight uppercase mb-4 text-glow-yellow">
                A EXPERIÊNCIA BVOLT
              </h3>
              <p className="font-sans text-brand-gray text-xs sm:text-sm leading-relaxed mb-10 max-w-sm">
                Envie uma mensagem e venha conhecer um novo conceito de treinamento focado em resultados reais, constância e máximo desempenho.
              </p>

              {/* Pillars list */}
              <div className="space-y-6">
                {/* Pillar 1 */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center text-brand-yellow shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-xs uppercase tracking-wider text-white group-hover:text-brand-yellow transition-colors duration-300">
                      METODOLOGIA DE TREINAMENTO
                    </h4>
                    <p className="font-sans text-xs text-brand-gray leading-relaxed mt-1">
                      Planilhas adaptadas especificamente para o seu objetivo físico, com atualizações e revisões periódicas.
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center text-brand-yellow shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Dumbbell size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-xs uppercase tracking-wider text-white group-hover:text-brand-yellow transition-colors duration-300">
                      BIOMECÂNICA AVANÇADA
                    </h4>
                    <p className="font-sans text-xs text-brand-gray leading-relaxed mt-1">
                      Equipamentos cuidadosamente selecionados que maximizam a contração muscular segura e reduzem riscos de lesão.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center text-brand-yellow shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-xs uppercase tracking-wider text-white group-hover:text-brand-yellow transition-colors duration-300">
                      COMUNIDADE COMPROMETIDA
                    </h4>
                    <p className="font-sans text-xs text-brand-gray leading-relaxed mt-1">
                      Treine em um ecossistema estimulante onde alunos e professores se apoiam e buscam a evolução diária.
                    </p>
                  </div>
                </div>

                {/* Pillar 4 */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center text-brand-yellow shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-xs uppercase tracking-wider text-white group-hover:text-brand-yellow transition-colors duration-300">
                      ESTRUTURA COMPLETA
                    </h4>
                    <p className="font-sans text-xs text-brand-gray leading-relaxed mt-1">
                      Aparelhos 100% climatizados para máximo conforto e estacionamento inteiramente gratuito e exclusivo para alunos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito - Formulário visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-brand-black border border-white/5 rounded-xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <h4 className="font-display font-[900] text-lg text-white uppercase tracking-wider mb-2">
                        Envie uma Mensagem
                      </h4>
                      <p className="font-sans text-xs text-brand-gray mb-6 leading-relaxed">
                        Preencha o formulário e nossa coordenação responderá em alguns instantes.
                      </p>
                    </div>

                    {/* Input Nome */}
                    <div>
                      <label htmlFor="form-nome" className="block font-display font-bold text-[10px] uppercase tracking-widest text-brand-gray mb-1.5">
                        Nome Completo
                      </label>
                      <input
                        id="form-nome"
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-brand-charcoal text-white rounded border text-xs sm:text-sm focus:outline-none focus:border-brand-yellow transition-colors ${
                          formErrors.nome ? "border-red-500" : "border-white/10"
                        }`}
                        placeholder="Ex: Carlos silva"
                      />
                      {formErrors.nome && (
                        <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.nome}</p>
                      )}
                    </div>

                    {/* Inputs Telefone e Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Input Telefone */}
                      <div>
                        <label htmlFor="form-telefone" className="block font-display font-bold text-[10px] uppercase tracking-widest text-brand-gray mb-1.5">
                          Telefone de contato
                        </label>
                        <input
                          id="form-telefone"
                          type="tel"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-brand-charcoal text-white rounded border text-xs sm:text-sm focus:outline-none focus:border-brand-yellow transition-colors ${
                            formErrors.telefone ? "border-red-500" : "border-white/10"
                          }`}
                          placeholder="(21) 99640-8986"
                        />
                        {formErrors.telefone && (
                          <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.telefone}</p>
                        )}
                      </div>

                      {/* Input Email */}
                      <div>
                        <label htmlFor="form-email" className="block font-display font-bold text-[10px] uppercase tracking-widest text-brand-gray mb-1.5">
                          E-mail institucional
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-brand-charcoal text-white rounded border text-xs sm:text-sm focus:outline-none focus:border-brand-yellow transition-colors ${
                            formErrors.email ? "border-red-500" : "border-white/10"
                          }`}
                          placeholder="carlos@gmail.com"
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Input Mensagem */}
                    <div>
                      <label htmlFor="form-mensagem" className="block font-display font-bold text-[10px] uppercase tracking-widest text-brand-gray mb-1.5">
                        Sua Mensagem (Opcional)
                      </label>
                      <textarea
                        id="form-mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-brand-charcoal text-white rounded border border-white/10 text-xs sm:text-sm focus:outline-none focus:border-brand-yellow transition-colors resize-none"
                        placeholder="Como podemos te ajudar? Tem interesse em alguma modalidade especial?"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4.5 bg-brand-yellow text-brand-black disabled:bg-brand-yellow/50 font-display font-black text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2 shadow-neon-yellow active:scale-[0.99] transition-all cursor-pointer hover:bg-white"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-brand-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          ENVIAR MENSAGEM <Send size={13} className="fill-current" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="submit-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center justify-center h-full space-y-6"
                  >
                    <div className="w-16 h-16 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow flex items-center justify-center rounded-full shadow-neon-yellow">
                      <CheckCircle2 size={32} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-black text-2xl text-white uppercase tracking-wider">
                        MENSAGEM ENVIADA!
                      </h4>
                      <p className="font-sans text-xs text-brand-gray max-w-sm leading-relaxed mx-auto">
                        Agradecemos de coração. Nossa equipe de recepção da BVOLT analisará sua mensagem e entrará em contato via telefone/WhatsApp nos próximos minutos!
                      </p>
                    </div>
                    <button
                      id="contact-form-reset-btn"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-brand-charcoal hover:bg-brand-yellow hover:text-brand-black transition-all duration-300 font-display font-bold text-[10px] uppercase tracking-widest text-brand-gray rounded border border-white/10 hover:border-brand-yellow"
                    >
                      Escrever outro contato
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
