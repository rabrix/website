'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const moments = [
  {
    time: "6:30 AM",
    title: "Alarm goes off. You're already behind.",
    text: "You check your phone. 3 new leads from last night. You save them for 'later' - you're already late for your first showing.",
    position: 'left' as const
  },
  {
    time: "11:00 AM",
    title: "Between showings, you try to call those leads.",
    text: "Two go straight to voicemail. One picks up: 'Just looking around.' You hang up. Another waste of time.",
    position: 'right' as const
  },
  {
    time: "3:00 PM",
    title: "Driving to another showing. 5 more leads come in.",
    text: "You screenshot them. Tell yourself you'll handle it tonight. You know you won't.",
    position: 'left' as const
  },
  {
    time: "8:30 PM",
    title: "Finally home. You're drained.",
    text: "You call 2 leads. No answer. You text 3. One replies: 'Not interested anymore.' The others? Radio silence.",
    position: 'right' as const
  },
  {
    time: "10:00 PM",
    title: "You close your laptop. Tomorrow's calendar?",
    text: "One listing appointment. Zero buyer meetings. You worked 14 hours today. For what?",
    position: 'left' as const
  }
];

export const WithoutRabrix: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section id="without-rabrix" className="relative bg-gradient-to-b from-white via-gray-50/30 to-gray-50/50 py-20 md:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-[#86868b] mb-3">See your day</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-[#1d1d1f] mb-2">
            This is what <span className="gradient-premium">your day looks like</span>
          </h2>
          <p className="text-sm md:text-base text-[#424245] max-w-2xl mx-auto leading-relaxed">
            Every single day. You're working. You're trying. Your calendar stays empty.
          </p>
        </motion.div>

        {/* Grid layout: Character + Timeline */}
        <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-8 md:gap-12 items-start">
          {/* Left: Character block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <div className="rounded-3xl border border-gray-200/60 bg-gradient-to-br from-rose-50/80 via-white/90 to-rose-50/60 backdrop-blur-sm p-6 md:p-8 shadow-2xl shadow-black/10">
              <div className="flex flex-col items-center mb-4">
                <div className="size-16 rounded-full bg-rose-100/80 flex items-center justify-center text-2xl mb-3">
                  😓
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#86868b] mb-2">Your Reality</div>
                <div className="text-2xl font-semibold text-[#1d1d1f]">Tired & Overwhelmed</div>
              </div>
              <div className="space-y-2 text-sm text-[#424245]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
                  <span>14-hour days</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
                  <span>Empty calendar</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
                  <span>Chasing ghosts</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline stack */}
          <div className="space-y-4">

            {moments.map((moment, index) => {
              return (
                <motion.div
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1] 
                  }}
                  className="relative pl-4 md:pl-5"
                >
                  {/* Left border accent - negative mood */}
                  <div className="absolute inset-y-3 left-0 w-1 rounded-full bg-rose-500/70" />
                  
                  {/* Timeline Card */}
                  <div className="rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm p-4 md:p-5 shadow-lg shadow-black/10">
                    {/* Time label */}
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#86868b] mb-2">
                      {moment.time}
                    </p>
                    
                    {/* Title line */}
                    <p className="text-lg font-semibold text-[#1d1d1f] mt-1 mb-2">
                      {moment.title}
                    </p>
                    
                    {/* Body text */}
                    <p className="text-sm md:text-base text-[#424245] mt-1 leading-relaxed">
                      {moment.text}
                    </p>
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
          className="text-center mt-14 md:mt-20"
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
