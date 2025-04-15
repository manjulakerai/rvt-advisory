import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Users, FileText, BookOpen, BarChart, Briefcase, Shield, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import TestimonialCard from "@/components/TestimonialCard";

const Services = () => {
  const services = [
    {
      title: "Policy Advice",
      description: "Strategic guidance on policy development, implementation, and evaluation for government agencies and organizations.",
      icon: <FileText className="h-6 w-6 text-primary" />,
      benefits: [
        "Navigate complex regulatory environments",
        "Align policies with organizational goals",
        "Implement sustainable policy frameworks"
      ]
    },
    {
      title: "Strategic Advice",
      description: "Comprehensive strategic planning and advisory services to help organizations achieve their long-term objectives.",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      benefits: [
        "Develop long-term and short-term vision planning",
        "Create actionable strategic roadmaps",
        "Align strategies with cultural values"
      ]
    },
    {
      title: "Cultural Supervision",
      description: "Expert guidance on cultural competency and integration of Aboriginal perspectives into organizational practices.",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      benefits: [
        "Enhance cultural awareness and sensitivity",
        "Develop culturally appropriate strategies",
        "Improve engagement with Aboriginal communities"
      ]
    },
    {
      title: "Cultural Training",
      description: "Customized training programs to build cultural competency and understanding within organizations.",
      icon: <Users className="h-6 w-6 text-primary" />,
      benefits: [
        "Build staff cultural competency",
        "Develop inclusive workplace practices",
        "Enhance community engagement capabilities"
      ]
    },
    {
      title: "Recruitment Guidance",
      description: "Strategic advice on recruiting and retaining Aboriginal employees and creating inclusive workplaces.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      benefits: [
        "Attract diverse talent",
        "Develop culturally appropriate recruitment processes",
        "Create inclusive onboarding experiences"
      ]
    },
    {
      title: "Retention Strategies",
      description: "Specialized strategies to support the long-term retention and development of Aboriginal staff.",
      icon: <Shield className="h-6 w-6 text-primary" />,
      benefits: [
        "Reduce turnover of Aboriginal employees",
        "Create culturally safe work environments",
        "Develop tailored professional development paths"
      ]
    },
    {
      title: "Business Consultation",
      description: "Comprehensive business advisory services with a focus on cultural integration and authentic transformation.",
      icon: <Layout className="h-6 w-6 text-primary" />,
      benefits: [
        "Align business practices with cultural values",
        "Develop authentic community engagement strategies",
        "Create sustainable business models"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive advisory services combining strategic expertise with cultural wisdom to transform organizations and create authentic change.
          </p>
        </div>
      </div>

      {/* Services overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">How We Help You Succeed</h2>
              <p className="text-lg mb-6">
                Our advisory services are designed to address the complex challenges faced by organizations seeking to create meaningful change and authentic engagement with Aboriginal communities.
              </p>
              <ul className="space-y-4">
                {[
                  "Develop long-term and short-term vision planning",
                  "Create connections and assist with community engagement strategies",
                  "Develop internal policies aligned with cultural values",
                  "Help you understand policy interfaces with government sectors",
                  "Provide cultural competency training and development"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
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

          {/* Individual services */}
          <h2 className="text-3xl font-bold mb-12 text-center">Our Advisory Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="font-semibold mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="Renee's policy advice transformed our approach to community engagement. Her guidance provided us with a clear framework that respected cultural values while achieving our strategic objectives."
              author="Government Department Director"
              company="State Government Agency"
            />
            <TestimonialCard 
              quote="The cultural training Renee provided has fundamentally changed how our organization operates. We now have the tools and understanding to build authentic relationships with Aboriginal communities."
              author="CEO"
              company="National Non-Profit"
            />
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Transformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward authentic organisational change and powerful development.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-6">
              BOOK YOUR INCEPTION MEETING NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
