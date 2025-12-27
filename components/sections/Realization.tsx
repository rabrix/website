'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Realization: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50/50 via-white to-white py-20 md:py-28 lg:py-32">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent z-10" />
      {/* Enhanced background for prominence */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/5 via-transparent to-[#0891B2]/5" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          {/* The Realization - Short and Punchy - Enhanced */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.02em] text-[#1d1d1f] mb-10 leading-tight">
            It's not you.
            <br />
            <span className="gradient-premium">It's the system.</span>
          </h2>
          
          {/* The Real Problem - Short and Punchy (No Redundancy) */}
          <div className="mb-6 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-[#424245] leading-relaxed mb-4">
              You're working 14-hour days. You're closing deals. You're grinding.
            </p>
            <p className="text-lg md:text-xl text-[#1d1d1f] font-semibold leading-relaxed">
              The system expects you to be <span className="font-semibold text-[#06B6D4]">everywhere at once</span>. That's not a skill problem. That's a <span className="font-semibold text-[#1d1d1f]">volume problem</span>.
            </p>
          </div>

          {/* The Solution - Enhanced Design with More Visual Weight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="rounded-3xl bg-gradient-to-br from-white via-[#06B6D4]/5 to-white border-2 border-[#06B6D4]/20 p-8 md:p-10 lg:p-12 shadow-2xl">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d1d1f] leading-tight mb-4">
                What if you had a <span className="gradient-premium-alt">system that never sleeps?</span>
              </p>
              <p className="text-lg md:text-xl text-[#424245] leading-relaxed">
                One that responds in minutes. Follows up 7–9 times. Qualifies every lead. Books appointments on your calendar. All while you're living your life.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
