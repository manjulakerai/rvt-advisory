
import React from 'react';
import { FileText, Mic, MessageSquare, Tv, Radio, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const mediaAppearances = [
  {
    type: "article",
    title: "Transforming Policy Through Indigenous Lens",
    publication: "Policy Today",
    date: "March 2025",
    description: "Renee discusses the importance of embedding Indigenous perspectives in policy development.",
    link: "#",
    icon: <FileText className="h-5 w-5 text-muted-foreground" />
  },
  {
    type: "podcast",
    title: "Cultural Intelligence in Leadership",
    publication: "Leadership Now",
    date: "February 2025",
    description: "An exploration of how cultural intelligence enhances leadership effectiveness.",
    link: "#",
    icon: <Mic className="h-5 w-5 text-muted-foreground" />
  },
  {
    type: "interview",
    title: "Bridging Communities and Government",
    publication: "Public Sector Weekly",
    date: "January 2025",
    description: "Insights on improving consultation processes between government and Aboriginal communities.",
    link: "#",
    icon: <MessageSquare className="h-5 w-5 text-muted-foreground" />
  },
  {
    type: "television",
    title: "The Future of Indigenous Affairs",
    publication: "National News Network",
    date: "December 2024",
    description: "Panel discussion on emerging trends and challenges in Indigenous affairs and policy.",
    link: "#",
    icon: <Tv className="h-5 w-5 text-muted-foreground" />
  },
  {
    type: "radio",
    title: "Cultural Training for Organizations",
    publication: "Business Radio",
    date: "November 2024",
    description: "How cultural training enhances organizational performance and community relationships.",
    link: "#",
    icon: <Radio className="h-5 w-5 text-muted-foreground" />
  },
  {
    type: "article",
    title: "Policy Innovation Through Collaboration",
    publication: "Governance Journal",
    date: "October 2024",
    description: "Case studies of successful collaborative approaches to policy development.",
    link: "#",
    icon: <FileText className="h-5 w-5 text-muted-foreground" />
  }
];

const MediaAppearances = () => {
  return (
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
  );
};

export default MediaAppearances;
