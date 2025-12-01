import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {children}
    </div>
  );
};

