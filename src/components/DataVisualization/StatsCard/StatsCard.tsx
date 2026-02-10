// DataVisualization/StatsCard/StatsCard.tsx
import React from 'react';
import './StatsCard.css';

interface StatsCardProps {
  children?: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ children }) => {
  return (
    <div className="">
      {children}
    </div>
  );
};

export default StatsCard;
