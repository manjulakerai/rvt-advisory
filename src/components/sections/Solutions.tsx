import React from "react";
import EngagementModel from "@/components/EngagementModel";
const Solutions = () => {
  return <section className="py-16 bg-gradient-to-l from-primary/30 to-primary/5 via-[#F9F6F0] via-40% from-0% to-100%">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">How Renee Resolves These Problems</h2>
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Renee listens, provides feedback on your current position, and offers suggested achievements, guidance, structures, and policies for implementation.
        </p>
        
        <h3 className="text-2xl font-semibold text-center mb-8 text-lime-800">Three Flexible Engagement Models</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <EngagementModel title="Advisory Analysis" description="Deep dive into your current organisational landscape. Walk the journey with you, providing a full internal analysis of where your business stands." icon="Search" />
          <EngagementModel title="Collaborative Empowerment" description="Walk alongside your team to build internal capabilities. Guide you from the outside, advising on implementation strategies for your policies." icon="Users" />
          <EngagementModel title="Full Implementation" description="We take the load, create solutions, and guide execution. Develop comprehensive strategies and show you how to deliver them effectively." icon="CheckCircle" />
        </div>
      </div>
    </section>;
};
export default Solutions;