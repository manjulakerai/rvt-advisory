
import React from 'react';
import { CheckCircle, Search, Users } from 'lucide-react';

const iconMap = {
  Search: Search,
  Users: Users,
  CheckCircle: CheckCircle
};

interface EngagementModelProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

const EngagementModel: React.FC<EngagementModelProps> = ({ title, description, icon }) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all group">
      <div className="mb-4 text-primary">
        <IconComponent className="h-10 w-10" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700 text-opacity-90">{description}</p>
    </div>
  );
};

export default EngagementModel;
