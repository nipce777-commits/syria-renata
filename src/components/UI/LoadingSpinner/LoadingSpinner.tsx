// UI/LoadingSpinner/LoadingSpinner.tsx
import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  children?: React.ReactNode;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ children }) => {
  return (
    <div className="">
      {children}
    </div>
  );
};

export default LoadingSpinner;
