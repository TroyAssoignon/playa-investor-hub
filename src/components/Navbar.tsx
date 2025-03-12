
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass py-3 shadow-sm" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-lg md:text-xl font-bold text-ocean-800 dark:text-white">
              Playa<span className="text-teal-600">Invest</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#properties">Properties</NavLink>
            <NavLink href="#investing">Investing</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="inline-flex h-10 items-center justify-center rounded-md bg-ocean-600 px-6 font-medium text-white shadow-sm transition-colors hover:bg-ocean-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1"
            >
              Invest Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100/50 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-ocean-700" />
            ) : (
              <Menu className="h-6 w-6 text-ocean-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} glass`}>
        <div className="py-4 px-6 space-y-4">
          <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="#properties" onClick={() => setIsMenuOpen(false)}>Properties</MobileNavLink>
          <MobileNavLink href="#investing" onClick={() => setIsMenuOpen(false)}>Investing</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          <div className="pt-2">
            <a 
              href="#contact" 
              className="block w-full text-center py-2.5 rounded-md bg-ocean-600 font-medium text-white shadow-sm transition-colors hover:bg-ocean-700 focus-visible:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              Invest Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-ocean-800 font-medium relative hover:text-ocean-600 transition-colors after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-ocean-500 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string, 
  children: React.ReactNode,
  onClick?: () => void
}) => (
  <a 
    href={href} 
    className="block py-2 text-ocean-800 font-medium hover:text-ocean-600 transition-colors"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
