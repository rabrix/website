'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Expression = 'tired' | 'neutral' | 'calm' | 'confident';

interface CharacterAvatarProps {
  expression: Expression;
  className?: string;
}

const expressionStyles: Record<Expression, { 
  bg: string; 
  borderColor: string;
  glow: string;
  emoji: string; 
  description: string;
  shadow: string;
}> = {
  tired: {
    bg: 'from-[#86868b]/10 via-[#86868b]/5 to-[#86868b]/5',
    borderColor: 'border-[#86868b]/20',
    glow: 'from-[#86868b]/30 to-[#86868b]/20',
    emoji: '😓',
    description: 'Tired and stressed',
    shadow: 'shadow-[0_20px_60px_-15px_rgba(134,134,139,0.3)]'
  },
  neutral: {
    bg: 'from-[#86868b]/10 via-[#86868b]/5 to-[#86868b]/5',
    borderColor: 'border-[#86868b]/20',
    glow: 'from-[#86868b]/20 to-[#86868b]/10',
    emoji: '😐',
    description: 'Neutral',
    shadow: 'shadow-[0_20px_60px_-15px_rgba(134,134,139,0.2)]'
  },
  calm: {
    bg: 'from-[#06B6D4]/10 via-[#06B6D4]/5 to-[#0891B2]/5',
    borderColor: 'border-[#06B6D4]/20',
    glow: 'from-[#06B6D4]/30 to-[#0891B2]/20',
    emoji: '😌',
    description: 'Calm and relaxed',
    shadow: 'shadow-[0_20px_60px_-15px_rgba(6,182,212,0.3)]'
  },
  confident: {
    bg: 'from-[#06B6D4]/20 via-[#0891B2]/10 to-[#06B6D4]/5',
    borderColor: 'border-[#06B6D4]/20',
    glow: 'from-[#06B6D4]/30 to-[#0891B2]/20',
    emoji: '😊',
    description: 'Confident and happy',
    shadow: 'shadow-[0_20px_60px_-15px_rgba(6,182,212,0.35)]'
  }
};

export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({ expression, className = '' }) => {
  const style = expressionStyles[expression];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative ${className}`}
    >
      <div className="relative w-full max-w-[280px] md:max-w-[320px] mx-auto">
        {/* Outer glow ring */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${style.glow} blur-2xl opacity-60 -z-10 animate-pulse`} style={{ animationDuration: '3s' }} />
        
        {/* Character circle with enhanced styling */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className={`
            relative aspect-square rounded-full 
            bg-gradient-to-br ${style.bg} 
            flex items-center justify-center 
            ${style.shadow}
            border-2 ${style.borderColor}
            backdrop-blur-sm
            overflow-hidden
          `}
        >
          {/* Inner shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full" />
          
          {/* Emoji with better sizing */}
          <div className="relative z-10 text-7xl md:text-8xl select-none" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}>
            {style.emoji}
          </div>
          
          {/* Subtle inner shadow for depth */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/5 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  );
};
