import React from 'react';
import { User, Mail, MapPin, Instagram, Users, Tag, FileText } from 'lucide-react';
import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { ProfileSection } from '../../components/profile/ProfileSection';
import { InfluencerStats } from '../../components/profile/InfluencerStats';
import { ProfileField } from '../../components/profile/ProfileData';
import { useProfileData } from '../../hooks/useProfileData';

export function InfluencerProfile() {
  const { profileData, loading, error } = useProfileData();

  if (loading) {
    return <div className="p-6 animate-pulse">Loading profile...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">{error}</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ProfileHeader 
        title="Influencer Profile"
        description="Manage your profile information and settings"
      />
      
      <div className="grid gap-6 mt-6">
        <InfluencerStats />
        
        <ProfileSection title="Personal Information">
          <div className="grid md:grid-cols-2 gap-4">
            <ProfileField
              icon={User}
              label="Display Name"
              value={profileData?.displayName}
            />
            <ProfileField
              icon={Mail}
              label="Email"
              value={profileData?.email}
            />
            <ProfileField
              icon={MapPin}
              label="Location"
              value={profileData?.location}
            />
            <ProfileField
              icon={Instagram}
              label="Instagram Handle"
              value={profileData?.instagramHandle}
            />
            <ProfileField
              icon={Users}
              label="Followers"
              value={profileData?.followers}
            />
          </div>

          {profileData?.categories && profileData.categories.length > 0 && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Tag className="w-5 h-5 text-blue-600" />
                <h3 className="font-medium text-gray-900">Categories</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          )}

          {profileData?.bio && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="font-medium text-gray-900">Bio</h3>
              </div>
              <p className="text-gray-700">{profileData.bio}</p>
            </div>
          )}
        </ProfileSection>
      </div>
    </div>
  );
}