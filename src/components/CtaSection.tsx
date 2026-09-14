import React from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CtaSectionProps {
  onStartQuiz: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartQuiz }) => {
  const { themeConfig } = useTheme();

  return (
    <section className="px-4 sm:px-8 md:px-16 w-full max-w-[1440px] mx-auto py-16 md:py-24 relative">
      <div className="glass-panel-elevated rounded-3xl p-8 sm:p-14 md:p-20 text-center border relative overflow-hidden shadow-2xl">
        {/* Ambient glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 blur-[140px] rounded-full pointer-events-none opacity-30"
          style={{ backgroundColor: themeConfig.primaryAccent }}
        ></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
            Free Style Recommendation
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Find Your Next Outfit in <span style={{ color: themeConfig.primaryAccent }}>60 Seconds</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl opacity-80 max-w-xl mx-auto leading-relaxed">
            Join over 85,000 shoppers using StyleCue to discover great clothes, matching accessories, and the right fit every time.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartQuiz}
              className="w-full sm:w-auto text-slate-900 px-10 py-4 rounded-full font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-2xl hover:opacity-90 active:scale-95 cursor-pointer"
              style={{ backgroundColor: themeConfig.primaryAccent }}
            >
              <span>Take Free Style Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs opacity-75 font-mono">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" /> 100% Free to use
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" /> Buy directly from trusted stores
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" /> Guaranteed size matching
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
