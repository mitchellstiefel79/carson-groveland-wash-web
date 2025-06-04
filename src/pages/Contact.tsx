
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
            alt="Contact us" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch for a free estimate or to learn more about our services throughout Central Florida</p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle 
                title="Get a Free Quote" 
                subtitle="Fill out the form below and we'll get back to you as soon as possible with a free estimate."
              />
              
              {/* Enhanced iframe container with better styling */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <iframe 
                  id="markate-widget-contact-iframe" 
                  src="https://www.markate.com/public/widget/contact?id=4c919067e16f1fca20aff8729b18916e:70367:78ba3f26&font-family=Inter&theme=minimal" 
                  width="100%" 
                  height="1800" 
                  scrolling="no" 
                  frameBorder={0}
                  allowTransparency={true}
                  style={{
                    border: 'none', 
                    overflow: 'hidden',
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                  title="Contact Form"
                />
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="lg:pl-10">
              <SectionTitle 
                title="Contact Information" 
                subtitle="Have questions? Contact us directly using the information below."
              />
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 mt-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:3524673964" className="hover:text-primary">352-467-3964</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:carsonssoftwash@gmail.com" className="hover:text-primary">carsonssoftwash@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-1">Service Area</h3>
                      <p className="text-gray-600">
                        Covering all of Central Florida<br />
                        Including Groveland, Clermont, Minneola, and surrounding areas
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 8:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold text-secondary mb-4">Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  We provide pressure washing, soft washing and paver sealing services throughout Central Florida, including:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-gray-600">
                  <li>• Groveland</li>
                  <li>• Clermont</li>
                  <li>• Minneola</li>
                  <li>• Mascotte</li>
                  <li>• Montverde</li>
                  <li>• Winter Garden</li>
                  <li>• Windermere</li>
                  <li>• Oakland</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section with Satellite View */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Service Area" 
            subtitle="Based in Central Florida, we serve residential and commercial clients throughout the region. View our coverage area in satellite view below."
            centered
          />
          
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-96 relative">
            {/* Service area overlay info */}
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
              <h3 className="font-bold text-secondary mb-2">Primary Service Areas</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span>Groveland (Main Hub)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                  <span>Extended Coverage</span>
                </div>
              </div>
            </div>
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112163.24333568184!2d-81.92491121793465!3d28.56561738435646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7854f95f2f0c9%3A0x913def6a954aac80!2sGroveland%2C%20FL!5e1!3m2!1sen!2sus!4v1617321994523!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Carson's Soft Wash service area map in satellite view"
            ></iframe>
          </div>
          
          {/* Service Area Details */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                <h3 className="text-lg font-bold text-secondary">Primary Service Zone</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Our main service area within 15 miles of Groveland, FL - fastest response times and no travel charges.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Groveland</li>
                <li>• Clermont</li>
                <li>• Minneola</li>
                <li>• Mascotte</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-accent rounded-full mr-3"></div>
                <h3 className="text-lg font-bold text-secondary">Extended Coverage</h3>
              </div>
              <p className="text-gray-600 mb-3">
                We also serve these areas with minimal travel charges for larger projects.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Montverde</li>
                <li>• Winter Garden</li>
                <li>• Windermere</li>
                <li>• Oakland</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
