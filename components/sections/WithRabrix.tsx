'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const moments = [
  {
    time: "6:30 AM",
    title: "You wake up. Check your phone.",
    text: "3 new leads already captured overnight. Rabrix handled them while you slept. You didn't touch a thing.",
    position: 'left' as const,
    expression: 'neutral' as const
  },
  {
    time: "11:00 AM",
    title: "You're at a showing. Your phone buzzes.",
    text: "'Lead qualified. Budget: $450K. Area: Downtown. Timeline: 60 days.' Rabrix already had the conversation.",
    position: 'right' as const,
    expression: 'calm' as const
  },
  {
    time: "2:45 PM",
    title: "Another notification: 'Buyer appointment booked - Thursday 4 PM.'",
    text: "You open it. Everything you need is there. Budget, area, timeline, needs. You're prepared.",
    position: 'left' as const,
    expression: 'calm' as const
  },
  {
    time: "4:00 PM",
    title: "You walk into the meeting knowing exactly what this buyer wants.",
    text: "No guessing. No awkward questions. Just closing.",
    position: 'right' as const,
    expression: 'confident' as const
  },
  {
    time: "8:00 PM",
    title: "You're home. Tomorrow's calendar?",
    text: "3 buyer appointments. All qualified. All ready. You worked the same hours, but this time? You actually closed deals.",
    position: 'left' as const,
    expression: 'confident' as const
  }
];

export const WithRabrix: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);


  return (
    <section id="with-rabrix" className="relative bg-gradient-to-b from-white via-[#667EEA]/5 to-white py-20 md:py-32 overflow-hidden">
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
          <div className="text-xs uppercase tracking-[0.2em] text-[#86868b] mb-3">With Rabrix</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-[#1d1d1f] mb-2">
            This is that day.
          </h2>
          <p className="text-sm md:text-base text-[#424245] max-w-2xl mx-auto leading-relaxed">
            Same hours. Same you. <span className="font-semibold text-[#1d1d1f]">Different results.</span>
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
            <div className="rounded-3xl border border-gray-200/60 bg-gradient-to-br from-emerald-50/80 via-white/90 to-emerald-50/60 backdrop-blur-sm p-6 md:p-8 shadow-2xl shadow-black/10">
              <div className="flex flex-col items-center mb-4">
                <div className="size-16 rounded-full bg-emerald-100/80 flex items-center justify-center text-2xl mb-3">
                  😊
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#86868b] mb-2">With Rabrix</div>
                <div className="text-2xl font-semibold text-[#1d1d1f]">Confident & Prepared</div>
              </div>
              <div className="space-y-2 text-sm text-[#424245]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                  <span>3 buyer appointments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                  <span>All qualified</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                  <span>Ready to close</span>
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
                  {/* Left border accent - positive mood */}
                  <div className="absolute inset-y-3 left-0 w-1 rounded-full bg-emerald-500/70" />
                  
                  {/* Timeline Card */}
                  <div className="rounded-2xl border border-gray-200/60 bg-white/90 backdrop-blur-sm p-4 md:p-5 shadow-lg shadow-black/10">
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
                  
                  {/* Micro UI Card - Appointment Summary (shown after 2:45 PM moment) */}
                  {index === 2 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="mt-4 max-w-md rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm p-5 shadow-xl shadow-black/25"
                    >
                      <div className="text-xs uppercase tracking-[0.2em] text-[#86868b] mb-4">Appointment Summary</div>
                      <div className="grid grid-cols-[1fr,1.2fr] gap-x-3 gap-y-2 text-sm text-[#1d1d1f]">
                        <span className="text-[#86868b]">Buyer:</span>
                        <span className="font-semibold">John Smith</span>
                        <span className="text-[#86868b]">Budget:</span>
                        <span className="font-semibold">$450K</span>
                        <span className="text-[#86868b]">Area:</span>
                        <span className="font-semibold">Downtown</span>
                        <span className="text-[#86868b]">Timeline:</span>
                        <span className="font-semibold">60 days</span>
                        <span className="text-[#86868b]">Notes:</span>
                        <span className="font-semibold">First-time buyer, needs 2BR</span>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-200/50">
                        <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-600 border border-emerald-500/40">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[11px] font-semibold">Confirmed</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
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
            This is what your day could look like.
          </p>
          <p className="text-base md:text-lg text-[#424245]">
            Same hours. Different results. Because Rabrix runs in the background.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
