import React from 'react';
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CulturalTraining = () => {
  return (
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
                {[
                  '90-minute (face-to-face or virtual)',
                  '2-hour (face-to-face)',
                  'Half-day (face-to-face)',
                  'Full-day (face-to-face)',
                  '60-minute Yarning Circle (face-to-face or virtual)'
                ].map((format, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{format}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Course Components</h3>
            <div className="grid gap-4">
              {[
                {
                  title: 'Aboriginal & Torres Strait Islander Cultures',
                  description: 'Histories, Languages, Protocols and Experiences'
                },
                {
                  title: 'Understanding Australia\'s History',
                  description: 'Impact analysis and contemporary perspectives'
                },
                {
                  title: 'Unpacking Myths & Terminology',
                  description: 'Addressing stereotypes and appropriate language'
                },
                {
                  title: 'Reframing Reconciliation',
                  description: 'Contemporary approaches and action plans'
                }
              ].map((component, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">{component.title}</h4>
                    <p className="text-sm text-gray-600">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link to="/contact">
          <Button 
            size="lg" 
            className="font-bold bg-[#5F3873] text-white hover:bg-[#5F3873]/90 hover:text-white border-0"
          >
            BOOK NOW
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CulturalTraining;
