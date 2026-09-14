import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeMode, ThemeConfig } from '../types';

export const THEME_CONFIGS: Record<ThemeMode, ThemeConfig> = {
  'royal-violet': {
    id: 'royal-violet',
    name: 'Royal Violet (Dark)',
    category: 'dark',
    primaryAccent: '#F2C94C',
    secondaryAccent: '#ffade3',
    bgColor: '#1A102E',
    cardBg: 'rgba(35, 20, 64, 0.55)',
    textColor: '#e2e2e2',
    badge: 'Atelier Dark Signature',
    swatchColors: ['#1A102E', '#F2C94C', '#B7A4D8']
  },
  'obsidian-noir': {
    id: 'obsidian-noir',
    name: 'Obsidian Noir (Dark)',
    category: 'dark',
    primaryAccent: '#38BDF8',
    secondaryAccent: '#818CF8',
    bgColor: '#0B0D12',
    cardBg: 'rgba(18, 22, 32, 0.65)',
    textColor: '#F1F5F9',
    badge: 'Cyber Minimal Dark',
    swatchColors: ['#0B0D12', '#38BDF8', '#94A3B8']
  },
  'champagne-luxe': {
    id: 'champagne-luxe',
    name: 'Champagne Ivory (Light)',
    category: 'light',
    primaryAccent: '#D97706',
    secondaryAccent: '#9333EA',
    bgColor: '#F9F7F2',
    cardBg: 'rgba(255, 255, 255, 0.88)',
    textColor: '#18181B',
    badge: 'Haute Salon Light',
    swatchColors: ['#F9F7F2', '#D97706', '#475569']
  },
  'atelier-light': {
    id: 'atelier-light',
    name: 'Studio Porcelain (Light)',
    category: 'light',
    primaryAccent: '#2563EB',
    secondaryAccent: '#EC4899',
    bgColor: '#F8FAFC',
    cardBg: 'rgba(255, 255, 255, 0.92)',
    textColor: '#0F172A',
    badge: 'Modern Atelier Light',
    swatchColors: ['#F8FAFC', '#2563EB', '#64748B']
  },
  'emerald-velvet': {
    id: 'emerald-velvet',
    name: 'Emerald Velvet (Dark)',
    category: 'dark',
    primaryAccent: '#34D399',
    secondaryAccent: '#F472B6',
    bgColor: '#081712',
    cardBg: 'rgba(10, 32, 24, 0.6)',
    textColor: '#ECFDF5',
    badge: 'Art Deco Luxe Dark',
    swatchColors: ['#081712', '#34D399', '#F472B6']
  },
  'sapphire-twilight': {
    id: 'sapphire-twilight',
    name: 'Sapphire Midnight (Dark)',
    category: 'dark',
    primaryAccent: '#FBBF24',
    secondaryAccent: '#60A5FA',
    bgColor: '#0B132B',
    cardBg: 'rgba(16, 29, 66, 0.6)',
    textColor: '#F8FAFC',
    badge: 'Sovereign Blue Dark',
    swatchColors: ['#0B132B', '#FBBF24', '#60A5FA']
  }
};

interface ThemeContextType {
  currentTheme: ThemeMode;
  themeConfig: ThemeConfig;
  isDark: boolean;
  colorMode: 'dark' | 'light';
  setTheme: (theme: ThemeMode) => void;
  toggleColorMode: () => void;
  setColorMode: (mode: 'dark' | 'light') => void;
  availableThemes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('stylecue_theme') as ThemeMode;
    return saved && THEME_CONFIGS[saved] ? saved : 'royal-violet';
  });

  const themeConfig = THEME_CONFIGS[currentTheme] || THEME_CONFIGS['royal-violet'];
  const isDark = themeConfig.category === 'dark';
  const colorMode: 'dark' | 'light' = isDark ? 'dark' : 'light';

  useEffect(() => {
    localStorage.setItem('stylecue_theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.documentElement.setAttribute('data-mode', themeConfig.category);
    if (themeConfig.category === 'light') {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    } else {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    }
  }, [currentTheme, themeConfig]);

  const setTheme = (theme: ThemeMode) => {
    if (THEME_CONFIGS[theme]) {
      setCurrentTheme(theme);
    }
  };

  const toggleColorMode = () => {
    if (isDark) {
      // Switch from dark to light mode default (champagne-luxe)
      setCurrentTheme('champagne-luxe');
    } else {
      // Switch from light to dark mode default (royal-violet)
      setCurrentTheme('royal-violet');
    }
  };

  const setColorMode = (mode: 'dark' | 'light') => {
    if (mode === 'light') {
      if (themeConfig.category !== 'light') {
        setCurrentTheme('champagne-luxe');
      }
    } else {
      if (themeConfig.category !== 'dark') {
        setCurrentTheme('royal-violet');
      }
    }
  };

  const availableThemes = Object.values(THEME_CONFIGS);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeConfig,
        isDark,
        colorMode,
        setTheme,
        toggleColorMode,
        setColorMode,
        availableThemes
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
