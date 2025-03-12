
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Bed, Bath, MapPin, ArrowRight } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  tag?: string;
  delay?: number;
}

const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  beds, 
  baths, 
  sqft,
  tag,
  delay = 0 
}: PropertyCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  // Simulate image loading
  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, [image]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12"
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionProperty: 'all',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '700ms'
      }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        {tag && (
          <span className="absolute top-3 left-3 z-10 bg-ocean-600 text-white text-xs font-medium py-1 px-2 rounded">
            {tag}
          </span>
        )}
        <div 
          className={cn(
            "w-full h-full bg-gray-200 transition-transform duration-700 bg-image group-hover:scale-110",
            isImageLoaded ? "blur-none" : "blur-sm"
          )}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1 text-ocean-600" />
          {location}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
        
        <p className="text-ocean-600 font-bold text-xl mb-4">{price}</p>
        
        <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <span>{sqft} Sq Ft</span>
          </div>
        </div>
        
        <a 
          href="#contact" 
          className="inline-flex items-center text-ocean-600 font-medium hover:text-ocean-700 transition-colors"
        >
          View Details
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
