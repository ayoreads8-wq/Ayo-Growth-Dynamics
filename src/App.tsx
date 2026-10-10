import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemsSection } from './components/ProblemsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ClientSuccessStoriesSection } from './components/ClientSuccessStoriesSection';
import { WorkingProcessSection } from './components/WorkingProcessSection';
import { LeadMagnetForm } from './components/LeadMagnetForm';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

export default function App() {
  const [selectedServiceFocus, setSelectedServiceFocus] = useState<string>('');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState<boolean>(false);

  const scrollToContact = (prefillService?: string) => {
    if (prefillService) {
      setSelectedServiceFocus(prefillService);
    }
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const elem = document.getElementById('services');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#101828] text-[#F4F6F8] font-sans antialiased selection:bg-[#16A36A]/30 selection:text-[#FFFFFF]">
      {/* SECTION 1: Navigation Bar */}
      <Navbar onOpenConsultation={() => scrollToContact()} />

      <main>
        {/* SECTION 2: Hero Section */}
        <Hero
          onOpenConsultation={() => scrollToContact()}
          onExploreServices={scrollToServices}
        />

        {/* SECTION 3: Problems We Solve */}
        <ProblemsSection onRequestReview={() => scrollToContact()} />

        {/* SECTION 4: Our Services */}
        <ServicesSection
          onDiscussService={(serviceTitle) =>
            scrollToContact(`Inquiry regarding ${serviceTitle}`)
          }
        />

        {/* SECTION 5: Why Choose Ayo Growth Dynamics? */}
        <WhyChooseUsSection />

        {/* SECTION 6: Client Success Stories & Social Proof */}
        <ClientSuccessStoriesSection onStartReview={() => scrollToContact()} />

        {/* SECTION 7: Our Working Process */}
        <WorkingProcessSection onDiscussGoals={() => scrollToContact()} />

        {/* SECTION 7: Lead Magnet / Free SEO Review Form */}
        <LeadMagnetForm
          key={selectedServiceFocus}
          initialServiceFocus={selectedServiceFocus}
          onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        />

        {/* SECTION 8: Frequently Asked Questions */}
        <FaqSection onStartConsultation={() => scrollToContact()} />

        {/* SECTION 9: Final Call to Action */}
        <FinalCtaSection onBookConsultation={() => scrollToContact()} />
      </main>

      {/* SECTION 10: Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onNavigateService={(serviceTitle) =>
          scrollToContact(`Inquiry regarding ${serviceTitle}`)
        }
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}
