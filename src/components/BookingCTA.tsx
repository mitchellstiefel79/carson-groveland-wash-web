
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import VapiPhoneButton from "./VapiPhoneButton";

const BookingCTA = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:flex-row sm:gap-3">
      {/* Mobile-first floating CTAs */}
      <VapiPhoneButton 
        size="lg"
        className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        showText={false}
      />
      
      <Button 
        asChild 
        size="lg"
        className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <Link to="/contact" className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          <span className="hidden sm:inline">Book Online</span>
        </Link>
      </Button>
    </div>
  );
};

export default BookingCTA;
