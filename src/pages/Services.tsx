import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Users, FileText, BookOpen, BarChart, Briefcase, Shield, Layout, MessageSquare } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import Header from "@/components/Header";

const services = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Cultural Supervision",
    description: "Support for professionals working with Aboriginal communities through reflective practice and cultural guidance.",
    benefits: [
      "Enhanced cultural safety in project delivery",
      "Improved confidence in cross-cultural environments",
      "Ongoing professional development",
      "Reduced risk of cultural misunderstandings"
    ]
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Policy Advice",
    description: "Expert guidance on policy development and implementation, with a focus on Indigenous perspectives and outcomes.",
    benefits: [
      "Culturally informed policy frameworks",
      "Strategic alignment with best practices",
      "Implementation roadmaps with clear milestones",
      "Measurable outcomes and evaluation methods"
    ]
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Strategic Planning",
    description: "Comprehensive strategic planning services that integrate cultural considerations and community engagement.",
    benefits: [
      "Clear vision and mission development",
      "Actionable strategic objectives",
      "Stakeholder engagement strategies",
      "Cultural integration throughout planning"
    ]
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Evaluation & Impact Assessment",
    description: "Rigorous evaluation frameworks that measure both quantitative and qualitative impact of your initiatives.",
    benefits: [
      "Culturally appropriate evaluation methodologies",
      "Data collection and analysis expertise",
      "Impact storytelling and reporting",
      "Continuous improvement recommendations"
    ]
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Business Development",
    description: "Supporting Indigenous businesses and those seeking to work more effectively with Indigenous communities.",
    benefits: [
      "Access to networks and partnerships",
      "Business model refinement",
      "Market positioning strategy",
      "Sustainable growth planning"
    ]
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Governance Advisory",
    description: "Guidance on governance structures that honor cultural protocols while meeting compliance requirements.",
    benefits: [
      "Cultural governance integration",
      "Board development and training",
      "Policy and procedure development",
      "Compliance and risk management"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">CENTRING CONSCIOUS CHANGE</h1>
          <p className="text-xl max-w-3xl">
            Partnering with businesses to elevate their internal capabilities and external offerings, RVT Advisory is passionate about creating lasting change and centring human agency.
          </p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Cultural Capability Training</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                Transform your business and let our expert facilitators take your team through a transformational, immersive and interactive cultural experience.
              </p>
              <p className="text-lg mb-6">
                Our Cultural Capability Training programs are based on Aboriginal principles and are tailored to suit your business's needs. We deliver interactive and human-centred cultural experiences for all participants by creating safe, inclusive and respectful spaces.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Training Formats</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>90-minute (face-to-face or virtual)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>2-hour (face-to-face)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Half-day (face-to-face)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Full-day (face-to-face)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>60-minute Yarning Circle (face-to-face or virtual)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Course Components</h3>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Aboriginal & Torres Strait Islander Cultures</h4>
                    <p className="text-sm text-gray-600">Histories, Languages, Protocols and Experiences</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Understanding Australia's History</h4>
                    <p className="text-sm text-gray-600">Impact analysis and contemporary perspectives</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Unpacking Myths & Terminology</h4>
                    <p className="text-sm text-gray-600">Addressing stereotypes and appropriate language</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Reframing Reconciliation</h4>
                    <p className="text-sm text-gray-600">Contemporary approaches and action plans</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">How We Help You Succeed</h2>
              <p className="text-lg mb-6">
                Our advisory services are designed to address the complex challenges faced by organizations seeking to create meaningful change and authentic engagement with Aboriginal communities.
              </p>
              <ul className="space-y-4">
                {["Develop long-term and short-term vision planning", "Create connections and assist with community engagement strategies", "Develop internal policies aligned with cultural values", "Help you understand policy interfaces with government sectors", "Provide cultural competency training and development"].map((item, index) => <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>)}
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
              <p className="mb-4">
                We focus on empowering clients rather than creating dependency. Our goal is to build your internal capabilities so you can continue the work after our engagement ends.
              </p>
              <p className="mb-4">
                Every organization is unique, which is why we offer three flexible service models to match your exact requirements:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Advisory Analysis:</strong> A deep dive into your organizational landscape</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Collaborative Empowerment:</strong> Building internal capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span><strong>Full Implementation:</strong> End-to-end solution development and execution</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="w-full">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center">Our Advisory Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="font-semibold mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span>{benefit}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard quote="Renee's policy advice transformed our approach to community engagement. Her guidance provided us with a clear framework that respected cultural values while achieving our strategic objectives." author="Government Department Director" company="State Government Agency" />
            <TestimonialCard quote="The cultural training Renee provided has fundamentally changed how our organization operates. We now have the tools and understanding to build authentic relationships with Aboriginal communities." author="CEO" company="National Non-Profit" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Transformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward authentic organisational change and powerful development.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-white text-black hover:bg-gray-100 font-bold text-lg px-8 py-6">
              BOOK YOUR INCEPTION MEETING NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/98aa60e8-6822-4380-82b8-8308e111ac9e.png" 
                  alt="RVT Advisory" 
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mb-4">Transforming organizations through authentic cultural wisdom and strategic expertise.</p>
              <div className="flex space-x-4">
                
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
              <Button variant="outline" className="mt-4 text-black font-bold">
                BOOK YOUR INCEPTION MEETING NOW
              </Button>
            </div>
          </div>
          <div className="border-t border-primary/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Renee Advisory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
