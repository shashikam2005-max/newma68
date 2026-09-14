import React from 'react';
import { X, ShieldCheck, FileText, Cookie, Newspaper, Headphones } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface InfoModalProps {
  type: 'privacy' | 'terms' | 'cookies' | 'press' | 'support' | null;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose }) => {
  const { themeConfig } = useTheme();
  if (!type) return null;

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
          body: (
            <div className="space-y-4 text-xs leading-relaxed opacity-80">
              <p>
                We respect your personal privacy. Your sizing details, color preferences, and saved outfits are protected and never sold.
              </p>
              <h5 className="font-bold text-sm" style={{ color: themeConfig.primaryAccent }}>1. We Never Sell Your Data</h5>
              <p>
                We do not sell your personal measurements, browsing history, or email address to advertisers.
              </p>
              <h5 className="font-bold text-sm" style={{ color: themeConfig.primaryAccent }}>2. Secure Sizing Storage</h5>
              <p>
                Your measurements are saved securely to your private profile so your size recommendations are always accurate.
              </p>
            </div>
          )
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          icon: <FileText className="w-5 h-5" style={{ color: themeConfig.primaryAccent }} />,
          body: (
            <div className="space-y-4 text-xs leading-relaxed opacity-80">
              <p>
                By using StyleCue, you agree to our standard shopping and outfit discovery terms.
              </p>
              <h5 className="font-bold text-sm" style={{ color: themeConfig.primaryAccent }}>1. Genuine Items Only</h5>
              <p>
                All recommended clothes link directly to verified official brands and licensed online retailers.
              </p>
              <h5 className="font-bold text-sm" style={{ color: themeConfig.primaryAccent }}>2. Live Prices & Availability</h5>
              <p>
                Item prices and in-stock sizes are checked continuously. Final payment and checkout occur on the official store website.
              </p>
            </div>
          )
        };
      case 'cookies':
        return {
          title: 'Cookie Preferences',
          icon: <Cookie className="w-5 h-5 text-amber-400" />,
          body: (
            <div className="space-y-4 text-xs leading-relaxed opacity-80">
              <p>
                We use cookies to save your theme preferences (light or dark mode) and remember your saved outfits.
              </p>
              <div className="p-4 rounded-xl glass-panel space-y-2">
                <div className="flex items-center justify-between font-bold text-xs">
                  <span>Theme & Sizing Preferences</span>
                  <span className="text-emerald-400 font-mono">Always Active</span>
                </div>
                <div className="flex items-center justify-between font-bold text-xs">
                  <span>Website Speed & Performance</span>
                  <span className="text-emerald-400 font-mono">Active</span>
                </div>
              </div>
            </div>
          )
        };
      case 'press':
        return {
          title: 'Press & Media',
          icon: <Newspaper className="w-5 h-5 text-sky-400" />,
          body: (
            <div className="space-y-4 text-xs leading-relaxed opacity-80">
              <p>
                For press inquiries, brand logos, high-resolution photos, or interview requests:
              </p>
              <div className="p-4 rounded-xl glass-panel space-y-1 font-mono">
                <div className="font-bold" style={{ color: themeConfig.primaryAccent }}>Press Relations</div>
                <div>press@stylecue.ai</div>
                <div>New York • London • Paris • Tokyo</div>
              </div>
            </div>
          )
        };
      case 'support':
        return {
          title: 'Customer Support',
          icon: <Headphones className="w-5 h-5 text-purple-400" />,
          body: (
            <div className="space-y-4 text-xs leading-relaxed opacity-80">
              <p>
                Have a question about sizes, outfit recommendations, or need help with a purchase? We are here to help.
              </p>
              <div className="p-4 rounded-xl glass-panel space-y-1 font-mono">
                <div className="font-bold" style={{ color: themeConfig.primaryAccent }}>Help Desk</div>
                <div>support@stylecue.ai</div>
                <div className="text-[11px] opacity-70">Typical response time: under 1 hour</div>
              </div>
            </div>
          )
        };
      default:
        return { title: '', icon: null, body: null };
    }
  };

  const { title, icon, body } = getContent();

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-panel-elevated border border-white/20 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 glass-panel">
          <div className="flex items-center gap-2.5">
            {icon}
            <h3 className="font-bold text-sm uppercase tracking-wide">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full opacity-70 hover:opacity-100 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {body}

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full text-slate-900 py-3 rounded-xl font-bold text-xs transition-all shadow-lg hover:opacity-90 active:scale-95 cursor-pointer"
              style={{ backgroundColor: themeConfig.primaryAccent }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
