import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../data/content';

interface FinalCtaSectionProps {
  onBookConsultation: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onBookConsultation }) => {
  return (
    <section className="py-24 bg-[#101828] relative overflow-hidden border-t border-white/5">
      {/* Subtle green radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#16A36A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#172236] border border-[#16A36A]/40 text-[#86EFAC] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Take the Next Step</span>
        </div>

        {/* Exact Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Strengthen Your{' '}
          <span className="text-[#22C55E] block sm:inline">Online Visibility?</span>
        </h2>

        {/* Exact Supporting Text */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Let's build an SEO strategy that helps the right customers find your business and take the next step.
        </p>

        {/* Value Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
            <span>Tailored strategic review</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
            <span>Ethical search practices</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
            <span>Practical recommendations</span>
          </div>
        </div>

        {/* Dual Working Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookConsultation}
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-[#16A36A] hover:bg-[#15803D] active:scale-[0.98] rounded-xl transition-all shadow-xl shadow-[#16A36A]/30 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Book Your Free Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={BRAND_CONFIG.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 text-sm font-semibold text-white bg-[#172236] hover:bg-[#1D2939] border border-slate-700 active:scale-[0.98] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg
              className="w-4 h-4 text-[#22C55E] fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.67 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.33V9.05a8.28 8.28 0 0 0 4.91 1.6V7.2a4.83 4.83 0 0 1-1-.51z" />
            </svg>
            <span>Follow Us on TikTok</span>
          </a>
        </div>
      </div>
    </section>
  );
};
