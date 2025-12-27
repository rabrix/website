'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CharacterAvatar } from './CharacterAvatar';

interface StoryCard {
  text: string;
  timestamp?: string;
  highlight?: boolean;
  expression?: 'tired' | 'neutral' | 'calm' | 'confident';
}

interface StoryFlowProps {
  cards: StoryCard[];
  defaultExpression: 'tired' | 'neutral' | 'calm' | 'confident';
  className?: string;
}

export const StoryFlow: React.FC<StoryFlowProps> = ({ 
  cards, 
  defaultExpression,
  className = '' 
}) => {
  const [currentExpression, setCurrentExpression] = useState(defaultExpression);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Update expression based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const cardIndex = Math.floor(latest * cards.length);
      const card = cards[cardIndex];
      if (card?.expression) {
        setCurrentExpression(card.expression);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, cards]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-start">
        {/* Character - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-center lg:justify-end lg:sticky lg:top-32 order-2 lg:order-1"
        >
          <CharacterAvatar expression={currentExpression} />
        </motion.div>

        {/* Connecting Thread - Center (n8n-style flow) */}
        <div className="hidden lg:block relative order-2 w-1 self-stretch min-h-[600px]">
          {/* Vertical connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#06B6D4]/40 via-[#06B6D4]/30 to-[#06B6D4]/40" />
          
          {/* Connection nodes at each card position */}
          {cards.map((_, index) => {
            const position = (index + 1) / (cards.length + 1) * 100;
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1] 
                }}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ top: `${position}%` }}
              >
                <div className="w-5 h-5 rounded-full bg-[#06B6D4] border-2 border-white shadow-lg ring-2 ring-[#06B6D4]/20" />
              </motion.div>
            );
          })}
        </div>

        {/* Story Cards - Right Side (Right to Left Flow) */}
        <div className="space-y-6 order-1 lg:order-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.12,
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              className="relative"
            >
              {/* Connection line to center thread */}
              <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-[#06B6D4]/40 to-transparent" />
              
              <div
                className={`
                  relative rounded-3xl px-5 py-4 md:px-6 md:py-5
                  ${card.highlight 
                    ? 'bg-gradient-to-br from-[#06B6D4]/10 via-[#06B6D4]/5 to-[#0891B2]/10 border-2 border-[#06B6D4]/20 shadow-[0_8px_24px_-8px_rgba(6,182,212,0.25)]' 
                    : 'bg-white border border-gray-200/70 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.08)]'
                  }
                  transition-all duration-300 hover:shadow-lg
                  backdrop-blur-sm
                  overflow-hidden
                `}
              >
                {card.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
                )}
                
                <div className="relative z-10">
                  <p className={`text-sm md:text-base leading-relaxed ${card.highlight ? 'text-[#1d1d1f] font-medium' : 'text-[#424245]'}`}>
                    {card.text}
                  </p>
                  {card.timestamp && (
                    <p className={`text-xs mt-3 ${card.highlight ? 'text-[#06B6D4] font-medium' : 'text-[#86868b]'}`}>
                      {card.timestamp}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

