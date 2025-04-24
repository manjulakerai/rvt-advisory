import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <div className="relative h-[50vh] flex items-center bg-brand-olive text-brand-cream">
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
              <div className="rounded-lg overflow-hidden mb-6 aspect-[3/4] bg-brand-cream">
                <img src="/placeholder.svg" alt="Renee Thomson" className="w-full h-full object-cover" />
              </div>
              
              <div className="space-y-4">
                <div className="border-t border-brand-gold pt-4">
                  <h3 className="text-2xl font-bold mb-4 text-brand-brown">Our Ethos</h3>
                  <p className="text-brand-olive mb-4">
                    At RVT Advisory, our culture is built on creating meaningful relationships and centring conscious change. We take pride in the way we work—with care, clarity, and a deep commitment to values.
                  </p>
                  <h4 className="font-semibold mb-2 text-brand-brown">Our Values:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-brand-olive">
                      <ExternalLink className="h-4 w-4 text-brand-green" />
                      <span>Authenticity</span>
                    </li>
                    <li className="flex items-center gap-2 text-brand-olive">
                      <ExternalLink className="h-4 w-4 text-brand-green" />
                      <span>Accountability</span>
                    </li>
                    <li className="flex items-center gap-2 text-brand-olive">
                      <ExternalLink className="h-4 w-4 text-brand-green" />
                      <span>Integrity</span>
                    </li>
                    <li className="flex items-center gap-2 text-brand-olive">
                      <ExternalLink className="h-4 w-4 text-brand-green" />
                      <span>Connection</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-t border-brand-gold pt-4">
                  <Link to="/contact" className="text-brand-green hover:text-brand-olive transition-colors">Book a consultation</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-brand-brown">About RVT Advisory</h2>
              <div className="prose max-w-none">
                <p className="text-lg mb-4 text-brand-olive">
                  RVT Advisory is a values-led advisory firm that partners with businesses to deliver clarity, confidence, and strategy— to achieve their business goals and sustainable growth. Founded by Managing Director and Wiradjuri woman Renee Thomson in 2023, RVT Advisory was established on the principles of centring conscious change — committed to empowering individuals and businesses by partnering to accelerate growth and create transformative impact.
                </p>
                <div className="my-8 bg-brand-cream p-6 rounded-lg border border-brand-gold">
                  <blockquote className="text-xl italic text-brand-brown">
                    "By understanding the importance of centring human agency, we're all capable of creating conscious change — not only as business owners and employees, but as people."
                    <footer className="mt-2 text-base text-brand-olive">— Renee Thomson, Managing Director</footer>
                  </blockquote>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6 text-brand-brown">Our Approach</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="border-brand-gold bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-brand-brown">People-Centred</h3>
                    <p className="text-brand-olive">We build trust, connection, and cultural safety in every engagement.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-brand-gold bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-brand-brown">Values-Led</h3>
                    <p className="text-brand-olive">We are guided by authenticity, accountability, integrity, and connection.</p>
                  </CardContent>
                </Card>

                <Card className="border-brand-gold bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-brand-brown">Strengths-Based</h3>
                    <p className="text-brand-olive">We empower organisations by working with what's strong, not just what's wrong.</p>
                  </CardContent>
                </Card>

                <Card className="border-brand-gold bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-brand-brown">Measurable-Impact</h3>
                    <p className="text-brand-olive">We provide you with clarity and confidence to deliver, measure and adapt outcomes.</p>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6 text-brand-brown">About Renee</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-brand-olive">
                  Renee has over 10 years of experience in strategic policy, human resources, project implementation and facilitation across government, corporate, and non-government sectors. She brings her expertise as the Policy Director for Aboriginal Affairs NSW & Regional Youth NSW in the NSW Ministerial Offices — specialising in influencing innovative strategies and policies for NSW, Renee has a proven track record of driving transformative change in service delivery, legislative reform, and community-controlled initiatives.
                </p>
                <p className="text-lg mt-4 text-brand-olive">
                  Known for her relational approach and strategic insight — she is deeply passionate about empowering businesses to lead with clarity, confidence and consciousness.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <footer className="bg-brand-olive text-brand-cream py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Renee Advisory</h3>
              <p className="mb-4">Transforming organizations through authentic cultural wisdom and strategic expertise.</p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="hover:underline">Policy Advice</Link></li>
                <li><Link to="/services" className="hover:underline">Strategic Advice</Link></li>
                <li><Link to="/services" className="hover:underline">Cultural Supervision</Link></li>
                <li><Link to="/services" className="hover:underline">Cultural Training</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/about" className="hover:underline">About</Link></li>
                <li><Link to="/media" className="hover:underline">Media</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="flex items-center mb-2">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span>info@reneeadvisory.com</span>
              </div>
              <Button variant="outline" className="mt-4">
                BOOK YOUR INCEPTION MEETING NOW
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Renee Advisory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
