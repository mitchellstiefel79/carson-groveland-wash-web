
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location?: string;
  quote: string;
  rating: number;
  className?: string;
}

const TestimonialCard = ({
  name,
  location,
  quote,
  rating,
  className,
}: TestimonialCardProps) => {
  const stars = Array(5).fill(0).map((_, i) => (
    <Star
      key={i}
      size={16}
      className={cn(
        "fill-current",
        i < rating ? "text-yellow-500" : "text-gray-300"
      )}
    />
  ));

  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300",
      className
    )}>
      <div className="flex mb-4">{stars}</div>
      <blockquote className="text-gray-600 italic mb-4">"{quote}"</blockquote>
      <div className="font-semibold text-secondary">{name}</div>
      {location && <div className="text-sm text-gray-500">{location}</div>}
    </div>
  );
};

export default TestimonialCard;
