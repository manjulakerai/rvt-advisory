
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedMedia from "@/components/media/FeaturedMedia";
import SpeakingEngagements from "@/components/media/SpeakingEngagements";
import MediaAppearances from "@/components/media/MediaAppearances";

const Media = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Media & Speaking</h1>
          <p className="text-xl max-w-3xl">
            Explore Renee's media appearances, speaking engagements, and thought leadership on Aboriginal affairs, policy development, and organizational transformation.
          </p>
        </div>
      </div>

      <FeaturedMedia />
      <SpeakingEngagements />
      <MediaAppearances />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Press Kit</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            For media inquiries, speaking engagement requests, or to download Renee's press kit with bio and high-resolution images, please contact us.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
            >
              Download Press Kit
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 bg-white text-gray-700 font-bold hover:bg-gray-50 transition-colors"
            >
              Media Inquiries
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;
