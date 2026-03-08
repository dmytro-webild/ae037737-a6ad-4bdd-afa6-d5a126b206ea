"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitDualMedia from "@/components/sections/hero/HeroSplitDualMedia";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import TeamCardTen from "@/components/sections/team/TeamCardTen";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { Sparkles, Target, Crown, TrendingUp, Zap, Users, Heart, HelpCircle } from "lucide-react";

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
          title="Transform Your Business with Expert Coaching"
          description="Unlock your full potential and build a thriving business. Our proven coaching strategies help entrepreneurs and executives achieve breakthrough growth and lasting success."
          tag="Professional Coaching"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Book Your Free Consultation", href: "#contact" },
            { text: "Learn More", href: "#features" }
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
          ratingText="Trusted by 500+ businesses"
          background={{ variant: "plain" }}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyFive
          title="Our Coaching Services"
          description="Comprehensive coaching solutions designed to elevate your business and leadership capabilities."
          tag="What We Offer"
          tagIcon={Target}
          tagAnimation="slide-up"
          features={[
            {
              title: "Executive Leadership Coaching",              description: "Develop strategic leadership skills to inspire teams and drive organizational excellence. Build confidence and decision-making capabilities.",              icon: Crown,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/leader-authority-boss-coach-director-manager-concept_53876-133859.jpg?_wi=1",                  imageAlt: "Executive leadership coaching session"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/business-people-discussing-charts-graphs-showing-results-their-successful-teamwork_1423-252.jpg?_wi=1",                  imageAlt: "Leadership strategy planning"
                }
              ]
            },
            {
              title: "Business Strategy & Growth",              description: "Create actionable roadmaps for sustainable business growth. From market positioning to revenue scaling, we guide every step.",              icon: TrendingUp,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/business-people-discussing-charts-graphs-showing-results-their-successful-teamwork_1423-252.jpg?_wi=2",                  imageAlt: "Business strategy development"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-vector/economic-growth_24877-49230.jpg?_wi=2",                  imageAlt: "Growth metrics visualization"
                }
              ]
            },
            {
              title: "Personal Development Coaching",              description: "Unlock your potential through personalized development plans. Build resilience, confidence, and achieve your professional goals.",              icon: Zap,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/businessman-suit-working-tablet-with-charts-conference-room-team-brainstorm_482257-31840.jpg?_wi=2",                  imageAlt: "Personal coaching session"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/leader-authority-boss-coach-director-manager-concept_53876-133859.jpg?_wi=2",                  imageAlt: "Professional development"
                }
              ]
            },
            {
              title: "Team Performance Coaching",              description: "Transform team dynamics and productivity. Improve communication, collaboration, and accountability across your organization.",              icon: Users,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/leader-authority-boss-coach-director-manager-concept_53876-133859.jpg?_wi=3",                  imageAlt: "Team coaching workshop"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/business-people-discussing-charts-graphs-showing-results-their-successful-teamwork_1423-252.jpg?_wi=3",                  imageAlt: "Team collaboration session"
                }
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
          title="Meet Our Expert Coaches"
          tag="Our Team"
          tagAnimation="slide-up"
          members={[
            {
              id: "1",              name: "Sarah Mitchell",              imageSrc: "http://img.b2bpic.net/free-photo/bald-man-with-beard-wearing-business-clothes-glasses-puffing-cheeks-with-funny-face-mouth-inflated-with-air-crazy-expression_839833-2502.jpg",              imageAlt: "Sarah Mitchell, Executive Coach"
            },
            {
              id: "2",              name: "David Chen",              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-middle-aged-businesswoman_1262-21005.jpg",              imageAlt: "David Chen, Business Strategy Coach"
            },
            {
              id: "3",              name: "Elena Rodriguez",              imageSrc: "http://img.b2bpic.net/free-photo/young-successful-businessman-thinking-posing-beige-wall_176420-144.jpg",              imageAlt: "Elena Rodriguez, Leadership Coach"
            },
            {
              id: "4",              name: "James Patterson",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-hispanic-female-executive-wearing-eyeglasses-standing-studio_662251-664.jpg",              imageAlt: "James Patterson, Performance Coach"
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
          description="Real results from real businesses. Hear from entrepreneurs and executives who transformed their organizations through our coaching."
          tag="Client Testimonials"
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
            { value: "15+", label: "Years Experience" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about our coaching programs and how we can help your business succeed."
          tag="Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How long does a typical coaching engagement last?",              content: "Most clients see significant results within 3-6 months of consistent coaching. We typically recommend a 6-12 month engagement for comprehensive transformation. Programs are customized based on your specific goals and current situation."
            },
            {
              id: "2",              title: "What makes your coaching approach different?",              content: "We combine proven methodologies with personalized strategies tailored to your unique business context. Our coaches bring 15+ years of direct business experience, not just theory. We focus on measurable results and sustainable change."
            },
            {
              id: "3",              title: "How much does coaching cost?",              content: "Coaching investments range from $3,000-$15,000+ depending on the program length and scope. We offer flexible packages to fit different business sizes and budgets. Schedule a free consultation to discuss options tailored to your needs."
            },
            {
              id: "4",              title: "Can coaching help if my business is struggling?",              content: "Absolutely. Many of our most successful transformations started with struggling businesses. We help identify root causes, restructure operations, and implement turnaround strategies to get you back on track."
            },
            {
              id: "5",              title: "What's the first step to getting started?",              content: "Book a free 30-minute consultation with one of our coaches. We'll discuss your challenges, goals, and how our coaching can specifically help your business grow and succeed."
            },
            {
              id: "6",              title: "Do you offer remote coaching?",              content: "Yes, all our coaching programs are available via video conferencing for maximum flexibility. Whether you're local or international, we can work with your schedule and time zone."
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-customer-service-operator-assisting-customers-with-issues_482257-117959.jpg"
          imageAlt="Professional coaching support environment"
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          mediaPosition="left"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to transform your business and unlock your full potential? Let's start your coaching journey today."
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
                { label: "About", href: "#team" },
                { label: "Testimonials", href: "#testimonial" }
              ]
            },
            {
              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
                { label: "Blog", href: "#" }
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
