import React from 'react';
import { Store, TrendingUp, RefreshCw, ArrowRight, Code } from 'lucide-react';
import { RETAILER_PARTNERS } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface RetailersSectionProps {
  onOpenRetailerModal: () => void;
}

export const RetailersSection: React.FC<RetailersSectionProps> = ({ onOpenRetailerModal }) => {
  const { themeConfig } = useTheme();

  return (
    <section id="for-retailers" className="px-4 sm:px-8 md:px-16 w-full max-w-[1440px] mx-auto py-16 md:py-24 relative">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border text-xs uppercase tracking-widest font-mono">
          <Store className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
          For Retailers & Brands
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          StyleCue for <span style={{ color: themeConfig.primaryAccent }}>Fashion Brands & Stores</span>
        </h2>
        <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto font-normal">
          Help your shoppers buy complete matching outfits and choose the exact right size the first time.
        </p>
      </div>

      {/* Retail Partner Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        {RETAILER_PARTNERS.map((partner) => (
          <div
            key={partner.id}
            className="glass-panel p-5 rounded-2xl border hover:border-opacity-100 transition-all text-center group flex flex-col justify-between shadow-md"
          >
            <div className="h-10 flex items-center justify-center">
              <span className="font-bold text-sm tracking-widest uppercase transition-colors" style={{ color: themeConfig.primaryAccent }}>
                {partner.name}
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-white/5 space-y-1">
              <div className="text-[10px] opacity-60 font-mono">{partner.stockSyncSpeed}</div>
              <div className="text-[11px] font-semibold opacity-80">{partner.inventoryCount}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Retail Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="glass-panel-elevated p-8 rounded-3xl border relative overflow-hidden shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="text-4xl font-bold font-mono mb-2">+38.2%</div>
          <h4 className="text-lg font-bold mb-2" style={{ color: themeConfig.primaryAccent }}>Higher Order Value</h4>
          <p className="text-sm opacity-80">
            Shoppers buy complete matching outfits rather than just single items.
          </p>
        </div>

        <div className="glass-panel-elevated p-8 rounded-3xl border relative overflow-hidden shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
            <RefreshCw className="w-6 h-6" />
          </div>
          <div className="text-4xl font-bold font-mono mb-2">-41.6%</div>
          <h4 className="text-lg font-bold mb-2" style={{ color: themeConfig.primaryAccent }}>Fewer Item Returns</h4>
          <p className="text-sm opacity-80">
            Accurate size recommendations reduce fit issues and sizing confusion.
          </p>
        </div>

        <div className="glass-panel-elevated p-8 rounded-3xl border relative overflow-hidden shadow-xl">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `${themeConfig.primaryAccent}20`, color: themeConfig.primaryAccent }}
          >
            <Code className="w-6 h-6" />
          </div>
          <div className="text-4xl font-bold font-mono mb-2">&lt; 1 Day</div>
          <h4 className="text-lg font-bold mb-2" style={{ color: themeConfig.primaryAccent }}>Quick & Simple Setup</h4>
          <p className="text-sm opacity-80">
            Easily integrates with Shopify, Salesforce, WooCommerce, or custom online storefronts.
          </p>
        </div>
      </div>

      {/* Retail Partner Banner CTA */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold">
            Want to partner with StyleCue?
          </h3>
          <p className="text-sm opacity-75">
            Book a quick 15-minute call with our retail team to learn more.
          </p>
        </div>

        <button
          onClick={onOpenRetailerModal}
          className="text-slate-900 px-8 py-3.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 shadow-xl cursor-pointer whitespace-nowrap hover:opacity-90 active:scale-95"
          style={{ backgroundColor: themeConfig.primaryAccent }}
        >
          <span>Talk to Our Team</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
