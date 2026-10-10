import React from 'react';
import { PROBLEMS_WE_SOLVE } from '../data/content';
import { AlertCircle, ArrowRight, HelpCircle, XCircle } from 'lucide-react';

interface ProblemsSectionProps {
  onRequestReview: () => void;
}

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onRequestReview }) => {
  return (
    <section id="problems" className="py-24 bg-[#131F33] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101828] border border-[#16A36A]/40 text-[#86EFAC] text-xs font-semibold">
            <AlertCircle className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Common Search Visibility Roadblocks</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Is Your Business Being Found by the Right Customers?
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Many businesses offer exceptional services but remain difficult to discover online. These are the most frequent challenges holding local businesses back:
          </p>
        </div>

        {/* The 5 Problems Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {PROBLEMS_WE_SOLVE.map((item, index) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl bg-[#172236] border border-slate-700/80 hover:border-slate-600 transition-all shadow-md flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-950/40 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <XCircle className="w-5 h-5" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {item.problem}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.impact}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-700/60 text-[11px] font-medium text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                Challenge #{index + 1}
              </div>
            </div>
          ))}

          {/* Solution Invitation Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#16A36A]/20 via-[#172236] to-[#101828] border-2 border-[#16A36A]/50 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#16A36A]/20 border border-[#16A36A]/40 flex items-center justify-center text-[#22C55E]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                The Practical Path Forward
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Identifying your exact search bottlenecks is the essential first step toward sustainable visibility.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-700/60">
              <span className="text-xs font-semibold text-[#86EFAC]">
                Clear diagnosis · No guesswork
              </span>
            </div>
          </div>
        </div>

        {/* Concluding CTA Banner */}
        <div className="p-8 rounded-2xl bg-[#101828] border border-slate-700 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Let's identify what is holding your online visibility back and develop a practical strategy to improve it.
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Request an initial review of your website and Google Business Profile with zero obligation.
            </p>
          </div>

          <button
            onClick={onRequestReview}
            className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold text-white bg-[#16A36A] hover:bg-[#15803D] active:scale-[0.98] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Request an SEO Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
