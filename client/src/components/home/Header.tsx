import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import { scrollTo } from "@/utils/scrollTo";
import logoPath from "@assets/logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Download", id: "download" }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-sm py-3" : "bg-black/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="wt-home-container flex justify-between items-center">
          <a href="#" className="wt-home-logo flex items-center">
            <img src={logoPath} alt="Woreto Logo" className="h-10 md:h-12" />
          </a>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-[#E8CFC2] hover:text-white transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </nav>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#E8CFC2]"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Header;
