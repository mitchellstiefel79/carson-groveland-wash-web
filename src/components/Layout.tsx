
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Tixae Widget - Floating above CTA buttons */}
      <div className="fixed bottom-32 right-4 z-40 w-80 h-64 bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="https://www.tixaeagents.ai/app/na/render/HxOizRsI8uocTQY6Sf0N/iframe"
          style={{ width: '100%', height: '100%' }}
          frameBorder="0"
          title="Tixae Agent"
        />
      </div>
      
      <main className="flex-grow pt-24 md:pt-28">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
