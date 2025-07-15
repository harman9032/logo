import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export interface PageContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    badgeText: string;
  };
  services: {
    title: string;
    subtitle: string;
    logoTitle: string;
    logoDescription: string;
    landingTitle: string;
    landingDescription: string;
    adsTitle: string;
    adsDescription: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    starterTitle: string;
    starterPrice: string;
    starterDescription: string;
    professionalTitle: string;
    professionalPrice: string;
    professionalDescription: string;
    enterpriseTitle: string;
    enterprisePrice: string;
    enterpriseDescription: string;
  };
  whyChoose: {
    title: string;
    subtitle: string;
    reason1Title: string;
    reason1Description: string;
    reason2Title: string;
    reason2Description: string;
    reason3Title: string;
    reason3Description: string;
    reason4Title: string;
    reason4Description: string;
  };
  faq: {
    title: string;
    subtitle: string;
    question1: string;
    answer1: string;
    question2: string;
    answer2: string;
    question3: string;
    answer3: string;
    question4: string;
    answer4: string;
    question5: string;
    answer5: string;
    question6: string;
    answer6: string;
  };
}

const defaultContent: PageContent = {
  hero: {
    title: "Get 100+ Quality Leads Every Month Guaranteed",
    subtitle: "Book a FREE 30-minute strategy session (Worth ₹2,999)",
    description: "Discover the exact system we use to generate quality leads for businesses like yours.",
    ctaText: "Book FREE Strategy Call",
    badgeText: "8 Years of Excellence • Since 2017 • 1000+ Happy Clients"
  },
  services: {
    title: "Complete Digital Package",
    subtitle: "Everything you need to establish a strong online presence and attract customers",
    logoTitle: "Logo Design",
    logoDescription: "Professional, memorable logo that represents your brand identity perfectly. Multiple concepts, unlimited revisions, and all file formats included.",
    landingTitle: "Landing Page",
    landingDescription: "High-converting, mobile-responsive landing page designed to turn visitors into customers. Optimized for speed and conversions.",
    adsTitle: "Meta Ads Setup",
    adsDescription: "Complete Facebook and Instagram ad campaigns setup with targeting, creative design, and optimization for maximum ROI."
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle: "Choose the package that's right for your business",
    starterTitle: "Starter Package",
    starterPrice: "₹4,999",
    starterDescription: "Perfect for small businesses getting started",
    professionalTitle: "Professional Package",
    professionalPrice: "₹9,999",
    professionalDescription: "Most popular choice for growing businesses",
    enterpriseTitle: "Enterprise Package",
    enterprisePrice: "₹19,999",
    enterpriseDescription: "Complete solution for established businesses"
  },
  whyChoose: {
    title: "Why Choose Daily Creative Designs?",
    subtitle: "We deliver results that matter to your business growth",
    reason1Title: "Fast Delivery",
    reason1Description: "Complete package delivered within 7 days",
    reason2Title: "Expert Team",
    reason2Description: "8 years of experience since 2017",
    reason3Title: "Proven Results",
    reason3Description: "Helped 1000+ businesses grow their revenue",
    reason4Title: "Money-Back Guarantee",
    reason4Description: "100% satisfaction or your money back"
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our services",
    question1: "How long does it take to complete the package?",
    answer1: "Our complete package is delivered within 7 business days. Logo concepts are provided within 2-3 days, landing page within 5 days, and Meta ads setup within 7 days.",
    question2: "Do you provide unlimited revisions?",
    answer2: "Yes, we provide unlimited revisions for the logo design until you're 100% satisfied. For landing pages, we include up to 3 rounds of revisions.",
    question3: "What's included in the Meta ads setup?",
    answer3: "Complete Facebook and Instagram campaign setup including audience research, ad creative design, campaign structure, targeting setup, and initial optimization.",
    question4: "Do you provide ongoing support?",
    answer4: "Yes, we provide 30 days of free support after project completion. For ongoing management, we offer monthly packages starting at ₹9,999.",
    question5: "What if I'm not satisfied with the work?",
    answer5: "We offer a 100% money-back guarantee. If you're not completely satisfied with our work, we'll refund your payment within 30 days.",
    question6: "Can you help with other digital marketing services?",
    answer6: "Absolutely! We offer additional services like SEO, content marketing, social media management, and Google Ads. Contact us to discuss your specific needs."
  }
};

export function usePageContent() {
  const [content, setContent] = useState<PageContent>(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const { data, error } = await supabase
        .from('page_settings')
        .select('settings')
        .eq('id', 'homepage_content')
        .maybeSingle();

      if (error) {
        console.error('Error loading content:', error);
      } else if (data?.settings) {
        setContent({ ...defaultContent, ...data.settings });
      }
    } catch (error) {
      console.error('Error loading content:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async (sectionId: string, sectionContent: any) => {
    try {
      const newContent = { ...content, [sectionId]: sectionContent };
      
      const { error } = await supabase
        .from('page_settings')
        .upsert({
          id: 'homepage_content',
          settings: newContent,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
      
      setContent(newContent);
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Error saving content. Please try again.');
    }
  };

  return { content, loading, saveContent };
}