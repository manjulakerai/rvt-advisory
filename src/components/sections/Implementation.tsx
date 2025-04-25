
import React from "react";

const Implementation = () => {
  const steps = [
    { title: "Initial Consultation", description: "We begin with a deep-dive discovery session to understand your organisational challenges, goals, and cultural context." },
    { title: "Strategic Assessment", description: "A comprehensive analysis of your current position, identifying gaps and opportunities for authentic transformation." },
    { title: "Implementation Planning", description: "We create a tailored roadmap with specific, achievable milestones that align with your organisational vision." },
    { title: "Guided Execution", description: "Depending on your chosen engagement model, we either guide your team or directly implement the strategic initiatives." },
    { title: "Capability Transfer", description: "Unlike traditional consultants, we ensure your team is empowered with the skills and knowledge to sustain the transformation." }
  ];

  return (
    <section className="py-16" style={{
      background: '#F9F6F0',
      backgroundImage: 'linear-gradient(50deg, rgba(75, 90, 32, 1) 0%, rgba(249, 246, 240, 1) 37%, rgba(249, 246, 240, 1) 63%, rgba(75, 90, 32, 1) 100%)'
    }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Actually Works</h2>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className={`relative pl-16 ${index !== steps.length - 1 ? 'mb-10' : ''}`}>
              {index !== steps.length - 1 && <div className="absolute left-0 top-0 h-full w-[2px] bg-primary"></div>}
              <div className="absolute left-[-10px] top-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">{index + 1}</div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-lg text-black">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Implementation;
