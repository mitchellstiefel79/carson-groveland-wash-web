
import { Check } from "lucide-react";
import { useEffect } from "react";

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    description: string;
    image: string;
    beforeAfterImages?: {
      before: string;
      after: string;
    };
    youtubeVideo?: string;
    tiktokEmbed?: string;
    features: string[];
  };
  index: number;
}

const ServiceDetail = ({ service, index }: ServiceDetailProps) => {
  useEffect(() => {
    if (service.tiktokEmbed) {
      // Load TikTok embed script
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script if component unmounts
        const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [service.tiktokEmbed]);

  return (
    <div 
      id={service.id}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        index % 2 === 1 ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
        <h2 className="text-3xl font-bold text-secondary mb-4">{service.title}</h2>
        <p className="text-gray-600 mb-6">{service.description}</p>
        
        <ul className="space-y-3">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        {service.tiktokEmbed ? (
          <div className="flex justify-center">
            <div dangerouslySetInnerHTML={{ __html: service.tiktokEmbed }} />
          </div>
        ) : service.youtubeVideo ? (
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${service.youtubeVideo}`}
              title={`${service.title} Video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        ) : service.beforeAfterImages ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src={service.beforeAfterImages.before} 
                  alt="Before pressure washing" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  BEFORE
                </div>
              </div>
              <div className="relative">
                <img 
                  src={service.beforeAfterImages.after} 
                  alt="After pressure washing" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  AFTER
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 font-medium">
              {service.id === "roof" ? "Roof Cleaning Results" : "Fence Cleaning Results"}
            </p>
          </div>
        ) : (
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-auto"
          />
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
