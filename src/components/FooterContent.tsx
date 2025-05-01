
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";

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

  return <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          {renderLink("/", 
            <img src="/lovable-uploads/98aa60e8-6822-4380-82b8-8308e111ac9e.png" alt="RVT Advisory" className="h-12 w-auto" />,
            "flex items-center mb-4"
          )}
          <p className="mb-4">Transforming organisations through authentic cultural wisdom and strategic expertise.</p>
          <div className="flex space-x-4">
            {/* Social media icons would go here */}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>{renderLink("/", "Home", "hover:underline")}</li>
            <li>{renderLink("/about", "About", "hover:underline")}</li>
            <li>{renderLink("/services", "Services", "hover:underline")}</li>
            <li>{renderLink("/media", "Media", "hover:underline")}</li>
            <li>{renderLink("/contact", "Contact", "hover:underline")}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li>Cultural Supervision</li>
            <li>Policy Advice</li>
            <li>Strategic Planning</li>
            <li>Evaluation & Impact Assessment</li>
            <li>Business Development</li>
            <li>Governance Advisory</li>
            <li>Retention Strategies</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="flex items-center mb-2">
            <MessageSquare className="h-5 w-5 mr-2" />
            <a href="mailto:renee@rvtadvisory.com" className="hover:underline">renee@rvtadvisory.com</a>
          </div>
          <div className="flex items-center mb-2">
            <Phone className="h-5 w-5 mr-2" />
            <a href="tel:+61411524370" className="hover:underline">0411 524 370</a>
          </div>
          <Button variant="outline" className="mt-4 text-black font-bold hidden sm:hidden xl:inline-flex">
            BOOK YOUR INCEPTION MEETING NOW
          </Button>
        </div>
      </div>
      <div className="border-t border-primary/20 mt-8 pt-8 text-center">
        <p>&copy; {new Date().getFullYear()} RVT Advisory. All rights reserved.</p>
      </div>
    </div>;
};

export default FooterContent;
