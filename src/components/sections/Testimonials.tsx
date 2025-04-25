
import React from "react";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
