import React, { useState } from 'react';
import { X, Lock, Mail, Sparkles, CheckCircle } from 'lucide-react';
import { LOGO_IMAGE_URL } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login'
}) => {
  const { themeConfig } = useTheme();
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-panel-elevated border border-white/20 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 glass-panel">
          <div className="flex items-center gap-2.5">
            <img src={LOGO_IMAGE_URL} alt="StyleCue" className="w-6 h-6 rounded-full" />
            <span className="font-bold text-sm uppercase tracking-wider">
              StyleCue <span style={{ color: themeConfig.primaryAccent }}>Account</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full opacity-70 hover:opacity-100 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="grid grid-cols-2 p-1.5 m-6 mb-2 rounded-2xl glass-panel border border-white/10">
          <button
            onClick={() => setMode('login')}
            className={`py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              mode === 'login'
                ? 'text-slate-900 font-bold shadow-md'
                : 'opacity-70 hover:opacity-100'
            }`}
            style={{
              backgroundColor: mode === 'login' ? themeConfig.primaryAccent : undefined
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              mode === 'signup'
                ? 'text-slate-900 font-bold shadow-md'
                : 'opacity-70 hover:opacity-100'
            }`}
            style={{
              backgroundColor: mode === 'signup' ? themeConfig.primaryAccent : undefined
            }}
          >
            Create Account
          </button>
        </div>

        {/* Body */}
        <div className="p-6 pt-2">
          {isSuccess ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold">Signed In Successfully</h4>
              <p className="text-xs opacity-75">Loading your saved outfits and preferences...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider opacity-75 mb-1.5 font-mono">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 opacity-50 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@example.com"
                    className="w-full glass-panel border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-opacity-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider opacity-75 mb-1.5 font-mono">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 opacity-50 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full glass-panel border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-opacity-100"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full text-slate-900 py-3 rounded-xl font-bold text-xs tracking-wide transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: themeConfig.primaryAccent }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{mode === 'login' ? 'Sign In' : 'Create Free Account'}</span>
                </button>
              </div>

              <p className="text-[11px] opacity-60 text-center pt-2 font-mono">
                Your personal sizing and style details remain completely private.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
