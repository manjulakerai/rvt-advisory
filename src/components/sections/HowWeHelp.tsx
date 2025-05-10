
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const HowWeHelp = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/manjulakerai/discoverymeeting", "_blank");
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <h2 className="text-3xl font-bold mb-6">How We Help You Succeed</h2>
        <p className="text-lg mb-6">
          Our advisory services are designed to address the complex challenges faced by organizations seeking to create meaningful change and authentic engagement with Aboriginal communities.
        </p>
        <ul className="space-y-4">
          {[
            "Develop long-term and short-term vision planning",
            "Create connections and assist with community engagement strategies",
            "Develop internal policies aligned with cultural values",
            "Help you understand policy interfaces with government sectors",
            "Provide cultural competency training and development"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
        <p className="mb-4">
          We focus on empowering clients rather than creating dependency. Our goal is to build your internal capabilities so you can continue the work after our engagement ends.
        </p>
        <p className="mb-4">
          Every organization is unique, which is why we offer three flexible service models to match your exact requirements:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <span><strong>Advisory Analysis:</strong> A deep dive into your organizational landscape</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <span><strong>Collaborative Empowerment:</strong> Building internal capabilities</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <span><strong>Full Implementation:</strong> End-to-end solution development and execution</span>
          </li>
        </ul>
        <Button 
          className="w-full bg-[#5F3873] text-white hover:bg-[#5F3873]/90 hover:text-white font-bold border-0"
          onClick={openCalendly}
        >
          BOOK YOUR INCEPTION MEETING NOW
        </Button>
      </div>
    </div>
  );
};

export default HowWeHelp;
