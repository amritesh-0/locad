import React from 'react';
import { TrendingUp, Users, CheckCircle } from 'lucide-react';
import { StatCard } from '../dashboard/common/StatCard';

export function BusinessStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <StatCard
        title="Active Campaigns"
        value="3"
        icon={TrendingUp}
        trend="+2 this month"
      />
      <StatCard
        title="Influencer Partnerships"
        value="12"
        icon={Users}
        trend="+5 this month"
      />
      <StatCard
        title="Completed Campaigns"
        value="8"
        icon={CheckCircle}
        trend="+3 this month"
      />
    </div>
  );
}