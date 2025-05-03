
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQSection from "@/components/contact/FAQSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Ready to transform your organisation? Get in touch to schedule a discovery meeting or learn more about our services.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <ContactInfo />
          </div>
        </div>
      </section>
      
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Contact;

