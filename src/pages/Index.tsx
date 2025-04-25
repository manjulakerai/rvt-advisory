
import React from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemStatement from "@/components/sections/ProblemStatement";
import Solutions from "@/components/sections/Solutions";
import ValueProposition from "@/components/sections/ValueProposition";
import Implementation from "@/components/sections/Implementation";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemStatement />
      <Solutions />
      <ValueProposition />
      <Implementation />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
