/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Dumbbell, Instagram, Facebook, MessageCircle, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { CUSTOM_ASSETS } from "../data";

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="main-app-footer" className="bg-brand-black border-t border-white/5 pt-16 pb-8 text-left relative overflow-hidden">
      
      {/* Scroll to Top floating arrow */}
      <div className="absolute top-8 right-8">
        <button
          onClick={handleScrollToTop}
          className="w-10 h-10 rounded-full bg-brand-charcoal hover:bg-brand-yellow hover:text-brand-black border border-white/5 flex items-center justify-center text-brand-gray hover:border-brand-yellow transition-all duration-300 shadow-lg cursor-pointer hover:scale-110"
          title="Voltar ao Topo"
        >
          <ArrowUp size={18} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Col 1 - Branding */}
        <div className="space-y-6">
          <a
            href="#inicio"
            onClick={(e) => handleScrollToSection(e, "#inicio")}
            className="flex items-center gap-2 group select-none"
          >
            {!logoError ? (
              <img
                src={CUSTOM_ASSETS.logo}
                alt="BVolt Academia"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={() => setLogoError(true)}
              />
            ) : (
              <>
                <div className="w-9 h-9 bg-brand-yellow rounded-lg flex items-center justify-center shadow-neon-yellow transition-transform duration-300 group-hover:scale-105">
                  <Dumbbell className="text-brand-black stroke-[2.5]" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-xl tracking-tighter text-white leading-none">
                    B<span className="text-brand-yellow">VOLT</span>
                  </span>
                  <span className="text-[8px] font-display font-medium uppercase tracking-[0.25em] text-brand-gray mt-0.5 leading-none">
                    ACADEMIA
                  </span>
                </div>
              </>
            )}
          </a>
          <p className="font-sans text-brand-gray text-xs leading-relaxed max-w-xs font-medium">
            Estrutura de musculação e treinamento funcional de alto rendimento. Elevando limites, promovendo saúde e moldando campeões em Guapimirim.
          </p>

          {/* Social Icons row */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.instagram.com/bvolt.academia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded bg-brand-charcoal hover:bg-brand-yellow text-brand-gray hover:text-brand-black transition-all border border-white/5 flex items-center justify-center hover:scale-105 shadow-neon-yellow-hover"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://web.facebook.com/p/BVOLT-Academia-61559855477610"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded bg-brand-charcoal hover:bg-brand-yellow text-brand-gray hover:text-brand-black transition-all border border-white/5 flex items-center justify-center hover:scale-105 shadow-neon-yellow-hover"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://wa.me/5521996408986"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded bg-brand-charcoal hover:bg-brand-yellow text-brand-gray hover:text-brand-black transition-all border border-white/5 flex items-center justify-center hover:scale-105 shadow-neon-yellow-hover"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Col 2 - Quick links */}
        <div>
          <h4 className="font-display font-[900] text-sm text-white uppercase tracking-widest border-l-2 border-brand-yellow pl-3 mb-6">
            Links Rápidos
          </h4>
          <ul className="space-y-3 font-display font-bold text-xs uppercase tracking-wider">
            <li>
              <a
                href="#inicio"
                onClick={(e) => handleScrollToSection(e, "#inicio")}
                className="text-brand-gray hover:text-brand-yellow transition-colors leading-none"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                onClick={(e) => handleScrollToSection(e, "#sobre")}
                className="text-brand-gray hover:text-brand-yellow transition-colors leading-none"
              >
                Sobre nós
              </a>
            </li>
            <li>
              <a
                href="#modalidades"
                onClick={(e) => handleScrollToSection(e, "#modalidades")}
                className="text-brand-gray hover:text-brand-yellow transition-colors leading-none"
              >
                Modalidades
              </a>
            </li>
            <li>
              <a
                href="#estrutura"
                onClick={(e) => handleScrollToSection(e, "#estrutura")}
                className="text-brand-gray hover:text-brand-yellow transition-colors leading-none"
              >
                Diferenciais
              </a>
            </li>
            <li>
              <a
                href="#planos"
                onClick={(e) => handleScrollToSection(e, "#planos")}
                className="text-brand-gray hover:text-brand-yellow transition-colors leading-none"
              >
                Nossos Planos
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3 - Contacts */}
        <div>
          <h4 className="font-display font-[900] text-sm text-white uppercase tracking-widest border-l-2 border-brand-yellow pl-3 mb-6">
            INFORMAÇÕES
          </h4>
          <ul className="space-y-4 font-sans text-xs text-brand-gray font-medium">
            <li className="flex gap-2.5">
              <MapPin size={16} className="text-brand-yellow shrink-0" />
              <span>Av. Dedo de Deus, 1500, Guapimirim - RJ</span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={16} className="text-brand-yellow shrink-0" />
              <a href="https://wa.me/5521996408986" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">
                (21) 99640-8986
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail size={16} className="text-brand-yellow shrink-0" />
              <a href="mailto:contato@bvolt.com" className="hover:text-brand-yellow transition-colors">
                recepcao@bvoltacademia.com.br
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4 - Opening hours */}
        <div>
          <h4 className="font-display font-[900] text-sm text-white uppercase tracking-widest border-l-2 border-brand-yellow pl-3 mb-6">
            HORÁRIOS
          </h4>
          <ul className="space-y-3 font-sans text-xs text-brand-gray font-medium">
            <li className="flex justify-between border-b border-white/[0.03] pb-1.5">
              <span>Segunda a Sexta:</span>
              <span className="text-white font-semibold">06h às 22h</span>
            </li>
            <li className="flex justify-between border-b border-white/[0.03] pb-1.5">
              <span>Sábado:</span>
              <span className="text-white font-semibold">08h às 14h</span>
            </li>
            <li className="flex justify-between pb-1.5">
              <span>Domingo:</span>
              <span className="text-white font-semibold">09h às 12h</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright border */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[10px] sm:text-xs text-brand-gray font-medium">
        <p>© {new Date().getFullYear()} BVOLT Academia. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.instagram.com/ruanennes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow hover:text-white transition-colors duration-200 font-semibold"
          >
            Ruan Ennes
          </a>
        </p>
      </div>
    </footer>
  );
}
