
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Video, MicrophoneIcon, BookOpen, Award } from "lucide-react";

const Media = () => {
  const featuredMedia = [
    {
      title: "TEDx Talk: [PLACEHOLDER: Title]",
      type: "video",
      description: "[PLACEHOLDER: Brief description of the TEDx talk]",
      link: "#",
      icon: <Video className="h-6 w-6 text-primary" />
    },
    {
      title: "United Nations Speaking Engagement",
      type: "speaking",
      description: "[PLACEHOLDER: Brief description of the UN speaking engagement]",
      link: "#",
      icon: <MicrophoneIcon className="h-6 w-6 text-primary" />
    }
  ];

  const mediaAppearances = [
    {
      title: "[PLACEHOLDER: News Article Title]",
      publication: "[Publication Name]",
      date: "2023",
      type: "article",
      description: "[PLACEHOLDER: Brief description of the article content]",
      link: "#",
      icon: <BookOpen className="h-5 w-5 text-primary" />
    },
    {
      title: "[PLACEHOLDER: Podcast Episode]",
      publication: "[Podcast Name]",
      date: "2023",
      type: "podcast",
      description: "[PLACEHOLDER: Brief description of the podcast episode]",
      link: "#",
      icon: <MicrophoneIcon className="h-5 w-5 text-primary" />
    },
    {
      title: "[PLACEHOLDER: Interview Title]",
      publication: "[Media Outlet]",
      date: "2022",
      type: "interview",
      description: "[PLACEHOLDER: Brief description of the interview]",
      link: "#",
      icon: <Video className="h-5 w-5 text-primary" />
    },
    {
      title: "[PLACEHOLDER: Award or Recognition]",
      publication: "[Organization]",
      date: "2022",
      type: "award",
      description: "[PLACEHOLDER: Brief description of the award/recognition]",
      link: "#",
      icon: <Award className="h-5 w-5 text-primary" />
    }
  ];

  // Categories for speaking topics
  const speakingTopics = [
    "Aboriginal Affairs and Policy",
    "Cultural Competency",
    "Strategic Leadership",
    "Community Engagement",
    "Organizational Transformation",
    "Diversity and Inclusion"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Media & Speaking</h1>
          <p className="text-xl max-w-3xl">
            Explore Renee's media appearances, speaking engagements, and thought leadership on Aboriginal affairs, policy development, and organizational transformation.
          </p>
        </div>
      </div>

      {/* Featured media section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Appearances</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredMedia.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video bg-gray-200 relative">
                  {/* Placeholder for video/image */}
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

      {/* Speaker section */}
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
              {/* Placeholder for speaking image */}
              <div className="h-full w-full flex items-center justify-center">
                [PLACEHOLDER: Professional image of Renee speaking]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media appearances section */}
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

      {/* Press kit section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Press Kit</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            For media inquiries, speaking engagement requests, or to download Renee's press kit with bio and high-resolution images, please contact us.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Download Press Kit
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Media Inquiries
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
