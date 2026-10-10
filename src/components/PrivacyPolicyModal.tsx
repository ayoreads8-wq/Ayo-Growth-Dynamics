import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../data/content';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#172236] border border-slate-700 shadow-2xl p-6 sm:p-8 text-slate-200 space-y-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-[#86EFAC] uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
          <span>Privacy & Data Protection Notice</span>
        </div>

        <h3 className="text-2xl font-bold text-white">
          Privacy Policy — {BRAND_CONFIG.name}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-700 pt-4">
          <p>
            At <strong>{BRAND_CONFIG.name}</strong>, we respect your privacy and are committed to protecting the business and personal information you share with us.
          </p>

          <h4 className="text-sm font-bold text-white pt-2">1. Information We Collect</h4>
          <p>
            When you request an SEO review or consultation, we collect the details you voluntarily submit: your full name, business name, business website URL, location/service area, main SEO challenge, email address, and optional WhatsApp number.
          </p>

          <h4 className="text-sm font-bold text-white pt-2">2. How We Use Your Information</h4>
          <p>
            We use your submitted details exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Evaluate your website and Google Business Profile search presence.</li>
            <li>Prepare and deliver your requested initial SEO review and recommendations.</li>
            <li>Respond to your direct consultation inquiries via email or WhatsApp.</li>
          </ul>

          <h4 className="text-sm font-bold text-white pt-2">3. Zero Spam & No Third-Party Sales</h4>
          <p>
            We never sell, rent, or trade your contact information to third parties, brokers, or external advertisers.
          </p>

          <h4 className="text-sm font-bold text-white pt-2">4. Contact & Inquiries</h4>
          <p>
            If you have questions regarding our data practices or wish to have your submitted information removed from our records, contact us directly at <span className="text-[#86EFAC]">{BRAND_CONFIG.email}</span>.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-[#16A36A] hover:bg-[#15803D] rounded-xl transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
