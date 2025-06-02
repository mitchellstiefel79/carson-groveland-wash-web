
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import VapiAIButton from "./VapiAIButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28">{children}</main>
      <Footer />
      <VapiAIButton />
    </div>
  );
};

export default Layout;
