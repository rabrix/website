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
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white rounded-full';
  
  const variantClasses = {
    primary: 'bg-[#06B6D4] text-white hover:bg-[#0891B2] shadow-lg shadow-[#06B6D4]/40 focus:ring-[#06B6D4]',
    secondary: 'bg-white/80 backdrop-blur-sm border border-gray-200/80 text-[#1d1d1f] hover:bg-white hover:border-gray-300 focus:ring-gray-300',
    text: 'text-[#06B6D4] hover:text-[#0891B2] underline-offset-4 decoration-[#06B6D4]/30 hover:decoration-[#06B6D4] focus:ring-[#06B6D4]',
  };
  
  const sizeClasses = {
    sm: 'px-5 py-2 text-sm min-h-[36px]',
    md: 'px-6 py-3 text-sm md:text-base min-h-[44px]',
    lg: 'px-8 py-3 text-base md:text-lg min-h-[52px]',
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
