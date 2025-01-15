import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Building2 } from 'lucide-react';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
            Connect with Local Influencers and Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slide-up-delay">
            Join the platform that brings together local businesses and community influencers
            to create authentic partnerships and drive local growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <button
            onClick={() => navigate('/auth/influencer')}
            className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Users className="w-16 h-16 text-blue-500 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Local Influencer</h2>
            <p className="text-gray-600">
              Share your influence and connect with local businesses to create meaningful partnerships
            </p>
          </button>

          <button
            onClick={() => navigate('/auth/business')}
            className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Building2 className="w-16 h-16 text-blue-500 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Business Owner</h2>
            <p className="text-gray-600">
              Find and collaborate with local influencers to expand your business reach
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}