import React, { useState } from 'react';
import { CLIENT_SUCCESS_STORIES } from '../data/content';
import {
  Star,
  Quote,
  TrendingUp,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  ShieldCheck
} from 'lucide-react';

interface ClientSuccessStoriesSectionProps {
  onStartReview: () => void;
}

export const ClientSuccessStoriesSection: React.FC<ClientSuccessStoriesSectionProps> = ({
  onStartReview,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Stories' },
    { id: 'home-improvement', label: 'Home Improvement' },
    { id: 'local-services', label: 'Local Services' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  const filteredStories = CLIENT_SUCCESS_STORIES.filter((story) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'home-improvement') return story.industry.toLowerCase().includes('home improvement');
    if (activeFilter === 'local-services') return story.industry.toLowerCase().includes('services');
    if (activeFilter === 'healthcare') return story.industry.toLowerCase().includes('healthcare');
    if (activeFilter === 'ecommerce') return story.industry.toLowerCase().includes('commerce');
    return true;
  });

  return (
    <section id="success-stories" className="py-24 bg-[#101828] relative border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#16A36A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#16A36A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#172236] border border-[#16A36A]/40 text-[#86EFAC] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Social Proof & Verified Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Client Success Stories
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            See how our strategic SEO, Google Business Profile optimization, and local search visibility frameworks delivered tangible, qualified inquiries for our partners.
          </p>

          {/* Industry Filter Controls */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-[#16A36A] text-white shadow-md shadow-[#16A36A]/20'
                    : 'bg-[#172236] text-slate-300 hover:text-white border border-slate-700/80 hover:border-slate-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#172236] border border-slate-700/80 hover:border-[#16A36A]/60 transition-all duration-300 flex flex-col justify-between shadow-xl group relative overflow-hidden"
            >
              {/* Subtle green glow bar on card top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#16A36A]/40 to-transparent group-hover:via-[#16A36A] transition-all" />

              <div>
                {/* Rating and Key Metric Highlight */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#22C55E] text-[#22C55E]" />
                    ))}
                    <span className="ml-1.5 text-xs font-bold text-white">5.0</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#101828] border border-[#16A36A]/40 text-[#86EFAC] text-xs font-bold">
                    <TrendingUp className="w-3.5 h-3.5 text-[#22C55E]" />
                    <span>{story.keyMetric}</span>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic relative">
                  "{story.quote}"
                </p>

                {/* Service Tag */}
                <div className="mt-5 pt-3 border-t border-slate-700/60 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="font-semibold text-[#86EFAC]">Engagement:</span>
                  <span>{story.serviceProvided}</span>
                </div>
              </div>

              {/* Author and Business Details */}
              <div className="mt-7 pt-4 border-t border-slate-700/80 flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#86EFAC] transition-colors">
                    {story.clientName}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium">
                    {story.role} · <span className="text-white">{story.companyName}</span>
                  </p>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{story.location}</span>
                    <span className="text-slate-600">·</span>
                    <span>{story.industry}</span>
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] text-[#86EFAC] font-semibold bg-[#101828] px-2.5 py-1 rounded-md border border-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#172236] via-[#1A263D] to-[#172236] border border-slate-700 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Ready to Strengthen Your Search Visibility and Attract Qualified Leads?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Request an initial review of your website and Google Business Profile to uncover actionable growth opportunities.
            </p>
          </div>

          <button
            type="button"
            onClick={onStartReview}
            className="w-full sm:w-auto px-7 py-3.5 text-xs font-bold text-white bg-[#16A36A] hover:bg-[#15803D] active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-[#16A36A]/25 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Request My SEO Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
