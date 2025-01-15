import React from 'react';
import { Building2, Users, Globe, Target } from 'lucide-react';
import { Team } from '../components/about/Team';

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Connecting Local Businesses with Local Influencers
          </h1>
          <p className="text-xl text-gray-600">
            LocAD bridges the gap between local businesses and community influencers,
            creating meaningful partnerships that drive local growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Building2,
              title: 'Local Business Growth',
              description: 'Help local businesses expand their reach through targeted influencer marketing'
            },
            {
              icon: Users,
              title: 'Community Impact',
              description: 'Enable influencers to make a real difference in their local communities'
            },
            {
              icon: Globe,
              title: 'Location-Based',
              description: 'Connect businesses with influencers in their specific geographic area'
            },
            {
              icon: Target,
              title: 'Targeted Reach',
              description: 'Reach the right audience through authentic local partnerships'
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6">
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            We believe in the power of local communities. Our mission is to create a platform
            where local businesses can thrive through authentic partnerships with community
            influencers, fostering economic growth and strengthening local connections.
          </p>
        </div>

        <Team />
      </div>
    </div>
  );
}