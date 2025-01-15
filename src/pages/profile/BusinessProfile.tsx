import React from 'react';
import { Building2, Mail, MapPin, Phone, Globe, Tag, FileText } from 'lucide-react';
import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { ProfileSection } from '../../components/profile/ProfileSection';
import { BusinessStats } from '../../components/profile/BusinessStats';
import { ProfileField } from '../../components/profile/ProfileData';
import { useProfileData } from '../../hooks/useProfileData';

export function BusinessProfile() {
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
        title="Business Profile"
        description="Manage your business information and settings"
      />
      
      <div className="grid gap-6 mt-6">
        <BusinessStats />
        
        <ProfileSection title="Business Information">
          <div className="grid md:grid-cols-2 gap-4">
            <ProfileField
              icon={Building2}
              label="Business Name"
              value={profileData?.businessName}
            />
            <ProfileField
              icon={Mail}
              label="Email"
              value={profileData?.email}
            />
            <ProfileField
              icon={MapPin}
              label="Address"
              value={profileData?.address}
            />
            <ProfileField
              icon={Phone}
              label="Phone"
              value={profileData?.phone}
            />
            <ProfileField
              icon={Globe}
              label="Website"
              value={profileData?.website}
            />
            <ProfileField
              icon={Tag}
              label="Category"
              value={profileData?.category}
            />
          </div>

          {profileData?.description && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="font-medium text-gray-900">Business Description</h3>
              </div>
              <p className="text-gray-700">{profileData.description}</p>
            </div>
          )}
        </ProfileSection>
      </div>
    </div>
  );
}