'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export const FinalCTA: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';
  
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-4"
          >
            Ready to stop wasting <span className="gradient-premium">good leads</span>?
          </motion.h2>
          
          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-3 text-sm md:text-base text-[#424245] mb-8 max-w-2xl mx-auto"
          >
            Rabrix chases, nurtures, and qualifies your leads. You show up ready to close.
          </motion.p>

          {/* Recap Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-xl p-6 md:p-8 mb-8 max-w-2xl mx-auto shadow-sm"
          >
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-[#FC466B]">✓</span>
                <span className="text-sm md:text-base text-[#424245]">Done-for-you online lead generation and follow-up.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-[#FC466B]">✓</span>
                <span className="text-sm md:text-base text-[#424245]">Qualified buyers with real intent, not just email addresses.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-[#FC466B]">✓</span>
                <span className="text-sm md:text-base text-[#424245]">Appointments booked directly on your calendar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-[#FC466B]">✓</span>
                <span className="text-sm md:text-base text-[#424245]">You only pay when we deliver buyer appointments.</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Button
              href={calendlyUrl}
              variant="primary"
              size="md"
            >
              Book a 15-min discovery call
            </Button>
          </motion.div>

          {/* Optional line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs md:text-sm mt-6 text-[#86868b] max-w-2xl mx-auto"
          >
            On the call, we'll walk you through how Rabrix would work in your market and go over exact numbers.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
