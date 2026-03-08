"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitDualMedia from "@/components/sections/hero/HeroSplitDualMedia";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import TeamCardTen from "@/components/sections/team/TeamCardTen";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { Sparkles, Target, Crown, TrendingUp, Zap, Users, Heart, HelpCircle, Globe, MessageSquare, BarChart3, Smartphone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="CoachFlow"
          navItems={[
            { name: "Services", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "team" },
            { name: "Testimonials", id: "testimonial" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Start Your Journey", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Transform Your Business with Expert Coaching & Digital Solutions"
          description="Unlock your full potential with our comprehensive agency services. From stunning websites to AI-powered customer support, we deliver measurable results that accelerate your growth and elevate your competitive advantage."
          tag="Professional Coaching & Digital Agency"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Book Your Free Consultation", href: "#contact" },
            { text: "Explore Services", href: "#features" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/businessman-suit-working-tablet-with-charts-conference-room-team-brainstorm_482257-31840.jpg?_wi=1",              imageAlt: "Business coaching session with professional mentor"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-vector/economic-growth_24877-49230.jpg?_wi=1",              imageAlt: "Business growth metrics and success visualization"
            }
          ]}
          mediaAnimation="slide-up"
          rating={5}
          ratingText="Trusted by 500+ businesses worldwide"
          background={{ variant: "plain" }}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyFive
          title="Comprehensive Agency Services"
          description="Everything you need to build, market, and scale your business. From digital presence to customer engagement, we deliver integrated solutions that work together seamlessly."
          tag="What We Offer"
          tagIcon={Target}
          tagAnimation="slide-up"
          features={[
            {
              title: "Website Design & Development",              description: "Custom, responsive websites built to convert. From e-commerce platforms to corporate sites, we create digital experiences that reflect your brand and drive measurable results. Mobile-optimized, SEO-ready, and focused on user experience.",              icon: Globe,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/premium-photo/videographer-camera-hands-man-with-lens-photography-production-media-scenes-backstage-person-with-stabilizing-equipment-set-shooting-videos-documentary-film_590464-424877.jpg?id=353569622",                  imageAlt: "Website design and development"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-studio_23-2151320693.jpg?id=150835390",                  imageAlt: "Responsive web design showcase"
                }
              ]
            },
            {
              title: "Consulting & Revisions",              description: "Strategic guidance and continuous optimization for your digital presence. We partner with you through implementation, testing, and refinement to ensure maximum impact. Regular performance reviews, A/B testing, and data-driven improvements.",              icon: BarChart3,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/business-people-discussing-charts-graphs-showing-results-their-successful-teamwork_1423-252.jpg?_wi=2",                  imageAlt: "Business consulting session"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/cropped-colleagues-generating-business-ideas_1098-19137.jpg?id=5699117",                  imageAlt: "Strategy and optimization planning"
                }
              ]
            },
            {
              title: "Advertising Campaigns",              description: "Data-driven advertising strategies across Google, Facebook, and LinkedIn. We target the right audience at the right time to maximize ROI and accelerate growth. From campaign creation to ongoing optimization and detailed analytics reporting.",              icon: TrendingUp,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/marketing-strategy-concept-with-business-analytics_23-2150871025.jpg?_wi=3",                  imageAlt: "Digital advertising campaigns"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/data-analytics-dashboard_23-2151197319.jpg?_wi=3",                  imageAlt: "Analytics and performance tracking"
                }
              ]
            },
            {
              title: "Social Media Management",              description: "Strategic content creation and community management across all platforms. Build authentic engagement, grow your followers, and establish thought leadership in your industry. Daily posting, community engagement, and influencer partnerships.",              icon: MessageSquare,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/social-media-marketing-concept_23-2151206987.jpg?_wi=4",                  imageAlt: "Social media strategy and content"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/social-network-concept-with-friends_23-2150873081.jpg?_wi=4",                  imageAlt: "Community engagement and growth"
                }
              ]
            },
            {
              title: "AI Call Assistant",              description: "Intelligent automated calling solutions for customer service, sales, and outreach. Our AI assistants handle inquiries 24/7, qualify leads, and provide instant support with human-like conversations. Advanced NLP, multi-language support, and seamless integration.",              icon: Smartphone,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/customer-service-operator-with-headset_23-2151196547.jpg?_wi=5",                  imageAlt: "AI customer service assistant"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/automated-support-system_23-2151205896.jpg?_wi=5",                  imageAlt: "AI assistant technology"
                }
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Transparent Pricing for Every Business Size"
          description="Choose the perfect plan aligned with your goals. All plans include dedicated support, performance analytics, and the flexibility to scale as you grow."
          tag="Pricing Plans"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          plans={[
            {
              id: "1",              badge: "Starter",              price: "$2,999/mo",              subtitle: "Perfect for small businesses getting started",              buttons: [
                { text: "Get Started", href: "#contact" },
                { text: "Learn More", href: "#contact" }
              ],
              features: [
                "Website design or social media management",                "Basic SEO optimization",                "Monthly performance reports",                "Email support (24hr response)",                "Up to 5 revisions per month",                "Monthly strategy consultation"
              ]
            },
            {
              id: "2",              badge: "Professional",              badgeIcon: Crown,
              price: "$7,999/mo",              subtitle: "Comprehensive digital solutions for growing businesses",              buttons: [
                { text: "Get Started", href: "#contact" },
                { text: "Learn More", href: "#contact" }
              ],
              features: [
                "Custom website + advertising campaigns",                "Social media management (3+ platforms)",                "Advanced SEO and content strategy",                "Bi-weekly strategy calls",                "Unlimited revisions",                "Priority email & phone support",                "Monthly analytics dashboard",                "Performance optimization"
              ]
            },
            {
              id: "3",              badge: "Enterprise",              price: "$15,999/mo",              subtitle: "Full-service agency partnership for enterprises",              buttons: [
                { text: "Get Started", href: "#contact" },
                { text: "Learn More", href: "#contact" }
              ],
              features: [
                "Everything in Professional +",                "AI Call Assistant integration",                "Dedicated account manager",                "Weekly strategy sessions",                "Custom API integrations",                "24/7 priority support",                "Advanced automation workflows",                "Quarterly business reviews",                "Custom training and onboarding"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTen
          title="Meet Our Expert Team"
          tag="Our Team"
          tagAnimation="slide-up"
          members={[
            {
              id: "1",              name: "Sarah Mitchell",              imageSrc: "http://img.b2bpic.net/free-photo/bald-man-with-beard-wearing-business-clothes-glasses-puffing-cheeks-with-funny-face-mouth-inflated-with-air-crazy-expression_839833-2502.jpg",              imageAlt: "Sarah Mitchell, Creative Director"
            },
            {
              id: "2",              name: "David Chen",              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-middle-aged-businesswoman_1262-21005.jpg",              imageAlt: "David Chen, Digital Strategist"
            },
            {
              id: "3",              name: "Elena Rodriguez",              imageSrc: "http://img.b2bpic.net/free-photo/young-successful-businessman-thinking-posing-beige-wall_176420-144.jpg",              imageAlt: "Elena Rodriguez, Lead Developer"
            },
            {
              id: "4",              name: "James Patterson",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-hispanic-female-executive-wearing-eyeglasses-standing-studio_662251-664.jpg",              imageAlt: "James Patterson, Marketing Manager"
            }
          ]}
          memberVariant="default"
          membersAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardSixteen
          title="What Our Clients Say"
          description="Real results from real businesses. Hear from entrepreneurs and executives who transformed their organizations through our comprehensive services and expert guidance."
          tag="Client Success Stories"
          tagIcon={Heart}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Michael Johnson",              role: "CEO",              company: "TechVision Inc",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",              imageAlt: "Michael Johnson, CEO"
            },
            {
              id: "2",              name: "Lisa Anderson",              role: "Founder",              company: "Growth Ventures",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiley-businesswoman-posing-with-her-arms-crossed_23-2148826474.jpg",              imageAlt: "Lisa Anderson, Founder"
            },
            {
              id: "3",              name: "Robert Kumar",              role: "Director",              company: "Strategic Solutions",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-professional-businesswoman-indoors_23-2148824826.jpg",              imageAlt: "Robert Kumar, Director"
            },
            {
              id: "4",              name: "Jennifer Lee",              role: "Managing Partner",              company: "Executive Consulting",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280717.jpg",              imageAlt: "Jennifer Lee, Managing Partner"
            }
          ]}
          kpiItems={[
            { value: "500+", label: "Businesses Transformed" },
            { value: "95%", label: "Client Success Rate" },
            { value: "15+", label: "Years of Experience" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Get answers to common questions about our agency services and how we can help your business succeed."
          tag="Support & Resources"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How quickly will I see results from your services?",              content: "Results vary by service. Website projects typically launch in 4-8 weeks. Advertising campaigns often show initial results within 2-4 weeks. Social media and SEO are longer-term strategies that show significant results within 3-6 months. Our AI Call Assistant can be operational within days of setup."
            },
            {
              id: "2",              title: "What's included in the AI Call Assistant service?",              content: "Our AI Call Assistant handles customer inquiries, qualifies leads, schedules appointments, and provides 24/7 support. It integrates with your existing systems, learns from interactions, and seamlessly transfers complex issues to your team when needed. Includes analytics and detailed reporting on all interactions."
            },
            {
              id: "3",              title: "Can I upgrade or downgrade my plan anytime?",              content: "Yes. We offer flexible plans with month-to-month agreements. You can adjust your service level at any time with 30 days notice. There are no long-term contracts or hidden fees. We want to work with you as your needs evolve."
            },
            {
              id: "4",              title: "How do you approach social media management?",              content: "We create a custom content calendar aligned with your brand voice and business goals. This includes content creation, community management, engagement, and monthly performance analytics. We focus on building authentic connections with your audience and driving meaningful engagement."
            },
            {
              id: "5",              title: "What advertising platforms do you manage?",              content: "We specialize in Google Ads (search, display, shopping), Facebook & Instagram ads, LinkedIn advertising, and retargeting campaigns. We choose the best platforms based on your target audience and business objectives to maximize your ROI."
            },
            {
              id: "6",              title: "Do you offer support for existing websites?",              content: "Absolutely. Our Consulting & Revisions service includes website optimization, performance improvements, conversion rate optimization, and ongoing maintenance. We can work with websites built on any platform and provide strategic guidance to improve performance."
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-customer-service-operator-assisting-customers-with-issues_482257-117959.jpg"
          imageAlt="Professional support and consulting environment"
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          mediaPosition="left"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to transform your business and achieve your digital goals? Let's work together to create something exceptional and drive measurable growth."
          animationType="entrance-slide"
          buttons={[
            { text: "Schedule Free Consultation", href: "https://calendly.com" },
            { text: "Contact Us", href: "mailto:hello@coachflow.com" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="CoachFlow"
          columns={[
            {
              items: [
                { label: "Services", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "About", href: "#team" }
              ]
            },
            {
              items: [
                { label: "Testimonials", href: "#testimonial" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Careers", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
