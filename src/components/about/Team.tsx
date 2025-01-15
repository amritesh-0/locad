import React from 'react';
import { Code2, Briefcase, LineChart, Users } from 'lucide-react';
import { TeamMember } from './TeamMember';

const teamMembers = [
  {
    name: 'Amritesh Kumar',
    role: 'Chief Executive Officer',
    image: '',
    Icon: Briefcase
  },
  {
    name: 'Vacant',
    role: 'Chief Technology Officer',
    image: '',
    Icon: Code2
  },
  {
    name: 'Vacant',
    role: 'Head of Marketing',
    image: '',
    Icon: LineChart
  },
  {
    name: 'Vacant',
    role: 'Community Manager',
    image: '',
    Icon: Users
  }
];

export function Team() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind LocAD working to connect local businesses with community influencers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}