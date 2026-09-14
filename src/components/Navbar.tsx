import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import { LOGO_IMAGE_URL } from '../data/mockData';
import { ThemeSelector } from './ThemeSelector';
import { LightDarkToggle } from './LightDarkToggle';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenQuiz: () => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenRetailer: () => void;
  onScrollTo: (id: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuiz,
  onOpenAuth,
  onOpenRetailer,
  onScrollTo,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { themeConfig } = useTheme();

  const navLinks = [
    { name: 'Video Demo', id: 'video-demo' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Try Stylist', id: 'live-stylist' },
    { name: 'Outfits', id: 'lookbooks' },
    { name: 'Fashion Feed', id: 'runway-feed' },
    { name: 'For Stores', id: 'for-retailers' },
    { name: 'About Us', id: 'about-us' }
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-panel border-b transition-all duration-300 backdrop-blur-2xl">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 py-3 w-full max-w-[1440px] mx-auto gap-4">
        {/* Brand Logo & Name */}
        <div
          onClick={() => onScrollTo('hero')}
          className="flex items-center gap-3 cursor-pointer group select-none flex-shrink-0"
        >
          <div className="relative">
            <img
              src={LOGO_IMAGE_URL}
              alt="StyleCue Logo"
              className="h-9 w-9 rounded-full object-cover ring-2 transition-all shadow-md"
              style={{ borderColor: themeConfig.primaryAccent }}
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-black"></span>
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight uppercase group-hover:opacity-80 transition-opacity">
            STYLE<span style={{ color: themeConfig.primaryAccent }}>CUE</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex gap-7 items-center text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all duration-200 cursor-pointer py-1 relative text-xs sm:text-sm tracking-wide ${
                  isActive
                    ? 'font-bold'
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{ color: isActive ? themeConfig.primaryAccent : undefined }}
              >
                {link.name}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                    style={{ backgroundColor: themeConfig.primaryAccent }}
                  ></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Header Bar: Light / Dark Toggle + Sign In + Get Started */}
        <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
          <ThemeSelector />

          <button
            onClick={() => onOpenAuth('login')}
            className="text-xs sm:text-sm font-semibold transition-colors px-3 py-1.5 opacity-80 hover:opacity-100 cursor-pointer"
            style={{ color: themeConfig.primaryAccent }}
          >
            Sign In
          </button>

          <button
            onClick={onOpenQuiz}
            className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer text-slate-900"
            style={{ backgroundColor: themeConfig.primaryAccent }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Get Started</span>
          </button>
        </div>

        {/* Mobile View */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeSelector compact />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none opacity-80 hover:opacity-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel-elevated border-b px-6 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-bold uppercase tracking-wider font-mono opacity-80">
              Theme Mode
            </span>
            <LightDarkToggle />
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-sm font-semibold py-2.5 border-b border-white/5 flex items-center justify-between opacity-85 hover:opacity-100"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </button>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="w-full text-center text-xs font-semibold py-2.5 rounded-xl border border-white/15"
              style={{ color: themeConfig.primaryAccent }}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full font-bold py-3 rounded-full text-xs flex items-center justify-center gap-2 shadow-lg text-slate-900"
              style={{ backgroundColor: themeConfig.primaryAccent }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Take Style Quiz</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
