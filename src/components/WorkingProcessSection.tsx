import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ArrowRight, Compass, Search, Sliders, LineChart } from 'lucide-react';

interface WorkingProcessSectionProps {
  onDiscussGoals: () => void;
}

export const WorkingProcessSection: React.FC<WorkingProcessSectionProps> = ({ onDiscussGoals }) => {
  const stepIcons = [
    <Compass key="1" className="w-5 h-5 text-[#22C55E]" />,
    <Search key="2" className="w-5 h-5 text-[#22C55E]" />,
    <Sliders key="3" className="w-5 h-5 text-[#22C55E]" />,
    <LineChart key="4" className="w-5 h-5 text-[#22C55E]" />,
  ];

  return (
    <section id="process" className="py-24 bg-[#101828] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#172236] border border-[#16A36A]/40 text-[#86EFAC] text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A36A]" />
            <span>Structured Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            A Clear Process. A Strategy Built Around Your Business.
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Every successful search campaign follows a logical sequence from initial research to continuous measurement and refinement.
          </p>
        </div>

        {/* 4 Steps Visual Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-[#172236] border border-slate-700/80 hover:border-[#16A36A]/50 transition-all flex flex-col justify-between shadow-lg relative group"
            >
              <div>
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#101828] border border-slate-700 flex items-center justify-center">
                    {stepIcons[index]}
                  </div>
                  <span className="text-2xl font-bold font-mono text-slate-500 group-hover:text-[#22C55E] transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  Step {index + 1} — {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-3 border-t border-slate-700/60 text-[11px] font-medium text-slate-400">
                Phase {index + 1} Deliverable
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={onDiscussGoals}
            className="px-8 py-3.5 text-xs font-bold text-white bg-[#16A36A] hover:bg-[#15803D] active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-[#16A36A]/25 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Let's Discuss Your Growth Goals</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
