import React from 'react';
import { SERVICES } from '../data/content';
import {
  Search,
  MapPin,
  Compass,
  ShieldAlert,
  BarChart3,
  Code2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onDiscussService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onDiscussService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-[#22C55E]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#22C55E]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#22C55E]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#22C55E]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#22C55E]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#22C55E]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#22C55E]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#101828] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172236] border border-[#16A36A]/40 text-[#86EFAC] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Agency Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            SEO Strategies Designed for Sustainable Growth
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Targeted optimization strategies crafted to strengthen your search rankings, enhance profile accuracy, and capture valuable local commercial intent.
          </p>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="rounded-2xl p-7 bg-[#172236] border border-slate-700/80 hover:border-[#16A36A]/60 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Icon & Service Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#101828] border border-slate-700 flex items-center justify-center group-hover:border-[#16A36A] group-hover:scale-105 transition-all">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-bold text-slate-500 font-mono">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#86EFAC] transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Exact Short Description */}
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Functional CTA Button */}
              <div className="mt-8 pt-5 border-t border-slate-700/60">
                <button
                  type="button"
                  onClick={() => onDiscussService(service.title)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-slate-200 hover:text-white bg-[#101828] hover:bg-[#16A36A] border border-slate-700 hover:border-[#16A36A] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>Discuss This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
