import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";

declare global {
  interface Window {
    vapi: {
      start: (agentId: string) => void;
      stop: () => void;
      on: (event: string, callback: (data: any) => void) => void;
    };
  }
}

const VapiAIButton = () => {
  const [isListening, setIsListening] = useState(false);
  const [isVapiLoaded, setIsVapiLoaded] = useState(false);
  
  // Your agent ID - replace with your actual agent ID
  const agentId = "fe750b19-40b9-4c59-952d-927fe08e638d";

  useEffect(() => {
    // Check if Vapi is loaded
    const checkVapi = () => {
      if (window.vapi) {
        setIsVapiLoaded(true);
        
        // Set up event listeners
        window.vapi.on('call-start', () => {
          console.log('Call started');
          setIsListening(true);
        });
        
        window.vapi.on('call-end', () => {
          console.log('Call ended');
          setIsListening(false);
        });
        
        window.vapi.on('error', (error: any) => {
          console.error('Vapi error:', error);
          setIsListening(false);
        });
      } else {
        // Retry after a short delay
        setTimeout(checkVapi, 100);
      }
    };

    checkVapi();
  }, []);

  const handleVapiCall = () => {
    if (!window.vapi) {
      console.error('Vapi not loaded');
      return;
    }

    if (isListening) {
      window.vapi.stop();
    } else {
      window.vapi.start(agentId);
    }
  };

  if (!isVapiLoaded) {
    return null; // Don't render until Vapi is loaded
  }

  return (
    <div className="fixed bottom-20 left-4 z-50 sm:bottom-4 sm:left-4">
      <Button
        onClick={handleVapiCall}
        size="lg"
        className={`
          relative rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105
          ${isListening 
            ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
            : 'bg-primary hover:bg-primary/90'
          }
        `}
        aria-label={isListening ? "End voice call" : "Start voice call for scheduling"}
      >
        {isListening ? (
          <MicOff className="h-6 w-6 text-white" />
        ) : (
          <Mic className="h-6 w-6 text-white" />
        )}
        
        {/* Pulse animation when listening */}
        {isListening && (
          <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></div>
        )}
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {isListening ? 'Click to end call' : 'Talk to schedule appointment'}
      </div>
    </div>
  );
};

export default VapiAIButton;
