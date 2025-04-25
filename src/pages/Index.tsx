
import React from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemStatement from "@/components/sections/ProblemStatement";
import Solutions from "@/components/sections/Solutions";
import ValueProposition from "@/components/sections/ValueProposition";
import Implementation from "@/components/sections/Implementation";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  const homeTestimonials = [
    {
      quote: "Renee doesn't just consult - she transforms. Her guidance has been instrumental in reshaping our approach to community engagement.",
      author: "Small Business Owner",
      company: "Regional Enterprise"
    },
    {
      quote: "Unprecedented insights and actionable strategies. Working with Renee has given us a competitive edge in policy development.",
      author: "Corporate Executive",
      company: "National Corporation"
    },
    {
      quote: "A game-changer for our organisational development. Her cultural competency expertise has transformed how we operate.",
      author: "Community Leader",
      company: "Non-Profit Organization"
    },
    {
      quote: "Renee's unique perspective bridging government and Aboriginal wisdom has helped us create more effective and inclusive policies.",
      author: "Government Stakeholder",
      company: "State Department"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemStatement />
      <Solutions />
      <ValueProposition />
      <Implementation />
      <TestimonialSection 
        title="What Our Clients Say" 
        testimonials={homeTestimonials} 
      />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
