import React, { useState } from 'react';
import { UserCheck, Radar, Sparkles, PackageCheck, Check, ArrowRight, Layers } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface HowItWorksSectionProps {
  onStartQuiz: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onStartQuiz }) => {
  const [activeStep, setActiveStep] = useState(0);
  const { themeConfig } = useTheme();

  const currentStepData = HOW_IT_WORKS_STEPS[activeStep];

  return (
    <section id="how-it-works" className="px-4 sm:px-8 md:px-16 w-full max-w-[1440px] mx-auto py-16 md:py-24 relative">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border text-xs uppercase tracking-widest font-mono">
          <Layers className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
          Simple 4-Step Process
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          How <span style={{ color: themeConfig.primaryAccent }}>StyleCue</span> Works
        </h2>
        <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto font-normal">
          In just 4 easy steps, get personalized outfits that match your style, body shape, and lifestyle.
        </p>
      </div>

      {/* Interactive Step Navigator */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {HOW_IT_WORKS_STEPS.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-3xl text-left transition-all duration-300 relative border cursor-pointer ${
                isActive
                  ? 'glass-panel-elevated shadow-xl -translate-y-1'
                  : 'glass-panel opacity-70 hover:opacity-100'
              }`}
              style={{
                borderColor: isActive ? themeConfig.primaryAccent : undefined
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm ${
                    isActive ? 'text-slate-900 shadow-md' : 'glass-panel text-white'
                  }`}
                  style={{
                    backgroundColor: isActive ? themeConfig.primaryAccent : undefined
                  }}
                >
                  {step.step}
                </div>
                <span
                  className="text-xs px-2.5 py-0.5 rounded-full font-mono glass-panel"
                  style={{ color: isActive ? themeConfig.secondaryAccent : undefined }}
                >
                  {step.badge}
                </span>
              </div>

              <h4 className="text-base font-bold mb-1">{step.title}</h4>
              <p className="text-xs opacity-70 line-clamp-1">{step.subtitle}</p>
            </button>
          );
        })}
      </div>

      {/* Active Step Feature Stage with Image */}
      <div className="glass-panel-elevated p-8 md:p-12 rounded-3xl border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-6 space-y-6">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold glass-panel"
            style={{ color: themeConfig.primaryAccent }}
          >
            <span>STEP {currentStepData.step}</span>
            <span>•</span>
            <span>{currentStepData.badge}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {currentStepData.title}
          </h3>

          <p className="text-base opacity-80 leading-relaxed">
            {currentStepData.desc}
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="opacity-90">Accurate sizing across 400+ popular clothing brands</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="opacity-90">Live store checks so recommended sizes are always in stock</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="opacity-90">Easy styling tips for tops, pants, jackets, and accessories</span>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={onStartQuiz}
              className="text-slate-900 px-8 py-3.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 shadow-xl hover:opacity-90 active:scale-95 cursor-pointer"
              style={{ backgroundColor: themeConfig.primaryAccent }}
            >
              <span>Take the 1-Minute Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Step Photo Stage */}
        <div className="lg:col-span-6 relative h-80 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden glass-panel border shadow-2xl group">
          <img
            src={currentStepData.imageUrl}
            alt={currentStepData.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

          {/* Top Badge */}
          <div className="absolute top-4 left-4 glass-panel-elevated px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Step {currentStepData.step} of 04</span>
          </div>

          {/* Bottom Card */}
          <div className="absolute bottom-6 left-6 right-6 glass-panel-elevated p-4 rounded-2xl border backdrop-blur-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase" style={{ color: themeConfig.primaryAccent }}>
                {currentStepData.subtitle}
              </span>
              <span className="text-[10px] opacity-75 font-mono">Live Inventory Check</span>
            </div>
            <p className="text-xs opacity-90 leading-normal">
              Connected in real time with top online stores so your size is ready to order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
