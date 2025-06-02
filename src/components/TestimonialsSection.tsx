
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jennifer L.",
      location: "Groveland, FL",
      quote: "Carson's Soft Wash did an amazing job on our home. The roof looks brand new and the driveway is spotless. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael R.",
      location: "Clermont, FL",
      quote: "Professional, courteous, and very thorough. My house hasn't looked this clean since the day we moved in. Great service!",
      rating: 5
    },
    {
      name: "Sarah T.",
      location: "Minneola, FL",
      quote: "We use Carson's for our business storefront cleaning quarterly. Always consistent results and fair pricing.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="What Our Customers Say" 
          subtitle="Don't just take our word for it. Here's what our satisfied customers have to say about our services." 
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              name={testimonial.name} 
              location={testimonial.location} 
              quote={testimonial.quote} 
              rating={testimonial.rating} 
            />
          ))}
        </div>
        
        {/* Google Reviews CTA */}
        <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
            ))}
          </div>
          <h3 className="text-xl font-bold text-secondary mb-2">Rated 5.0 Stars</h3>
          <p className="text-gray-600 mb-4">Based on 50+ Google Reviews</p>
          <Button asChild variant="outline">
            <a href="https://www.google.com/search?sca_esv=ec8f78d2e7286749&rlz=1C1CHBF_enUS923US923&sxsrf=AE3TifP9OLuk0KQGhTnfgbgaP0M-0vzCaw:1748826577162&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1svy5C-Eqmqh6YREeXU3hyHxmUlOK02cJMBiERVmsNlqeXFmf8CVIXPXRBx3gbNixsMUf67NbzcAiCHpMKaf94ki7401h0nCLupelTukAdvxbnavV4diXBP5TEqGnWOU_19ZgE%3D&q=Carson%27s+Soft+Wash+Services+Inc.+Reviews&sa=X&ved=2ahUKEwiKgp_XxtGNAxUxRjABHXQgLWQQ0bkNegQIIRAD&biw=1536&bih=695&dpr=1.25" target="_blank" rel="noopener noreferrer">
              Read All Reviews
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
