import React from 'react';

interface CSharpIconProps {
  className?: string;
}

export const CSharpIcon: React.FC<CSharpIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hexagon background */}
      <polygon points="64,8 120,40 120,104 64,128 8,104 8,40" fill="#9B4F96" />
      {/* Diagonal cut */}
      <polygon points="64,8 120,40 120,104 64,72" fill="#6C3483" />
      {/* Large C */}
      <text x="28" y="92" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="70" fill="#fff">C</text>
      {/* # symbol */}
      <text x="72" y="78" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="32" fill="#fff">#</text>
    </svg>
  );
}; 