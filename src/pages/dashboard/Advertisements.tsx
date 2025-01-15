import React from 'react';
import { Search, Filter } from 'lucide-react';

export function Advertisements() {
  const ads = [
    {
      id: 1,
      business: "Green Juice Bar",
      title: "Summer Health Campaign",
      description: "Looking for health & wellness influencers to promote our new summer juice lineup",
      budget: "$300-500",
      duration: "2 weeks",
      requirements: ["Min 5K followers", "2 posts, 3 stories", "Health/Wellness focus"],
      logo: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=300&h=300"
    },
    // Add more advertisements
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Available Advertisements</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search campaigns..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5 mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {ads.map((ad) => (
          <div key={ad.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <img
                src={ad.logo}
                alt={ad.business}
                className="w-16 h-16 rounded-lg object-cover mr-6"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{ad.title}</h3>
                    <p className="text-gray-600">{ad.business}</p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Apply
                  </button>
                </div>
                <p className="text-gray-700 mb-4">{ad.description}</p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Budget</p>
                    <p className="font-semibold">{ad.budget}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold">{ad.duration}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Requirements:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {ad.requirements.map((req, index) => (
                      <li key={index} className="text-gray-700">{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}