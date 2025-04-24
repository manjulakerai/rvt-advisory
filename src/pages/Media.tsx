import React from 'react';
import { Link } from "react-router-dom";
import { MessageSquare, Video, Mic, BookOpen, Award, FileText, Radio, Tv, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const featuredMedia = [
  {
    title: "Indigenous Policy Development in Modern Australia",
    type: "Video Interview",
    description: "Renee discusses the challenges and opportunities in developing effective Indigenous policy frameworks in contemporary Australia.",
    link: "#",
    icon: <Video className="h-12 w-12 text-primary/60" />
  },
  {
    title: "Cultural Leadership in Corporate Settings",
    type: "Podcast",
    description: "An in-depth conversation about integrating cultural awareness and Indigenous perspectives into corporate leadership strategies.",
    link: "#",
    icon: <Mic className="h-12 w-12 text-primary/60" />
  }
];

const speakingTopics = [
  "Aboriginal Affairs Policy",
  "Organisational Transformation",
  "Cultural Leadership",
  "Indigenous Engagement",
  "Policy Development",
  "Strategic Advice",
  "Cultural Competency",
  "Inclusive Governance"
];

const mediaAppearances = [
  {
    title: "Bridging Cultural Divides in Modern Policy",
    publication: "The Guardian Australia",
    date: "March 2025",
    type: "article",
    description: "An opinion piece on the importance of Indigenous perspectives in national policy development.",
    link: "#",
    icon: <FileText className="h-5 w-5 text-primary" />
  },
  {
    title: "Transformational Leadership in Public Service",
    publication: "ABC Radio National",
    date: "February 2025",
    type: "radio",
    description: "Renee shares insights on transforming organisations through culturally informed leadership.",
    link: "#",
    icon: <Radio className="h-5 w-5 text-primary" />
  },
  {
    title: "Indigenous Voices in Modern Governance",
    publication: "SBS Insight",
    date: "January 2025",
    type: "television",
    description: "A panel discussion on incorporating Indigenous knowledge systems into contemporary governance structures.",
    link: "#",
    icon: <Tv className="h-5 w-5 text-primary" />
  },
  {
    title: "Beyond Reconciliation: Practical Steps Forward",
    publication: "The Australian Financial Review",
    date: "December 2024",
    type: "article",
    description: "Exploring tangible strategies for organisations committed to Indigenous advancement.",
    link: "#",
    icon: <FileText className="h-5 w-5 text-primary" />
  },
  {
    title: "Cultural Supervision in Corporate Australia",
    publication: "Business Leadership Podcast",
    date: "November 2024",
    type: "podcast",
    description: "A discussion on the importance of cultural supervision in maintaining authentic Indigenous engagement.",
    link: "#",
    icon: <Mic className="h-5 w-5 text-primary" />
  },
  {
    title: "Policy Reform for Indigenous Communities",
    publication: "Policy Matters Conference",
    date: "October 2024",
    type: "presentation",
    description: "Keynote presentation on developing policy that resonates with Indigenous communities.",
    link: "#",
    icon: <Award className="h-5 w-5 text-primary" />
  }
];

const Media = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Media & Speaking</h1>
          <p className="text-xl max-w-3xl">
            Explore Renee's media appearances, speaking engagements, and thought leadership on Aboriginal affairs, policy development, and organizational transformation.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Appearances</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredMedia.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.icon}
                    <span className="ml-2">
                      [PLACEHOLDER: Add actual image/video thumbnail]
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{item.description}</p>
                  <a 
                    href={item.link} 
                    className="text-primary hover:underline flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch now <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Speaking Engagements</h2>
              <p className="text-lg mb-6">
                Renee is a powerful and engaging speaker who brings a unique perspective to discussions on policy, leadership, and cultural transformation.
              </p>
              <p className="text-lg mb-6">
                [PLACEHOLDER: Add more details about Renee's speaking style, approach, and impact]
              </p>
              <h3 className="text-xl font-semibold mb-4">Speaking Topics</h3>
              <div className="flex flex-wrap gap-2">
                {speakingTopics.map((topic, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-200 aspect-[4/3] rounded-lg overflow-hidden">
              <div className="h-full w-full flex items-center justify-center">
                [PLACEHOLDER: Professional image of Renee speaking]
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Media Appearances</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaAppearances.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-all h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <span className="text-sm font-medium text-muted-foreground capitalize">
                      {item.type}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>
                    {item.publication} • {item.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">{item.description}</p>
                  <a 
                    href={item.link} 
                    className="text-primary hover:underline flex items-center gap-1 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Press Kit</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            For media inquiries, speaking engagement requests, or to download Renee's press kit with bio and high-resolution images, please contact us.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
            >
              Download Press Kit
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 bg-white text-gray-700 font-bold hover:bg-gray-50 transition-colors"
            >
              Media Inquiries
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/85767e98-362e-47f1-b1c9-932b6eb1dc51.png" 
                  alt="RVT Advisory" 
                  className="h-12 w-auto"
                />
              </Link>
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

export default Media;
