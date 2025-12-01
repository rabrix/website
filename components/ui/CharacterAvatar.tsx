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
    bg: 'from-[#FC466B]/15 via-[#FC466B]/8 to-[#3F5EFB]/5',
    borderColor: 'border-[#FC466B]/20',
    glow: 'from-[#FC466B]/30 to-[#3F5EFB]/20',
    emoji: '😓',
    description: 'Tired and stressed',
    shadow: 'shadow-[0_20px_60px_-15px_rgba(252,70,107,0.3)]'
  },
  neutral: {
    bg: 'from-[#86868b]/15 via-[#86868b]/8 to-[#86868b]/5',
    borderColor: 'border-[#86868b]/20',
    glow: 'from-[#86868b]/25 to-[#86868b]/15',
    emoji: '😐',
    description: 'Neutral',
    shadow: 'shadow-[0_20px_60px_-15px_rgba(134,134,139,0.2)]'
  },
  calm: {
    bg: 'from-[#667EEA]/15 via-[#667EEA]/8 to-[#764BA2]/5',
    borderColor: 'border-[#667EEA]/20',
    glow: 'from-[#667EEA]/30 to-[#764BA2]/20',
    emoji: '😌',
    description: 'Calm and relaxed',
    shadow: 'shadow-[0_20px_60px_-15px_rgba(102,126,234,0.3)]'
  },
  confident: {
    bg: 'from-[#667EEA]/20 via-[#764BA2]/12 to-[#F093FB]/8',
    borderColor: 'border-[#667EEA]/25',
    glow: 'from-[#667EEA]/35 to-[#F093FB]/25',
    emoji: '😊',
    description: 'Confident and happy',
    shadow: 'shadow-[0_20px_60px_-15px_rgba(102,126,234,0.35)]'
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
