import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Header section with image */}
      <div className="relative h-[50vh] flex items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        {/* Background image overlay - replace with actual landscape shots of her country */}
        <div className="absolute inset-0 bg-black/50 z-0">
          <div className="absolute inset-0 bg-cover bg-center" 
               style={{ backgroundImage: "url('/placeholder.svg')", opacity: 0.5 }}>
            {/* Note: Replace with landscape image from Renee's country */}
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-5xl font-extrabold mb-6">About Renee</h1>
          <p className="text-xl max-w-2xl">
            A versatile professional with an extensive background in corporate, government, and political offices, bringing a unique cultural perspective to complex business challenges.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Profile photo column */}
          <div>
            <div className="sticky top-8">
              <div className="rounded-lg overflow-hidden mb-6 aspect-[3/4] bg-gray-200">
                {/* Replace with professional photo of Renee */}
                <img src="/placeholder.svg" alt="Renee" className="w-full h-full object-cover" />
              </div>
              
              <div className="space-y-4">
                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-2">Featured Speaking</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <a href="#ted" className="text-primary hover:underline">TED Talk</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <a href="#un" className="text-primary hover:underline">United Nations</a>
                    </li>
                  </ul>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-2">Connect</h3>
                  <Link to="/contact" className="text-primary hover:underline">Book a consultation</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content column */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-6">Personal Story & Journey</h2>
              <div className="prose max-w-none">
                <p className="text-lg">
                  [PLACEHOLDER: Add Renee's personal story here, emphasizing her cultural connections and journey. Include formative experiences that have shaped her approach to advisory work.]
                </p>
                <p className="text-lg mt-4">
                  [PLACEHOLDER: Continue with details about her professional evolution, highlighting pivotal moments and the development of her unique perspective that combines cultural wisdom with strategic expertise.]
                </p>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6">Professional Background</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Government Experience</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Advised premiers and ministers in political offices</li>
                      <li>Developed significant policies in New South Wales</li>
                      <li>Worked on major policy execution across various spaces</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Corporate Advisory</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Consulted with national and multinational organizations</li>
                      <li>Developed strategic frameworks for diverse business sectors</li>
                      <li>Created cultural competency training programs</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6">Cultural Expertise</h2>
              <div className="prose max-w-none">
                <p className="text-lg">
                  [PLACEHOLDER: Details about Renee's cultural background and how it informs her advisory approach. Explain how her cultural supervision services work and benefit clients.]
                </p>
                
                <div className="my-8 bg-gray-100 p-6 rounded-lg">
                  <blockquote className="text-xl italic">
                    "My work is grounded in creating opportunities for future generations and shifting societal dynamics by integrating Aboriginal cultural concepts into business strategies."
                  </blockquote>
                </div>
                
                <p className="text-lg">
                  [PLACEHOLDER: Expand on how Renee's cultural expertise provides unique value in business contexts, especially for organizations seeking to improve their engagement with Aboriginal communities.]
                </p>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6">Speaking & Media</h2>
              <div className="prose max-w-none">
                <p className="text-lg">
                  As a sought-after speaker, Renee has presented at prestigious events including:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 my-6">
                  <div className="bg-gray-100 p-6 rounded-lg" id="ted">
                    <h3 className="text-xl font-semibold mb-2">TEDx Talk</h3>
                    <p>[PLACEHOLDER: Brief description of TEDx talk topic and impact]</p>
                    <a href="#" className="text-primary hover:underline flex items-center gap-1 mt-2">
                      Watch the talk <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  
                  <div className="bg-gray-100 p-6 rounded-lg" id="un">
                    <h3 className="text-xl font-semibold mb-2">United Nations</h3>
                    <p>[PLACEHOLDER: Brief description of UN speaking engagement]</p>
                    <a href="#" className="text-primary hover:underline flex items-center gap-1 mt-2">
                      Learn more <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <p className="text-lg">
                  [PLACEHOLDER: Information about other media appearances, publications, or interviews]
                </p>
                
                <div className="mt-6">
                  <Link to="/media" className="text-primary hover:underline flex items-center gap-1">
                    View all media appearances <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
