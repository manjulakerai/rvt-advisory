
import React from 'react';

const ServicesHero = () => {
  return (
    <div className="relative h-[50vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center z-0" 
           style={{ backgroundImage: "url('/lovable-uploads/2c7b1b25-60d6-4186-a212-2e787a76aa1e.png')" }}>
        <div className="absolute inset-0 bg-black/60 z-0"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <h1 className="text-4xl font-bold mb-6 text-white">CENTRING CONSCIOUS CHANGE</h1>
        <p className="text-xl max-w-3xl text-white">
          Partnering with businesses to elevate their internal capabilities and external offerings, RVT Advisory is passionate about creating lasting change and centring human agency.
        </p>
      </div>
    </div>
  );
};

export default ServicesHero;
