export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  deliverables?: string[];
}

export interface ProblemItem {
  id: string;
  problem: string;
  impact: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SuccessStoryItem {
  id: string;
  clientName: string;
  role: string;
  companyName: string;
  industry: string;
  location: string;
  quote: string;
  keyMetric: string;
  serviceProvided: string;
  rating: number;
}

export interface SeoReviewFormData {
  fullName: string;
  businessName: string;
  websiteUrl: string;
  gmbUrl?: string;
  locationArea: string;
  mainChallenge: string;
  email: string;
  whatsappNumber?: string;
  honeypot?: string; // spam protection
}
