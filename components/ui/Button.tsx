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
    primary: 'bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white hover:from-[#E63950] hover:to-[#2E4AD9] shadow-lg shadow-[#FC466B]/40 focus:ring-[#FC466B]',
    secondary: 'bg-white/80 backdrop-blur-sm border border-gray-200/80 text-[#1d1d1f] hover:bg-white hover:border-gray-300 focus:ring-gray-300',
    text: 'text-[#667EEA] hover:text-[#764BA2] underline-offset-4 decoration-[#667EEA]/30 hover:decoration-[#667EEA] focus:ring-[#667EEA]',
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
