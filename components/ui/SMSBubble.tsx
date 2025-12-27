'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SMSBubbleProps {
  text: string;
  timestamp?: string;
  variant?: 'default' | 'highlight';
  delay?: number;
  className?: string;
}

export const SMSBubble: React.FC<SMSBubbleProps> = ({ 
  text, 
  timestamp, 
  variant = 'default',
  delay = 0,
  className = '' 
}) => {
  const isHighlight = variant === 'highlight';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      whileHover={{ y: -2 }}
      className={`mb-5 ${className}`}
    >
      <div
        className={`
          relative rounded-3xl px-5 py-4 md:px-6 md:py-5
          ${isHighlight 
            ? 'bg-gradient-to-br from-[#06B6D4]/10 via-[#06B6D4]/5 to-[#0891B2]/10 border border-[#06B6D4]/20 shadow-[0_8px_24px_-8px_rgba(6,182,212,0.25)]' 
            : 'bg-white border border-gray-200/70 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]'
          }
          transition-all duration-300
          backdrop-blur-sm
          overflow-hidden
        `}
      >
        {/* Subtle inner highlight */}
        {isHighlight && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
        )}
        
        {/* Text content */}
        <div className="relative z-10">
          <p className={`text-sm md:text-base leading-relaxed ${isHighlight ? 'text-[#1d1d1f] font-medium' : 'text-[#424245]'}`}>
            {text}
          </p>
          {timestamp && (
            <p className={`text-xs mt-3 ${isHighlight ? 'text-[#06B6D4] font-medium' : 'text-[#86868b]'}`}>
              {timestamp}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
