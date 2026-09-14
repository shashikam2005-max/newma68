import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles, Sun, Moon, Gem, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeMode } from '../types';
import { LightDarkToggle } from './LightDarkToggle';

interface ThemeSelectorProps {
  compact?: boolean;
  showToggleOnly?: boolean;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  compact = false,
  showToggleOnly = false
}) => {
  const { currentTheme, themeConfig, setTheme, availableThemes, isDark, toggleColorMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getThemeIcon = (id: ThemeMode) => {
    switch (id) {
      case 'champagne-luxe':
        return <Sun className="w-3.5 h-3.5 text-amber-500" />;
      case 'atelier-light':
        return <Sun className="w-3.5 h-3.5 text-blue-500" />;
      case 'obsidian-noir':
        return <Moon className="w-3.5 h-3.5 text-sky-400" />;
      case 'emerald-velvet':
        return <Gem className="w-3.5 h-3.5 text-emerald-400" />;
      case 'sapphire-twilight':
        return <Sparkles className="w-3.5 h-3.5 text-blue-400" />;
      case 'royal-violet':
      default:
        return <Palette className="w-3.5 h-3.5 text-[#F2C94C]" />;
    }
  };

  if (showToggleOnly) {
    return <LightDarkToggle compact={compact} />;
  }

  const darkThemes = availableThemes.filter((t) => t.category === 'dark');
  const lightThemes = availableThemes.filter((t) => t.category === 'light');

  return (
    <div className="flex items-center gap-1.5" ref={dropdownRef}>
      {/* Primary Light / Dark Segmented Toggle */}
      <LightDarkToggle compact={compact} />

      {/* Palette Dropdown Trigger */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="glass-panel px-2.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold hover:border-white/30 transition-all cursor-pointer shadow-sm active:scale-95"
          style={{ borderColor: isOpen ? themeConfig.primaryAccent : undefined }}
          aria-label="Select Atelier color theme palette"
          title="Atelier Color Palettes"
        >
          <Palette className="w-3.5 h-3.5 opacity-80" style={{ color: themeConfig.primaryAccent }} />
          <ChevronDown
            className={`w-3 h-3 text-current opacity-70 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Theme Dropdown Panel */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-72 rounded-2xl glass-panel-elevated p-3 shadow-2xl border border-white/15 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-3xl">
            <div className="px-2.5 py-1.5 border-b border-white/10 mb-2 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider opacity-75 font-mono">
                Atelier Theme Styles
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 font-mono">
                {availableThemes.length} Presets
              </span>
            </div>

            {/* Light Themes Category */}
            <div className="mb-2.5">
              <div className="text-[10px] font-bold uppercase tracking-widest text-amber-500/90 px-2 py-1 flex items-center gap-1 font-mono">
                <Sun className="w-3 h-3 text-amber-500" />
                Light Themes
              </div>
              <div className="space-y-1">
                {lightThemes.map((theme) => {
                  const isSelected = currentTheme === theme.id;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => {
                        setTheme(theme.id);
                        setIsOpen(false);
                      }}
                      className={`w-full p-2 rounded-xl text-left flex items-center justify-between text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/20 border border-amber-500/40 font-bold'
                          : 'hover:bg-white/5 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-black/10 border border-white/10">
                          {getThemeIcon(theme.id)}
                        </div>
                        <div>
                          <div className="font-semibold text-xs leading-tight">{theme.name}</div>
                          <div className="text-[10px] opacity-60 font-mono">{theme.badge}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <div className="flex -space-x-1">
                          {theme.swatchColors.map((color, i) => (
                            <span
                              key={i}
                              className="w-2.5 h-2.5 rounded-full border border-black/30"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-emerald-500 font-bold" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dark Themes Category */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-purple-400 px-2 py-1 flex items-center gap-1 font-mono">
                <Moon className="w-3 h-3 text-purple-400" />
                Dark Themes
              </div>
              <div className="space-y-1">
                {darkThemes.map((theme) => {
                  const isSelected = currentTheme === theme.id;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => {
                        setTheme(theme.id);
                        setIsOpen(false);
                      }}
                      className={`w-full p-2 rounded-xl text-left flex items-center justify-between text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-purple-500/20 border border-purple-500/40 font-bold'
                          : 'hover:bg-white/5 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-black/20 border border-white/10">
                          {getThemeIcon(theme.id)}
                        </div>
                        <div>
                          <div className="font-semibold text-xs leading-tight">{theme.name}</div>
                          <div className="text-[10px] opacity-60 font-mono">{theme.badge}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <div className="flex -space-x-1">
                          {theme.swatchColors.map((color, i) => (
                            <span
                              key={i}
                              className="w-2.5 h-2.5 rounded-full border border-black/30"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
