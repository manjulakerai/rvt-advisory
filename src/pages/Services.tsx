
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import ServicesHero from "@/components/sections/ServicesHero";
import CulturalTraining from "@/components/sections/CulturalTraining";
import ServicesList from "@/components/sections/ServicesList";
import HowWeHelp from "@/components/sections/HowWeHelp";
import CallToAction from "@/components/sections/CallToAction";
import TestimonialCard from "@/components/TestimonialCard";

const Services = () => {
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="Renee's policy advice transformed our approach to community engagement. Her guidance provided us with a clear framework that respected cultural values while achieving our strategic objectives."
              author="Government Department Director"
              company="State Government Agency"
            />
            <TestimonialCard 
              quote="The cultural training Renee provided has fundamentally changed how our organization operates. We now have the tools and understanding to build authentic relationships with Aboriginal communities."
              author="CEO"
              company="National Non-Profit"
            />
          </div>
        </div>
      </section>

      <CallToAction />
      <StickyCallButton />
      <Footer />
    </div>
  );
};

export default Services;
