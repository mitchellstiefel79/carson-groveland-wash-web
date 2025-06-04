import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return <section className="relative min-h-[85vh] flex items-center bg-secondary overflow-hidden">
      {/* Blue Bubble Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary to-secondary">
        {/* Large bubbles */}
        <div className="absolute w-64 h-64 rounded-full bg-white/20 blur-xl top-1/4 left-1/4 animate-pulse" style={{
        animationDuration: '8s'
      }}></div>
        <div className="absolute w-80 h-80 rounded-full bg-white/20 blur-xl bottom-1/3 right-1/4 animate-pulse" style={{
        animationDuration: '10s'
      }}></div>
        <div className="absolute w-72 h-72 rounded-full bg-white/20 blur-xl top-1/2 right-1/3 animate-pulse" style={{
        animationDuration: '12s'
      }}></div>
        
        {/* Medium bubbles */}
        <div className="absolute w-40 h-40 rounded-full bg-white/30 blur-lg top-1/3 left-1/3 animate-pulse" style={{
        animationDuration: '7s'
      }}></div>
        <div className="absolute w-48 h-48 rounded-full bg-white/30 blur-lg bottom-1/4 right-1/4 animate-pulse" style={{
        animationDuration: '9s'
      }}></div>
        
        {/* Small bubbles */}
        <div className="absolute w-24 h-24 rounded-full bg-white/40 blur-md top-1/2 left-1/2 animate-pulse" style={{
        animationDuration: '6s'
      }}></div>
        <div className="absolute w-16 h-16 rounded-full bg-white/40 blur-md bottom-1/3 left-1/4 animate-pulse" style={{
        animationDuration: '5s'
      }}></div>
        <div className="absolute w-20 h-20 rounded-full bg-white/40 blur-md top-1/4 right-1/3 animate-pulse" style={{
        animationDuration: '4s'
      }}></div>
      </div>
      
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <iframe src="https://www.youtube.com/embed/yVjp_Js1x8E?autoplay=1&mute=1&loop=1&playlist=yVjp_Js1x8E&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=2129&end=2149" className="w-full h-full object-cover" style={{
        pointerEvents: 'none',
        minWidth: '100%',
        minHeight: '100%'
      }} allow="autoplay; encrypted-media" allowFullScreen={false} title="Pressure Washing Background Video" />
      </div>
      
      <div className="container mx-auto px-4 z-10 animate-fade-in">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight lg:text-4xl">
            Pressure Washing, Soft Washing and Paver Sealing Covering all of Central Florida
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 drop-shadow-md max-w-2xl">
            Professional soft washing and pressure cleaning for residential and commercial properties. Licensed and insured.
          </p>
          
          {/* Enhanced CTAs with urgency */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
              <Link to="/contact">Get FREE Quote Today</Link>
            </Button>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white border-primary text-lg px-8 py-4">
              <a href="tel:3524673964" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call (352) 467-3964
              </a>
            </Button>
          </div>
          
          {/* Service area highlight */}
          <div className="flex items-center gap-2 text-gray-200">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Serving all of Central Florida including Groveland, Clermont, Minneola & surrounding areas</span>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
