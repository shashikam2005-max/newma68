import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface LightDarkToggleProps {
  compact?: boolean;
}

export const LightDarkToggle: React.FC<LightDarkToggleProps> = ({ compact = false }) => {
  const { isDark, colorMode, toggleColorMode, setColorMode, themeConfig } = useTheme();

  return (
    <div
      className="inline-flex items-center p-0.5 rounded-full glass-panel border shadow-sm select-none transition-all duration-200"
      style={{ borderColor: `${themeConfig.primaryAccent}40` }}
      role="group"
      aria-label="Light and Dark Mode Selector"
    >
      <button
        onClick={() => setColorMode('light')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
          !isDark
            ? 'bg-amber-400 text-slate-950 font-bold shadow-md scale-100'
            : 'opacity-60 hover:opacity-100 hover:text-amber-300'
        }`}
        aria-pressed={!isDark}
        title="Switch to Light Theme"
      >
        <Sun className={`w-3.5 h-3.5 ${!isDark ? 'text-slate-950 fill-slate-950' : 'text-current'}`} />
        {!compact && <span className="text-[11px] font-mono uppercase tracking-wider">Light</span>}
      </button>

      <button
        onClick={() => setColorMode('dark')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
          isDark
            ? 'bg-slate-800 text-white font-bold shadow-md scale-100'
            : 'opacity-60 hover:opacity-100 hover:text-sky-300'
        }`}
        style={{
          backgroundColor: isDark ? themeConfig.primaryAccent : undefined,
          color: isDark ? '#0f172a' : undefined
        }}
        aria-pressed={isDark}
        title="Switch to Dark Theme"
      >
        <Moon className={`w-3.5 h-3.5 ${isDark ? 'text-slate-950 fill-slate-950' : 'text-current'}`} />
        {!compact && <span className="text-[11px] font-mono uppercase tracking-wider">Dark</span>}
      </button>
    </div>
  );
};
