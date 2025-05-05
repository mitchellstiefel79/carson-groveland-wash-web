
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/74691437-06d7-47c3-a140-7ee919fc173a.png" 
            alt="Carson's Soft Wash Logo" 
            className="h-16 md:h-20" 
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : scrolled
                    ? "text-secondary"
                    : "text-secondary"
                )
              }
              end={item.path === "/"}
            >
              {item.label}
            </NavLink>
          ))}
          <Button className="bg-accent hover:bg-accent/90 flex items-center gap-2 text-white" asChild>
            <a href="tel:3524673964">
              <Phone size={16} />
              <span className="hidden lg:inline">352-467-3964</span>
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "text-base py-2 font-medium transition-colors hover:text-primary",
                      isActive
                        ? "text-primary border-l-4 pl-2 border-primary"
                        : "text-secondary pl-3"
                    )
                  }
                  onClick={() => setIsMenuOpen(false)}
                  end={item.path === "/"}
                >
                  {item.label}
                </NavLink>
              ))}
              <Button className="bg-accent hover:bg-accent/90 flex items-center gap-2 text-white" asChild>
                <a href="tel:3524673964">
                  <Phone size={16} />
                  <span>Call: 352-467-3964</span>
                </a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
