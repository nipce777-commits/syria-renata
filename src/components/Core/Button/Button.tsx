// Core/Button/Button.tsx
import React from 'react';
import './Button.css';

interface ButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className="">
      {children}
    </div>
  );
};

export default Button;
