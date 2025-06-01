
import { Check } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      title: "Licensed & Insured",
      description: "Fully licensed and insured for residential and commercial pressure washing services."
    },
    {
      title: "Experienced Professionals",
      description: "Our trained technicians have years of experience and use industry-leading techniques."
    },
    {
      title: "Satisfaction Guaranteed",
      description: "We stand behind our work with a 100% satisfaction guarantee on all services."
    },
    {
      title: "Eco-Friendly Solutions",
      description: "We use environmentally responsible cleaning solutions that are effective yet safe."
    },
    {
      title: "Competitive Pricing",
      description: "Quality service at fair prices with transparent, upfront quotes."
    },
    {
      title: "Prompt & Reliable",
      description: "We arrive on time and complete projects efficiently without sacrificing quality."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Why Choose Carson's Soft Wash?" 
          subtitle="We're committed to delivering exceptional cleaning results with professional service at competitive prices." 
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
