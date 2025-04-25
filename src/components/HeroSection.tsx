import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-[60vh] md:h-[80vh] flex items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-black/50 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('/placeholder.svg')",
          opacity: 0.5
        }}>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative py-12 md:py-0">
        <div className="max-w-3xl">
          <span className="px-4 py-1 bg-primary text-white text-xs md:text-sm uppercase tracking-wider font-bold rounded-full mb-4 inline-block">
            Strategic Advisory Services
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
            Transforming Organisations Through Cultural Wisdom
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 font-medium">
            Expert policy advice, strategic guidance, and cultural competency training to empower businesses, government agencies, and Aboriginal organisations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full text-sm sm:text-base bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 sm:px-6">
                BOOK YOUR INCEPTION MEETING NOW
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full text-sm sm:text-base border-white hover:bg-white/20 text-white font-bold py-3 px-4 sm:px-6 transition-colors duration-300"
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
