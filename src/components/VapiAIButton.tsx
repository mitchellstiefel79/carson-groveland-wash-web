
const VapiAIButton = () => {
  return (
    <div className="fixed bottom-20 left-4 z-50 sm:bottom-4 sm:left-4">
      <a 
        href="tel:+1234567890" 
        className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-md no-underline font-bold hover:bg-green-600 transition-colors"
      >
        🎙️ <span className="ml-2">Speak to Smart Assistant</span>
      </a>
    </div>
  );
};

export default VapiAIButton;
