
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/manjulakerai/discoverymeeting", "_blank");
  };

  return (
    <section className="py-16 bg-[#667538] text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Organisation?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Take the first step toward authentic change and powerful organisational development.
        </p>
        <Button 
          size="lg" 
          variant="outline" 
          className="bg-[#5F3873] text-white hover:text-white hover:bg-[#5F3873]/90 font-bold text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-6 border-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          onClick={openCalendly}
        >
          BOOK YOUR INCEPTION MEETING NOW
          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
