import { ServiceItem, ProblemItem, ProcessStep, FaqItem, SuccessStoryItem } from '../types';

export const BRAND_CONFIG = {
  name: "Ayo Growth Dynamics",
  tagline: "Search Engine Optimization & Google Business Profile Optimization",
  headline: "Get Found on Google. Attract More Local Customers. Grow Your Business.",
  supportingText:
    "Ayo Growth Dynamics helps businesses improve their search visibility through strategic SEO and Google Business Profile optimization, making it easier for potential customers to discover and contact them online.",
  
  // Real configurable contact details
  email: "Kehindeadeleye504@gmail.com",
  backupEmail: "contact@ayogrowthdynamics.com",
  // TikTok Profile
  tiktokUrl: "https://www.tiktok.com/@ayogrowthdynamics",
  tiktokHandle: "@ayogrowthdynamics",
  // Instagram Profile
  instagramUrl: "https://www.instagram.com/ayogrowthdynamics",
  instagramHandle: "@ayogrowthdynamics",
  
  // Target industries
  targetAudiences: [
    "Small & Medium-Sized Businesses",
    "Home Improvement & Home Décor Companies",
    "Local Service Providers",
    "E-Commerce Businesses",
  ],

  // 3 Hero Benefit Statements
  heroBenefits: [
    "Improve your search visibility.",
    "Strengthen your local online presence.",
    "Turn more relevant searches into business opportunities.",
  ],
};

export const PROBLEMS_WE_SOLVE: ProblemItem[] = [
  {
    id: "prob-1",
    problem: "Your website struggles to appear for relevant searches.",
    impact:
      "Potential customers searching for your specific products and services are landing on competitors instead of your pages.",
  },
  {
    id: "prob-2",
    problem: "Your Google Business Profile is incomplete or poorly optimized.",
    impact:
      "Missing service categories, inaccurate hours, or incomplete descriptions prevent Google from displaying your business prominently on Google Maps.",
  },
  {
    id: "prob-3",
    problem: "Your competitors have stronger local search visibility.",
    impact:
      "Nearby businesses with optimized local signals capture the majority of phone calls, website clicks, and foot traffic.",
  },
  {
    id: "prob-4",
    problem: "Your website attracts visitors who do not become leads.",
    impact:
      "Traffic that lacks search intent or encounters poorly structured pages leaves without requesting a quote or booking an appointment.",
  },
  {
    id: "prob-5",
    problem: "You are unsure which SEO improvements deserve priority.",
    impact:
      "Without clear diagnostic audits, time and resources get scattered across minor tweaks rather than impactful growth levers.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "service-seo",
    title: "Search Engine Optimization",
    shortDesc:
      "Improve your website's search visibility with strategic keyword research, on-page optimization, content recommendations, internal linking, and technical SEO improvements.",
    icon: "Search",
  },
  {
    id: "service-gmb",
    title: "Google Business Profile Optimization",
    shortDesc:
      "Improve the accuracy, completeness, and relevance of your business profile with better categories, service information, business descriptions, photos, and a strategy for earning genuine customer reviews.",
    icon: "MapPin",
  },
  {
    id: "service-local-seo",
    title: "Local SEO",
    shortDesc:
      "Help nearby customers discover your business through location-focused keyword targeting, local landing pages, relevant local citations, and consistent business information.",
    icon: "Compass",
  },
  {
    id: "service-technical-audit",
    title: "Technical SEO Audit",
    shortDesc:
      "Identify technical issues that may affect crawling, indexing, mobile usability, site speed, and the overall search experience.",
    icon: "ShieldAlert",
  },
  {
    id: "service-keyword-research",
    title: "Keyword and Competitor Research",
    shortDesc:
      "Discover relevant search opportunities, understand competitor strategies, and identify practical ways to strengthen your online presence.",
    icon: "BarChart3",
  },
  {
    id: "service-website-optimization",
    title: "Website SEO Optimization",
    shortDesc:
      "Improve page titles, meta descriptions, heading structure, content relevance, internal links, and conversion-focused page elements.",
    icon: "Code2",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Data-Informed Decisions",
    description:
      "We base optimization recommendations on real search trends, crawl data, and local competitor benchmarks rather than guesswork.",
  },
  {
    title: "Strategies Tailored to Each Business",
    description:
      "Every company has distinct local markets and service margins. We build an actionable plan aligned with your specific business goals.",
  },
  {
    title: "Focus on Relevant Traffic & Qualified Inquiries",
    description:
      "We avoid vanity traffic that never converts. Our focus is attracting searchers with commercial intent who need your services.",
  },
  {
    title: "Ethical, Search-Engine-Compliant Practices",
    description:
      "We practice strict white-hat SEO that complies with Google Webmaster and Google Business Profile guidelines to protect your long-term reputation.",
  },
  {
    title: "Clear Communication & Practical Recommendations",
    description:
      "No confusing technical jargon. We explain what needs improvement, why it matters, and how it directly affects your visibility.",
  },
  {
    title: "Attention to Rankings & Conversion Opportunities",
    description:
      "Ranking is only the first step. We look at page clarity, contact options, and trust signals to ensure searchers become real inquiries.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the business, target customers, service area, and objectives.",
  },
  {
    step: "02",
    title: "Audit",
    description:
      "Review the website, search presence, Google Business Profile, relevant keywords, and competitors.",
  },
  {
    step: "03",
    title: "Optimize",
    description:
      "Prioritize improvements across website SEO, local visibility, content, and profile completeness.",
  },
  {
    step: "04",
    title: "Measure and Improve",
    description:
      "Monitor relevant performance indicators, report findings, and refine the strategy based on the results.",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "What is SEO?",
    answer:
      "SEO is the process of improving a website's visibility in organic search results so that people searching for relevant information, products, or services can discover it.",
  },
  {
    question: "What is Google Business Profile optimization?",
    answer:
      "It involves improving the accuracy, completeness, relevance, and presentation of a business's Google listing to support discovery in Google Search and Maps.",
  },
  {
    question: "Can you guarantee first-page Google rankings?",
    answer:
      "No ethical SEO professional can guarantee specific organic rankings. Our focus is on sound optimization practices, measurable improvements, and long-term opportunities.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "The timeline varies depending on competition, website condition, the scope of work, and other factors. Meaningful progress often requires consistent work over several months.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. Strategies can be tailored to small businesses, local service providers, and growing companies.",
  },
  {
    question: "How do I get started?",
    answer:
      "Submit the consultation form or contact Ayo Growth Dynamics directly to discuss your business goals and SEO needs.",
  },
];

