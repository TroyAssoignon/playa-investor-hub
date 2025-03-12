
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InvestmentOverview from '@/components/InvestmentOverview';
import PropertyCard from '@/components/PropertyCard';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ArrowUpCircle } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const propertiesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <InvestmentOverview />
      
      {/* Featured Properties Section */}
      <section id="properties" ref={propertiesRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ocean-600 font-medium text-sm tracking-wider uppercase">Our Portfolio</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Featured Properties</h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover our handpicked selection of premium properties with exceptional investment potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard 
              image="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=photo-1472396961693-142e6e269027"
              title="Beachfront Luxury Condo"
              location="Playacar, Playa del Carmen"
              price="$495,000"
              beds={2}
              baths={2}
              sqft={1200}
              tag="Beachfront"
              delay={0}
            />
            
            <PropertyCard 
              image="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=photo-1465146344425-f00d5f5c8f07"
              title="Oceanview Penthouse"
              location="Centro, Playa del Carmen"
              price="$850,000"
              beds={3}
              baths={3.5}
              sqft={2100}
              tag="Luxury"
              delay={150}
            />
            
            <PropertyCard 
              image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=photo-1506744038136-46273834b3fb"
              title="Tropical Villa with Pool"
              location="Tulum Road, Playa del Carmen"
              price="$1,250,000"
              beds={4}
              baths={4}
              sqft={3500}
              tag="Exclusive"
              delay={300}
            />
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-ocean-600 text-ocean-600 bg-white hover:bg-ocean-50 font-medium transition-colors"
            >
              View All Properties
            </a>
          </div>
        </div>
      </section>
      
      {/* Investment Process Section */}
      <section id="investing" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ocean-600 font-medium text-sm tracking-wider uppercase">How It Works</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Your Investment Journey</h2>
            <p className="mt-4 text-lg text-gray-600">
              A simple, transparent process designed to make your investment experience smooth and rewarding.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/4 left-16 right-16 hidden md:block">
              <div className="h-0.5 w-full bg-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProcessStep 
                number="01"
                title="Discovery"
                description="We learn about your investment goals, preferences, and budget to identify the perfect properties."
                delay={0}
              />
              
              <ProcessStep 
                number="02"
                title="Selection"
                description="Review our handpicked properties that match your criteria with comprehensive market analysis."
                delay={200}
              />
              
              <ProcessStep 
                number="03"
                title="Acquisition"
                description="Our team handles all legal aspects and paperwork to ensure a smooth, hassle-free purchase."
                delay={400}
              />
            </div>
          </div>
          
          <div className="mt-24 bg-ocean-50 rounded-2xl p-8 md:p-10">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready for a Personalized Investment Strategy?</h3>
              <p className="text-gray-600 mb-8">
                Let our experts create a customized investment plan based on your financial goals, risk tolerance, and timeline.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-ocean-600 text-white font-medium transition-colors hover:bg-ocean-700 shadow-md hover:shadow-lg"
              >
                Request Your Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-32 bg-image relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=photo-1433086966358-54859d0ed716")' }}>
        <div className="absolute inset-0 bg-ocean-900/70"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-shadow">
              Secure Your Future in Paradise
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 text-shadow-sm">
              Don't miss the opportunity to invest in one of the world's fastest growing real estate markets.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-white text-ocean-800 font-medium text-lg transition-colors hover:bg-gray-100 shadow-xl hover:shadow-2xl"
            >
              Start Your Investment Journey
            </a>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
      
      {/* Scroll to top button */}
      <button 
        className={`fixed bottom-6 right-6 p-2 rounded-full shadow-lg bg-white text-ocean-600 hover:bg-ocean-600 hover:text-white transition-all duration-300 z-50 transform ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUpCircle className="h-8 w-8" />
      </button>
    </div>
  );
};

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  delay = 0 
}: { 
  number: string, 
  title: string, 
  description: string,
  delay?: number
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={stepRef}
      className={`text-center transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-ocean-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold relative z-10">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 max-w-xs mx-auto">{description}</p>
    </div>
  );
};

export default Index;
