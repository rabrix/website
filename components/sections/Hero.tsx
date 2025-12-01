'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowDown, XCircle, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';
  
  return (
    <section className="relative bg-gradient-to-b from-white via-white to-gray-50/30 pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Enhanced background gradients with more depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#FC466B]/10 via-[#FC466B]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#667EEA]/10 via-[#667EEA]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#667EEA]/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Pain Point Hook - More Visual Impact */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#FC466B]/10 via-[#FC466B]/5 to-[#FC466B]/10 border-2 border-[#FC466B]/30 px-6 py-3 shadow-lg backdrop-blur-sm">
              <XCircle className="w-5 h-5 text-[#FC466B] flex-shrink-0" />
              <p className="text-base md:text-lg font-bold text-[#FC466B]">
                Spending $500–$5,000/month on leads... <span className="text-[#FC466B]/80">still getting empty calendars</span>
              </p>
            </div>
          </motion.div>

          {/* Main Headline - Better Visual Treatment */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.02em] mb-10 leading-[1.05] text-[#1d1d1f] max-w-5xl mx-auto"
          >
            Your leads aren't the problem.
            <br />
            <span className="relative inline-block">
              <span className="gradient-premium">Your follow-up is.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] rounded-full"
              />
            </span>
          </motion.h1>

          {/* Visual Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#667EEA]/40 to-transparent mx-auto mb-10 rounded-full"
          />

          {/* The Pain Scenario - More Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mb-10 max-w-3xl mx-auto"
          >
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/60 p-6 md:p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FC466B]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#FC466B]" />
                </div>
                <div className="text-left">
                  <p className="text-lg md:text-xl lg:text-2xl text-[#424245] leading-relaxed">
                    You're at a showing when <span className="font-semibold text-[#1d1d1f]">5 leads come in</span>. By the time you call them, they've already talked to <span className="font-semibold text-[#FC466B]">3 other agents</span>.
                  </p>
                  <p className="text-base md:text-lg text-[#86868b] mt-2 italic">
                    You're chasing ghosts.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Solution - Clean and Direct */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mb-10 max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-[#1d1d1f] font-bold mb-4">
              We respond in minutes. We follow up 7–9 times. We qualify them.
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl text-[#1d1d1f] font-bold">
              <span className="gradient-premium">You just show up and close.</span>
            </p>
          </motion.div>

          {/* $0 Upfront Hook - Cleaner, Less Overwhelming */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mb-10 max-w-2xl mx-auto"
          >
            <div className="rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-[#667EEA]/20 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-3">
                  $0 upfront. <span className="gradient-premium-alt">We take the risk.</span>
                </p>
                <p className="text-base md:text-lg text-[#424245] leading-relaxed mb-4">
                  You cover ad spend (you're already doing that). We handle follow-up, qualification, and booking.
                </p>
                <p className="text-sm md:text-base font-semibold text-[#1d1d1f] mb-4">
                  We only get paid when buyer appointments show up on your calendar.
                </p>
                <div className="pt-4 border-t border-gray-200/60">
                  <p className="text-sm text-[#86868b]">
                    No retainers. No monthly fees for "management." Just appointments.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTAs - Better Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                href={calendlyUrl}
                variant="primary"
                size="lg"
                className="text-lg px-10 py-5 shadow-[0_8px_24px_-8px_rgba(252,70,107,0.4)] hover:shadow-[0_12px_32px_-8px_rgba(252,70,107,0.5)] transition-all"
              >
                Book a 15-min discovery call
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                href="#without-rabrix"
                variant="text"
                size="lg"
                className="text-base group"
              >
                See your day without Rabrix
                <ArrowDown className="inline-block ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
