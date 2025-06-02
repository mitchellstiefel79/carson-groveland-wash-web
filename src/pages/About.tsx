import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <img 
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
            alt="Pressure washing team" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Carson's Soft Wash</h1>
            <p className="text-xl">Providing Quality Pressure Washing, Soft Washing and Paver Sealing Services Since 2022</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Story" 
                subtitle="Founded in 2022, Carson had a dream to own his own pressure washing business. Through hard work, dedication, and a passion for transforming properties, Carson's Soft Wash has become a trusted name serving all of Central Florida."
              />
              <div className="space-y-4 text-gray-600">
                <p>
                  Carson's journey began in 2022 with a simple but powerful dream - to own his own pressure washing business. He poured all his efforts into learning the trade and investing in quality equipment, knowing that success would require dedication and hard work.
                </p>
                <p>
                  Through sweat and tears, Carson was able to graduate ahead of schedule from his training program. But what truly drove him wasn't just the technical skills - it was his genuine passion for being out in the field, speaking with people, and seeing the transformation of their properties firsthand.
                </p>
                <p>
                  Today, Carson's vision has grown into a full-service exterior cleaning company that serves both residential and commercial clients throughout Central Florida. We've built our reputation on the same values that started it all - hard work, quality results, and genuine care for our customers and their properties.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Pressure washing transformation" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Values" 
            subtitle="These core principles guide everything we do at Carson's Soft Wash."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Quality</h3>
              <p className="text-gray-600">
                We never cut corners. We use the best equipment, products, and techniques to deliver outstanding results every time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Integrity</h3>
              <p className="text-gray-600">
                We believe in honest pricing, transparent communication, and delivering on our promises consistently.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Reliability</h3>
              <p className="text-gray-600">
                We show up on time, communicate clearly, and complete projects as promised, respecting your time and property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Process" 
            subtitle="We follow a systematic approach to ensure quality results and a smooth experience for every client."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="relative">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                1
              </div>
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-secondary mb-2">Consultation</h3>
                <p className="text-gray-600">
                  We discuss your needs, inspect the areas to be cleaned, and provide a detailed quote.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                2
              </div>
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-secondary mb-2">Preparation</h3>
                <p className="text-gray-600">
                  We protect surrounding areas, plants, and fixtures before beginning any work.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                3
              </div>
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-secondary mb-2">Cleaning</h3>
                <p className="text-gray-600">
                  Using appropriate techniques, we thoroughly clean all surfaces to remove dirt and contaminants.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                4
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-secondary mb-2">Inspection</h3>
                <p className="text-gray-600">
                  We perform a final walkthrough to ensure everything meets our high standards of quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Ready to Experience the Carson's Difference?"
        description="Contact us today to schedule your free estimate and see how we can transform your property throughout Central Florida."
        buttonText="Contact Us"
        buttonLink="/contact"
        variant="primary"
      />
    </Layout>
  );
};

export default About;
