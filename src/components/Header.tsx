/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Dumbbell } from "lucide-react";
import { CUSTOM_ASSETS } from "../data";

interface HeaderProps {
  onOpenEnrollModal: () => void;
}

export default function Header({ onOpenEnrollModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navigationLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Modalidades", href: "#modalidades" },
    { name: "Estrutura", href: "#estrutura" },
    { name: "Equipe", href: "#coaches" },
    { name: "Planos", href: "#planos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Eventos", href: "#cta-transformacao" },
    { name: "Contato", href: "#contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-black/90 backdrop-blur-md py-4 border-b border-brand-yellow/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* LOGO */}
        <a
          href="#inicio"
          className="flex items-center gap-2 select-none group"
          onClick={(e) => handleScrollToSection(e, "#inicio")}
        >
          {!logoError ? (
            <img
              src={CUSTOM_ASSETS.logo}
              alt="BVolt Academia"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={() => setLogoError(true)}
            />
          ) : (
            <>
              <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center shadow-neon-yellow transition-transform duration-300 group-hover:scale-105">
                <Dumbbell className="text-brand-black stroke-[2.5]" size={22} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tighter text-white leading-none">
                  B<span className="text-brand-yellow">VOLT</span>
                </span>
                <span className="text-[9px] font-display font-medium uppercase tracking-[0.25em] text-brand-gray/80 leading-none mt-1">
                  ACADEMIA
                </span>
              </div>
            </>
          )}
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav id="desktop-navbar" className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="font-display font-semibold text-xs tracking-wider uppercase text-brand-gray hover:text-brand-yellow transition-colors duration-200 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex items-center">
          <button
            id="header-cta-enroll-btn"
            onClick={onOpenEnrollModal}
            className="font-display font-bold text-xs uppercase tracking-widest px-6 py-3 bg-brand-yellow text-brand-black rounded-sm shadow-neon-yellow hover:shadow-neon-yellow-hover outline-none border-none transition-all duration-300 cursor-pointer hover:bg-white hover:-translate-y-0.5"
          >
            FAZER MATRÍCULA
          </button>
        </div>

        {/* MOBILE TRIGGER */}
        <div className="flex items-center lg:hidden">
          <button
            id="mobile-menu-hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white hover:text-brand-yellow transition-colors duration-200"
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[73px] left-0 right-0 bg-brand-charcoal border-b border-brand-yellow/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-30 flex flex-col items-center py-8 px-4 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="w-full py-3.5 text-center font-display font-bold text-sm uppercase tracking-wider text-brand-white hover:text-brand-yellow hover:bg-brand-black/20 rounded transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <button
              id="mobile-header-cta-enroll-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnrollModal();
              }}
              className="w-full mt-6 py-4 bg-brand-yellow text-brand-black font-display font-black text-xs uppercase tracking-widest rounded shadow-neon-yellow active:scale-95 transition-all text-center"
            >
              FAZER MATRÍCULA
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
