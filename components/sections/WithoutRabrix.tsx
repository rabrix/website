'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const moments = [
  {
    time: "6:30 AM",
    title: "⏰ Alarm goes off. You're already behind.",
    metadata: "You check your phone. 3 new leads from last night. You save them for 'later' - you're already late for your first showing.",
    position: 'left' as const
  },
  {
    time: "11:00 AM",
    title: "📞 Between showings, you try to call those leads.",
    metadata: "Two go straight to voicemail. One picks up: 'Just looking around.' You hang up. Another waste of time.",
    position: 'right' as const
  },
  {
    time: "3:00 PM",
    title: "🚘 Driving to another showing. 5 more leads come in.",
    metadata: "You screenshot them. Tell yourself you'll handle it tonight. You know you won't.",
    position: 'left' as const
  },
  {
    time: "8:30 PM",
    title: "🏠 Finally home. You're drained.",
    metadata: "You call 2 leads. No answer. You text 3. One replies: 'Not interested anymore.' The others? Radio silence.",
    position: 'right' as const
  },
  {
    time: "10:00 PM",
    title: "💻 You close your laptop. Tomorrow's calendar?",
    metadata: "One listing appointment. Zero buyer meetings. You worked 14 hours today. For what?",
    position: 'left' as const
  }
];

export const WithoutRabrix: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section id="without-rabrix" className="relative bg-gradient-to-b from-white via-gray-50/30 to-gray-50/50 py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-8 md:mb-10 lg:mb-12"
        >
          <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#86868b] mb-2">See your day</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#1d1d1f] mb-1">
            This is what <span className="gradient-premium">your day looks like</span>
          </h2>
          <p className="text-xs md:text-sm text-[#424245] max-w-2xl mx-auto">
            Every single day. You're working. You're trying. Your calendar stays empty.
          </p>
        </motion.div>

        {/* Centered Layout: Image and Cards Together */}
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-center lg:items-start w-full max-w-6xl">
            {/* Left: Banner Image - Bigger Size */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full lg:w-[42%] lg:flex-shrink-0 lg:sticky lg:top-20 order-2 lg:order-1"
            >
              {/* Image sized bigger to sync with 5-card circular arc pattern */}
              <div className="relative w-full aspect-[3/4] md:aspect-[2/3] lg:aspect-auto lg:h-[60vh] lg:max-h-[550px] mx-auto lg:mx-0">
                <Image
                  src="/banners/Without_Rabrix.png"
                  alt="Your day without Rabrix - tired, overwhelmed, chasing leads"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </motion.div>

            {/* Right: Circular Flow Cards - True Arc Pattern */}
            <div className="relative w-full lg:w-[58%] order-1 lg:order-2">
              {/* Style for desktop arc effect */}
              <style dangerouslySetInnerHTML={{__html: `
                @media (min-width: 1024px) {
                  [data-arc-index] {
                    margin-left: var(--arc-offset) !important;
                  }
                }
              `}} />
              {/* Circular arc container with more gap */}
              <div className="relative flex flex-col justify-center space-y-3.5 md:space-y-4 lg:space-y-4.5" 
                 style={{
                   // Create circular arc path using CSS
                   paddingLeft: '0px',
                 }}>
            {moments.map((moment, index) => {
              // True circular arc calculation (desktop only)
              // Create a smooth arc: start at 0, curve outward, peak, curve back
              // Using a mathematical arc formula for smooth circular flow
              const totalCards = moments.length;
              const angle = (index / (totalCards - 1)) * Math.PI; // 0 to π (180 degrees)
              const radius = 80; // Arc radius in pixels (increased for more visible curve)
              const arcOffset = Math.sin(angle) * radius; // Circular arc calculation
              
              return (
                <motion.div
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  initial={{ opacity: 0, x: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.08,
                    ease: [0.25, 0.1, 0.25, 1] 
                  }}
                  className="relative w-full lg:w-auto"
                  style={{
                    // Mobile: no curve (0px), Desktop: circular arc (applied via CSS)
                    ['--arc-offset' as any]: `${arcOffset}px`,
                  }}
                  data-arc-index={index}
                >
                  {/* Optimized Notification Card for Longer Content */}
                  <div className="relative rounded-xl md:rounded-2xl bg-white border border-gray-200/50 px-4 py-3 md:px-5 md:py-3 shadow-sm shadow-black/5 hover:shadow-md transition-all duration-200">
                    {/* Row 1: Time Pill + Headline Together */}
                    <div className="flex items-start gap-2.5 mb-2.5">
                      {/* Time Pill */}
                     
                      
                      {/* Headline (Primary - Bold & Prominent) */}
                      <h3 className="text-sm md:text-base font-semibold text-[#1d1d1f] leading-tight flex-1">
                        {moment.title}
                      </h3>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#86868b]/5 border border-[#86868b]/10 flex-shrink-0 mt-0.5">
                        <span className="w-1 h-1 rounded-full bg-[#86868b]/50" />
                        <span className="text-[9px] md:text-[10px] text-[#86868b] font-medium whitespace-nowrap">
                          {moment.time}
                        </span>
                      </div>
                    </div>
                    
                    {/* Row 2: Metadata (Supporting Context - Readable) */}
                    <p className="text-xs md:text-sm text-[#424245]/75 leading-relaxed pl-0.5">
                      {moment.metadata}
                    </p>
                    
                    {/* Notification tail */}
                    <div className="absolute -left-1.5 top-3.5 w-1.5 h-1.5 bg-white border-l border-b border-gray-200/50 rotate-45 rounded-sm hidden md:block" />
                  </div>
                </motion.div>
              );
            })}
            </div>
          </div>
          </div>
        </div>

        {/* Compact Bottom Hook */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-8 md:mt-10 lg:mt-12"
        >
          <p className="text-lg md:text-xl font-bold text-[#1d1d1f] mb-1">
            Sound familiar?
          </p>
          <p className="text-sm md:text-base text-[#424245]">
            This doesn't have to be your day. Keep scrolling.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
