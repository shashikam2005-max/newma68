import React from 'react';
import { Sparkles, Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

export const TestimonialsSection: React.FC = () => {
  const { themeConfig } = useTheme();

  return (
    <section id="testimonials" className="px-4 sm:px-8 md:px-16 w-full max-w-[1440px] mx-auto py-16 md:py-24 relative">
      <div className="text-center mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border text-xs uppercase tracking-widest font-mono">
          <Sparkles className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
          Customer Reviews
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Loved by <span style={{ color: themeConfig.primaryAccent }}>Real Shoppers</span>
        </h2>
        <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto font-normal">
          Read genuine reviews from everyday shoppers finding confidence and perfect-fitting outfits with StyleCue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="glass-panel p-8 rounded-3xl border flex flex-col justify-between group hover:border-opacity-100 transition-all duration-300 shadow-xl relative"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 opacity-20" style={{ color: themeConfig.primaryAccent }} />
              </div>

              <p className="text-base sm:text-lg opacity-90 leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold tracking-tight text-white">{t.author}</h4>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Shopper</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
