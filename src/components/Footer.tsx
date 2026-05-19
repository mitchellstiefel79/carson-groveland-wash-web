
import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Youtube, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO, BUSINESS_CITATION_SHORT } from "@/data/businessInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { address, phoneDisplay, phoneHref, email } = BUSINESS_INFO;
  
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
              Professional pressure washing, soft washing and paver sealing services for residential and commercial properties covering all of Central Florida.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100088828035566" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/@CarsonStiefel/videos" className="hover:text-accent transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://g.co/kgs/BpMXxfs" className="hover:text-accent transition-colors" aria-label="Google My Business">
                <img src="/lovable-uploads/2ca4c1e4-aa11-4619-a561-4aceddf1c443.png" alt="Google My Business" className="w-5 h-5" />
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
              <NavLink to="/service-areas" className="hover:text-accent transition-colors">Service Areas</NavLink>
              <NavLink to="/gallery" className="hover:text-accent transition-colors">Gallery</NavLink>
              <NavLink to="/faq" className="hover:text-accent transition-colors">FAQ</NavLink>
              <NavLink to="/contact" className="hover:text-accent transition-colors">Contact Us</NavLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b-2 border-accent pb-2 inline-block">
              Contact Us
            </h3>
            {/*
              Canonical NAP (Name / Address / Phone).
              These values are the single source of truth and MUST match
              the LocalBusiness JSON-LD in index.html plus the GBP / Yelp / BBB
              citations. Edits should flow from src/data/businessInfo.ts.
            */}
            <address
              className="space-y-3 not-italic"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <meta itemProp="name" content={BUSINESS_INFO.legalName} />
              <div
                className="flex items-start space-x-3"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span>
                  <span itemProp="streetAddress">{address.streetAddress}</span>
                  <br />
                  <span itemProp="addressLocality">{address.locality}</span>
                  ,{" "}
                  <span itemProp="addressRegion">{address.region}</span>{" "}
                  <span itemProp="postalCode">{address.postalCode}</span>
                  <meta itemProp="addressCountry" content={address.country} />
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a
                  href={phoneHref}
                  className="hover:text-accent transition-colors"
                  itemProp="telephone"
                >
                  {phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-accent transition-colors"
                  itemProp="email"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="whitespace-pre-line" itemProp="openingHours">
                  {BUSINESS_INFO.hours}
                </span>
              </div>
            </address>
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
