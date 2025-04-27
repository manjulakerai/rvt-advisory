
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import ServicesHero from "@/components/sections/ServicesHero";
import CulturalTraining from "@/components/sections/CulturalTraining";
import ServicesList from "@/components/sections/ServicesList";
import HowWeHelp from "@/components/sections/HowWeHelp";
import CallToAction from "@/components/sections/CallToAction";
import TestimonialSection from "@/components/sections/TestimonialSection";

const Services = () => {
  const location = useLocation();
  const scrollToSection = useScrollToSection();
  
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        scrollToSection(id);
      }, 300); // Increased timeout to ensure page is fully loaded
    }
  }, [location, scrollToSection]);

  const serviceTestimonials = [
    {
      quote: "Renee's policy advice transformed our approach to community engagement. Her guidance provided us with a clear framework that respected cultural values while achieving our strategic objectives.",
      author: "Government Department Director",
      company: "State Government Agency"
    },
    {
      quote: "The cultural training Renee provided has fundamentally changed how our organization operates. We now have the tools and understanding to build authentic relationships with Aboriginal communities.",
      author: "CEO",
      company: "National Non-Profit"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServicesHero />
      <CulturalTraining />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <HowWeHelp />
          <ServicesList />
        </div>
      </section>

      <TestimonialSection 
        title="Client Success Stories" 
        testimonials={serviceTestimonials} 
        background="gray"
      />

      <CallToAction />
      <StickyCallButton />
      <Footer />
    </div>
  );
};

export default Services;
