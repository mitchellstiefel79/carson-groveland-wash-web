
import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/74691437-06d7-47c3-a140-7ee919fc173a.png" 
                alt="Carson's Soft Wash Logo" 
                className="h-20" 
              />
            </div>
            <p className="text-gray-300 max-w-xs">
              Professional pressure washing and soft washing services for residential and commercial properties in Groveland, FL and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-accent pb-2 inline-block">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" className="hover:text-accent transition-colors">Home</NavLink>
              <NavLink to="/about" className="hover:text-accent transition-colors">About Us</NavLink>
              <NavLink to="/services" className="hover:text-accent transition-colors">Services</NavLink>
              <NavLink to="/gallery" className="hover:text-accent transition-colors">Gallery</NavLink>
              <NavLink to="/contact" className="hover:text-accent transition-colors">Contact Us</NavLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-accent pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span>Groveland, FL</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:3528150290" className="hover:text-accent transition-colors">352-815-0290</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:info@carsonssoftwash.com" className="hover:text-accent transition-colors">info@carsonssoftwash.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-accent mt-1 flex-shrink-0" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM<br />Sunday: Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Carson's Soft Wash Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
