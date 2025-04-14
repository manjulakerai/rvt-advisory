
import { 
  Search, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  FileText, 
  Settings
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface EngagementModelProps {
  title: string;
  description: string;
  icon: string;
}

const EngagementModel = ({ title, description, icon }: EngagementModelProps) => {
  // Map of icon names to components
  const iconMap: Record<string, React.ReactNode> = {
    Search: <Search className="h-10 w-10 text-primary" />,
    Users: <Users className="h-10 w-10 text-primary" />,
    CheckCircle: <CheckCircle className="h-10 w-10 text-primary" />,
    Clock: <Clock className="h-10 w-10 text-primary" />,
    FileText: <FileText className="h-10 w-10 text-primary" />,
    Settings: <Settings className="h-10 w-10 text-primary" />
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary">
      <CardHeader>
        <div className="mb-4">
          {iconMap[icon] || <CheckCircle className="h-10 w-10 text-primary" />}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link to="/services" className="w-full">
          <Button variant="outline" className="w-full group">
            <span className="mr-auto">Learn More</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EngagementModel;
