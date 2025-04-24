
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-md transition-all bg-brand-cream border-brand-gold">
      <CardHeader className="pb-2">
        {icon && <div className="mb-2 text-brand-purple">{icon}</div>}
        <CardTitle className="text-xl text-brand-brown">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-brand-brown/80">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
