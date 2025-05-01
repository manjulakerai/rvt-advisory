
import React from 'react';
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
      <p className="mb-8">
        Have questions about how we can help your organisation? Reach out to schedule a discovery meeting or learn more about our services.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <a href="mailto:renee@rvtadvisory.com" className="text-muted-foreground hover:underline">
              renee@rvtadvisory.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <a href="tel:0411524370" className="text-muted-foreground hover:underline">
              0411 524 370
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <MessageSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold">Book a Meeting</h3>
            <p className="text-muted-foreground mb-2">
              Schedule a discovery call to discuss your needs.
            </p>
            <Button variant="outline" className="mt-2">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
