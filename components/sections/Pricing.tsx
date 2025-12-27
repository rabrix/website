'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-gray-50/30 to-white py-16 md:py-20 lg:py-24">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1d1d1f] mb-12"
          >
            Simple, <span className="gradient-premium">transparent</span> model
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-3xl border-2 border-[#06B6D4]/20 bg-gradient-to-br from-white via-[#06B6D4]/5 to-white backdrop-blur-sm md:backdrop-blur-xl p-8 md:p-10 lg:p-12 max-w-3xl mx-auto shadow-[0_8px_32px_-8px_rgba(6,182,212,0.15)] hover:shadow-[0_12px_40px_-8px_rgba(6,182,212,0.25)] transition-shadow duration-300"
          >
            <ul className="space-y-5 text-left mb-8">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#06B6D4] flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-base md:text-lg text-[#424245] leading-relaxed pt-0.5">
                  You cover your ad spend directly to the platform.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#06B6D4] flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-base md:text-lg text-[#424245] leading-relaxed pt-0.5">
                  You pay a simple monthly platform fee for Rabrix.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#06B6D4] flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span className="text-base md:text-lg text-[#424245] leading-relaxed pt-0.5">
                  You pay a straightforward fee per buyer appointment we put on your calendar.
                </span>
              </li>
            </ul>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base md:text-lg text-[#86868b] text-center leading-relaxed"
            >
              On our call, we'll walk you through exact numbers for your market and goals.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
