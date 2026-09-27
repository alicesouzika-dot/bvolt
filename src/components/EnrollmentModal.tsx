/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Dumbbell, MessageCircle, Star, Sparkles } from "lucide-react";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanName: string;
}

export default function EnrollmentModal({ isOpen, onClose, selectedPlanName }: EnrollmentModalProps) {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    plano: "PLANO PERFORMANCE",
    periodo: "mensal",
  });

  const [formErrors, setFormErrors] = useState({
    nome: "",
    telefone: "",
    email: "",
  });

  const [isSuccessfullyRegistered, setIsSuccessfullyRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync prop selectedPlanName with local state when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        plano: selectedPlanName || "PLANO PERFORMANCE",
      }));
      setIsSuccessfullyRegistered(false);
      setFormErrors({ nome: "", telefone: "", email: "" });
    }
  }, [isOpen, selectedPlanName]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error inline as they type
    if (name in formErrors) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let isValid = true;
    const errors = { nome: "", telefone: "", email: "" };

    if (!formData.nome.trim()) {
      errors.nome = "Nome completo é indispensável.";
      isValid = false;
    }

    if (!formData.telefone.trim()) {
      errors.telefone = "Seu WhatsApp é extremamente importante.";
      isValid = false;
    } else if (formData.telefone.replace(/\D/g, "").length < 10) {
      errors.telefone = "Número inválido. Use formato (21) 99999-9999.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "E-mail de contato é obrigatório.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Endereço de e-mail inválido.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-tech request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccessfullyRegistered(true);
    }, 1000);
  };

  // Generate customized WhatsApp link for final immediate contact conversion
  const getWhatsAppRegistrationLink = () => {
    const uppercasePlanName = formData.plano.toUpperCase();
    const cycleText = formData.periodo === "annual" ? "ANUAL (com 15% desc)" : "MENSAL";
    const textMessage = `Olá BVolt Academia! Acabei de preencher a matrícula premium do site:\n\n*Nome:* ${formData.nome}\n*WhatsApp:* ${formData.telefone}\n*E-mail:* ${formData.email}\n*Plano Escolhido:* ${uppercasePlanName}\n*Período:* ${cycleText}\n\nGostaria de liberar meu acesso para começar meus treinos hoje!`;
    const encoded = encodeURIComponent(textMessage);
    return `https://wa.me/5521996408986?text=${encoded}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="enrollment-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/95 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          {/* Modal Container Card */}
          <motion.div
            id="enrollment-modal-container"
            initial={{ scale: 0.93, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.93, y: 15 }}
            transition={{ duration: 0.3 }}
            className="relative bg-brand-charcoal text-white border border-brand-yellow/30 shadow-[0_0_50px_rgba(188,207,66,0.2)] rounded-xl w-full max-w-lg p-6 sm:p-10 pointer-events-auto my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-black hover:bg-brand-yellow hover:text-brand-black border border-white/5 flex items-center justify-center text-brand-gray transition-colors cursor-pointer"
              aria-label="Fechar Modal"
            >
              <X size={18} />
            </button>

            {!isSuccessfullyRegistered ? (
              /* Modal Form Frame */
              <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                {/* Header info */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-brand-yellow flex items-center justify-center text-brand-black">
                    <Dumbbell size={20} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-white tracking-widest uppercase">
                      FICHA DE MATRÍCULA
                    </h3>
                    <p className="font-sans text-[11px] text-brand-yellow uppercase tracking-widest font-extrabold">
                      Cadastre-se para garantir seu desconto
                    </p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-white/5" />

                {/* Input Name */}
                <div>
                  <label htmlFor="modal-nome" className="block font-display font-bold text-[10px] uppercase tracking-widest text-brand-gray mb-1.5">
                    Seu Nome Completo
                  </label>
                  <input
                    id="modal-nome"
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Ex: Pedro de Souza"
                    className={`w-full px-4 py-3 bg-brand-black text-white rounded border text-xs sm:text-sm focus:outline-none focus:border-brand-yellow transition-colors ${
                      formErrors.nome ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  {formErrors.nome && (
                    <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.nome}</p>
                  )}
                </div>

                {/* Inputs WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* WhatsApp */}
                  <div>
                    <label htmlFor="modal-telefone" className="block font-display font-bold text-[10px] uppercase tracking-widest text-brand-gray mb-1.5">
                      Número WhatsApp
                    </label>
                    <input
                      id="modal-telefone"
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(21) 99640-8986"
                      className={`w-full px-4 py-3 bg-brand-black text-white rounded border text-xs sm:text-sm focus:outline-none focus:border-brand-yellow transition-colors ${
                        formErrors.telefone ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {formErrors.telefone && (
                      <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.telefone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="modal-email" className="block font-display font-bold text-[10px] uppercase tracking-widest text-brand-gray mb-1.5">
                      Seu E-mail
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu_email@provedor.com"
                      className={`w-full px-4 py-3 bg-brand-black text-white rounded border text-xs sm:text-sm focus:outline-none focus:border-brand-yellow transition-colors ${
                        formErrors.email ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-[10px] mt-1 font-semibold">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Dropdown Select Plan */}
                <div>
                  <label htmlFor="modal-plano" className="block font-display font-bold text-[10px] uppercase tracking-widest text-brand-gray mb-1.5">
                    Selecione a Assinatura
                  </label>
                  <select
                    id="modal-plano"
                    name="plano"
                    value={formData.plano}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-brand-black text-white rounded border border-white/10 text-xs sm:text-sm focus:outline-none focus:border-brand-yellow transition-colors cursor-pointer"
                  >
                    <option value="PLANO START">PLANO START — R$ 99/mês</option>
                    <option value="PLANO PERFORMANCE">PLANO PERFORMANCE — R$ 139/mês</option>
                    <option value="PLANO PREMIUM">PLANO PREMIUM — R$ 219/mês</option>
                  </select>
                </div>

                {/* Radio Billing Period */}
                <div>
                  <label className="block font-display font-bold text-[10px] uppercase tracking-widest text-brand-gray mb-2.5">
                    Selecione o Ciclo de Cobrança
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Mensal */}
                    <label 
                      onClick={() => setFormData(prev => ({...prev, periodo: "monthly"}))}
                      className={`flex items-center gap-3 p-3.5 rounded border cursor-pointer transition-all ${
                        formData.periodo === "monthly"
                          ? "bg-brand-yellow/10 border-brand-yellow text-white shadow-neon-yellow"
                          : "bg-brand-black border-white/10 text-brand-gray hover:text-white"
                      }`}
                    >
                      <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center shrink-0 ${formData.periodo === "monthly" ? "border-brand-yellow" : "border-brand-gray"}`}>
                        {formData.periodo === "monthly" && <div className="w-2.5 h-2.5 bg-brand-yellow rounded-full" />}
                      </div>
                      <span className="font-display font-[800] text-xs uppercase tracking-wider">Período Mensal</span>
                    </label>

                    {/* Anual */}
                    <label 
                      onClick={() => setFormData(prev => ({...prev, periodo: "annual"}))}
                      className={`flex items-center gap-3 p-3.5 rounded border cursor-pointer transition-all ${
                        formData.periodo === "annual"
                          ? "bg-brand-yellow/10 border-brand-yellow text-white shadow-neon-yellow"
                          : "bg-brand-black border-white/10 text-brand-gray hover:text-white"
                      }`}
                    >
                      <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center shrink-0 ${formData.periodo === "annual" ? "border-brand-yellow" : "border-brand-gray"}`}>
                        {formData.periodo === "annual" && <div className="w-2.5 h-2.5 bg-brand-yellow rounded-full" />}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display font-[800] text-xs uppercase tracking-wider">Período Anual</span>
                        <span className="text-[8px] font-sans font-bold text-brand-yellow uppercase tracking-widest">SAVE 15% DESC</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  id="modal-enroll-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 py-4.5 bg-brand-yellow text-brand-black disabled:bg-brand-yellow/30 font-display font-black text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2 shadow-neon-yellow active:scale-[0.99] transition-all cursor-pointer hover:bg-white"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-brand-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "FINALIZAR MEU CADASTRO"
                  )}
                </button>
              </form>
            ) : (
              /* Success Message Frame */
              <motion.div
                key="enroll-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center justify-center space-y-6"
              >
                <div className="w-16 h-16 bg-brand-yellow/15 border-2 border-brand-yellow text-brand-yellow flex items-center justify-center rounded-full shadow-neon-yellow animate-bounce">
                  <Star className="fill-current animate-pulse-slow" size={32} />
                </div>

                <div className="space-y-2">
                  <h4 className="font-display font-black text-3xl text-brand-yellow text-glow-yellow tracking-widest uppercase">
                    PARABÉNS, {formData.nome.toUpperCase().split(" ")[0]}!
                  </h4>
                  <h5 className="font-display font-[800] text-sm text-white tracking-widest uppercase">
                    SUA VAGA VIP FOI RESERVADA!
                  </h5>
                  <p className="font-sans text-xs text-brand-gray leading-relaxed max-w-sm mx-auto pt-2">
                    Enviamos as credenciais iniciais para o e-mail: <strong className="text-white">{formData.email}</strong>. Seu plano <strong className="text-brand-yellow">{formData.plano}</strong> está separado!
                  </p>
                  <p className="font-sans text-xs text-brand-gray leading-relaxed max-w-sm mx-auto">
                    Para agilizar a liberação e validar sua assinatura imediatamente, clique no botão do WhatsApp abaixo e receba seu QR Code de acesso da BVOLT!
                  </p>
                </div>

                {/* Instant WhatsApp activation link */}
                <a
                  href={getWhatsAppRegistrationLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 py-4.5 bg-green-500 hover:bg-green-600 font-display font-black text-xs uppercase tracking-widest text-white rounded flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.4)] active:scale-95 transition-all text-center select-none"
                >
                  Falar no WhatsApp <MessageCircle size={16} className="fill-current" />
                </a>

                <button
                  onClick={onClose}
                  className="font-display font-bold text-[10px] text-brand-gray tracking-widest hover:text-white uppercase transition-colors pt-4 h-8"
                >
                  Voltar ao site
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
