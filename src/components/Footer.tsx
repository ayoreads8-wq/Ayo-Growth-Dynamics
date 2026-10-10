import React from 'react';
import { BRAND_CONFIG, SERVICES } from '../data/content';
import { Mail, ArrowUp, Instagram } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenPrivacy: () => void;
  onNavigateService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onNavigateService,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B111D] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <Logo variant="horizontal" size="md" />
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              A digital growth agency specializing in Search Engine Optimization (SEO), Google Business Profile optimization, and local search visibility for growing businesses.
            </p>
            <div className="space-y-2 pt-1 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#22C55E]" />
                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-3.5 h-3.5 text-[#22C55E] fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.67 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.33V9.05a8.28 8.28 0 0 0 4.91 1.6V7.2a4.83 4.83 0 0 1-1-.51z" />
                </svg>
                <a
                  href={BRAND_CONFIG.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  TikTok: {BRAND_CONFIG.tiktokHandle}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#22C55E]" />
                <a
                  href={BRAND_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram: {BRAND_CONFIG.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#hero" className="hover:text-[#22C55E] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#22C55E] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#problems" className="hover:text-[#22C55E] transition-colors">
                  Problems We Solve
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#22C55E] transition-colors">
                  Why Ayo Growth Dynamics
                </a>
              </li>
              <li>
                <a href="#success-stories" className="hover:text-[#22C55E] transition-colors">
                  Client Success Stories
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#22C55E] transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#22C55E] transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#22C55E] transition-colors">
                  Request SEO Review
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core SEO Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              SEO Services
            </h4>
            <ul className="space-y-2 text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onNavigateService(s.title)}
                    className="hover:text-[#22C55E] transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Standards & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Consulting Standards
            </h4>
            <p className="text-slate-300 leading-relaxed text-xs">
              We practice strictly ethical, search-engine-compliant optimization. We do not engage in artificial ranking guarantees or manipulative link schemes.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-xs text-[#86EFAC] hover:underline cursor-pointer"
              >
                Privacy Policy & Data Notice
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Year 2026 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {currentYear} {BRAND_CONFIG.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
