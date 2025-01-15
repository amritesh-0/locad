import React from 'react';
import { Target, Handshake, MapPin, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Targeted Local Reach',
    description: 'Connect with influencers and businesses in your specific area'
  },
  {
    icon: Handshake,
    title: 'Authentic Partnerships',
    description: 'Build genuine relationships within your local community'
  },
  {
    icon: MapPin,
    title: 'Location-Based Matching',
    description: 'Find partners that are relevant to your local market'
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Expand your reach and grow your business locally'
  }
];

export function Features() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose LocAD?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make it easy to create meaningful connections in your local community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <feature.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}