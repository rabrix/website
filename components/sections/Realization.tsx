'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Clock, Phone, Calendar, Zap } from 'lucide-react';

export const Realization: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50/50 via-white to-white py-16 md:py-20 lg:py-24">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent z-10" />
      {/* Enhanced background for prominence */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/5 via-transparent to-[#0891B2]/5" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          {/* The Realization - More Specific and Relatable */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.02em] text-[#1d1d1f] mb-6 leading-tight">
            It's not you.
            <br />
            <span className="gradient-premium">It's the system.</span>
          </h2>
          
          {/* Subheadline - Quick Context */}
          <p className="text-lg md:text-xl text-[#424245] mb-12 max-w-2xl mx-auto">
            You're working 14-hour days. You're closing deals. But the system expects you to be everywhere at once.
          </p>

          {/* The Solution - Visual Contrast, Clear Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="rounded-3xl bg-gradient-to-br from-white via-[#06B6D4]/5 to-white border-2 border-[#06B6D4]/20 p-8 md:p-10 lg:p-12 shadow-2xl">
              {/* Solution Headline */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1f] leading-tight">
                  What if you had a <span className="gradient-premium-alt">system that never sleeps?</span>
                </h3>
              </div>
              
              {/* Solution Benefits - Tight Mechanism Explanation */}
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#06B6D4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                  </div>
                  <p className="text-base md:text-lg text-[#424245] leading-relaxed">
                    <span className="font-semibold text-[#1d1d1f]">Responds to new leads in minutes.</span> While you slept, it responded. While you showed homes, it qualified.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#06B6D4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                  </div>
                  <p className="text-base md:text-lg text-[#424245] leading-relaxed">
                    <span className="font-semibold text-[#1d1d1f]">Follows up across channels, 7–9 times, always friendly.</span> Not rushed. Not at 10 PM. The conversation you wish you had time for.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#06B6D4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                  </div>
                  <p className="text-base md:text-lg text-[#424245] leading-relaxed">
                    <span className="font-semibold text-[#1d1d1f]">Asks about budget, area, timeline, needs.</span> Only sends you the ones who are actually ready to talk.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#06B6D4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                  </div>
                  <p className="text-base md:text-lg text-[#424245] leading-relaxed">
                    <span className="font-semibold text-[#1d1d1f]">If a lead goes quiet, it doesn't give up.</span> Calls them directly, tries multiple channels—all friendly, never pushy. Because every potential client matters.
                  </p>
                </div>
              </div>

              {/* Closing Hook */}
              <div className="mt-8 pt-6 border-t border-[#06B6D4]/20">
                <p className="text-lg md:text-xl font-semibold text-[#1d1d1f] text-center">
                  All while you're <span className="text-[#06B6D4]">living your life</span>, not living in your inbox.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
