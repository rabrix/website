'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Offer: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';

  return (
    <section className="relative bg-white py-20 md:py-28">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          {/* Exclusivity Hook */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/20">
              <span className="w-2 h-2 rounded-full bg-[#007AFF] animate-pulse" />
              <span className="text-sm font-semibold text-[#007AFF]">Limited spots available</span>
            </div>
          </motion.div>

          {/* Main Headline - Premium, Not Desperate */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-[#1d1d1f] mb-6 leading-tight">
            We only work with agents who are <span className="text-[#007AFF]">ready to stop the cycle.</span>
          </h2>

          {/* The Reveal - $0 Upfront */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-10 max-w-2xl mx-auto"
          >
            <div className="rounded-2xl bg-gradient-to-br from-[#007AFF]/10 via-[#007AFF]/5 to-[#0051D5]/10 border-2 border-[#007AFF]/20 p-8 md:p-10 shadow-xl">
              <p className="text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-3">
                $0 upfront.
              </p>
              <p className="text-xl md:text-2xl text-[#424245] leading-relaxed">
                You cover ad spend. We handle everything else. <span className="font-semibold text-[#1d1d1f]">We only get paid when appointments show up on your calendar.</span>
              </p>
            </div>
          </motion.div>

          {/* What You Get - Clean, Scannable, Maintains Rhythm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10"
          >
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50/50 border border-gray-200/50">
                <CheckCircle2 className="w-6 h-6 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1d1d1f] mb-1">We build your lead engine</p>
                  <p className="text-sm text-[#424245]">Set up and run your online lead campaigns</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50/50 border border-gray-200/50">
                <CheckCircle2 className="w-6 h-6 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1d1d1f] mb-1">We follow up 7–9 times</p>
                  <p className="text-sm text-[#424245]">Every lead gets qualified, no exceptions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50/50 border border-gray-200/50">
                <CheckCircle2 className="w-6 h-6 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1d1d1f] mb-1">We book appointments</p>
                  <p className="text-sm text-[#424245]">Buyer meetings appear on your calendar</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50/50 border border-gray-200/50">
                <CheckCircle2 className="w-6 h-6 text-[#007AFF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1d1d1f] mb-1">You just show up and close</p>
                  <p className="text-sm text-[#424245]">With full buyer context before each meeting</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Strong CTA - Blue, Action-Oriented */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={calendlyUrl}
                className="inline-flex items-center gap-3 bg-[#007AFF] hover:bg-[#0051D5] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-[0_8px_24px_-8px_rgba(0,122,255,0.4)] hover:shadow-[0_12px_32px_-8px_rgba(0,122,255,0.5)] transition-all duration-200"
              >
                Start working with Rabrix
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
            <p className="text-sm text-[#86868b] mt-4">
              No commitment. See if we're a fit in 15 minutes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
