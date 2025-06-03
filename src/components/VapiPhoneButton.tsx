
import { Phone, PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface VapiPhoneButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  children?: React.ReactNode;
  showText?: boolean;
}

const VapiPhoneButton = ({ 
  className, 
  size = "default", 
  variant = "default",
  children,
  showText = true
}: VapiPhoneButtonProps) => {
  const [isCallActive, setIsCallActive] = useState(false);

  useEffect(() => {
    // Listen for Vapi call state changes
    const handleCallStart = () => setIsCallActive(true);
    const handleCallEnd = () => setIsCallActive(false);

    // Add event listeners if Vapi is available
    if (typeof window !== 'undefined' && window.vapiSDK) {
      // These are common Vapi events - adjust based on actual Vapi SDK
      window.addEventListener('vapi-call-started', handleCallStart);
      window.addEventListener('vapi-call-ended', handleCallEnd);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('vapi-call-started', handleCallStart);
        window.removeEventListener('vapi-call-ended', handleCallEnd);
      }
    };
  }, []);

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.vapiSDK) {
      if (isCallActive) {
        // End the call
        window.vapiSDK.stop();
      } else {
        // Start the call
        window.vapiSDK.start();
      }
    }
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      variant={variant}
      className={cn(
        "transition-all duration-300",
        isCallActive 
          ? "bg-red-500 hover:bg-red-600 text-white animate-pulse" 
          : "",
        className
      )}
    >
      {isCallActive ? (
        <PhoneOff className="h-5 w-5" />
      ) : (
        <Phone className="h-5 w-5" />
      )}
      {showText && children && <span className="ml-2">{children}</span>}
    </Button>
  );
};

export default VapiPhoneButton;
