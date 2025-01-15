import React from 'react';
import { TrendingUp, DollarSign, Star } from 'lucide-react';
import { StatCard } from '../dashboard/common/StatCard';

export function InfluencerStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <StatCard
        title="Total Earnings"
        value="$1,250"
        icon={DollarSign}
        trend="+$350 this month"
      />
      <StatCard
        title="Engagement Rate"
        value="4.8%"
        icon={TrendingUp}
        trend="+0.5% this month"
      />
      <StatCard
        title="Rating"
        value="4.9"
        icon={Star}
        trend="from 28 reviews"
      />
    </div>
  );
}