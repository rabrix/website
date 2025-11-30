import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-normal transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full';
  
  const variantClasses = {
    primary: 'bg-[#0071e3] text-white hover:bg-[#0077ed] active:bg-[#0066cc] focus:ring-[#0071e3]',
    secondary: 'bg-transparent border border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white active:bg-[#424245] focus:ring-[#1d1d1f]',
    text: 'text-[#0071e3] hover:text-[#0077ed] active:text-[#0066cc] focus:ring-[#0071e3]',
  };
  
  const sizeClasses = {
    sm: 'px-5 py-2 text-sm min-h-[36px]',
    md: 'px-6 py-2.5 text-base min-h-[44px]',
    lg: 'px-8 py-3 text-lg min-h-[52px]',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
