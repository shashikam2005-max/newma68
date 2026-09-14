import React, { useState } from 'react';
import { Sparkles, MapPin, Calendar, X, Heart, ZoomIn } from 'lucide-react';
import { RUNWAY_SNAPSHOTS } from '../data/mockData';
import { RunwaySnapshot } from '../types';
import { useTheme } from '../context/ThemeContext';

export const RunwayGallerySection: React.FC = () => {
  const { themeConfig } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState<RunwaySnapshot | null>(null);
  const [likedIds, setLikedIds] = useState<string[]>(['runway-1']);

  const categories = ['All', 'Designer Look', 'Silk Eveningwear', 'City Jacket', 'Work Suit', 'Pleated Wear', 'Evening Jacket'];

  const filteredSnapshots = selectedCategory === 'All'
    ? RUNWAY_SNAPSHOTS
    : RUNWAY_SNAPSHOTS.filter(s => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedIds(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  return (
    <section id="runway-feed" className="px-4 sm:px-8 md:px-16 w-full max-w-[1440px] mx-auto py-16 md:py-24 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border text-xs uppercase tracking-widest font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
            Fashion Shows & Trends
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Latest <span style={{ color: themeConfig.primaryAccent }}>Fashion Feed</span>
          </h2>
          <p className="text-base opacity-75 mt-2 max-w-xl">
            See trending styles and outfit ideas from fashion shows in Milan, Paris, Tokyo, and London.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'shadow-md font-bold text-slate-900'
                  : 'glass-panel opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: selectedCategory === cat ? themeConfig.primaryAccent : undefined
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Runway Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSnapshots.map((item) => {
          const isLiked = likedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="glass-panel rounded-3xl overflow-hidden group hover:border-opacity-100 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-xl relative"
            >
              <div className="relative h-80 sm:h-96 overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Location & Season badge */}
                <div className="absolute top-4 left-4 glass-panel-elevated px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 shadow-md">
                  <MapPin className="w-3 h-3" style={{ color: themeConfig.primaryAccent }} />
                  <span>{item.location}</span>
                </div>

                {/* Like Button */}
                <button
                  onClick={(e) => toggleLike(item.id, e)}
                  className={`absolute top-4 right-4 p-2 rounded-full glass-panel-elevated transition-transform active:scale-90 cursor-pointer ${
                    isLiked ? 'text-rose-400' : 'opacity-80 hover:opacity-100'
                  }`}
                  aria-label="Save look"
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-400' : ''}`} />
                </button>

                {/* Bottom Overlay Title & Palette */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-mono font-bold" style={{ color: themeConfig.primaryAccent }}>
                      {item.designer}
                    </span>
                    <div className="flex -space-x-1">
                      {item.palette.map((c, i) => (
                        <span key={i} className="w-3 h-3 rounded-full border border-black/40" style={{ backgroundColor: c }}></span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug group-hover:underline">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-white/80 pt-1 border-t border-white/10">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 opacity-60" /> {item.season}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 font-mono">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stylist Note Snippet */}
              <div className="p-4 text-xs opacity-75 border-t border-white/5 bg-black/20 flex items-center justify-between">
                <span className="line-clamp-1 italic">"{item.stylistNote}"</span>
                <ZoomIn className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 flex-shrink-0" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Snapshot Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="glass-panel-elevated rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-white/20 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-80 md:h-[500px] relative bg-black">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase" style={{ backgroundColor: `${themeConfig.primaryAccent}30`, color: themeConfig.primaryAccent }}>
                      {activePhoto.category}
                    </span>
                    <span className="text-xs opacity-60 font-mono">{activePhoto.season}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {activePhoto.title}
                  </h3>

                  <div className="text-sm font-semibold opacity-90">
                    Designer: <span style={{ color: themeConfig.primaryAccent }}>{activePhoto.designer}</span> • {activePhoto.location}
                  </div>

                  <div className="p-4 rounded-2xl glass-panel border border-white/10 space-y-1.5">
                    <span className="text-xs font-mono font-bold uppercase block" style={{ color: themeConfig.primaryAccent }}>
                      Stylist Tip:
                    </span>
                    <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                      {activePhoto.stylistNote} Our AI finds matching in-stock clothes that fit your exact body shape and size.
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase font-mono opacity-70 mb-2">
                      Matching Color Palette
                    </div>
                    <div className="flex gap-2">
                      {activePhoto.palette.map((c, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg glass-panel">
                          <span className="w-3.5 h-3.5 rounded-full border border-black/30" style={{ backgroundColor: c }}></span>
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActivePhoto(null)}
                  className="w-full py-3.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase text-slate-900 transition-all shadow-lg active:scale-95 cursor-pointer"
                  style={{ backgroundColor: themeConfig.primaryAccent }}
                >
                  Find Clothes Like This in My Size
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
