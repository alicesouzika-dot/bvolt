/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ModalitiesSection from "./components/ModalitiesSection";
import DifferentialsSection from "./components/DifferentialsSection";
import GallerySection from "./components/GallerySection";
import CoachesSection from "./components/CoachesSection";
import AppSection from "./components/AppSection";
import PlanosSection from "./components/PlanosSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import EnrollmentModal from "./components/EnrollmentModal";

export default function App() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState("PLANO PERFORMANCE");

  const handleOpenEnrollModal = () => {
    setSelectedPlanName("PLANO PERFORMANCE");
    setIsEnrollModalOpen(true);
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlanName(planName);
    setIsEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-black text-white relative font-sans overflow-x-hidden">
      {/* 1. Header (Sticky navigation) */}
      <Header onOpenEnrollModal={handleOpenEnrollModal} />

      {/* 2. Hero Section (Welcome block with primary CTA) */}
      <HeroSection onOpenEnrollModal={handleOpenEnrollModal} />

      {/* 3. About Section (Mais que uma Academia) */}
      <AboutSection />

      {/* 4. Modalities Section (Grid of disciplines) */}
      <ModalitiesSection onOpenEnrollModal={handleOpenEnrollModal} />

      {/* 5. Differentials Section (6 Cards with custom icons) */}
      <DifferentialsSection />

      {/* 6. Gallery Section (Lightbox filterable visual grid) */}
      <GallerySection />

      {/* 6b. Bvolt Coaches Section (Elite Trainers cards) */}
      <CoachesSection />

      {/* 6c. App Section (NOSSO APP) */}
      <AppSection />

      {/* 7. Pricing Plans Section (3 SaaS style subscription cards) */}
      <PlanosSection onSelectPlan={handleSelectPlan} />

      {/* 8. Statistical Metrics Section (Count animate-on-viewport) */}
      <StatsSection />

      {/* 9. Client Testimonials Section (Interactive horizontal slider) */}
      <TestimonialsSection />

      {/* 10. CTA Section (High intensity full-width yellow banner) */}
      <CTASection onOpenEnrollModal={handleOpenEnrollModal} />

      {/* 11. Contact Section (Office maps coordinates, open slots, validated form inputs) */}
      <ContactSection />

      {/* 12. Footer (Standard copyright & rapid links) */}
      <Footer />

      {/* 13. Floating elements */}
      <WhatsAppButton />

      {/* 14. Global Enrollment Dialog Modal */}
      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        selectedPlanName={selectedPlanName}
      />
    </div>
  );
}
