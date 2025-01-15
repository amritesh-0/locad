import React from 'react';
import { Search, MapPin, Instagram } from 'lucide-react';

export function Influencers() {
  const influencers = [
    {
      id: 1,
      name: "Alex Rivera",
      location: "San Francisco, CA",
      followers: "15.2K",
      engagement: "4.8%",
      categories: ["Food", "Lifestyle"],
      instagram: "@alexrivera",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&h=300"
    },
    // Add more influencers
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Find Local Influencers</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search influencers..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {influencers.map((influencer) => (
          <div key={influencer.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img
                src={influencer.image}
                alt={influencer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{influencer.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{influencer.location}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Instagram className="w-4 h-4 mr-1" />
                <span className="text-sm">{influencer.instagram}</span>
              </div>
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600">Followers</p>
                  <p className="font-semibold">{influencer.followers}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Engagement</p>
                  <p className="font-semibold">{influencer.engagement}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {influencer.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}