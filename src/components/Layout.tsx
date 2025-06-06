
import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Initialize TIXAE widget
    const initTixaeWidget = () => {
      (window as any).VG_CONFIG = {
        ID: "HxOizRsI8uocTQY6Sf0N",
        region: 'na',
        render: 'custom',
        container: 'VG_OVERLAY_CONTAINER',
        modalMode: true,
        stylesheets: [
          "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
        ],
      };
      
      const script = document.createElement("script");
      script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
      script.defer = true;
      document.body.appendChild(script);
    };

    initTixaeWidget();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* TIXAE Agents Widget Container - Top Right */}
      <div className="fixed top-24 right-4 z-50 pointer-events-none">
        <div 
          style={{ width: 0, height: 0 }} 
          id="VG_OVERLAY_CONTAINER"
          className="pointer-events-auto"
        >
          {/* Here is where TIXAE Agents renders the widget. */}
        </div>
      </div>
      
      <main className="flex-grow pt-24 md:pt-28">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
