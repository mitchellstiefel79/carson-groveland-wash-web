
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CanonicalUrl from "./components/CanonicalUrl";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import ServiceAreas from "./pages/ServiceAreas";
import Groveland from "./pages/service-areas/Groveland";
import Clermont from "./pages/service-areas/Clermont";
import Minneola from "./pages/service-areas/Minneola";
import Mascotte from "./pages/service-areas/Mascotte";
import Montverde from "./pages/service-areas/Montverde";
import WinterGarden from "./pages/service-areas/WinterGarden";
import Windermere from "./pages/service-areas/Windermere";
import Oakland from "./pages/service-areas/Oakland";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CanonicalUrl />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/service-areas/groveland" element={<Groveland />} />
          <Route path="/service-areas/clermont" element={<Clermont />} />
          <Route path="/service-areas/minneola" element={<Minneola />} />
          <Route path="/service-areas/mascotte" element={<Mascotte />} />
          <Route path="/service-areas/montverde" element={<Montverde />} />
          <Route path="/service-areas/winter-garden" element={<WinterGarden />} />
          <Route path="/service-areas/windermere" element={<Windermere />} />
          <Route path="/service-areas/oakland" element={<Oakland />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
