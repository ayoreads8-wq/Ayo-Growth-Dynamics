import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageSquareCode } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Problems We Solve', href: '#problems' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Our Process', href: '#process' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101828]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3'
          : 'bg-[#101828]/85 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A36A] rounded-lg p-1 -ml-1 transition-transform group-hover:scale-[1.01]"
            aria-label="Ayo Growth Dynamics Home"
          >
            <Logo variant="horizontal" size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-[#22C55E] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#16A36A] hover:bg-[#15803D] active:scale-[0.98] rounded-xl transition-all shadow-md shadow-[#16A36A]/25 flex items-center gap-2 cursor-pointer"
            >
              <span>Get a Free SEO Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-[#16A36A] rounded-lg"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A36A]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101828] border-b border-white/10 px-5 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-[#22C55E] py-2 border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-[#16A36A] hover:bg-[#15803D] rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Get a Free SEO Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
