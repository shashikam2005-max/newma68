import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Wand2,
  RefreshCw,
  ShoppingBag,
  SlidersHorizontal,
  CheckCircle,
  ArrowRight,
  Tag,
  Eye,
  Camera,
  Layers,
  Sparkle,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  PackageCheck
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import {
  OCCASIONS,
  OCCASIONS_METADATA,
  VIBES,
  VIBES_METADATA,
  PALETTES,
  DEMO_OUTFITS_DATABASE,
  StylistDemoLook,
  StylistDemoItem,
  StylistPhoto
} from '../data/stylistDemoData';

interface InteractiveStylistDemoProps {
  onOpenQuiz: () => void;
}

export const InteractiveStylistDemo: React.FC<InteractiveStylistDemoProps> = ({ onOpenQuiz }) => {
  const { themeConfig } = useTheme();
  const [selectedOccasion, setSelectedOccasion] = useState(OCCASIONS[0]);
  const [selectedVibe, setSelectedVibe] = useState(VIBES[0]);
  const [selectedPalette, setSelectedPalette] = useState(0);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [variationIndex, setVariationIndex] = useState(0);
  const [addedItemIds, setAddedItemIds] = useState<string[]>([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [previewRelatedLook, setPreviewRelatedLook] = useState<{
    title: string;
    imageUrl: string;
    vibeTag: string;
  } | null>(null);

  // Dynamically derive the available looks and currently active look
  const availableLooks: StylistDemoLook[] = useMemo(() => {
    const key = `${selectedOccasion}-${selectedVibe}`;
    return DEMO_OUTFITS_DATABASE[key] || DEMO_OUTFITS_DATABASE['Casual Weekend-Casual & Clean'] || [];
  }, [selectedOccasion, selectedVibe]);

  const currentLook: StylistDemoLook = useMemo(() => {
    if (!availableLooks.length) return DEMO_OUTFITS_DATABASE['Casual Weekend-Casual & Clean'][0];
    return availableLooks[variationIndex % availableLooks.length];
  }, [availableLooks, variationIndex]);

  // Find currently active item if selected
  const activeItem: StylistDemoItem | null = useMemo(() => {
    if (!selectedItemId) return null;
    return currentLook.items.find((item) => item.id === selectedItemId) || null;
  }, [currentLook, selectedItemId]);

  // Photos to display based on whether full look or specific garment item is selected
  const currentPhotos: StylistPhoto[] = useMemo(() => {
    if (activeItem) {
      const photos: StylistPhoto[] = [
        {
          url: activeItem.image,
          label: `${activeItem.name} - Front Angle`,
          caption: activeItem.fabricNote || `${activeItem.brand} primary silhouette & cut`
        }
      ];

      if (activeItem.galleryImages && activeItem.galleryImages.length > 0) {
        activeItem.galleryImages.forEach((imgUrl, i) => {
          if (imgUrl !== activeItem.image) {
            photos.push({
              url: imgUrl,
              label: `Detail Angle ${i + 1}`,
              caption: `Close-up craftsmanship & hardware detail`
            });
          }
        });
      }

      // Add full look as reference
      photos.push({
        url: currentLook.imageUrl,
        label: 'In Full Outfit Context',
        caption: `Styled as part of ${currentLook.title}`
      });

      return photos;
    }

    return currentLook.photos;
  }, [currentLook, activeItem]);

  // Ensure active photo index is within bounds
  const activePhoto = currentPhotos[activePhotoIndex] || currentPhotos[0] || {
    url: currentLook.imageUrl,
    label: 'Full Outfit',
    caption: currentLook.title
  };

  const handleOccasionChange = (occ: string) => {
    setSelectedOccasion(occ);
    setVariationIndex(0);
    setActivePhotoIndex(0);
    setSelectedItemId(null);
    setPreviewRelatedLook(null);
  };

  const handleVibeChange = (vibe: string) => {
    setSelectedVibe(vibe);
    setVariationIndex(0);
    setActivePhotoIndex(0);
    setSelectedItemId(null);
    setPreviewRelatedLook(null);
  };

  const handlePaletteChange = (idx: number) => {
    setSelectedPalette(idx);
    setActivePhotoIndex(0);
  };

  const handleSynthesize = () => {
    setIsSynthesizing(true);
    setTimeout(() => {
      setVariationIndex((prev) => prev + 1);
      setActivePhotoIndex(0);
      setSelectedItemId(null);
      setPreviewRelatedLook(null);
      setIsSynthesizing(false);
    }, 400);
  };

  const toggleCartItem = (id: string) => {
    setAddedItemIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % currentPhotos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + currentPhotos.length) % currentPhotos.length);
  };

  return (
    <section id="live-stylist" className="px-4 sm:px-8 md:px-16 w-full max-w-[1440px] mx-auto py-16 md:py-24 relative">
      {/* Header */}
      <div className="text-center mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border text-xs font-semibold uppercase tracking-wider font-mono">
          <Sparkles className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
          Interactive Outfit Builder
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Try the <span style={{ color: themeConfig.primaryAccent }}>AI Stylist</span> Demo
        </h2>
        <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto font-normal">
          Select your preferences to instantly view curated photos and complete outfits matching your exact occasion and style vibe.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Preference Selection Console */}
        <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border space-y-6 shadow-xl sticky top-24">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 font-semibold text-base">
              <SlidersHorizontal className="w-5 h-5" style={{ color: themeConfig.primaryAccent }} />
              <span>Select Your Preferences</span>
            </div>
            <span className="text-xs opacity-60 font-mono">Live Demo</span>
          </div>

          {/* 1. Occasion Selector */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-semibold uppercase tracking-wider opacity-75 font-mono">
                1. Where Are You Going?
              </label>
              <span className="text-[11px] font-mono font-bold" style={{ color: themeConfig.primaryAccent }}>
                {selectedOccasion}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {OCCASIONS_METADATA.map((occMeta) => {
                const isSelected = selectedOccasion === occMeta.name;
                return (
                  <button
                    key={occMeta.name}
                    onClick={() => handleOccasionChange(occMeta.name)}
                    className={`p-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer border flex items-center gap-2.5 text-left ${
                      isSelected
                        ? 'glass-panel-elevated font-bold shadow-md ring-1'
                        : 'glass-panel opacity-70 hover:opacity-100 hover:border-white/20'
                    }`}
                    style={{
                      borderColor: isSelected ? themeConfig.primaryAccent : 'transparent',
                      color: isSelected ? themeConfig.primaryAccent : undefined
                    }}
                  >
                    <img
                      src={occMeta.preview}
                      alt={occMeta.name}
                      className="w-9 h-9 rounded-lg object-cover flex-shrink-0 border border-white/20 shadow-xs"
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-xs truncate leading-tight">{occMeta.name}</div>
                      <div className="text-[10px] opacity-60 truncate font-mono">{occMeta.tagline}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Vibe Selector */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-semibold uppercase tracking-wider opacity-75 font-mono">
                2. What Style Do You Like?
              </label>
              <span className="text-[11px] font-mono font-bold" style={{ color: themeConfig.secondaryAccent }}>
                {selectedVibe}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {VIBES_METADATA.map((vibeMeta) => {
                const isSelected = selectedVibe === vibeMeta.name;
                return (
                  <button
                    key={vibeMeta.name}
                    onClick={() => handleVibeChange(vibeMeta.name)}
                    className={`p-2 rounded-xl text-xs font-medium text-left transition-all duration-200 cursor-pointer border flex items-center gap-2.5 ${
                      isSelected
                        ? 'glass-panel-elevated font-bold shadow-md ring-1'
                        : 'glass-panel opacity-70 hover:opacity-100 hover:border-white/20'
                    }`}
                    style={{
                      borderColor: isSelected ? themeConfig.primaryAccent : 'transparent',
                      color: isSelected ? themeConfig.primaryAccent : undefined
                    }}
                  >
                    <img
                      src={vibeMeta.preview}
                      alt={vibeMeta.name}
                      className="w-9 h-9 rounded-lg object-cover flex-shrink-0 border border-white/20 shadow-xs"
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-xs truncate leading-tight">{vibeMeta.name}</div>
                      <div className="text-[10px] opacity-60 truncate font-mono">{vibeMeta.tagline}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Color Palette */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="block text-xs font-semibold uppercase tracking-wider opacity-75 font-mono">
                3. Pick a Color Palette
              </label>
              <span className="text-[11px] font-mono font-bold opacity-80">
                {PALETTES[selectedPalette].name}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {PALETTES.map((palette, idx) => (
                <button
                  key={palette.name}
                  onClick={() => handlePaletteChange(idx)}
                  className={`p-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-all duration-200 cursor-pointer border ${
                    selectedPalette === idx
                      ? 'glass-panel-elevated shadow-sm font-bold'
                      : 'glass-panel opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    borderColor: selectedPalette === idx ? themeConfig.primaryAccent : 'transparent'
                  }}
                >
                  <span>{palette.name}</span>
                  <div className="flex gap-1.5">
                    {palette.colors.map((c, i) => (
                      <span
                        key={i}
                        className="w-4 h-4 rounded-full border border-black/20"
                        style={{ backgroundColor: c }}
                      ></span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Photos Related to Selected Preferences */}
          <div className="p-3.5 rounded-2xl border border-white/10 glass-panel-elevated space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider font-mono">
                <Camera className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
                <span>Curated Photos for This Preference</span>
              </div>
              <span className="text-[10px] font-mono opacity-70" style={{ color: themeConfig.primaryAccent }}>
                {currentPhotos.length} Angles
              </span>
            </div>
            
            <p className="text-[11px] opacity-75">
              Matching <span className="font-semibold text-white">{selectedOccasion}</span> with <span className="font-semibold text-white">{selectedVibe}</span>:
            </p>

            {/* Photo Strip Grid for Selected Preference */}
            <div className="grid grid-cols-3 gap-2">
              {currentPhotos.map((p, idx) => {
                const isActive = activePhotoIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActivePhotoIndex(idx);
                      setSelectedItemId(null);
                    }}
                    className={`relative rounded-xl overflow-hidden aspect-square border transition-all duration-200 cursor-pointer group text-left ${
                      isActive
                        ? 'ring-2 ring-offset-2 ring-offset-black scale-102 shadow-lg'
                        : 'opacity-70 hover:opacity-100 hover:scale-101'
                    }`}
                    style={{
                      borderColor: isActive ? themeConfig.primaryAccent : 'rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    <img
                      src={p.url}
                      alt={p.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <span className="absolute bottom-1 left-1.5 right-1 text-[9px] font-bold text-white truncate">
                      {p.label}
                    </span>
                    {isActive && (
                      <div
                        className="absolute top-1 right-1 w-2 h-2 rounded-full shadow-xs"
                        style={{ backgroundColor: themeConfig.primaryAccent }}
                      ></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Generate Look Button */}
          <div className="pt-2">
            <button
              onClick={handleSynthesize}
              disabled={isSynthesizing}
              className="w-full text-slate-900 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xl active:scale-98 cursor-pointer disabled:opacity-50 hover:opacity-95"
              style={{ backgroundColor: themeConfig.primaryAccent }}
            >
              {isSynthesizing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Curating Photos & Look...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>Generate New Outfit Variation</span>
                </>
              )}
            </button>
            <p className="text-[11px] opacity-60 text-center mt-2.5 font-mono">
              Live matching across partner inventory & runway catalogs
            </p>
          </div>
        </div>

        {/* Right Output Stage with Related Photos & Item Inspector */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel-elevated p-6 sm:p-8 rounded-3xl border relative overflow-hidden shadow-2xl space-y-6">
            {/* Top Look Title & Match Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold glass-panel"
                    style={{ color: themeConfig.secondaryAccent }}
                  >
                    {currentLook.occasion}
                  </span>
                  <span className="text-xs opacity-60 font-mono">• {currentLook.vibe}</span>
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/5 border border-white/10"
                    style={{ color: themeConfig.primaryAccent }}
                  >
                    {PALETTES[selectedPalette].name}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {currentLook.title}
                </h3>
                <p className="text-xs opacity-75 font-normal mt-0.5">
                  {currentLook.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-2xl font-bold font-mono" style={{ color: themeConfig.primaryAccent }}>
                    {currentLook.matchScore}%
                  </div>
                  <div className="text-[10px] uppercase tracking-wider font-semibold opacity-70">
                    Match Score
                  </div>
                </div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{ backgroundColor: `${themeConfig.primaryAccent}25`, color: themeConfig.primaryAccent }}
                >
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Curated Outfit Variations Switcher */}
            {availableLooks.length > 1 && (
              <div className="space-y-2 pb-2 border-b border-white/10">
                <div className="text-xs font-semibold uppercase tracking-wider opacity-75 font-mono flex items-center justify-between">
                  <span>Curated Outfits for this Occasion ({availableLooks.length} Styles):</span>
                  <span className="text-[11px] font-mono opacity-80" style={{ color: themeConfig.primaryAccent }}>
                    Showing Look {(variationIndex % availableLooks.length) + 1} of {availableLooks.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {availableLooks.map((look, lIdx) => {
                    const isCurrent = (variationIndex % availableLooks.length) === lIdx;
                    return (
                      <button
                        key={look.id}
                        onClick={() => {
                          setVariationIndex(lIdx);
                          setActivePhotoIndex(0);
                          setSelectedItemId(null);
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer border flex items-center gap-2 ${
                          isCurrent
                            ? 'glass-panel-elevated font-bold shadow-md ring-1'
                            : 'glass-panel opacity-70 hover:opacity-100'
                        }`}
                        style={{
                          borderColor: isCurrent ? themeConfig.primaryAccent : 'transparent',
                          color: isCurrent ? themeConfig.primaryAccent : undefined
                        }}
                      >
                        <img
                          src={look.imageUrl}
                          alt=""
                          className="w-4 h-4 rounded-full object-cover border border-white/20"
                        />
                        <span>Look {lIdx + 1}: {look.title.split('&')[0].trim()}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* View Mode Switcher: Full Look vs Individual Garments */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider opacity-75 font-mono flex items-center justify-between">
                <span>Select View / Piece to Inspect:</span>
                {activeItem && (
                  <span className="text-[11px] font-bold" style={{ color: themeConfig.primaryAccent }}>
                    Inspecting {activeItem.name}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setSelectedItemId(null);
                    setActivePhotoIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer border flex items-center gap-1.5 ${
                    selectedItemId === null
                      ? 'glass-panel-elevated font-bold shadow-md ring-1'
                      : 'glass-panel opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    borderColor: selectedItemId === null ? themeConfig.primaryAccent : 'transparent',
                    color: selectedItemId === null ? themeConfig.primaryAccent : undefined
                  }}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Full Outfit Overview</span>
                </button>
                {currentLook.items.map((item) => {
                  const isItemActive = selectedItemId === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedItemId(item.id);
                        setActivePhotoIndex(0);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer border flex items-center gap-1.5 ${
                        isItemActive
                          ? 'glass-panel-elevated font-bold shadow-md ring-1'
                          : 'glass-panel opacity-70 hover:opacity-100'
                      }`}
                      style={{
                        borderColor: isItemActive ? themeConfig.primaryAccent : 'transparent',
                        color: isItemActive ? themeConfig.primaryAccent : undefined
                      }}
                    >
                      <PackageCheck className="w-3.5 h-3.5" />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Visual Outfit Preview Banner (Large Active Photo) */}
            <div className="space-y-3">
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="relative h-80 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden glass-panel border shadow-lg group cursor-zoom-in"
              >
                <img
                  key={activePhoto.url}
                  src={activePhoto.url}
                  alt={`${currentLook.title} - ${activePhoto.label}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                {/* Preference Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                  <div className="glass-panel-elevated px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 border shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-emerald-400">Verified In-Stock</span>
                  </div>
                  <div className="glass-panel-elevated px-2.5 py-1 rounded-full text-xs font-mono flex items-center gap-1 border shadow-md">
                    <Camera className="w-3 h-3 opacity-75" />
                    <span className="opacity-90">{activePhoto.label}</span>
                  </div>
                </div>

                {/* Expand and Palette Swatches */}
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <div className="glass-panel-elevated px-3 py-1 rounded-full flex items-center gap-1.5 border shadow-md">
                    <span className="text-[10px] font-mono opacity-75">Palette:</span>
                    <div className="flex -space-x-1">
                      {PALETTES[selectedPalette].colors.map((c, i) => (
                        <span
                          key={i}
                          className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-xs"
                          style={{ backgroundColor: c }}
                        ></span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLightboxOpen(true);
                    }}
                    className="glass-panel-elevated p-2 rounded-full border shadow-md hover:scale-110 transition-transform cursor-pointer"
                    title="Expand Photo & Gallery"
                  >
                    <Maximize2 className="w-3.5 h-3.5 opacity-80" />
                  </button>
                </div>

                {/* Left / Right Quick Photo Navigation Controls */}
                {currentPhotos.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevPhoto();
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer shadow-lg z-10"
                      title="Previous Photo Angle"
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
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Bottom Caption & Description */}
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90 space-y-1.5">
                  <div className="font-semibold text-white flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Sparkle className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
                      <span className="text-sm font-bold">{activePhoto.caption}</span>
                    </div>
                    <span className="text-[11px] font-mono opacity-70 bg-black/40 px-2 py-0.5 rounded-md">
                      {activePhotoIndex + 1} / {currentPhotos.length} Photos
                    </span>
                  </div>
                  <p className="leading-relaxed opacity-80 line-clamp-2">
                    {activeItem ? activeItem.fabricNote : currentLook.description}
                  </p>
                </div>
              </div>

              {/* Photo View Selector Thumbnails */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider opacity-75 mb-2 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
                    <span>
                      {activeItem
                        ? `Photos for ${activeItem.name}`
                        : `Curated Photos for ${selectedOccasion} (${selectedVibe})`}
                    </span>
                  </span>
                  <span className="text-[10px] opacity-60">Click photo to view angle</span>
                </div>
                <div className="grid grid-cols-4 gap-2.5">
                  {currentPhotos.map((photo, pIdx) => {
                    const isSelected = activePhotoIndex === pIdx;
                    return (
                      <button
                        key={pIdx}
                        onClick={() => setActivePhotoIndex(pIdx)}
                        className={`relative rounded-xl overflow-hidden border text-left transition-all duration-200 cursor-pointer group h-20 sm:h-24 ${
                          isSelected
                            ? 'ring-2 ring-offset-2 ring-offset-black scale-102 shadow-lg'
                            : 'opacity-70 hover:opacity-100 hover:border-white/30'
                        }`}
                        style={{
                          borderColor: isSelected ? themeConfig.primaryAccent : 'rgba(255, 255, 255, 0.15)'
                        }}
                      >
                        <img
                          src={photo.url}
                          alt={photo.label}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <span className="absolute bottom-1 left-1.5 right-1 text-[10px] font-bold text-white leading-tight truncate">
                          {photo.label}
                        </span>
                        {isSelected && (
                          <div
                            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full shadow-xs"
                            style={{ backgroundColor: themeConfig.primaryAccent }}
                          ></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Related Outfits & Editorial Inspo Photos */}
            {currentLook.relatedLooks && currentLook.relatedLooks.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider opacity-75 flex items-center justify-between font-mono">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" style={{ color: themeConfig.secondaryAccent }} />
                    <span>Related Style Inspo ({selectedOccasion})</span>
                  </span>
                  <span className="text-[10px] opacity-60">Curated Editorial Inspiration</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentLook.relatedLooks.map((look, rIdx) => (
                    <div
                      key={rIdx}
                      onClick={() => setPreviewRelatedLook(look)}
                      className="group relative rounded-2xl overflow-hidden border border-white/10 glass-panel hover:border-white/30 transition-all duration-300 cursor-pointer shadow-md"
                    >
                      <div className="relative h-36 overflow-hidden">
                        <img
                          src={look.imageUrl}
                          alt={look.title}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                        <span
                          className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-black/60 backdrop-blur-xs border border-white/15"
                          style={{ color: themeConfig.primaryAccent }}
                        >
                          {look.vibeTag}
                        </span>
                        <div className="absolute bottom-2 left-2 right-2">
                          <h4 className="text-xs font-bold text-white leading-snug line-clamp-1 group-hover:underline">
                            {look.title}
                          </h4>
                          <span className="text-[10px] opacity-75 text-white/80">
                            Tap to inspect
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Garments in Look Grid with Photos */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider opacity-75 flex items-center justify-between font-mono">
                <span>Garments in this Curated Look ({currentLook.items.length} pieces)</span>
                <span className="font-mono font-semibold flex items-center gap-1 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified In-Stock
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentLook.items.map((item) => {
                  const isSaved = addedItemIds.includes(item.id);
                  const isSelected = selectedItemId === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedItemId(item.id);
                        setActivePhotoIndex(0);
                      }}
                      className={`p-3.5 rounded-2xl glass-panel border transition-all flex items-center justify-between gap-3 group cursor-pointer ${
                        isSelected
                          ? 'border-2 shadow-lg ring-1'
                          : 'hover:border-white/20'
                      }`}
                      style={{
                        borderColor: isSelected ? themeConfig.primaryAccent : undefined
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-xl object-cover bg-black/50 flex-shrink-0 group-hover:scale-105 transition-transform"
                        />
                        <div>
                          <h5 className="text-xs font-semibold line-clamp-1 group-hover:underline">
                            {item.name}
                          </h5>
                          <div className="flex items-center gap-2 mt-0.5 text-[11px] opacity-70">
                            <span>{item.brand}</span>
                            <span>•</span>
                            <span style={{ color: themeConfig.secondaryAccent }} className="font-medium">
                              {item.retailer}
                            </span>
                          </div>
                          <div className="text-[11px] font-medium mt-1 font-mono text-emerald-400 flex items-center gap-1">
                            <span>Available in your size</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCartItem(item.id);
                        }}
                        className={`p-2 rounded-xl transition-colors cursor-pointer flex-shrink-0 ${
                          isSaved
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'glass-panel opacity-75 hover:opacity-100'
                        }`}
                        title={isSaved ? 'Saved to Wardrobe' : 'Save to Wardrobe'}
                      >
                        {isSaved ? <CheckCircle className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stylist Pairing Tips Callout */}
            <div className="glass-panel border p-4 rounded-2xl space-y-2">
              <div
                className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 font-mono"
                style={{ color: themeConfig.primaryAccent }}
              >
                <Tag className="w-3.5 h-3.5" />
                <span>Styling Recommendations:</span>
              </div>
              <ul className="text-xs opacity-80 space-y-1.5 list-disc list-inside">
                {currentLook.stylingTips.map((tip, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Row */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs opacity-70">
                All garments verified in stock in your size across partner stores.
              </div>
              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto text-slate-900 px-6 py-2.5 rounded-full text-xs font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                style={{ backgroundColor: themeConfig.primaryAccent }}
              >
                <span>Take the 1-Minute Quiz</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Fullscreen Photo Inspector Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] glass-panel-elevated rounded-3xl border overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold"
                  style={{ backgroundColor: `${themeConfig.primaryAccent}25`, color: themeConfig.primaryAccent }}
                >
                  {selectedOccasion}
                </span>
                <span className="text-xs font-mono opacity-60">• {selectedVibe}</span>
                {activeItem && (
                  <span className="text-xs font-mono font-bold" style={{ color: themeConfig.secondaryAccent }}>
                    • {activeItem.name}
                  </span>
                )}
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-full glass-panel hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Photo Display with Nav */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] sm:min-h-[480px]">
              <img
                src={activePhoto.url}
                alt={activePhoto.label}
                className="max-h-[60vh] sm:max-h-[70vh] w-auto max-w-full object-contain"
              />
              {currentPhotos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer with Angle Selector */}
            <div className="p-4 sm:p-6 border-t border-white/10 space-y-3 bg-black/40">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4" style={{ color: themeConfig.primaryAccent }} />
                    <span>{activePhoto.caption}</span>
                  </h4>
                  <p className="text-xs opacity-75 mt-0.5">
                    {activeItem ? activeItem.fabricNote : currentLook.description}
                  </p>
                </div>
                <div className="text-xs font-mono opacity-70 whitespace-nowrap">
                  Photo {activePhotoIndex + 1} of {currentPhotos.length}
                </div>
              </div>

              {/* Thumbnails row */}
              <div className="flex gap-2 pt-2 overflow-x-auto pb-1">
                {currentPhotos.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative rounded-lg overflow-hidden border w-16 h-16 flex-shrink-0 cursor-pointer transition-all ${
                      activePhotoIndex === idx ? 'ring-2 ring-offset-1 ring-offset-black scale-105' : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{ borderColor: activePhotoIndex === idx ? themeConfig.primaryAccent : 'transparent' }}
                  >
                    <img src={p.url} alt={p.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Related Look Preview Modal */}
      {previewRelatedLook && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setPreviewRelatedLook(null)}
        >
          <div
            className="relative max-w-lg w-full glass-panel-elevated rounded-3xl border overflow-hidden shadow-2xl p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold"
                  style={{ backgroundColor: `${themeConfig.primaryAccent}25`, color: themeConfig.primaryAccent }}
                >
                  {selectedOccasion}
                </span>
                <span className="text-xs font-mono opacity-70">{previewRelatedLook.vibeTag}</span>
              </div>
              <button
                onClick={() => setPreviewRelatedLook(null)}
                className="p-1.5 rounded-full glass-panel hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative h-72 rounded-2xl overflow-hidden border">
              <img
                src={previewRelatedLook.imageUrl}
                alt={previewRelatedLook.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="text-base font-bold">{previewRelatedLook.title}</h4>
                <p className="text-xs opacity-80 mt-0.5">Verified Editorial Look Inspiration</p>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => setPreviewRelatedLook(null)}
                className="px-4 py-2 rounded-full text-xs font-bold glass-panel hover:bg-white/10 cursor-pointer"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  setPreviewRelatedLook(null);
                  handleSynthesize();
                }}
                className="text-slate-900 px-5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
                style={{ backgroundColor: themeConfig.primaryAccent }}
              >
                <Wand2 className="w-3.5 h-3.5" />
                <span>Curate Similar Look</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
