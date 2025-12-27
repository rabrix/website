'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const WhoIsThisFor: React.FC = () => {
  return (
    <section id="who-is-this-for" className="relative bg-white py-16 md:py-20 lg:py-24">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1d1d1f] text-center mb-12"
        >
          Is <span className="gradient-premium-alt">Rabrix</span> a fit for you?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm md:backdrop-blur-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-6 text-[#06B6D4] tracking-tight">Rabrix is for you if:</h3>
            <ul className="space-y-4 text-[#424245]">
              <li className="flex items-start gap-3">
                <span className="text-[#06B6D4] mt-1">•</span>
                <span className="text-sm md:text-base leading-relaxed">You want a predictable flow of online leads turning into buyer appointments.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#06B6D4] mt-1">•</span>
                <span className="text-sm md:text-base leading-relaxed">You're tired of doing all the follow-up yourself or paying agencies with no clear appointments to show for it.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#06B6D4] mt-1">•</span>
                <span className="text-sm md:text-base leading-relaxed">You're happy to cover ad spend and pay per appointment when real buyers show up on your calendar.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#06B6D4] mt-1">•</span>
                <span className="text-sm md:text-base leading-relaxed">You actually enjoy closing deals once you're in the room or on the call.</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm md:backdrop-blur-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-6 text-[#86868b] tracking-tight">Rabrix is not for you if:</h3>
            <ul className="space-y-4 text-[#424245]">
              <li className="flex items-start gap-3">
                <span className="text-[#86868b] mt-1">•</span>
                <span className="text-sm md:text-base leading-relaxed">You don't want to invest in online lead generation at all.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#86868b] mt-1">•</span>
                <span className="text-sm md:text-base leading-relaxed">You insist on personally handling every call/message with every lead.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#86868b] mt-1">•</span>
                <span className="text-sm md:text-base leading-relaxed">You're looking for a DIY course or just more software instead of done-for-you execution.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
