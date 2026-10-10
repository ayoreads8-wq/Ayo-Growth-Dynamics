import React, { useState } from 'react';
import { SeoReviewFormData } from '../types';
import { BRAND_CONFIG } from '../data/content';
import {
  Send,
  CheckCircle2,
  ShieldCheck,
  FileSearch,
  MessageCircle,
  AlertCircle
} from 'lucide-react';

interface LeadMagnetFormProps {
  initialServiceFocus?: string;
  onOpenPrivacy: () => void;
}

export const LeadMagnetForm: React.FC<LeadMagnetFormProps> = ({
  initialServiceFocus,
  onOpenPrivacy,
}) => {
  const [formData, setFormData] = useState<SeoReviewFormData>({
    fullName: '',
    businessName: '',
    websiteUrl: '',
    gmbUrl: '',
    locationArea: '',
    mainChallenge: initialServiceFocus || '',
    email: '',
    whatsappNumber: '',
    honeypot: '', // bot protection
  });

  const [errors, setErrors] = useState<Partial<Record<keyof SeoReviewFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof SeoReviewFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your business name.';
    }
    if (!formData.websiteUrl.trim()) {
      newErrors.websiteUrl = 'Please provide your business website URL.';
    }
    if (!formData.locationArea.trim()) {
      newErrors.locationArea = 'Please state your business location or service area.';
    }
    if (!formData.mainChallenge.trim()) {
      newErrors.mainChallenge = 'Please describe your main SEO challenge.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address format.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check: bots fill hidden inputs
    if (formData.honeypot) {
      console.warn('Spam submission suppressed.');
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    // Save lead data locally and format submission
    try {
      const uniqueId = `AGD-${Date.now().toString().slice(-6)}`;
      const savedLeads = JSON.parse(localStorage.getItem('agd_seo_inquiries') || '[]');
      savedLeads.push({
        ...formData,
        id: uniqueId,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('agd_seo_inquiries', JSON.stringify(savedLeads));

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setSubmissionId(uniqueId);
      }, 1000);
    } catch (err) {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setSubmissionId(`AGD-${Date.now().toString().slice(-6)}`);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#131F33] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Copy */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101828] border border-[#16A36A]/40 text-[#86EFAC] text-xs font-semibold">
            <FileSearch className="w-3.5 h-3.5" />
            <span>Complimentary Visibility Evaluation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Find Out What Is Limiting Your Online Visibility.
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Request an initial SEO review to identify potential opportunities for improving your website and local search presence.
          </p>
        </div>

        {/* Lead Form Container */}
        <div className="rounded-2xl bg-[#172236] border border-slate-700/80 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle green top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#16A36A] to-transparent" />

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Spam Honeypot Field (Hidden from real users) */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  autoComplete="off"
                />
              </div>

              {/* Row 1: Full Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#101828] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.fullName
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-slate-700 focus:border-[#16A36A]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Business Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => {
                      setFormData({ ...formData, businessName: e.target.value });
                      if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                    }}
                    placeholder="e.g. Jenkins Custom Cabinetry"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#101828] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.businessName
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-slate-700 focus:border-[#16A36A]'
                    }`}
                  />
                  {errors.businessName && (
                    <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.businessName}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Website URL & Optional GMB URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Business Website URL <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) => {
                      setFormData({ ...formData, websiteUrl: e.target.value });
                      if (errors.websiteUrl) setErrors({ ...errors, websiteUrl: undefined });
                    }}
                    placeholder="https://example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#101828] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.websiteUrl
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-slate-700 focus:border-[#16A36A]'
                    }`}
                  />
                  {errors.websiteUrl && (
                    <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.websiteUrl}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Google Business Profile URL (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.gmbUrl}
                    onChange={(e) => setFormData({ ...formData, gmbUrl: e.target.value })}
                    placeholder="https://maps.google.com/?cid=..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#101828] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#16A36A] transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Location / Service Area & Contact Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Business Location or Service Area <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.locationArea}
                    onChange={(e) => {
                      setFormData({ ...formData, locationArea: e.target.value });
                      if (errors.locationArea) setErrors({ ...errors, locationArea: undefined });
                    }}
                    placeholder="e.g. Austin, Texas (or 25-mile radius)"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#101828] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.locationArea
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-slate-700 focus:border-[#16A36A]'
                    }`}
                  />
                  {errors.locationArea && (
                    <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.locationArea}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="s.jenkins@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#101828] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.email
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-slate-700 focus:border-[#16A36A]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4: WhatsApp Number (Optional) */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  WhatsApp Number (Optional, for quick messaging)
                </label>
                <input
                  type="tel"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  placeholder="e.g. +1 555 123 4567"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#101828] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#16A36A] transition-all"
                />
              </div>

              {/* Row 5: Main SEO Challenge */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Main SEO Challenge <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.mainChallenge}
                  onChange={(e) => {
                    setFormData({ ...formData, mainChallenge: e.target.value });
                    if (errors.mainChallenge) setErrors({ ...errors, mainChallenge: undefined });
                  }}
                  placeholder="e.g. Competitors outrank us on Google Maps, or our website traffic has dropped over recent months..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#101828] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-none ${
                    errors.mainChallenge
                      ? 'border-rose-500 focus:border-rose-400'
                      : 'border-slate-700 focus:border-[#16A36A]'
                  }`}
                />
                {errors.mainChallenge && (
                  <p className="text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.mainChallenge}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-sm font-bold text-white bg-[#16A36A] hover:bg-[#15803D] active:scale-[0.99] rounded-xl transition-all shadow-lg shadow-[#16A36A]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing Review Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Request My SEO Review</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Privacy statement & direct contact note */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2 border-t border-slate-700/60">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>Privacy-conscious data handling. No spam guaranteed.</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-slate-300 hover:text-white underline cursor-pointer"
                >
                  View Privacy Terms
                </button>
              </div>
            </form>
          ) : (
            /* Clear Submission Confirmation */
            <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#16A36A]/15 border-2 border-[#16A36A] text-[#22C55E] mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  SEO Review Request Received
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. We have logged your review request for <strong className="text-[#86EFAC]">{formData.businessName}</strong>.
                </p>
                <p className="text-xs text-slate-400">
                  Reference ID: <span className="font-mono text-slate-300">{submissionId}</span>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#101828] border border-slate-700 text-xs text-slate-300 max-w-md mx-auto text-left space-y-1.5">
                <p className="font-bold text-white">What to expect next:</p>
                <p>1. We review your website structure and local profile completeness.</p>
                <p>2. We check high-level competitor presence in your service area.</p>
                <p>3. We will respond directly to <strong className="text-white">{formData.email}</strong> with initial strategic observations.</p>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={BRAND_CONFIG.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#101828] hover:bg-[#1D2939] border border-slate-700 rounded-xl transition-all flex items-center gap-2"
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

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-white underline py-2"
                >
                  Submit Another Website Review
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
