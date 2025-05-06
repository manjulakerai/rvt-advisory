
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
import { Separator } from "@/components/ui/separator";

const FooterContent = () => {
  // We need to check if we're in a router context before using router hooks
  let location;
  let scrollToSection;
  
  try {
    location = useLocation();
    scrollToSection = useScrollToSection();
  } catch (error) {
    // If we're outside of Router context, we'll handle links differently
    location = null;
    scrollToSection = () => {};
  }

  const handleNavigationClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to render a link that works both inside and outside Router context
  const renderLink = (to: string, children: React.ReactNode, className?: string) => {
    if (location !== null) {
      // We're in a Router context
      return (
        <Link to={to} className={className} onClick={handleNavigationClick}>
          {children}
        </Link>
      );
    } else {
      // We're outside Router context, use regular a tag
      return (
        <a href={to} className={className}>
          {children}
        </a>
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          {renderLink("/", 
            <img src="/lovable-uploads/98aa60e8-6822-4380-82b8-8308e111ac9e.png" alt="RVT Advisory" className="h-12 w-auto filter brightness-0 invert" />,
            "flex items-center"
          )}
          <p className="text-sm">Transforming organisations through authentic cultural wisdom and strategic expertise.</p>
          <div className="text-xs mt-4">
            <h4 className="font-semibold mb-2">Acknowledgement of Country</h4>
            <p>
              RVT Advisory acknowledges Traditional Owners of Country throughout Australia and recognises the continuing connection to lands, waters and communities. We pay our respect to Aboriginal and Torres Strait Islander cultures; and to Elders past and present.
            </p>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>{renderLink("/", "Home", "hover:underline")}</li>
            <li>{renderLink("/about", "About", "hover:underline")}</li>
            <li>{renderLink("/services", "Services", "hover:underline")}</li>
            <li>{renderLink("/media", "Media", "hover:underline")}</li>
            <li>{renderLink("/contact", "Contact", "hover:underline")}</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              <a href="mailto:renee@rvtadvisory.com" className="hover:underline">renee@rvtadvisory.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+61411524370" className="hover:underline">0411 524 370</a>
            </div>
          </div>
          <Button variant="outline" className="mt-4 bg-transparent border-white text-white hover:bg-white/10 text-xs hidden xl:inline-flex">
            BOOK YOUR INCEPTION MEETING NOW
          </Button>
        </div>
      </div>
      
      <Separator className="my-6 bg-white/20" />
      
      <div className="text-xs text-center">
        <p>&copy; {new Date().getFullYear()} RVT Advisory. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterContent;
