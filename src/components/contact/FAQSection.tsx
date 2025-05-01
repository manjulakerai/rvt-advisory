
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border">
              <AccordionTrigger className="px-6 py-4 text-xl font-medium hover:no-underline">
                How do your advisory services work?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-base">
                <p className="text-muted-foreground">
                  Our advisory services operate through three flexible service models to meet your specific needs:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
                  <li><strong>Short-term consulting:</strong> Targeted engagements to address specific challenges or projects, typically lasting 1-3 months.</li>
                  <li><strong>Embedded advisory:</strong> We become an extension of your team, working alongside your staff on a part-time basis (1-3 days per week) for periods of 3-12 months.</li>
                  <li><strong>Strategic partnership:</strong> Long-term relationships where we provide ongoing strategic guidance and implementation support.</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  Each engagement begins with a discovery meeting to understand your needs, followed by a tailored proposal outlining objectives, approach, timeline, and investment. We emphasize collaborative solutions and knowledge transfer to build your team's capabilities.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white rounded-lg border">
              <AccordionTrigger className="px-6 py-4 text-xl font-medium hover:no-underline">
                What types of organisations do you work with?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-base">
                <p className="text-muted-foreground">
                  We work with a diverse range of organisations across multiple sectors including:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
                  <li><strong>Government agencies:</strong> Federal, state, and local government departments seeking to improve their policy development, program delivery, and community engagement.</li>
                  <li><strong>Corporate clients:</strong> From ASX-listed companies to mid-sized businesses looking to enhance their strategic direction, operational efficiency, and stakeholder relationships.</li>
                  <li><strong>Small businesses:</strong> Businesses seeking practical guidance on growth strategies, market positioning, and operational improvements.</li>
                  <li><strong>Aboriginal businesses and organisations:</strong> Indigenous-owned enterprises and community organisations requiring culturally appropriate advisory services.</li>
                  <li><strong>Not-for-profits:</strong> Community and social sector organisations focused on maximising their impact and improving governance.</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  Regardless of size or sector, we look for clients who are committed to genuine change and willing to actively participate in the advisory relationship.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-white rounded-lg border">
              <AccordionTrigger className="px-6 py-4 text-xl font-medium hover:no-underline">
                How long does a typical engagement last?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-base">
                <p className="text-muted-foreground">
                  Engagement duration varies based on the complexity of your needs and the service model selected:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
                  <li><strong>Short-term projects:</strong> Typically 4-12 weeks for specific challenges like strategy development, process improvement, or cultural reviews.</li>
                  <li><strong>Medium-term engagements:</strong> 3-6 months for more substantial changes like organisational restructures, implementing new programs, or cultural transformation initiatives.</li>
                  <li><strong>Long-term partnerships:</strong> 6-12+ months for comprehensive transformation programs or ongoing strategic advisory support.</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  We design engagements with clear milestones and evaluation points, allowing us to adapt as needed and ensure we're delivering tangible value. Many clients choose to extend initial engagements as new opportunities for improvement are identified.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-white rounded-lg border">
              <AccordionTrigger className="px-6 py-4 text-xl font-medium hover:no-underline">
                What makes your approach unique?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-base">
                <p className="text-muted-foreground">
                  Our advisory approach is distinctive through a combination of:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
                  <li><strong>Cultural intelligence:</strong> Through lived experience and professional expertise, we bring unique insights into cross-cultural dynamics, particularly involving Aboriginal and Torres Strait Islander contexts.</li>
                  <li><strong>Cross-sector experience:</strong> Having worked across government, corporate, and community sectors, we bring diverse perspectives and can translate approaches between different organisational cultures.</li>
                  <li><strong>Practical implementation focus:</strong> We don't just deliver reports and recommendations; we work alongside you to implement solutions and build your team's capabilities.</li>
                  <li><strong>Relationship-based approach:</strong> We invest in understanding your organisation's unique context and building trust with your team.</li>
                  <li><strong>Empowerment mindset:</strong> Our goal is to leave your organisation stronger and more capable, not to create dependency on our services.</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  This combination allows us to offer advisory services that address both technical challenges and the human dimensions of organisational change.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="bg-white rounded-lg border">
              <AccordionTrigger className="px-6 py-4 text-xl font-medium hover:no-underline">
                What is your pricing structure?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-base">
                <p className="text-muted-foreground">
                  We offer flexible pricing options based on your needs and engagement model:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
                  <li><strong>Project-based fees:</strong> For clearly defined engagements with specific deliverables, we provide fixed-price proposals to give you budget certainty.</li>
                  <li><strong>Day rates:</strong> For embedded advisory or flexible engagements, we work on a day-rate basis with discounts for longer-term commitments.</li>
                  <li><strong>Retainer arrangements:</strong> For ongoing strategic advisory support, we offer monthly retainer options with agreed service levels.</li>
                </ul>
                <p className="mt-3 text-muted-foreground">
                  We tailor our approach to each client's budget constraints and can often phase work to spread investments over time. For specific pricing information, please contact us to discuss your needs and receive a customised proposal.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
