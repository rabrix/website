import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'wide' | 'narrow';
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  size = 'default'
}) => {
  const sizeClasses = {
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
    narrow: 'max-w-4xl',
  };
  
  return (
    <div className={`mx-auto ${sizeClasses[size]} px-6 sm:px-8 md:px-10 lg:px-12 ${className}`}>
      {children}
    </div>
  );
};
