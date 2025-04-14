import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return <div className="relative h-[80vh] flex items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Background image overlay - replace the URL with your actual image */}
      <div className="absolute inset-0 bg-black/50 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/placeholder.svg')",
        opacity: 0.5
      }}>
          {/* Note: Replace with actual image of Renee speaking or cultural landscape */}
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <span className="px-4 py-1 bg-primary text-white text-sm uppercase tracking-wider font-semibold rounded-full mb-4 inline-block">
            Strategic Advisory Services
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Transforming Organisations Through Cultural Wisdom</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Expert policy advice, strategic guidance, and cultural competency training to empower businesses, government agencies, and Aboriginal organisations.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white hover:bg-white/10 text-zinc-950">
                Learn More About Renee
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;