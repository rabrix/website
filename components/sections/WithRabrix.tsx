'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StoryCard } from '@/components/ui/StoryCard';
import { AppointmentSummary } from '@/components/ui/AppointmentSummary';
import { Button } from '@/components/ui/Button';

const moments = [
  {
    time: "6:30 AM",
    title: "☀️ You wake up. Check your phone.",
    metadata: "3 new leads already captured overnight. Rabrix handled them while you slept. You didn't touch a thing.",
    position: 'left' as const,
    expression: 'neutral' as const
  },
  {
    time: "11:00 AM",
    title: "📱 You're at a showing. Your phone buzzes.",
    metadata: "'Lead qualified. Budget: $450K. Area: Downtown. Timeline: 60 days.' Rabrix already had the conversation.",
    position: 'right' as const,
    expression: 'calm' as const
  },
  {
    time: "2:45 PM",
    title: "🔔 'Buyer appointment booked - Thursday 4 PM.'",
    metadata: "You open it. Everything you need is there. Budget, area, timeline, needs. You're prepared.",
    position: 'left' as const,
    expression: 'calm' as const
  },
  {
    time: "4:00 PM",
    title: "💼 You walk into the meeting knowing exactly what this buyer wants.",
    metadata: "No guessing. No awkward questions. Just closing.",
    position: 'right' as const,
    expression: 'confident' as const
  },
  {
    time: "8:00 PM",
    title: "🏠 You're home. Tomorrow's calendar?",
    metadata: "3 buyer appointments. All qualified. All ready. You worked the same hours, but this time? You actually closed deals.",
    position: 'left' as const,
    expression: 'confident' as const
  }
];

export const WithRabrix: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);


  return (
    <section id="with-rabrix" className="relative bg-gradient-to-b from-white via-[#06B6D4]/5 to-white py-12 md:py-16 lg:py-20 overflow-x-hidden">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent z-10" />
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#1d1d1f] mb-3">
            Now, your day <span className="gradient-premium">with Rabrix</span>
          </h2>
          <p className="text-base md:text-lg text-[#424245] max-w-2xl mx-auto">
            Same you. Same hours. <span className="font-semibold text-[#1d1d1f]">Completely different calendar.</span>
          </p>
        </motion.div>

        {/* Centered Layout: Cards and Image Together */}
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-center lg:items-center w-full max-w-6xl">
            {/* Left: Circular Flow Cards - True Arc Pattern */}
            <div className="relative w-full lg:w-[55%] order-2 lg:order-1">
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
                   paddingRight: '0px',
                 }}>
            {moments.map((moment, index) => {
              // True circular arc calculation - opposite of WithoutRabrix (desktop only)
              const totalCards = moments.length;
              const angle = (index / (totalCards - 1)) * Math.PI;
              const radius = 80;
              const arcOffset = Math.sin(angle) * radius;
              
              return (
                <StoryCard
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  time={moment.time}
                  title={moment.title}
                  metadata={moment.metadata}
                  variant="teal"
                  tailPosition="right"
                  animationDelay={index * 0.08}
                  arcOffset={-arcOffset}
                  index={index}
                >
                  {/* Appointment Summary Card */}
                  {index === 2 && (
                    <AppointmentSummary
                      buyer="John Smith"
                      budget="$450K"
                      area="Downtown"
                      timeline="60 days"
                    />
                  )}
                </StoryCard>
              );
            })}
            </div>
          </div>

            {/* Right: Banner Image - Centered Vertically and Horizontally */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full lg:w-[45%] lg:flex-shrink-0 lg:self-center order-1 lg:order-2 flex items-center justify-center"
            >
              {/* Image sized bigger to sync with 5-card circular arc pattern */}
              <div className="relative w-full aspect-[3/4] md:aspect-[2/3] lg:aspect-auto lg:h-[65vh] lg:max-h-[600px] mx-auto">
                <Image
                  // src="/banners/With_Rabrix.png"
                  src="https://p6l2vyu7e8eitno5.public.blob.vercel-storage.com/Public/With_Rabrix.png"
                  alt="Your day with Rabrix - confident, prepared, closing deals"
                  fill
                  className="object-contain"
                  loading="lazy"
                  fetchPriority="low"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bridge Sentence and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-8 md:mt-10 lg:mt-12"
        >
          <p className="text-base md:text-lg text-[#424245] mb-6 max-w-2xl mx-auto">
            Rabrix runs in the background so you can spend your time meeting buyers, not chasing ghosts.
          </p>
          <div className="flex flex-col items-center">
            <Button
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
              variant="primary"
              size="lg"
              className="text-lg px-10 py-5 shadow-[0_8px_24px_-8px_rgba(6,182,212,0.4)] hover:shadow-[0_12px_32px_-8px_rgba(6,182,212,0.5)] transition-all"
            >
              I'm Done Wasting Leads
            </Button>
            <p className="text-xs text-[#86868b] mt-2">
              Book your free calendar audit
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
