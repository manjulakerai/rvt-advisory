
import React from "react";
import { CheckCircle } from "lucide-react";

const ValueProposition = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Makes Renee's Approach Unique</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              { title: "Lived Experience", description: "Across corporate, government, and political sectors" },
              { title: "Flexible Service Models", description: "Tailored to your exact needs" },
              { title: "Deep Cultural Competency", description: "Beyond surface-level understanding" },
              { title: "Team Empowerment", description: "Not just completing a project, but building lasting capability" }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="bg-white text-primary rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white/10 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Why Choose Renee?</h3>
            <p className="text-lg mb-4">
              "Unlike traditional consultants who provide reports and leave, I walk alongside you to ensure real transformation happens. My approach combines cultural wisdom with strategic expertise to create authentic, sustainable change."
            </p>
            <p className="italic">- Renee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
