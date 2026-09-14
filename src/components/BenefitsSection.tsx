import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { STYLING_BENEFITS } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface BenefitsSectionProps {
  onStartQuiz: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onStartQuiz }) => {
  const { themeConfig } = useTheme();

  return (
    <section id="benefits" className="px-4 sm:px-8 md:px-16 w-full max-w-[1440px] mx-auto py-16 md:py-24 relative">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border text-xs uppercase tracking-widest font-mono">
          <Sparkles className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
          Why People Love StyleCue
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Smarter, Easier <span style={{ color: themeConfig.primaryAccent }}>Everyday Styling</span>
        </h2>
        <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto font-normal">
          We help you look your best every day with outfit suggestions tailored to your taste, body type, and lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STYLING_BENEFITS.map((b) => (
          <div
            key={b.id}
            className="glass-panel p-6 sm:p-8 rounded-3xl border flex flex-col justify-between group hover:border-opacity-100 transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative overflow-hidden"
          >
            {/* Top Image Preview */}
            <div className="h-44 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 relative overflow-hidden bg-black/40">
              <img
                src={b.imageUrl}
                alt={b.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Floating Stat Chip */}
              <div className="absolute bottom-3 left-4 glass-panel-elevated px-3 py-1 rounded-full flex items-center gap-2 text-xs font-mono font-bold">
                <span style={{ color: themeConfig.primaryAccent }}>{b.stat}</span>
                <span className="opacity-70 text-[10px]">{b.statLabel}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight">
                {b.title}
              </h3>
              <p className="text-sm opacity-80 leading-relaxed">
                {b.description}
              </p>
              <p className="text-xs opacity-60 leading-relaxed pt-2 border-t border-white/10">
                {b.details}
              </p>
            </div>

            <div className="pt-6 mt-4">
              <button
                onClick={onStartQuiz}
                className="text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all cursor-pointer"
                style={{ color: themeConfig.primaryAccent }}
              >
                <span>Try It Yourself</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
