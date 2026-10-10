import React from 'react';
import { WHY_CHOOSE_US } from '../data/content';
import {
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Target,
  FileText,
  MousePointer,
  HelpCircle,
  Clock
} from 'lucide-react';
import { Logo } from './Logo';

export const WhyChooseUsSection: React.FC = () => {
  const icons = [
    <BarChartIcon key="1" />,
    <Target key="2" className="w-5 h-5 text-[#22C55E]" />,
    <TrendingUp key="3" className="w-5 h-5 text-[#22C55E]" />,
    <ShieldCheck key="4" className="w-5 h-5 text-[#22C55E]" />,
    <FileText key="5" className="w-5 h-5 text-[#22C55E]" />,
    <MousePointer key="6" className="w-5 h-5 text-[#22C55E]" />,
  ];

  function BarChartIcon() {
    return <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />;
  }

  return (
    <section id="why-us" className="py-24 bg-[#131F33] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101828] border border-[#16A36A]/40 text-[#86EFAC] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Our Approach & Principles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            A Smarter, More Strategic Approach to SEO
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Search engine optimization requires disciplined research, transparent communication, and consistent execution. Here is how we partner with businesses for long-term organic impact:
          </p>
        </div>

        {/* 6 Core Selling Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#172236] border border-slate-700/80 hover:border-slate-600 transition-all shadow-md space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#101828] border border-[#16A36A]/30 flex items-center justify-center">
                {icons[index]}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Grounded & Transparent Expectations Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#101828] border border-slate-700 shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-[#86EFAC] font-bold text-sm">
            <Clock className="w-4 h-4 text-[#22C55E]" />
            <span>Realistic Expectations & Sustainable Timelines</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            SEO is an ongoing process rather than an overnight switch. Real-world results depend on your competitive landscape, current website health, localized market demand, and consistent adherence to search engine guidelines. We prioritize enduring growth over temporary, risky shortcuts.
          </p>
        </div>
      </div>
    </section>
  );
};
