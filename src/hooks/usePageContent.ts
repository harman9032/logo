import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export interface PageContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    badgeText: string;
    valueProposition1: string;
    valueProposition2: string;
    valueProposition3: string;
    valueProposition1Value: string;
    valueProposition2Value: string;
    valueProposition3Value: string;
    valueProposition1Desc: string;
    valueProposition2Desc: string;
    valueProposition3Desc: string;
    learningTitle: string;
    learningPoint1Title: string;
    learningPoint1Desc: string;
    learningPoint2Title: string;
    learningPoint2Desc: string;
    learningPoint3Title: string;
    learningPoint3Desc: string;
    learningPoint4Title: string;
    learningPoint4Desc: string;
    bonusTitle: string;
    bonusSubtitle: string;
    bonusItems: string;
    bonusUrgency: string;
    instantBonusText: string;
    heroBackgroundText: string;
    heroCalloutText: string;
  };
  services: {
    title: string;
    subtitle: string;
    logoTitle: string;
    logoDescription: string;
    logoFeature1: string;
    logoFeature2: string;
    logoFeature3: string;
    landingTitle: string;
    landingDescription: string;
    landingFeature1: string;
    landingFeature2: string;
    landingFeature3: string;
    adsTitle: string;
    adsDescription: string;
    adsFeature1: string;
    adsFeature2: string;
    adsFeature3: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    starterTitle: string;
    starterPrice: string;
    starterDescription: string;
    starterFeature1: string;
    starterFeature2: string;
    starterFeature3: string;
    starterFeature4: string;
    starterFeature5: string;
    starterButtonText: string;
    professionalTitle: string;
    professionalPrice: string;
    professionalDescription: string;
    professionalFeature1: string;
    professionalFeature2: string;
    professionalFeature3: string;
    professionalFeature4: string;
    professionalFeature5: string;
    professionalButtonText: string;
    professionalBadgeText: string;
    enterpriseTitle: string;
    enterprisePrice: string;
    enterpriseDescription: string;
    enterpriseFeature1: string;
    enterpriseFeature2: string;
    enterpriseFeature3: string;
    enterpriseFeature4: string;
    enterpriseFeature5: string;
    enterpriseButtonText: string;
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
  readyToTalk: {
    title: string;
    subtitle: string;
    phoneTitle: string;
    phoneDescription: string;
    phoneNumber: string;
    phoneAvailability: string;
    whatsappTitle: string;
    whatsappDescription: string;
    whatsappButtonText: string;
    whatsappResponse: string;
    emailTitle: string;
    emailDescription: string;
    emailAddress: string;
    emailResponse: string;
    whyTalkTitle: string;
    benefit1Title: string;
    benefit1Description: string;
    benefit2Title: string;
    benefit2Description: string;
    benefit3Title: string;
    benefit3Description: string;
    benefit4Title: string;
    benefit4Description: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    testimonial1Text: string;
    testimonial1Name: string;
    testimonial1Title: string;
    testimonial2Text: string;
    testimonial2Name: string;
    testimonial2Title: string;
    testimonial3Text: string;
    testimonial3Name: string;
    testimonial3Title: string;
  };
  cta: {
    title: string;
    subtitle: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    urgencyText: string;
  };
  footer: {
    companyDescription: string;
    servicesTitle: string;
    service1: string;
    service2: string;
    service3: string;
    service4: string;
    service5: string;
    companyTitle: string;
    contactTitle: string;
    phoneNumber: string;
    emailAddress: string;
    location: string;
    copyrightText: string;
  };
  terms: {
    title: string;
    lastUpdated: string;
    agreementTitle: string;
    agreementText: string;
    servicesTitle: string;
    servicesDescription: string;
    paymentTitle: string;
    paymentDescription: string;
    deliveryTitle: string;
    deliveryDescription: string;
    revisionsTitle: string;
    revisionsDescription: string;
    refundTitle: string;
    refundDescription: string;
    ipTitle: string;
    ipDescription: string;
    liabilityTitle: string;
    liabilityDescription: string;
    contactTitle: string;
    changesTitle: string;
    changesDescription: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    introText: string;
    infoCollectionTitle: string;
    personalInfoTitle: string;
    personalInfoDescription: string;
    autoInfoTitle: string;
    autoInfoDescription: string;
    howWeUseTitle: string;
    howWeUseDescription: string;
    sharingTitle: string;
    sharingDescription: string;
    securityTitle: string;
    securityDescription: string;
    cookiesTitle: string;
    cookiesDescription: string;
    rightsTitle: string;
    rightsDescription: string;
    contactTitle: string;
    changesTitle: string;
    changesDescription: string;
  };
  thankYou: {
    title: string;
    subtitle: string;
    whatNextTitle: string;
    step1Title: string;
    step1Description: string;
    step2Title: string;
    step2Description: string;
    step3Title: string;
    step3Description: string;
    bonusTitle: string;
    bonusDescription: string;
    bonusItems: string;
    assistanceTitle: string;
    testimonialText: string;
    testimonialName: string;
    testimonialTitle: string;
    finalCtaText: string;
    exploreButtonText: string;
    bookButtonText: string;
  };
}

