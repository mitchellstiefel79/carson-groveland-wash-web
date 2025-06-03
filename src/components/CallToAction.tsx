
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
  variant?: "primary" | "secondary";
}

const CallToAction = ({
  title,
  description,
  buttonText,
  buttonLink,
  className,
  variant = "primary",
}: CallToActionProps) => {
  return (
    <div className={cn(
      "py-16 px-4",
      variant === "primary" ? "bg-primary text-white" : "bg-gray-100 text-secondary",
      className
    )}>
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className={cn(
          "mb-8 text-lg mx-auto max-w-2xl",
          variant === "primary" ? "text-gray-100" : "text-gray-600"
        )}>{description}</p>
        <Button 
          asChild
          size="lg"
          className={variant === "primary" ? "bg-white text-primary hover:bg-gray-100" : "bg-primary hover:bg-primary/90"}
        >
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
