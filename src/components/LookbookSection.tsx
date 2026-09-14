import React, { useState } from 'react';
import { Sparkles, ArrowRight, Heart, X, ChevronLeft, ChevronRight, Eye, Check, Shirt, Layers } from 'lucide-react';
import { CURATED_LOOKS } from '../data/mockData';
import { LookbookLook, LookItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface LookbookSectionProps {
  onStartStyling: () => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({ onStartStyling }) => {
  const { themeConfig } = useTheme();
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeModalLook, setActiveModalLook] = useState<LookbookLook | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [likedLookIds, setLikedLookIds] = useState<string[]>(['look-1', 'look-2']);

  const filterTags = ['All', 'Casual', 'Evening', 'Work', 'Streetwear', 'Comfort', 'Formal'];

  const filteredLooks = selectedTag === 'All' 
    ? CURATED_LOOKS 
    : CURATED_LOOKS.filter(look => look.tags.some(t => t.toLowerCase().includes(selectedTag.toLowerCase())));

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedLookIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const openLookModal = (look: LookbookLook, targetItemId?: string) => {
    setActiveModalLook(look);
    setSelectedItemId(targetItemId || null);
    setActiveImageIndex(0);
  };

  // Compute active images based on whether a specific item or the full look is selected
  const activeItem: LookItem | undefined = activeModalLook?.items.find(it => it.id === selectedItemId);
  
  const currentPhotoList: { url: string; label: string; caption?: string }[] = React.useMemo(() => {
    if (!activeModalLook) return [];
    
    if (activeItem) {
      const list: { url: string; label: string; caption?: string }[] = [
        { 
          url: activeItem.image, 
          label: 'Primary Piece',
          caption: `${activeItem.brand} • ${activeItem.name}`
        }
      ];
      if (activeItem.galleryImages && activeItem.galleryImages.length > 0) {
        activeItem.galleryImages.forEach((imgUrl, idx) => {
          const labels = ['Editorial View', 'Fabric & Texture', 'Silhouette & Fit', 'Detail Angle'];
          list.push({
            url: imgUrl,
            label: labels[idx % labels.length],
            caption: activeItem.fabricNote || `${activeItem.name} close-up`
          });
        });
      }
      return list;
    }

    // Default: Complete Outfit Look photos
    const fullLookList: { url: string; label: string; caption?: string }[] = [
      { url: activeModalLook.imageUrl, label: 'Full Outfit', caption: activeModalLook.title }
    ];
    if (activeModalLook.detailImages && activeModalLook.detailImages.length > 0) {
      activeModalLook.detailImages.forEach((img, i) => {
        const labels = ['Editorial Angle', 'Fabric & Texture', 'Atmosphere & Styling', 'Silhouette View'];
        fullLookList.push({
          url: img,
          label: labels[i % labels.length],
          caption: activeModalLook.subtitle
        });
      });
    }
    return fullLookList;
  }, [activeModalLook, activeItem]);

  const activeDisplayPhoto = currentPhotoList[activeImageIndex] || currentPhotoList[0];

  const nextPhoto = () => {
    if (currentPhotoList.length <= 1) return;
    setActiveImageIndex((prev) => (prev + 1) % currentPhotoList.length);
  };

  const prevPhoto = () => {
    if (currentPhotoList.length <= 1) return;
    setActiveImageIndex((prev) => (prev - 1 + currentPhotoList.length) % currentPhotoList.length);
  };

  return (
    <section id="lookbooks" className="px-4 sm:px-8 md:px-16 w-full max-w-[1440px] mx-auto py-16 md:py-24 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border text-xs uppercase tracking-widest font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
            Ready-to-Wear Outfits
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Popular <span style={{ color: themeConfig.primaryAccent }}>Outfit Ideas</span>
          </h2>
          <p className="text-base opacity-75 mt-2 max-w-xl">
            Browse complete outfits put together for work, dinners, casual weekends, and travel. Select any individual item to inspect dedicated detail photos and tailoring.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedTag === tag
                  ? 'shadow-lg font-bold text-slate-900'
                  : 'glass-panel opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: selectedTag === tag ? themeConfig.primaryAccent : undefined
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Lookbooks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredLooks.map((look) => {
          const isLiked = likedLookIds.includes(look.id);
          return (
            <div
              key={look.id}
              onClick={() => openLookModal(look)}
              className="glass-panel rounded-3xl overflow-hidden group hover:border-opacity-100 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-xl hover:shadow-2xl border"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-black/40">
                <img
                  src={look.imageUrl}
                  alt={look.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                {/* Score badge */}
                <div
                  className="absolute top-3 left-3 glass-panel-elevated px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 border shadow-md"
                  style={{ color: themeConfig.primaryAccent }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{look.matchScore}% Match</span>
                </div>

                {/* Favorite Heart Button */}
                <button
                  onClick={(e) => toggleLike(look.id, e)}
                  className={`absolute top-3 right-3 p-2 rounded-full glass-panel-elevated transition-colors cursor-pointer ${
                    isLiked ? 'text-rose-400 bg-rose-500/20' : 'opacity-80 hover:opacity-100'
                  }`}
                  aria-label="Save look"
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-400' : ''}`} />
                </button>

                {/* Bottom Tags inside Image */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                  {look.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-white/90 border border-white/10 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider mb-1 font-mono" style={{ color: themeConfig.secondaryAccent }}>
                    {look.vibe}
                  </div>
                  <h3 className="text-lg font-bold leading-snug group-hover:opacity-90 transition-opacity mb-2">
                    {look.title}
                  </h3>
                  <p className="text-xs opacity-75 line-clamp-2 leading-relaxed mb-3">
                    {look.subtitle}
                  </p>

                  {/* Mini Garment Pills for Direct Item Inspection */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {look.items.slice(0, 3).map((item) => (
                      <button
                        key={item.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          openLookModal(look, item.id);
                        }}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white transition-all flex items-center gap-1 cursor-pointer"
                        title={`Inspect ${item.name} photos`}
                      >
                        <Shirt className="w-2.5 h-2.5 opacity-60" />
                        <span className="truncate max-w-[100px]">{item.name}</span>
                      </button>
                    ))}
                    {look.items.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 text-white/60 font-mono">
                        +{look.items.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono opacity-75">{look.items.length} Store Items</span>
                  <span className="font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform" style={{ color: themeConfig.primaryAccent }}>
                    Inspect Look <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Look Detail Modal with Dynamic Item Photo Inspection */}
      {activeModalLook && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4">
          <div className="glass-panel-elevated border border-white/20 rounded-3xl w-full max-w-5xl max-h-[92vh] overflow-y-auto p-5 sm:p-7 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => {
                setActiveModalLook(null);
                setSelectedItemId(null);
              }}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors z-20 cursor-pointer border border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Active View Indicator */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 pr-12">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-widest font-bold" style={{ color: themeConfig.secondaryAccent }}>
                  {activeModalLook.vibe}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-xs font-mono opacity-70">
                  {activeModalLook.occasion}
                </span>
              </div>

              {/* Toggle to switch between Full Look & Item Inspection */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedItemId(null);
                    setActiveImageIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold font-mono flex items-center gap-1.5 transition-all cursor-pointer border ${
                    selectedItemId === null
                      ? 'shadow-md text-slate-900 border-transparent font-bold'
                      : 'bg-white/5 hover:bg-white/10 text-white/80 border-white/10'
                  }`}
                  style={{
                    backgroundColor: selectedItemId === null ? themeConfig.primaryAccent : undefined
                  }}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Full Outfit Overview</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Left Photos Column - Shows related photos of selected item or full outfit */}
              <div className="lg:col-span-6 space-y-3">
                {/* Active Photo Box */}
                <div className="rounded-2xl overflow-hidden h-80 sm:h-[420px] relative bg-black/60 border border-white/10 group shadow-lg">
                  <img
                    key={activeDisplayPhoto?.url}
                    src={activeDisplayPhoto?.url || activeModalLook.imageUrl}
                    alt={activeDisplayPhoto?.label || activeModalLook.title}
                    className="w-full h-full object-cover transition-all duration-500 animate-in fade-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

                  {/* Top Left: Active Subject Badge */}
                  <div className="absolute top-3 left-3 glass-panel-elevated px-3 py-1 rounded-full text-[11px] font-mono font-bold flex items-center gap-1.5 border border-white/20 shadow-md">
                    {activeItem ? (
                      <>
                        <Shirt className="w-3 h-3" style={{ color: themeConfig.secondaryAccent }} />
                        <span>Piece: <strong className="text-white">{activeItem.name}</strong></span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3" style={{ color: themeConfig.primaryAccent }} />
                        <span>Complete Ensemble ({activeModalLook.items.length} items)</span>
                      </>
                    )}
                  </div>

                  {/* Top Right: Match Score */}
                  <div
                    className="absolute top-3 right-3 glass-panel-elevated px-2.5 py-1 rounded-full text-[11px] font-mono font-bold border border-white/15"
                    style={{ color: themeConfig.primaryAccent }}
                  >
                    {activeModalLook.matchScore}% Match
                  </div>

                  {/* Navigation Arrows */}
                  {currentPhotoList.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevPhoto();
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer shadow-lg z-10"
                        title="Previous Photo Angle"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextPhoto();
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer shadow-lg z-10"
                        title="Next Photo Angle"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  {/* Bottom Caption & Label */}
                  <div className="absolute bottom-3 left-4 right-4 text-xs text-white/90 space-y-1">
                    <div className="flex items-center justify-between font-semibold">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: themeConfig.primaryAccent }}></span>
                        {activeDisplayPhoto?.label || 'Photo Angle'}
                      </span>
                      <span className="font-mono text-[11px] opacity-75">
                        {activeImageIndex + 1} / {currentPhotoList.length}
                      </span>
                    </div>
                    {activeDisplayPhoto?.caption && (
                      <p className="text-[11px] text-white/75 truncate">
                        {activeDisplayPhoto.caption}
                      </p>
                    )}
                  </div>
                </div>

                {/* Multi-Angle Photo Thumbnails */}
                {currentPhotoList.length > 1 && (
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono opacity-70 flex items-center justify-between px-1">
                      <span>Related Photos ({activeItem ? `${activeItem.name} Angles` : 'Look Gallery'})</span>
                      <span className="text-[10px] opacity-60">Click thumbnail to switch photo</span>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {currentPhotoList.map((photo, i) => {
                        const isCurrent = activeImageIndex === i;
                        return (
                          <button
                            key={i}
                            onClick={() => setActiveImageIndex(i)}
                            className={`w-20 h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all shrink-0 relative group ${
                              isCurrent ? 'scale-105 shadow-lg ring-2 ring-white/20' : 'opacity-60 hover:opacity-100'
                            }`}
                            style={{ borderColor: isCurrent ? themeConfig.primaryAccent : 'transparent' }}
                            title={photo.label}
                          >
                            <img src={photo.url} alt={photo.label} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors"></div>
                            <div className="absolute bottom-0 inset-x-0 bg-black/80 px-1 py-0.5 text-[9px] font-mono text-center truncate text-white/90">
                              {photo.label}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Fabric & Tailoring Note for active item */}
                {activeItem && activeItem.fabricNote && (
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 shrink-0 mt-0.5" style={{ color: themeConfig.secondaryAccent }} />
                    <div>
                      <div className="font-semibold text-white/90">Garment Material & Detail</div>
                      <div className="text-[11px] opacity-75 mt-0.5">{activeItem.fabricNote}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Look & Interactive Items List */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                    {activeModalLook.title}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-80 mt-2 leading-relaxed">
                    {activeModalLook.description}
                  </p>
                </div>

                {/* Interactive Items in Outfit - Clicking switches photos */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider opacity-85 font-mono flex items-center gap-1.5">
                      <Shirt className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
                      <span>Items in this Outfit (Select to inspect photos)</span>
                    </h4>
                    {selectedItemId && (
                      <button
                        onClick={() => {
                          setSelectedItemId(null);
                          setActiveImageIndex(0);
                        }}
                        className="text-[11px] font-mono underline opacity-75 hover:opacity-100 cursor-pointer"
                        style={{ color: themeConfig.primaryAccent }}
                      >
                        Reset to Full Look
                      </button>
                    )}
                  </div>

                  <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                    {activeModalLook.items.map((item) => {
                      const isSelected = selectedItemId === item.id;
                      return (
                        <div
                          key={item.id}
                          onClick={() => {
                            setSelectedItemId(item.id);
                            setActiveImageIndex(0);
                          }}
                          className={`p-3 rounded-2xl transition-all duration-200 cursor-pointer border flex items-center justify-between text-xs ${
                            isSelected
                              ? 'glass-panel-elevated shadow-lg scale-[1.01]'
                              : 'glass-panel hover:bg-white/10 opacity-85 hover:opacity-100 border-white/5'
                          }`}
                          style={{
                            borderColor: isSelected ? themeConfig.primaryAccent : undefined,
                            boxShadow: isSelected ? `0 0 15px -3px ${themeConfig.primaryAccent}40` : undefined
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-black shrink-0 border border-white/10">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                              {isSelected && (
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                  <Check className="w-4 h-4 text-white" />
                                </div>
                              )}
                            </div>
                            <div>
                              <div className="font-semibold text-white/95 flex items-center gap-2">
                                <span>{item.name}</span>
                                {isSelected && (
                                  <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold" style={{ backgroundColor: `${themeConfig.primaryAccent}30`, color: themeConfig.primaryAccent }}>
                                    Active Photos
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] opacity-70 mt-0.5">
                                {item.brand} • <span style={{ color: themeConfig.secondaryAccent }}>{item.retailer}</span>
                              </div>
                              <div className="text-[10px] opacity-50 font-mono mt-0.5">
                                {item.category.toUpperCase()} • {item.galleryImages?.length ? `${item.galleryImages.length + 1} curated photos` : '1 photo'}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-1">
                            <span className="text-[11px] font-mono text-emerald-400 font-medium">In Stock</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 flex items-center gap-1 font-mono text-white/70">
                              <Eye className="w-2.5 h-2.5" />
                              {isSelected ? 'Viewing' : 'Inspect'}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Styling Advice & Color Palette */}
                <div className="p-3.5 rounded-2xl glass-panel border border-white/10 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold" style={{ color: themeConfig.primaryAccent }}>
                      Stylist Tip
                    </span>
                    <div className="flex items-center gap-1">
                      {activeModalLook.colorPalette.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="opacity-80 leading-relaxed">{activeModalLook.stylingTips[0]}</p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setActiveModalLook(null);
                      setSelectedItemId(null);
                      onStartStyling();
                    }}
                    className="flex-1 py-3.5 rounded-full font-bold text-xs hover:opacity-90 transition-all flex items-center justify-center gap-2 text-slate-900 shadow-xl cursor-pointer"
                    style={{ backgroundColor: themeConfig.primaryAccent }}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Get Outfit in My Size</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveModalLook(null);
                      setSelectedItemId(null);
                    }}
                    className="px-5 py-3.5 rounded-full text-xs font-semibold glass-panel hover:bg-white/15 transition-all text-white/80 hover:text-white cursor-pointer"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

