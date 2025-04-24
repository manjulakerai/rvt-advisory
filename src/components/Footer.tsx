
import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-rvt-sage text-rvt-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-lejour font-bold mb-4">RVT Advisory</h3>
            <p className="mb-4 font-mont">Transforming organizations through authentic cultural wisdom and strategic expertise.</p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-baskerville font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:underline">Policy Advice</Link></li>
              <li><Link to="/services" className="hover:underline">Strategic Advice</Link></li>
              <li><Link to="/services" className="hover:underline">Cultural Supervision</Link></li>
              <li><Link to="/services" className="hover:underline">Cultural Training</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-baskerville font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/media" className="hover:underline">Media</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-baskerville font-semibold mb-4">Contact</h4>
            <div className="flex items-center mb-2">
              <MessageSquare className="h-5 w-5 mr-2" />
              <span>info@rvtadvisory.com</span>
            </div>
            <Button 
              variant="outline" 
              className="mt-4 bg-rvt-cream text-rvt-sage hover:bg-rvt-gold hover:text-rvt-cream transition-colors"
            >
              BOOK YOUR INCEPTION MEETING NOW
            </Button>
          </div>
        </div>
        <div className="border-t border-rvt-cream/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} RVT Advisory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
