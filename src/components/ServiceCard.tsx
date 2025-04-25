
import React from "react";
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
    <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 group relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="pb-2 relative">
        {icon && (
          <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300 text-primary">
            {icon}
          </div>
        )}
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <p className={descriptionClassName}>{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
