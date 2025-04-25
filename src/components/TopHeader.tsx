
import { Phone, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const TopHeader = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-white py-2" style={{
      background: 'linear-gradient(250deg, rgba(75, 90, 32, 1) 50%, rgba(249, 246, 240, 1) 100%)'
    }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-end items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
          <a href="tel:+61420737339" className="flex items-center hover:opacity-80 transition-opacity">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            {isMobile ? "Call Us" : "0420 737 339"}
          </a>
          <a href="mailto:renee@rvtadvisory.com" className="flex items-center hover:opacity-80 transition-opacity">
            <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            {isMobile ? "Email Us" : "renee@rvtadvisory.com"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
