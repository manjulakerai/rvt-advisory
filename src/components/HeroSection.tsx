
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] flex items-center bg-brand-cream text-brand-brown">
      <div className="absolute inset-0 bg-black/30 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: "url('/placeholder.svg')",
            opacity: 0.5
          }}
        >
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <span className="px-4 py-1 bg-brand-purple text-brand-cream text-sm uppercase tracking-wider font-semibold rounded-full mb-4 inline-block">
            Strategic Advisory Services
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-brand-white">
            Transforming Organisations Through Cultural Wisdom
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-brand-cream">
            Expert policy advice, strategic guidance, and cultural competency training to empower businesses, government agencies, and Aboriginal organisations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-brand-cream font-bold">
                BOOK YOUR INCEPTION MEETING NOW
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-cream bg-transparent hover:bg-brand-cream/10 text-brand-cream hover:text-brand-gold"
              >
                Learn More About Renee
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
