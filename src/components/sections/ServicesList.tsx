
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, FileText, BookOpen, BarChart, Briefcase, Shield } from "lucide-react";

const services = [
  {
    id: 'cultural-supervision',
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Cultural Supervision",
    description: "Support for professionals working with Aboriginal communities through reflective practice and cultural guidance.",
    benefits: ["Enhanced cultural safety in project delivery", "Improved confidence in cross-cultural environments", "Ongoing professional development", "Reduced risk of cultural misunderstandings"]
  },
  {
    id: 'policy-advice',
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Policy Advice",
    description: "Expert guidance on policy development and implementation, with a focus on Indigenous perspectives and outcomes.",
    benefits: ["Culturally informed policy frameworks", "Strategic alignment with best practices", "Implementation roadmaps with clear milestones", "Measurable outcomes and evaluation methods"]
  },
  {
    id: 'strategic-planning',
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Strategic Planning",
    description: "Comprehensive strategic planning services that integrate cultural considerations and community engagement.",
    benefits: ["Clear vision and mission development", "Actionable strategic objectives", "Stakeholder engagement strategies", "Cultural integration throughout planning"]
  },
  {
    id: 'evaluation-impact',
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Evaluation & Impact Assessment",
    description: "Rigorous evaluation frameworks that measure both quantitative and qualitative impact of your initiatives.",
    benefits: ["Culturally appropriate evaluation methodologies", "Data collection and analysis expertise", "Impact storytelling and reporting", "Continuous improvement recommendations"]
  },
  {
    id: 'business-development',
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Business Development",
    description: "Supporting Indigenous businesses and those seeking to work more effectively with Indigenous communities.",
    benefits: ["Access to networks and partnerships", "Business model refinement", "Market positioning strategy", "Sustainable growth planning"]
  },
  {
    id: 'governance-advisory',
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Governance Advisory",
    description: "Guidance on governance structures that honor cultural protocols while meeting compliance requirements.",
    benefits: ["Cultural governance integration", "Board development and training", "Policy and procedure development", "Compliance and risk management"]
  }
];

const ServicesList = () => {
  return (
    <section className="py-16" id="our-advisory-services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Advisory Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="h-full flex flex-col hover:shadow-lg transition-all">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
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
  );
};

export default ServicesList;
