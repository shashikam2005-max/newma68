/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { VideoShowcaseSection } from './components/VideoShowcaseSection';
import { InteractiveStylistDemo } from './components/InteractiveStylistDemo';
import { LookbookSection } from './components/LookbookSection';
import { RunwayGallerySection } from './components/RunwayGallerySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { RetailersSection } from './components/RetailersSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

import { StylistQuizModal } from './components/Modals/StylistQuizModal';
import { AuthModal } from './components/Modals/AuthModal';
import { RetailerModal } from './components/Modals/RetailerModal';
import { InfoModal } from './components/Modals/InfoModal';

function AppContent() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [authModalConfig, setAuthModalConfig] = useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'login'
  });
  const [isRetailerModalOpen, setIsRetailerModalOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState<'privacy' | 'terms' | 'cookies' | 'press' | 'support' | null>(null);

  // Smooth scroll handler
  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Section observer to update active nav state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'video-demo', 'benefits', 'live-stylist', 'lookbooks', 'runway-feed', 'how-it-works', 'for-retailers', 'about-us'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-hidden transition-colors duration-300">
      {/* Navigation with Theme Selector */}
      <Navbar
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenAuth={(mode) => setAuthModalConfig({ isOpen: true, mode })}
        onOpenRetailer={() => setIsRetailerModalOpen(true)}
        onScrollTo={handleScrollTo}
        activeSection={activeSection}
      />

      {/* Main Content Body */}
      <main className="pt-20 md:pt-24 space-y-4">
        {/* 1. Hero Section */}
        <HeroSection
          onStartStyling={() => setIsQuizOpen(true)}
          onExploreLookbooks={() => handleScrollTo('lookbooks')}
          onWatchVideo={() => handleScrollTo('video-demo')}
        />

        {/* 2. Video Commercial & Demo Experience */}
        <VideoShowcaseSection
          onStartQuiz={() => setIsQuizOpen(true)}
        />

        {/* 3. Core Benefits Section */}
        <BenefitsSection
          onStartQuiz={() => setIsQuizOpen(true)}
        />

        {/* 4. Interactive Live AI Stylist Atelier Demo */}
        <InteractiveStylistDemo
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* 4. Lookbook Showcase */}
        <LookbookSection
          onStartStyling={() => setIsQuizOpen(true)}
        />

        {/* 5. Live Global Runway Feed & Visual Gallery */}
        <RunwayGallerySection />

        {/* 6. How It Works Pipeline */}
        <HowItWorksSection
          onStartQuiz={() => setIsQuizOpen(true)}
        />

        {/* 7. For Retailers Enterprise */}
        <RetailersSection
          onOpenRetailerModal={() => setIsRetailerModalOpen(true)}
        />

        {/* 8. About StyleCue Atelier */}
        <AboutSection />

        {/* 9. Testimonials & Press Reviews */}
        <TestimonialsSection />

        {/* 10. FAQs */}
        <FaqSection />

        {/* 11. Call to Action */}
        <CtaSection
          onStartQuiz={() => setIsQuizOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenModal={(type) => setInfoModalType(type)}
        onScrollTo={handleScrollTo}
      />

      {/* Interactive Modals */}
      <StylistQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

      <AuthModal
        isOpen={authModalConfig.isOpen}
        initialMode={authModalConfig.mode}
        onClose={() => setAuthModalConfig({ isOpen: false, mode: 'login' })}
      />

      <RetailerModal
        isOpen={isRetailerModalOpen}
        onClose={() => setIsRetailerModalOpen(false)}
      />

      <InfoModal
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
