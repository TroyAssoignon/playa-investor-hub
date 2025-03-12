
import React from 'react';
import { Map, Sun, TrendingUp, Users, Building, DollarSign } from 'lucide-react';
import FeatureCard from './FeatureCard';

const InvestmentOverview = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ocean-600 font-medium text-sm tracking-wider uppercase">Why Playa del Carmen</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">The Perfect Investment Destination</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover why savvy investors are flocking to Playa del Carmen for premium real estate opportunities with exceptional returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            icon={<Map className="h-6 w-6 text-ocean-600" />}
            title="Prime Location"
            description="Situated in the heart of the Riviera Maya, offering pristine beaches, cultural experiences, and proximity to major attractions."
            delay={0}
          />
          <FeatureCard 
            icon={<Sun className="h-6 w-6 text-ocean-600" />}
            title="Year-Round Appeal"
            description="Perfect tropical climate and endless sunshine make it a year-round destination for tourists and expatriates alike."
            delay={150}
          />
          <FeatureCard 
            icon={<TrendingUp className="h-6 w-6 text-ocean-600" />}
            title="Growing Market"
            description="Property values have consistently appreciated, with a strong forecast for continued growth in the coming years."
            delay={300}
          />
          <FeatureCard 
            icon={<Users className="h-6 w-6 text-ocean-600" />}
            title="Tourism Hotspot"
            description="Over 4 million annual visitors create a robust rental market and consistent income opportunity for property owners."
            delay={450}
          />
          <FeatureCard 
            icon={<Building className="h-6 w-6 text-ocean-600" />}
            title="Infrastructure"
            description="Modern amenities, international airports, hospitals, and shopping centers ensure comfort and convenience."
            delay={600}
          />
          <FeatureCard 
            icon={<DollarSign className="h-6 w-6 text-ocean-600" />}
            title="ROI Potential"
            description="Higher rental yields compared to many U.S. and European markets, with rental returns averaging 8-12% annually."
            delay={750}
          />
        </div>

        <div className="bg-gradient-to-r from-ocean-500/10 to-teal-500/10 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to take the next step?</h3>
              <p className="text-gray-600 max-w-xl">
                Our team of investment specialists is ready to guide you through every aspect of property investment in Playa del Carmen.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-ocean-600 text-white font-medium transition-colors hover:bg-ocean-700 shadow-sm hover:shadow-md"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOverview;
