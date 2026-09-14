import React from 'react';
import { LOGO_IMAGE_URL } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { ThemeSelector } from './ThemeSelector';

interface FooterProps {
  onOpenModal: (type: 'privacy' | 'terms' | 'cookies' | 'press' | 'support') => void;
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal, onScrollTo }) => {
  const { themeConfig } = useTheme();

  return (
    <footer className="w-full mt-24 border-t glass-panel border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-16 py-8 md:py-12 w-full max-w-[1440px] mx-auto gap-6">
        {/* Brand and Emblem */}
        <div
          onClick={() => onScrollTo('hero')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <img
            src={LOGO_IMAGE_URL}
            alt="StyleCue"
            className="w-7 h-7 rounded-full object-cover ring-1"
            style={{ borderColor: themeConfig.primaryAccent }}
          />
          <span className="font-bold text-xl tracking-tight uppercase group-hover:opacity-80 transition-opacity">
            STYLE<span style={{ color: themeConfig.primaryAccent }}>CUE</span>
          </span>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm opacity-80">
          <button
            onClick={() => onOpenModal('privacy')}
            className="hover:opacity-100 transition-opacity cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onOpenModal('terms')}
            className="hover:opacity-100 transition-opacity cursor-pointer"
          >
            Terms of Service
          </button>
          <button
            onClick={() => onOpenModal('cookies')}
            className="hover:opacity-100 transition-opacity cursor-pointer"
          >
            Cookie Settings
          </button>
          <button
            onClick={() => onOpenModal('press')}
            className="hover:opacity-100 transition-opacity cursor-pointer"
          >
            Press Kit
          </button>
          <button
            onClick={() => onOpenModal('support')}
            className="hover:opacity-100 transition-opacity cursor-pointer"
          >
            Contact Support
          </button>
        </div>

        {/* Footer Theme Selector & Copyright */}
        <div className="flex items-center gap-4">
          <ThemeSelector compact />
          <div className="text-xs opacity-60 font-mono">
            © 2026 StyleCue AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
