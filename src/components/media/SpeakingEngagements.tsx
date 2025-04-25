
import React from 'react';

const speakingTopics = [
  "Indigenous Policy Development",
  "Cultural Safety",
  "Organizational Transformation",
  "Leadership",
  "Strategic Advice",
  "Community Engagement",
  "Government Relations",
  "Cultural Intelligence"
];

const SpeakingEngagements = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Speaking Engagements</h2>
            <p className="text-lg mb-6">
              Renee is a powerful and engaging speaker who brings a unique perspective to discussions on policy, leadership, and cultural transformation.
            </p>
            <p className="text-lg mb-6">
              [PLACEHOLDER: Add more details about Renee's speaking style, approach, and impact]
            </p>
            <h3 className="text-xl font-semibold mb-4">Speaking Topics</h3>
            <div className="flex flex-wrap gap-2">
              {speakingTopics.map((topic, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/a5169457-4e80-4cac-b889-f90da91cdd3f.png" 
              alt="Renee Thomson speaking at an event" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingEngagements;
