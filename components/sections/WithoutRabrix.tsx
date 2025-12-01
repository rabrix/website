'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { CharacterAvatar } from '@/components/ui/CharacterAvatar';

const moments = [
  {
    time: "6:30 AM",
    text: "Alarm goes off. You check your phone. 3 new leads from last night. You save them for 'later' - you're already late for your first showing.",
    position: 'left' as const
  },
  {
    time: "11:00 AM",
    text: "Between showings, you try to call those leads. Two go straight to voicemail. One picks up: 'Just looking around.' You hang up. Another waste of time.",
    position: 'right' as const
  },
  {
    time: "3:00 PM",
    text: "Driving to another showing. 5 more leads come in. You screenshot them. Tell yourself you'll handle it tonight. You know you won't.",
    position: 'left' as const
  },
  {
    time: "8:30 PM",
    text: "Finally home. You're drained. You call 2 leads. No answer. You text 3. One replies: 'Not interested anymore.' The others? Radio silence.",
    position: 'right' as const
  },
  {
    time: "10:00 PM",
    text: "You close your laptop. Tomorrow's calendar? One listing appointment. Zero buyer meetings. You worked 14 hours today. For what?",
    position: 'left' as const
  }
];

export const WithoutRabrix: React.FC = () => {
  const [currentExpression, setCurrentExpression] = useState<'tired'>('tired');
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', () => {
      setCurrentExpression('tired');
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section id="without-rabrix" className="relative bg-gradient-to-b from-white via-gray-50/30 to-gray-50/50 py-20 md:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-[#1d1d1f] mb-6">
            This is what <span className="gradient-premium">your day looks like</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#424245] max-w-3xl mx-auto leading-relaxed font-medium">
            Every single day. You're working. You're trying. Your calendar stays empty.
          </p>
        </motion.div>

        {/* Character at top */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CharacterAvatar expression={currentExpression} />
          </motion.div>
        </div>

        {/* Curved Flow with iPhone-style Cards */}
        <div ref={containerRef} className="relative">
          {/* Single SVG for all connecting lines */}
          <svg 
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ overflow: 'visible' }}
          >
            {moments.map((moment, index) => {
              if (index === moments.length - 1) return null;
              
              const isLeft = moment.position === 'left';
              const nextIsRight = moments[index + 1].position === 'right';
              
              // Card spacing and positions
              const cardSpacing = 320;
              const leftCardCenterX = 200; // Left card center X
              const rightCardCenterX = 600; // Right card center X
              
              // Start point (bottom of current card)
              const startX = isLeft ? leftCardCenterX : rightCardCenterX;
              const startY = index * cardSpacing + 180;
              
              // End point (top of next card)
              const endX = nextIsRight ? rightCardCenterX : leftCardCenterX;
              const endY = (index + 1) * cardSpacing + 60;
              
              // Control points for smooth curve
              const midX = 400; // Center of container
              const controlX1 = midX;
              const controlY1 = startY + (endY - startY) * 0.4;
              const controlX2 = midX;
              const controlY2 = startY + (endY - startY) * 0.6;
              
              return (
                <motion.path
                  key={index}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-200px" }}
                  transition={{ duration: 1.2, delay: index * 0.2 + 0.6, ease: "easeInOut" }}
                  d={`M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
                  stroke="#1d1d1f"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  className="opacity-70"
                />
              );
            })}
          </svg>

          {/* iPhone-style Message Cards */}
          <div className="relative z-10 space-y-20 md:space-y-28">
            {moments.map((moment, index) => {
              const isLeft = moment.position === 'left';
              
              return (
                <motion.div
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: [0.25, 0.1, 0.25, 1] 
                  }}
                  className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}
                >
                  {/* iPhone Message Bubble - Premium Design */}
                  <div className={`w-full md:max-w-md ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className={`
                      relative rounded-2xl px-5 py-4 md:px-6 md:py-5
                      ${isLeft 
                        ? 'bg-white' 
                        : 'bg-[#E5E5EA]'
                      }
                      shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                    `}
                    style={{
                      borderRadius: isLeft ? '18px 18px 18px 4px' : '18px 18px 4px 18px'
                    }}
                    >
                      {/* Timestamp - iPhone style */}
                      <p className="text-xs font-medium text-[#86868b] mb-3">
                        {moment.time}
                      </p>
                      
                      {/* Message text - iPhone style */}
                      <p className="text-sm md:text-base leading-relaxed text-[#1d1d1f]">
                        {moment.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-2">
            Sound familiar?
          </p>
          <p className="text-base md:text-lg text-[#424245]">
            This doesn't have to be your day. Keep scrolling.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
