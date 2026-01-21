import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-[rgba(61,_61,_61,_0.20)]"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-white tracking-widest flex items-center gap-2">
            <span className="text-amber-400">STALLION</span>
            <span className="text-[10px] font-light block leading-none opacity-70">FANTASY<br />LEAGUE</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "transition-colors font-medium text-sm",
                  isActive ? "text-[#EDD191]" : "text-white hover:text-[#EDD191]"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Button
            variant="default"
            className="bg-[#EDD191] text-black hover:bg-[#e0c485] font-bold px-6 py-2 rounded-[4px]"
          >
            Create Account
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close Button Inside Mobile Menu */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-[#EDD191] transition-all"
        >
          <X size={32} />
        </button>

        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              cn(
                "text-3xl font-bold transition-all",
                isActive ? "text-[#EDD191]" : "text-white hover:text-[#EDD191]"
              )
            }
          >
            {link.name}
          </NavLink>
        ))}
        <Button
          className="bg-[#EDD191] text-black hover:bg-[#e0c485] font-bold px-10 py-6 text-2xl rounded-[4px]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Create Account
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

