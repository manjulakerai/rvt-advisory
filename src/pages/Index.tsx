
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, MessageSquare } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import EngagementModel from "@/components/EngagementModel";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">Renee Advisory</Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={navigationMenuTriggerStyle()}>
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {["Policy Advice", "Strategic Advice", "Cultural Supervision", "Cultural Training", "Recruitment Guidance", "Retention Strategies", "Business Consultation"].map((service) => (
                      <li key={service}>
                        <NavigationMenuLink asChild>
                          <Link to="/services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{service}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/media" className={navigationMenuTriggerStyle()}>
                  Media
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className={navigationMenuTriggerStyle()}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Section 1: Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Are You Struggling With These Challenges?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Navigating complex policy landscapes",
              "Creating meaningful community connections",
              "Developing authentic, impactful organizational strategies"
            ].map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Challenge {index + 1}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{problem}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-xl mb-4">You're not alone. Renee's advisory services are designed to solve your most challenging business transformation needs.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Solution */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How Renee Resolves These Problems</h2>
          <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
            Renee listens, provides feedback on your current position, and offers suggested achievements, guidance, structures, and policies for implementation.
          </p>
          
          <h3 className="text-2xl font-semibold text-center mb-8">Three Flexible Engagement Models</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <EngagementModel 
              title="Advisory Analysis" 
              description="Deep dive into your current organisational landscape. Walk the journey with you, providing a full internal analysis of where your business stands."
              icon="Search"
            />
            <EngagementModel 
              title="Collaborative Empowerment" 
              description="Walk alongside your team to build internal capabilities. Guide you from the outside, advising on implementation strategies for your policies."
              icon="Users"
            />
            <EngagementModel 
              title="Full Implementation" 
              description="We take the load, create solutions, and guide execution. Develop comprehensive strategies and show you how to deliver them effectively."
              icon="CheckCircle"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Unique Value Proposition */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Renee's Approach Unique</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-white text-primary rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Lived Experience</h3>
                  <p>Across corporate, government, and political sectors</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white text-primary rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Flexible Service Models</h3>
                  <p>Tailored to your exact needs</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white text-primary rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Deep Cultural Competency</h3>
                  <p>Beyond surface-level understanding</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white text-primary rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Team Empowerment</h3>
                  <p>Not just completing a project, but building lasting capability</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Renee?</h3>
              <p className="text-lg mb-4">
                "Unlike traditional consultants who provide reports and leave, I walk alongside you to ensure real transformation happens. My approach combines cultural wisdom with strategic expertise to create authentic, sustainable change."
              </p>
              <p className="italic">- Renee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Proof it Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">How Can You Be Sure It Works?</h2>
          <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
            My approach is built on proven strategies developed through UN-level policy work, personalised guidance, and a track record of transforming organisations across diverse sectors.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Proven Strategies" 
              description="Methodologies refined through work at the highest levels of government and international organizations"
            />
            <ServiceCard 
              title="Personalized Guidance" 
              description="Solutions tailored to your specific organizational context and challenges"
            />
            <ServiceCard 
              title="Diverse Experience" 
              description="Insights drawn from successfully transforming organizations across multiple sectors"
            />
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Actually Works</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-16 mb-10">
              <div className="absolute left-0 top-0 h-full w-[2px] bg-primary"></div>
              <div className="absolute left-[-10px] top-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">1</div>
              <h3 className="text-2xl font-semibold mb-2">Initial Consultation</h3>
              <p className="text-lg">We begin with a deep-dive discovery session to understand your organizational challenges, goals, and cultural context.</p>
            </div>
            
            <div className="relative pl-16 mb-10">
              <div className="absolute left-0 top-0 h-full w-[2px] bg-primary"></div>
              <div className="absolute left-[-10px] top-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">2</div>
              <h3 className="text-2xl font-semibold mb-2">Strategic Assessment</h3>
              <p className="text-lg">A comprehensive analysis of your current position, identifying gaps and opportunities for authentic transformation.</p>
            </div>
            
            <div className="relative pl-16 mb-10">
              <div className="absolute left-0 top-0 h-full w-[2px] bg-primary"></div>
              <div className="absolute left-[-10px] top-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">3</div>
              <h3 className="text-2xl font-semibold mb-2">Implementation Planning</h3>
              <p className="text-lg">We create a tailored roadmap with specific, achievable milestones that align with your organizational vision.</p>
            </div>
            
            <div className="relative pl-16 mb-10">
              <div className="absolute left-0 top-0 h-full w-[2px] bg-primary"></div>
              <div className="absolute left-[-10px] top-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">4</div>
              <h3 className="text-2xl font-semibold mb-2">Guided Execution</h3>
              <p className="text-lg">Depending on your chosen engagement model, we either guide your team or directly implement the strategic initiatives.</p>
            </div>
            
            <div className="relative pl-16">
              <div className="absolute left-[-10px] top-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">5</div>
              <h3 className="text-2xl font-semibold mb-2">Capability Transfer</h3>
              <p className="text-lg">Unlike traditional consultants, we ensure your team is empowered with the skills and knowledge to sustain the transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="Renee doesn't just consult - she transforms. Her guidance has been instrumental in reshaping our approach to community engagement."
              author="Small Business Owner"
              company="Regional Enterprise"
            />
            <TestimonialCard 
              quote="Unprecedented insights and actionable strategies. Working with Renee has given us a competitive edge in policy development."
              author="Corporate Executive"
              company="National Corporation"
            />
            <TestimonialCard 
              quote="A game-changer for our organisational development. Her cultural competency expertise has transformed how we operate."
              author="Community Leader"
              company="Non-Profit Organization"
            />
            <TestimonialCard 
              quote="Renee's unique perspective bridging government and Aboriginal wisdom has helped us create more effective and inclusive policies."
              author="Government Stakeholder"
              company="State Department"
            />
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Organisation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward authentic change and powerful organizational development.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-6">
              Book Your Inception Meeting Now 
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
                Book a Consultation
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

export default Index;
