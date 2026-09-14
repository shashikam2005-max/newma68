import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { themeConfig } = useTheme();

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="px-4 sm:px-8 md:px-16 w-full max-w-[1440px] mx-auto py-16 md:py-24 relative">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border text-xs uppercase tracking-widest font-mono">
          <HelpCircle className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
          Common Questions
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Frequently Asked <span style={{ color: themeConfig.primaryAccent }}>Questions</span>
        </h2>
        <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto font-normal">
          Simple answers about how StyleCue works, sizing accuracy, online stores, and privacy.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                isOpen ? 'glass-panel-elevated shadow-lg' : 'glass-panel opacity-85 hover:opacity-100'
              }`}
              style={{
                borderColor: isOpen ? themeConfig.primaryAccent : undefined
              }}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-bold">
                  {item.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  style={{
                    backgroundColor: isOpen ? `${themeConfig.primaryAccent}25` : 'rgba(255,255,255,0.05)',
                    color: isOpen ? themeConfig.primaryAccent : 'inherit'
                  }}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm sm:text-base opacity-80 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
