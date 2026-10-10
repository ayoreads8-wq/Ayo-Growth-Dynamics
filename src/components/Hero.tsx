import React from 'react';
import {
  ArrowRight,
  Search,
  MapPin,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Globe2,
  Sparkles,
  Layers,
  MousePointerClick
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/content';
import { Logo } from './Logo';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreServices,
}) => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#101828] via-[#131F33] to-[#101828]"
    >
      {/* Subtle green ambient lighting and grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#16A36A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Authoritative Copy & Call to Actions */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#172236] border border-[#16A36A]/40 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#16A36A] animate-pulse" />
              <span className="text-xs font-semibold text-[#86EFAC] tracking-wide">
                Strategic SEO & Google Business Profile Optimization
              </span>
            </div>

            {/* Single Exact H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.15] tracking-tight">
              Get Found on Google.{' '}
              <span className="text-[#22C55E] block sm:inline">
                Attract More Local Customers.
              </span>{' '}
              Grow Your Business.
            </h1>

            {/* Exact Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {BRAND_CONFIG.supportingText}
            </p>

            {/* Three Benefit Statements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left">
              {BRAND_CONFIG.heroBenefits.map((benefit, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-[#172236]/80 border border-slate-700/60 flex items-start gap-2.5 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-white bg-[#16A36A] hover:bg-[#15803D] active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-[#16A36A]/30 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Get a Free SEO Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-[#172236] hover:bg-[#1D2939] border border-slate-700 active:scale-[0.98] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Ethical SEO Disclosure */}
            <p className="text-[12px] text-slate-400 pt-1">
              * Strategic, ethical optimization. We focus on measurable search visibility and long-term business opportunities.
            </p>
          </div>

          {/* Right Column: Search Analytics, Maps Listing & Organic Growth Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle Glow Container */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#16A36A]/20 to-blue-500/10 rounded-2xl blur-lg opacity-70" />

              <div className="relative bg-[#172236] border border-slate-700/80 rounded-2xl shadow-2xl p-5 space-y-4">
                {/* Search Visibility Dashboard Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/70 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-white">
                      Search Visibility Dashboard
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-[#86EFAC] bg-[#16A36A]/20 px-2 py-0.5 rounded">
                    Active Strategy
                  </span>
                </div>

                {/* Simulated Local Search Query Bar */}
                <div className="p-2.5 rounded-xl bg-[#101828] border border-slate-700 flex items-center gap-2 text-xs text-slate-300">
                  <Search className="w-4 h-4 text-[#22C55E]" />
                  <span className="text-white font-medium truncate">
                    "home remodeling and renovation services near me"
                  </span>
                </div>

                {/* Local Business Listing Preview */}
                <div className="p-4 rounded-xl bg-[#101828] border border-slate-700/90 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#22C55E]" />
                        <h4 className="text-sm font-bold text-white">
                          Optimized Local Business Profile
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Verified Primary & Secondary Categories · Accurate NAP Data
                      </p>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded">
                      Local Search
                    </span>
                  </div>

                  {/* Profile Health Indicators */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div className="p-2 bg-[#172236] rounded-lg border border-slate-700">
                      <div className="text-slate-400">Complete Profile</div>
                      <div className="text-white font-bold mt-0.5 text-xs flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                        100% Optimized
                      </div>
                    </div>
                    <div className="p-2 bg-[#172236] rounded-lg border border-slate-700">
                      <div className="text-slate-400">Customer Actions</div>
                      <div className="text-emerald-400 font-bold mt-0.5 text-xs flex items-center gap-1">
                        <MousePointerClick className="w-3.5 h-3.5" />
                        Inbound Calls & Clicks
                      </div>
                    </div>
                  </div>
                </div>

                {/* Organic Search Growth Chart Visual */}
                <div className="p-4 rounded-xl bg-[#101828] border border-slate-700/90 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-semibold text-white">
                      <TrendingUp className="w-4 h-4 text-[#22C55E]" />
                      <span>Organic Search Traffic Trend</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium">
                      Steady Visibility Growth
                    </span>
                  </div>

                  {/* Realistic SVG Trend Line (Non-misleading, smooth trajectory) */}
                  <div className="h-20 w-full pt-1">
                    <svg viewBox="0 0 300 80" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#16A36A" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#16A36A" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      <line x1="0" y1="20" x2="300" y2="20" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.5" />
                      <line x1="0" y1="50" x2="300" y2="50" stroke="#334155" strokeDasharray="3 3" strokeWidth="0.5" />
                      
                      {/* Area */}
                      <path
                        d="M 0 70 Q 60 65, 100 52 T 180 38 T 240 24 T 300 12 L 300 80 L 0 80 Z"
                        fill="url(#growthFill)"
                      />
                      {/* Trend line */}
                      <path
                        d="M 0 70 Q 60 65, 100 52 T 180 38 T 240 24 T 300 12"
                        fill="none"
                        stroke="#22C55E"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* End point beacon */}
                      <circle cx="300" cy="12" r="4" fill="#22C55E" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                    <span>Month 1 (Baseline)</span>
                    <span>Month 3 (Audited)</span>
                    <span className="text-emerald-400 font-semibold">Month 6 (Compound Visibility)</span>
                  </div>
                </div>

                {/* Target Audience Tags */}
                <div className="pt-2 text-[11px] text-slate-400 flex flex-wrap items-center gap-1.5">
                  <span className="font-semibold text-slate-300">Tailored For:</span>
                  <span className="px-2 py-0.5 bg-[#101828] rounded text-slate-300">Local Services</span>
                  <span className="px-2 py-0.5 bg-[#101828] rounded text-slate-300">Home Improvement</span>
                  <span className="px-2 py-0.5 bg-[#101828] rounded text-slate-300">SMBs & E-Commerce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