export const CLIENT_SUCCESS_STORIES: SuccessStoryItem[] = [
  {
    id: "story-1",
    clientName: "Marcus Vance",
    role: "Founder & Lead Contractor",
    companyName: "Vance Custom Remodeling & Build",
    industry: "Home Improvement & Contracting",
    location: "Austin, Texas",
    quote:
      "Before partnering with Ayo Growth Dynamics, our Google listing was barely generating 4 calls a month and competitors further away were outranking us. Ayo systematically audited our profile, aligned our primary categories, and fixed messy citation inconsistencies. Within 90 days, direct customer phone calls and project estimate requests more than tripled.",
    keyMetric: "+210% Inbound Phone Inquiries",
    serviceProvided: "Google Business Profile Optimization & Local SEO",
    rating: 5,
  },
  {
    id: "story-2",
    clientName: "David Caldwell",
    role: "Operations Director",
    companyName: "Caldwell Heating, Air & Plumbing",
    industry: "Local Home Services",
    location: "Charlotte, North Carolina",
    quote:
      "Ayo's technical audit immediately uncovered crawl bottlenecks and indexing issues that our previous general marketing agency missed for months. He gave us clear, practical recommendations without any fluff or unrealistic promises. We now maintain strong, consistent visibility across our key metropolitan service area.",
    keyMetric: "Top 3 Local Search Visibility",
    serviceProvided: "Technical SEO Audit & Local SEO Strategy",
    rating: 5,
  },
  {
    id: "story-3",
    clientName: "Dr. Elena Mitchell",
    role: "Principal Dentist",
    companyName: "Mitchell Family Dental Clinic",
    industry: "Healthcare & Dental Practice",
    location: "Denver, Colorado",
    quote:
      "Local search visibility is crucial for our practice. Ayo helped us optimize our Google Business Profile, structure dedicated service landing pages for dental implants, and implement a genuine patient review workflow. The results have been steady, measurable, and impactful for our clinic's calendar.",
    keyMetric: "+65 Monthly Patient Appointments",
    serviceProvided: "Google Business Profile & Website Optimization",
    rating: 5,
  },
  {
    id: "story-4",
    clientName: "Priya Sharma",
    role: "E-Commerce Director",
    companyName: "Artisan Living Home Décor",
    industry: "E-Commerce & Home Goods",
    location: "Online / United States",
    quote:
      "Targeting buyer-intent keywords rather than high-competition vanity terms was a game-changer for our store. Ayo conducted an exhaustive competitor and keyword opportunity analysis that directly improved our product collection rankings. Organic search is now our most cost-effective acquisition channel.",
    keyMetric: "+165% Organic Search Traffic Growth",
    serviceProvided: "Keyword Research & On-Page SEO",
    rating: 5,
  },
];
