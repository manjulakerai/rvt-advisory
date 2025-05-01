
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">How do your advisory services work?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                [PLACEHOLDER: Add answer about how the advisory services work, focusing on the three service models and the process of engagement]
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">What types of organisations do you work with?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                [PLACEHOLDER: Add information about the range of clients including corporate clients, small businesses, government agencies, and Aboriginal businesses]
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">How long does a typical engagement last?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                [PLACEHOLDER: Add details about typical engagement timelines for different service models]
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">What makes your approach unique?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                [PLACEHOLDER: Highlight USPs including cultural background, lived experience, professional expertise across sectors, and focus on empowerment]
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
