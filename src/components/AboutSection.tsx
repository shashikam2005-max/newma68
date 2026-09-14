import React from 'react';
import { Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AboutSection: React.FC = () => {
  const { themeConfig } = useTheme();

  return (
    <section id="about-us" className="px-4 sm:px-8 md:px-16 w-full max-w-[1440px] mx-auto py-16 md:py-24 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Story */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border text-xs uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
            Our Mission
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Personal Styling Made <span style={{ color: themeConfig.primaryAccent }}>Simple & Accessible</span>
          </h2>

          <p className="text-base sm:text-lg opacity-80 leading-relaxed font-normal">
            StyleCue was built to make great style easy for everyone. Finding outfits that look great and fit comfortably shouldn't take hours of searching across dozens of different websites.
          </p>

          <p className="text-sm opacity-70 leading-relaxed">
            By studying clothes sizing, cuts, colors, and current fashion trends, our AI helps you put together outfits you'll love wearing — with direct links to buy items in your exact size from trusted online stores.
          </p>

          {/* Core Values / Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 rounded-2xl glass-panel border border-white/5 space-y-1">
              <div className="text-2xl font-bold font-mono" style={{ color: themeConfig.primaryAccent }}>
                100%
              </div>
              <div className="text-xs font-semibold">Verified Online Stores</div>
              <div className="text-[11px] opacity-60">Authentic clothing from authorized fashion brands and top retailers</div>
            </div>

            <div className="p-4 rounded-2xl glass-panel border border-white/5 space-y-1">
              <div className="text-2xl font-bold font-mono" style={{ color: themeConfig.secondaryAccent }}>
                400+
              </div>
              <div className="text-xs font-semibold">Brand Size Guides</div>
              <div className="text-[11px] opacity-60">Accurate sizing across US, UK, European, and Japanese brands</div>
            </div>
          </div>
        </div>

        {/* Right Column: Image Collage */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
          <div className="space-y-4">
            <div className="h-64 sm:h-72 rounded-3xl overflow-hidden glass-panel border shadow-xl relative group">
              <img
                src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=600&q=80"
                alt="Design Studio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/90 font-semibold">
                Milan Studio
              </div>
            </div>

            <div className="h-44 sm:h-52 rounded-3xl overflow-hidden glass-panel border shadow-xl relative group">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80"
                alt="Fabrics and Colors"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/90 font-semibold">
                Colors & Materials
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 sm:pt-8">
            <div className="h-44 sm:h-52 rounded-3xl overflow-hidden glass-panel border shadow-xl relative group">
              <img
                src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=600&q=80"
                alt="Fitting and Styling"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/90 font-semibold">
                Paris Fitting Session
              </div>
            </div>

            <div className="h-64 sm:h-72 rounded-3xl overflow-hidden glass-panel border shadow-xl relative group">
              <img
                src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80"
                alt="Outfit Curation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/90 font-semibold">
                Outfit Matching
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
