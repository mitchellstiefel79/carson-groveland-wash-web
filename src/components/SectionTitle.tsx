
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-10", 
      centered ? "text-center" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-secondary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
      <div className={cn(
        "h-1 w-24 bg-primary mt-4", 
        centered ? "mx-auto" : ""
      )}></div>
    </div>
  );
};

export default SectionTitle;
