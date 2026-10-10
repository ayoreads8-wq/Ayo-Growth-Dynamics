import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onStartConsultation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onStartConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-[#101828] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#172236] border border-[#16A36A]/40 text-[#86EFAC] text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about search engine optimization, Google Business Profile management, and our consulting process.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-all border overflow-hidden ${
                  isOpen
                    ? 'bg-[#172236] border-[#16A36A]/60 shadow-xl'
                    : 'bg-[#172236]/60 border-slate-700/80 hover:border-slate-600'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-2 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#16A36A] text-white rotate-180'
                        : 'bg-[#101828] text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-700/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-[#172236] border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div>
            <h4 className="text-sm font-bold text-white">
              Have another question about your specific website or market?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              We are glad to discuss your local search visibility and recommend the best starting point.
            </p>
          </div>
          <button
            onClick={onStartConsultation}
            className="px-5 py-2.5 text-xs font-bold text-white bg-[#16A36A] hover:bg-[#15803D] rounded-xl transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span>Ask Us Directly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
