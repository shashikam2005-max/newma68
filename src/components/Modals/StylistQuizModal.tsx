import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { LOGO_IMAGE_URL } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';

interface StylistQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StylistQuizModal: React.FC<StylistQuizModalProps> = ({ isOpen, onClose }) => {
  const { themeConfig } = useTheme();
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // User selections
  const [fitPreference, setFitPreference] = useState('Womenswear');
  const [aesthetic, setAesthetic] = useState('Modern & Casual');
  const [colorTone, setColorTone] = useState('Warm Cream & Charcoal');
  const [occasionFocus, setOccasionFocus] = useState('Everyday & Casual Outings');

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
        setQuizCompleted(true);
      }, 900);
    }
  };

  const handleReset = () => {
    setStep(1);
    setQuizCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-panel-elevated border border-white/20 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 glass-panel">
          <div className="flex items-center gap-2.5">
            <img src={LOGO_IMAGE_URL} alt="StyleCue" className="w-6 h-6 rounded-full" />
            <span className="font-bold text-sm uppercase tracking-wider">
              StyleCue <span style={{ color: themeConfig.primaryAccent }}>Quick Style Quiz</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full opacity-70 hover:opacity-100 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!quizCompleted && !isGenerating && (
            <div className="space-y-6">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs opacity-75 font-mono">
                <span>Step {step} of 4</span>
                <span className="font-semibold uppercase tracking-wider" style={{ color: themeConfig.primaryAccent }}>
                  {step === 1 && 'Clothing Category'}
                  {step === 2 && 'Style Preference'}
                  {step === 3 && 'Color Choices'}
                  {step === 4 && 'Occasion Focus'}
                </span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-300 rounded-full"
                  style={{
                    width: `${(step / 4) * 100}%`,
                    backgroundColor: themeConfig.primaryAccent
                  }}
                ></div>
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">
                    What kind of clothes are you shopping for?
                  </h3>
                  <p className="text-xs opacity-75">
                    Select the fit and styling category you wear most often.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {[
                      { id: 'Womenswear', label: 'Womenswear', desc: 'Dresses, blazers, tops, skirts, and trousers' },
                      { id: 'Menswear', label: 'Menswear', desc: 'Suits, jackets, shirts, pants, and footwear' },
                      { id: 'Unisex & Relaxed', label: 'Unisex & Relaxed', desc: 'Oversized layers, street jackets, and relaxed fits' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setFitPreference(item.id)}
                        className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                          fitPreference === item.id
                            ? 'glass-panel-elevated shadow-lg font-bold'
                            : 'glass-panel opacity-70 hover:opacity-100'
                        }`}
                        style={{
                          borderColor: fitPreference === item.id ? themeConfig.primaryAccent : 'transparent'
                        }}
                      >
                        <div className="font-bold text-sm mb-1">{item.label}</div>
                        <div className="text-[11px] opacity-70 leading-tight">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">
                    What is your favorite style vibe?
                  </h3>
                  <p className="text-xs opacity-75">
                    We will find matching outfits that suit this style.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      { id: 'Modern & Casual', title: 'Modern & Casual', desc: 'Comfortable jeans, jackets, and clean sneakers' },
                      { id: 'Classic & Elegant', title: 'Classic & Elegant', desc: 'Tailored trousers, silk blouses, and wool coats' },
                      { id: 'Work & Professional', title: 'Work & Professional', desc: 'Smart blazers, pencil skirts, and sharp suits' },
                      { id: 'Street & Trendy', title: 'Street & Trendy', desc: 'Cargo pants, cool layers, and trendy outerwear' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setAesthetic(item.id)}
                        className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                          aesthetic === item.id
                            ? 'glass-panel-elevated shadow-lg font-bold'
                            : 'glass-panel opacity-70 hover:opacity-100'
                        }`}
                        style={{
                          borderColor: aesthetic === item.id ? themeConfig.primaryAccent : 'transparent'
                        }}
                      >
                        <div className="font-bold text-sm mb-1">{item.title}</div>
                        <div className="text-[11px] opacity-70">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">
                    Pick your preferred color palette:
                  </h3>
                  <p className="text-xs opacity-75">
                    Choose colors you feel most confident wearing.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      { id: 'Gold & Deep Violet', title: 'Gold & Deep Violet', colors: ['#1A102E', '#F2C94C', '#B7A4D8'] },
                      { id: 'Classic Black & White', title: 'Classic Black & White', colors: ['#0C0F0F', '#333535', '#E2E2E2'] },
                      { id: 'Warm Cream & Charcoal', title: 'Warm Cream & Charcoal', colors: ['#422216', '#D4AF37', '#EFE3D3'] },
                      { id: 'Soft Pastel & Rose', title: 'Soft Pastel & Rose', colors: ['#4C2A85', '#FFADE3', '#D4BBFF'] }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setColorTone(item.id)}
                        className={`p-4 rounded-2xl text-left border flex items-center justify-between transition-all cursor-pointer ${
                          colorTone === item.id
                            ? 'glass-panel-elevated shadow-lg font-bold'
                            : 'glass-panel opacity-70 hover:opacity-100'
                        }`}
                        style={{
                          borderColor: colorTone === item.id ? themeConfig.primaryAccent : 'transparent'
                        }}
                      >
                        <div>
                          <div className="font-bold text-sm">{item.title}</div>
                        </div>
                        <div className="flex gap-1">
                          {item.colors.map((c, i) => (
                            <span key={i} className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: c }}></span>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">
                    What is your primary styling goal?
                  </h3>
                  <p className="text-xs opacity-75">
                    We will tailor complete looks designed for your everyday lifestyle.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {[
                      { id: 'Daily & Weekend Capsule', title: 'Daily & Weekend Capsule', desc: 'Effortless everyday wear, brunch, and casual strolls' },
                      { id: 'Work & Professional Wardrobe', title: 'Work & Professional Wardrobe', desc: 'Meetings, keynote events, and office presentations' },
                      { id: 'Evening, Gala & Special Events', title: 'Evening, Gala & Special Events', desc: 'Cocktail parties, galas, celebrations, and travel' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setOccasionFocus(item.id)}
                        className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                          occasionFocus === item.id
                            ? 'glass-panel-elevated shadow-lg font-bold'
                            : 'glass-panel opacity-70 hover:opacity-100'
                        }`}
                        style={{
                          borderColor: occasionFocus === item.id ? themeConfig.primaryAccent : 'transparent'
                        }}
                      >
                        <div className="font-bold text-sm mb-1">{item.title}</div>
                        <div className="text-[11px] opacity-70 leading-relaxed">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Controls */}
              <div className="flex justify-between items-center pt-6 border-t border-white/10">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-5 py-2 rounded-full text-xs font-semibold opacity-75 hover:opacity-100 flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  onClick={handleNext}
                  className="text-slate-900 px-7 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 shadow-xl hover:opacity-90 active:scale-95 cursor-pointer"
                  style={{ backgroundColor: themeConfig.primaryAccent }}
                >
                  <span>{step === 4 ? 'See My Outfits' : 'Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Loading Synth */}
          {isGenerating && (
            <div className="py-16 text-center space-y-6">
              <div
                className="w-20 h-20 mx-auto rounded-3xl border flex items-center justify-center animate-spin"
                style={{ borderColor: themeConfig.primaryAccent, color: themeConfig.primaryAccent }}
              >
                <Sparkles className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">
                Finding Outfits For You...
              </h3>
              <p className="text-sm opacity-70 max-w-sm mx-auto font-mono">
                Matching your sizes, colors, and styling goals across verified online stores...
              </p>
            </div>
          )}

          {/* Quiz Completion Results Card */}
          {quizCompleted && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div
                className="p-6 rounded-3xl glass-panel-elevated border text-center space-y-3 relative overflow-hidden shadow-xl"
                style={{ borderColor: `${themeConfig.primaryAccent}40` }}
              >
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono glass-panel"
                  style={{ color: themeConfig.primaryAccent }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Your Profile is Ready: 99% Fit Match
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold">
                  {aesthetic} Profile
                </h3>

                <p className="text-xs sm:text-sm opacity-80 max-w-lg mx-auto leading-relaxed">
                  Your style profile is set for {fitPreference} with {colorTone} colors focused on {occasionFocus}.
                </p>

                <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl glass-panel border border-white/10">
                    <span className="opacity-60 block text-[10px]">Fit Type</span>
                    <span className="font-mono font-bold">{fitPreference}</span>
                  </div>
                  <div className="p-2.5 rounded-xl glass-panel border border-white/10">
                    <span className="opacity-60 block text-[10px]">Stores</span>
                    <span className="font-mono font-bold" style={{ color: themeConfig.primaryAccent }}>Top Retailers</span>
                  </div>
                  <div className="p-2.5 rounded-xl glass-panel border border-white/10">
                    <span className="opacity-60 block text-[10px]">In-Stock Matches</span>
                    <span className="font-mono font-bold text-emerald-400">142 Outfits</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 text-slate-900 py-3.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xl hover:opacity-90 active:scale-95 cursor-pointer"
                  style={{ backgroundColor: themeConfig.primaryAccent }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start Browsing My Outfits</span>
                </button>
                <button
                  onClick={handleReset}
                  className="glass-panel px-6 py-3.5 rounded-full text-xs font-semibold opacity-75 hover:opacity-100 cursor-pointer"
                >
                  Change Answers
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
