
import React, { useEffect, useState } from 'react';
import { ArrowDown, ChevronRight, Award } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading completion
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div className={`absolute inset-0 bg-image transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=photo-1500375592092-40eb2168fd21")' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center">
              <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-teal-600 to-ocean-500 shadow-md">
                <Award className="h-9 w-9 text-white" strokeWidth={2.5} />
                <div className="absolute inset-0 rounded-full border border-white/20 shadow-inner"></div>
              </div>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-ocean-600/90 text-white text-sm font-medium py-1 px-3 rounded-full backdrop-blur-sm mb-2 animate-fade-in">
                Since 1974
              </span>
              <p className="text-sm text-white/80">Premier Investment Opportunities</p>
            </div>
          </div>
          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight text-shadow transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Luxury Real Estate Investments in <span className="text-ocean-300">Playa del Carmen</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-shadow-sm transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Secure your future with exclusive properties in Mexico's most sought-after Caribbean destination
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a 
              href="#properties" 
              className="px-8 py-3 bg-ocean-600 hover:bg-ocean-700 text-white rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center min-w-[180px]"
            >
              View Properties
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white/90 hover:bg-white text-ocean-800 rounded-md font-medium transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl flex items-center justify-center min-w-[180px]"
            >
              Investment Guide
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="text-sm font-medium mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
