
import { Phone, Mail } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[rgba(75,90,32,1)] via-[rgba(75,90,32,1)] to-[rgba(249,246,240,1)] text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center space-x-6 text-sm">
          <a href="tel:+61420737339" className="flex items-center hover:opacity-80 transition-opacity">
            <Phone className="h-4 w-4 mr-2" />
            0420 737 339
          </a>
          <a href="mailto:renee@rvtadvisory.com" className="flex items-center hover:opacity-80 transition-opacity">
            <Mail className="h-4 w-4 mr-2" />
            renee@rvtadvisory.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

