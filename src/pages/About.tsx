
import React from 'react';
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative h-[50vh] flex items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/50 z-0">
          <div className="absolute inset-0 bg-cover bg-center" 
               style={{ backgroundImage: "url('/placeholder.svg')", opacity: 0.5 }}>
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-5xl font-extrabold mb-6">RVT ADVISORY</h1>
          <p className="text-xl max-w-2xl">
            Centring people and partnerships in everything we do —because sustainable business success begins with genuine connections.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-8">
              <div className="rounded-lg overflow-hidden mb-6 aspect-[3/4] bg-gray-200">
                <img src="/placeholder.svg" alt="Renee Thomson" className="w-full h-full object-cover" />
              </div>
              
              <div className="space-y-4">
                <div className="border-t pt-4">
                  <h3 className="text-2xl font-bold mb-4">Our Ethos</h3>
                  <p className="text-gray-700 mb-4">
                    At RVT Advisory, our culture is built on creating meaningful relationships and centring conscious change. We take pride in the way we work—with care, clarity, and a deep commitment to values.
                  </p>
                  <h4 className="font-semibold mb-2">Our Values:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <span>Authenticity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <span>Accountability</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <span>Integrity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <span>Connection</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-t pt-4 space-y-4">
                  <Link to="/contact" className="text-primary hover:underline">Book a consultation</Link>
                  
                  <div className="mt-4">
                    <Link to="/contact">
                      <Button 
                        size="lg" 
                        className="w-full bg-[#5F3873] text-white hover:bg-[#5F3873]/90 font-bold border-0"
                      >
                        BOOK YOUR INCEPTION MEETING NOW
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6">About RVT Advisory</h2>
              <div className="prose max-w-none">
                <p className="text-lg mb-4">
                  RVT Advisory is a values-led advisory firm that partners with businesses to deliver clarity, confidence, and strategy— to achieve their business goals and sustainable growth. Founded by Managing Director and Wiradjuri woman Renee Thomson in 2023, RVT Advisory was established on the principles of centring conscious change — committed to empowering individuals and businesses by partnering to accelerate growth and create transformative impact.
                </p>
                <div className="my-8 bg-gray-100 p-6 rounded-lg">
                  <blockquote className="text-xl italic">
                    "By understanding the importance of centring human agency, we're all capable of creating conscious change — not only as business owners and employees, but as people."
                    <footer className="mt-2 text-base">— Renee Thomson, Managing Director</footer>
                  </blockquote>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">People-Centred</h3>
                    <p>We build trust, connection, and cultural safety in every engagement.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Values-Led</h3>
                    <p>We are guided by authenticity, accountability, integrity, and connection.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Strengths-Based</h3>
                    <p>We empower organisations by working with what's strong, not just what's wrong.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Measurable-Impact</h3>
                    <p>We provide you with clarity and confidence to deliver, measure and adapt outcomes.</p>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6">About Renee</h2>
              <div className="prose max-w-none">
                <p className="text-lg">
                  Renee has over 10 years of experience in strategic policy, human resources, project implementation and facilitation across government, corporate, and non-government sectors. She brings her expertise as the Policy Director for Aboriginal Affairs NSW & Regional Youth NSW in the NSW Ministerial Offices — specialising in influencing innovative strategies and policies for NSW, Renee has a proven track record of driving transformative change in service delivery, legislative reform, and community-controlled initiatives.
                </p>
                <p className="text-lg mt-4">
                  Known for her relational approach and strategic insight — she is deeply passionate about empowering businesses to lead with clarity, confidence and consciousness.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
