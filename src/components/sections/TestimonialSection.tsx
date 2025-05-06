
import React from "react";
import TestimonialCard from "@/components/TestimonialCard";

interface TestimonialSectionProps {
  title: string;
  testimonials: Array<{
    quote: string;
    author: string;
    company: string;
    image?: string;
  }>;
  className?: string;
  background?: "white" | "gray";
}

const TestimonialSection = ({ 
  title, 
  testimonials, 
  className = "",
  background = "white" 
}: TestimonialSectionProps) => {
  return (
    <section className={`py-16 ${background === "gray" ? "bg-gray-50" : "bg-white"} ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-secondary">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              quote={testimonial.quote} 
              author={testimonial.author} 
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
