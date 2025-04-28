
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <img 
          src="/lovable-uploads/adb32038-1f7a-4d8a-b54e-a11f843a705a.png" 
          alt="RVT Advisory" 
          className="h-16 md:h-20 mx-auto mb-8"
        />
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Coming Soon
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          RVT Advisory is transforming organisations through authentic cultural wisdom and strategic expertise.
        </p>
        
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-left text-gray-600">
            <ul className="space-y-2">
              <li>• Cultural Supervision</li>
              <li>• Policy Advice</li>
              <li>• Strategic Planning</li>
              <li>• Business Development</li>
            </ul>
            <ul className="space-y-2">
              <li>• Evaluation & Impact Assessment</li>
              <li>• Governance Advisory</li>
              <li>• Retention Strategies</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Get in Touch
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="outline" className="w-full sm:w-auto">
              <Phone className="mr-2 h-4 w-4" />
              <a href="tel:+61411524370">0411 524 370</a>
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              <a href="mailto:renee@rvtadvisory.com">renee@rvtadvisory.com</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
