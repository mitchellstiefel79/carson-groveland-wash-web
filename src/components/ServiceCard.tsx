
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  imageSrc?: string;
  className?: string;
  to: string;
}

import { ReactNode } from "react";

const ServiceCard = ({
  title,
  description,
  icon,
  imageSrc,
  className,
  to,
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg border bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl",
      className
    )}>
      {imageSrc && (
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="relative z-10">
        {icon && <div className="mb-4 text-primary">{icon}</div>}
        <h3 className="mb-3 text-xl font-bold text-secondary">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <Button asChild className="group" variant="outline">
          <Link to={to} className="flex items-center">
            Learn More 
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