const defaultContent: PageContent = {
  hero: {
    title: "Get 100+ Quality Leads Every Month Guaranteed",
    subtitle: "Book a FREE 30-minute strategy session (Worth ₹2,999)",
    description: "Discover the exact system we use to generate quality leads for businesses like yours.",
    ctaText: "Book FREE Strategy Call",
    badgeText: "8 Years of Excellence • Since 2017 • 1000+ Happy Clients",
    valueProposition1: "100+",
    valueProposition2: "5X",
    valueProposition3: "7 Days",
    valueProposition1Value: "Quality Leads Monthly",
    valueProposition2Value: "Revenue Growth",
    valueProposition3Value: "Complete Setup",
    valueProposition1Desc: "Guaranteed results",
    valueProposition2Desc: "Average client results",
    valueProposition3Desc: "Ready to launch",
    learningTitle: "What You'll Learn in This FREE Call",
    learningPoint1Title: "The 100+ Lead Generation System",
    learningPoint1Desc: "Exact targeting strategies that guarantee consistent lead flow",
    learningPoint2Title: "Revenue Multiplier Strategy",
    learningPoint2Desc: "How to 5X your revenue with our proven system",
    learningPoint3Title: "Quality Lead Attraction",
    learningPoint3Desc: "How to attract high-intent customers ready to buy",
    learningPoint4Title: "7-Day Launch Blueprint",
    learningPoint4Desc: "Complete setup process to start getting leads in 1 week",
    bonusTitle: "🎁 FREE BONUS WORTH ₹4,999!",
    bonusSubtitle: "✅ Lead Generation Checklist + ✅ Ad Templates + ✅ Landing Page Guide",
    bonusItems: "Get our complete Lead Generation Toolkit (Worth ₹4,999) - includes templates, checklists, and step-by-step guides!",
    bonusUrgency: "⚡ Limited Time: Only 10 spots available this week!",
    instantBonusText: "💡 INSTANT BONUS:",
    heroBackgroundText: "8 Years of Excellence • Since 2017 • 1000+ Happy Clients",
    heroCalloutText: "Transform your business with professional digital solutions"
  },
  services: {
    title: "Complete Digital Package",
    subtitle: "Everything you need to establish a strong online presence and attract customers",
    logoTitle: "Logo Design",
    logoDescription: "Professional, memorable logo that represents your brand identity perfectly. Multiple concepts, unlimited revisions, and all file formats included.",
    logoFeature1: "5+ Logo Concepts",
    logoFeature2: "Unlimited Revisions", 
    logoFeature3: "All File Formats",
    landingTitle: "Landing Page",
    landingDescription: "High-converting, mobile-responsive landing page designed to turn visitors into customers. Optimized for speed and conversions.",
    landingFeature1: "Mobile Responsive",
    landingFeature2: "SEO Optimized",
    landingFeature3: "Fast Loading",
    adsTitle: "Meta Ads Setup",
    adsDescription: "Complete Facebook and Instagram ad campaigns setup with targeting, creative design, and optimization for maximum ROI.",
    adsFeature1: "Campaign Setup",
    adsFeature2: "Audience Targeting",
    adsFeature3: "Ad Creatives"
  },
  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle: "Choose the package that's right for your business",
    starterTitle: "Starter Package",
    starterPrice: "₹4,999",
    starterDescription: "Perfect for small businesses getting started",
    starterFeature1: "Logo Design (3 concepts)",
    starterFeature2: "Basic Landing Page",
    starterFeature3: "Mobile Responsive",
    starterFeature4: "Basic SEO Setup",
    starterFeature5: "7-day Support",
    starterButtonText: "Get Started",
    professionalTitle: "Professional Package",
    professionalPrice: "₹9,999",
    professionalDescription: "Most popular choice for growing businesses",
    professionalFeature1: "Professional Logo Design",
    professionalFeature2: "Custom Landing Page",
    professionalFeature3: "Meta Ads Campaign Setup",
    professionalFeature4: "SEO Optimization",
    professionalFeature5: "30-day Support",
    professionalButtonText: "Get Started Now",
    professionalBadgeText: "Most Popular",
    enterpriseTitle: "Enterprise Package",
    enterprisePrice: "₹19,999",
    enterpriseDescription: "Complete solution for established businesses",
    enterpriseFeature1: "Everything in Professional",
    enterpriseFeature2: "Advanced Analytics Setup",
    enterpriseFeature3: "CRM Integration",
    enterpriseFeature4: "Email Marketing Setup",
    enterpriseFeature5: "90-day Support",
    enterpriseButtonText: "Contact Us"
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
  },
  readyToTalk: {
    title: "Ready to Talk? Let's Connect!",
    subtitle: "Skip the forms and get instant access to our team. Choose your preferred way to connect.",
    phoneTitle: "Call Us Now",
    phoneDescription: "Speak directly with our experts",
    phoneNumber: "+91 98765 43210",
    phoneAvailability: "Available 9 AM - 9 PM",
    whatsappTitle: "WhatsApp Chat",
    whatsappDescription: "Quick responses within minutes",
    whatsappButtonText: "Start Chat",
    whatsappResponse: "Instant responses",
    emailTitle: "Email Us",
    emailDescription: "Detailed project discussions",
    emailAddress: "hello@dailycreativedesigns.com",
    emailResponse: "Response within 2 hours",
    whyTalkTitle: "Why Talk to Us Directly?",
    benefit1Title: "Instant Clarity",
    benefit1Description: "Get immediate answers to your questions",
    benefit2Title: "Personal Touch",
    benefit2Description: "Speak with real experts, not chatbots",
    benefit3Title: "Faster Results",
    benefit3Description: "Skip the back-and-forth emails",
    benefit4Title: "Custom Solutions",
    benefit4Description: "Tailored advice for your business"
  },
  testimonials: {
    title: "What Our Clients Say",
    subtitle: "Don't just take our word for it",
    testimonial1Text: "Daily Creative Designs transformed our business! We got 150 leads in the first month and our revenue increased by 300%.",
    testimonial1Name: "Raj Patel",
    testimonial1Title: "CEO, TechStart Solutions",
    testimonial2Text: "Amazing service! The landing page looks professional and we're getting quality leads consistently.",
    testimonial2Name: "Priya Sharma",
    testimonial2Title: "Founder, GreenSpace Design",
    testimonial3Text: "Best investment we made! The Meta ads are performing exceptionally well. Getting 100+ leads monthly. Highly recommended.",
    testimonial3Name: "Amit Kumar",
    testimonial3Title: "Director, FitLife Gym"
  },
  cta: {
    title: "Ready to Transform Your Business?",
    subtitle: "Join 1000+ businesses that have transformed their digital presence with us",
    primaryButtonText: "Book FREE Strategy Call (Worth ₹2,999)",
    secondaryButtonText: "Get Complete Package - ₹9,999",
    urgencyText: "⚡ Limited Time Offer - Book your call today!"
  },
  footer: {
    companyDescription: "Transforming businesses with professional digital solutions since 2017.",
    servicesTitle: "Services",
    service1: "Logo Design",
    service2: "Landing Pages",
    service3: "Meta Ads",
    service4: "Lead Generation",
    service5: "SEO Optimization",
    companyTitle: "Company",
    contactTitle: "Contact Info",
    phoneNumber: "+91 98765 43210",
    emailAddress: "hello@dailycreativedesigns.com",
    location: "Mumbai, India",
    copyrightText: "© 2025 Daily Creative Designs. All rights reserved. • Serving clients since 2017"
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "Last updated: January 10, 2025",
    agreementTitle: "Agreement to Terms",
    agreementText: "By accessing and using Daily Creative Designs services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    servicesTitle: "Services Description",
    servicesDescription: "Daily Creative Designs provides digital marketing services including but not limited to: Logo design and branding services, Landing page development, Meta (Facebook/Instagram) advertising campaigns, Lead generation services, Digital marketing consultation",
    paymentTitle: "Payment Terms",
    paymentDescription: "Payment is required upfront for one-time packages. Monthly services are billed in advance. All prices are in Indian Rupees (INR) and include applicable taxes.",
    deliveryTitle: "Delivery Timeline",
    deliveryDescription: "Standard delivery timelines: Logo concepts: 2-3 business days, Landing page: 5-7 business days, Complete package: 7-10 business days, Meta ads setup: 3-5 business days. Timelines may vary based on project complexity and client feedback response time.",
    revisionsTitle: "Revisions Policy",
    revisionsDescription: "Logo design: Unlimited revisions until satisfaction, Landing pages: Up to 3 rounds of revisions, Additional revisions may incur extra charges",
    refundTitle: "Refund Policy",
    refundDescription: "We offer a 100% money-back guarantee within 30 days of project completion if you're not completely satisfied with our work. Refund requests must be submitted in writing with specific reasons for dissatisfaction.",
    ipTitle: "Intellectual Property",
    ipDescription: "Upon full payment, all intellectual property rights for the delivered work transfer to the client. Daily Creative Designs retains the right to showcase completed work in our portfolio unless specifically requested otherwise.",
    liabilityTitle: "Limitation of Liability",
    liabilityDescription: "Daily Creative Designs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
    contactTitle: "Contact Information",
    changesTitle: "Changes to Terms",
    changesDescription: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms."
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: January 10, 2025",
    introText: "At Daily Creative Designs, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
    infoCollectionTitle: "Information We Collect",
    personalInfoTitle: "Personal Information",
    personalInfoDescription: "We may collect personal information that you voluntarily provide to us when you: Fill out contact forms or request quotes, Subscribe to our newsletter, Book consultation calls, Engage with our customer support, Create an account or use our services",
    autoInfoTitle: "Automatically Collected Information",
    autoInfoDescription: "When you visit our website, we may automatically collect certain information about your device and usage: IP address and location data, Browser type and version, Pages visited and time spent, Referring website information, Device information and screen resolution",
    howWeUseTitle: "How We Use Your Information",
    howWeUseDescription: "We use the information we collect for various purposes, including: Provide requested services, Process payments, Send project updates, Provide customer support, Send marketing materials, Newsletter updates, Service announcements, Follow-up communications",
    sharingTitle: "Information Sharing and Disclosure",
    sharingDescription: "We do not sell, trade, or otherwise transfer your personal information to third parties except in specific circumstances: Service Providers, Legal Requirements, Business Transfers",
    securityTitle: "Data Security",
    securityDescription: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
    cookiesTitle: "Cookies and Tracking Technologies",
    cookiesDescription: "We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.",
    rightsTitle: "Your Rights and Choices",
    rightsDescription: "You have certain rights regarding your personal information: Access and Update, Opt-Out, Data Deletion",
    contactTitle: "Contact Us",
    changesTitle: "Changes to This Policy",
    changesDescription: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date."
  },
  thankYou: {
    title: "Thank You! 🎉",
    subtitle: "Your inquiry has been successfully submitted. We're excited to help transform your business!",
    whatNextTitle: "What Happens Next?",
    step1Title: "Quick Response",
    step1Description: "Our team will contact you within 2 hours during business hours",
    step2Title: "Strategy Discussion",
    step2Description: "We'll discuss your goals and create a custom strategy for your business",
    step3Title: "Custom Proposal",
    step3Description: "Receive a detailed proposal within 24 hours with pricing and timeline",
    bonusTitle: "🎁 Special Bonus for You!",
    bonusDescription: "Since you've taken action today, you'll receive our exclusive Lead Generation Checklist (Worth ₹999) absolutely FREE!",
    bonusItems: "✅ 15-Point Lead Generation Audit, ✅ High-Converting Ad Templates, ✅ Landing Page Optimization Guide, ✅ Lead Nurturing Email Sequences, ✅ ROI Tracking Spreadsheet",
    assistanceTitle: "Need Immediate Assistance?",
    testimonialText: "Daily Creative Designs transformed our business completely! We went from 10 leads per month to over 150 leads. The ROI has been incredible - we've 5x our revenue in just 6 months!",
    testimonialName: "Raj Patel",
    testimonialTitle: "CEO, TechStart Solutions",
    finalCtaText: "While you wait for our response, feel free to explore our services or book a call directly:",
    exploreButtonText: "Explore Our Services",
    bookButtonText: "Book Immediate Call"
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