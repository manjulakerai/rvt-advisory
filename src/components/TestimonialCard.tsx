
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({ quote, author, company, image }: TestimonialCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-brand-cream border-brand-gold">
      <CardContent className="p-6">
        <Quote className="h-10 w-10 text-brand-purple mb-4" />
        <p className="text-lg mb-6 italic text-brand-brown">{quote}</p>
        <div className="flex items-center">
          {image && (
            <div className="h-12 w-12 rounded-full bg-brand-gold mr-4 overflow-hidden">
              <img src={image} alt={author} className="h-full w-full object-cover" />
            </div>
          )}
          <div>
            <p className="font-semibold text-brand-brown">{author}</p>
            <p className="text-sm text-brand-brown/70">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
