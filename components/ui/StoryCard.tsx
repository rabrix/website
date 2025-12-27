'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface StoryCardProps {
  time: string;
  title: string;
  metadata: string;
  variant?: 'default' | 'teal';
  tailPosition?: 'left' | 'right';
  animationDelay?: number;
  arcOffset?: number;
  index?: number;
  children?: React.ReactNode;
}

export const StoryCard = React.forwardRef<HTMLDivElement, StoryCardProps>(({
  time,
  title,
  metadata,
  variant = 'default',
  tailPosition = 'left',
  animationDelay = 0,
  arcOffset = 0,
  index = 0,
  children,
}, ref) => {
  const isTeal = variant === 'teal';
  const timePillBg = isTeal ? 'bg-[#06B6D4]/5' : 'bg-[#86868b]/5';
  const timePillBorder = isTeal ? 'border-[#06B6D4]/10' : 'border-[#86868b]/10';
  const timePillDot = isTeal ? 'bg-[#06B6D4]' : 'bg-[#86868b]/50';
  const timePillText = isTeal ? 'text-[#06B6D4]' : 'text-[#86868b]';
  const tailPositionClass = tailPosition === 'right' ? '-right-1.5' : '-left-1.5';
  const tailRotate = tailPosition === 'right' ? '-rotate-45' : 'rotate-45';
  const tailBorder = tailPosition === 'right' ? 'border-r border-b' : 'border-l border-b';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: tailPosition === 'right' ? -20 : 20, scale: 0.98 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ 
        duration: 0.4, 
        delay: animationDelay,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className="relative w-full lg:w-auto"
      style={{
        ['--arc-offset' as any]: `${arcOffset}px`,
      }}
      data-arc-index={index}
    >
      {/* Optimized Notification Card */}
      <div className="relative rounded-xl md:rounded-2xl bg-white border border-gray-200/50 px-4 py-3 md:px-5 md:py-3 shadow-sm shadow-black/5 hover:shadow-md transition-all duration-200">
        {/* Row 1: Time Pill + Headline Together */}
        <div className="flex items-start gap-2.5 mb-2.5">
          {/* Headline (Primary - Bold & Prominent) */}
          <h3 className="text-sm md:text-base font-semibold text-[#1d1d1f] leading-tight flex-1">
            {title}
          </h3>
          
          {/* Time Pill */}
          <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full ${timePillBg} border ${timePillBorder} flex-shrink-0 mt-0.5`}>
            <span className={`w-1 h-1 rounded-full ${timePillDot} ${isTeal ? 'animate-pulse' : ''}`} />
            <span className={`text-[9px] md:text-[10px] ${timePillText} font-medium whitespace-nowrap`}>
              {time}
            </span>
          </div>
        </div>
        
        {/* Row 2: Metadata (Supporting Context - Readable) */}
        <p className="text-xs md:text-sm text-[#424245]/75 leading-relaxed pl-0.5">
          {metadata}
        </p>
        
        {/* Notification tail */}
        <div className={`absolute ${tailPositionClass} top-3.5 w-1.5 h-1.5 bg-white ${tailBorder} border-gray-200/50 ${tailRotate} rounded-sm hidden md:block`} />
      </div>
      
      {/* Additional content (e.g., Appointment Summary) */}
      {children}
    </motion.div>
  );
});

StoryCard.displayName = 'StoryCard';

