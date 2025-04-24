
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  descriptionClassName?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  descriptionClassName = "text-muted-foreground" 
}: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-md transition-all">
      <CardHeader className="pb-2">
        {icon && <div className="mb-2">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={descriptionClassName}>{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
