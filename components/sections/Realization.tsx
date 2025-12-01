'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Realization: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50/50 via-white to-white py-16 md:py-20">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          {/* The Realization - Short and Punchy */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1d1d1f] mb-8">
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
              The system expects you to be <span className="font-semibold text-[#FC466B]">everywhere at once</span>. That's not a skill problem. That's a <span className="font-semibold text-[#1d1d1f]">volume problem</span>.
            </p>
          </div>

          {/* The Solution - Cleaner Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="rounded-2xl bg-white border-2 border-gray-200/60 p-6 md:p-8 shadow-lg">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1f] leading-tight mb-3">
                What if you had a <span className="gradient-premium-alt">system that never sleeps?</span>
              </p>
              <p className="text-base md:text-lg text-[#424245] leading-relaxed">
                One that responds in minutes. Follows up 7–9 times. Qualifies every lead. Books appointments on your calendar. All while you're living your life.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
