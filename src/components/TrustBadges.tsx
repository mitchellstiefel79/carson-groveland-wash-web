
import { Check, Shield, Award, Users } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your protection"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "3+ Years Experience",
      description: "Proven track record in Central Florida"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "100+ Happy Customers",
      description: "Trusted by homeowners and businesses"
    },
    {
      icon: <Check className="h-8 w-8 text-primary" />,
      title: "Satisfaction Guaranteed",
      description: "We stand behind our work 100%"
    }
  ];

  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                {badge.icon}
              </div>
              <h3 className="font-bold text-secondary text-sm sm:text-base mb-1">
                {badge.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
