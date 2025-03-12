
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Playa<span className="text-ocean-400">Invest</span></h3>
            <p className="text-gray-400 mb-6">
              Premium real estate investment opportunities in Playa del Carmen, Mexico's most sought-after Caribbean destination.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#properties">Properties</FooterLink>
              <FooterLink href="#investing">Investment Guide</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Market Reports</FooterLink>
              <FooterLink href="#">Investment Calculator</FooterLink>
              <FooterLink href="#">Legal Guide</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-ocean-400 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  5th Avenue, Playa del Carmen, Quintana Roo, Mexico
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-ocean-400 mr-3" />
                <a href="mailto:info@playainvest.com" className="text-gray-400 hover:text-white transition-colors">
                  info@playainvest.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-ocean-400 mr-3" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} PlayaInvest. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a 
    href={href} 
    className="bg-gray-800 p-2.5 rounded-full hover:bg-ocean-600 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-400 hover:text-white transition-colors inline-block"
    >
      {children}
    </a>
  </li>
);

export default Footer;
