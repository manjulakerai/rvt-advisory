import React from 'react';
import { Video, Mic, FileText, Radio, Tv, ExternalLink, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";

const featuredMedia = [
  {
    title: "Breaking Down Cultural Barriers: A Personal Journey",
    type: "Video Keynote",
    description: "A powerful narrative exploring identity, systemic racism, and intergenerational trauma through the lens of an Aboriginal woman's experience. The speech addresses crucial themes of cultural belonging, unconscious bias, and the path toward meaningful societal change through personal connection and understanding.",
    youtubeEmbed: "https://www.youtube.com/embed/cEtyttLkq6k?si=jsjDPNqFtVXIAHS0",
    icon: <Video className="h-8 w-8 text-primary" />
  },
  {
    title: "Youth Advisory Committee Addresses EMRIP",
    type: "Featured Event",
    description: "A groundbreaking moment as our Youth Advisory Committee, led by Renee Thomson, presents to EMRIP on critical issues facing Aboriginal and Torres Strait Islander women in leadership positions, marking a significant step forward in advocating for indigenous women's empowerment.",
    image: "/lovable-uploads/f62355d4-4e5f-433e-9a12-837412f4110d.png",
    link: "https://www.facebook.com/share/v/1XTCdu57yP/?mibextid=rS40aB7S9Ucbxw6v",
    icon: <MessageSquare className="h-8 w-8 text-primary" />
  }
];

const speakingTopics = [
  "Indigenous Policy Development",
  "Cultural Safety",
  "Organizational Transformation",
  "Leadership",
  "Strategic Advice",
  "Community Engagement",
  "Government Relations",
  "Cultural Intelligence"
];

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
                <div className="aspect-video bg-gray-100 relative">
                  {item.youtubeEmbed ? (
                    <iframe
                      className="w-full h-full"
                      src={item.youtubeEmbed}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {item.icon}
                      <span className="ml-2">
                        [PLACEHOLDER: Add actual image/video thumbnail]
                      </span>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{item.description}</p>
                  {!item.youtubeEmbed && (
                    <a 
                      href={item.link} 
                      className="text-primary hover:underline flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch now <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
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
              <img 
                src="/lovable-uploads/a5169457-4e80-4cac-b889-f90da91cdd3f.png" 
                alt="Renee Thomson speaking at an event" 
                className="w-full h-full object-cover"
              />
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

      <Footer />
    </div>
  );
};

export default Media;
