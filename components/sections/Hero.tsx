'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowDown, TrendingDown, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';
  
  return (
    <section className="relative bg-gradient-to-b from-white via-white to-gray-50/30 pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32 overflow-x-hidden">
      {/* Enhanced background gradients with more depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#06B6D4]/10 via-[#06B6D4]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#06B6D4]/10 via-[#06B6D4]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#06B6D4]/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Pain Point Hook - Red Gradient Design */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-50/90 via-orange-50/80 to-red-50/90 border-2 border-red-200/60 px-6 py-3 shadow-lg backdrop-blur-sm">
              <TrendingDown className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="text-base md:text-lg font-bold bg-gradient-to-r from-red-600 via-red-500 to-orange-600 bg-clip-text text-transparent">
                Spending $500–$5,000/month on leads... <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">still getting empty calendars</span>
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
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#06B6D4] to-[#0891B2] rounded-full"
              />
            </span>
          </motion.h1>

          {/* Visual Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#06B6D4]/40 to-transparent mx-auto mb-8 rounded-full"
          />

          {/* Subhead - What Rabrix Does */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mb-8 max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-[#424245] leading-relaxed">
            Rabrix generates fresh buyer leads, nurtures them automatically, and books only qualified buyer appointments straight onto your calendar.
            </p>
          </motion.div>

          {/* One Line of Emotion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mb-8 max-w-2xl mx-auto"
          >
            <p className="text-base md:text-lg text-[#86868b] italic">
              No more chasing ghosts after <span className="text-red-500">14-hour days</span>.
            </p>
          </motion.div>

          {/* $0 Upfront - Badge Style Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mb-10 max-w-2xl mx-auto"
          >
            <div className="inline-flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#06B6D4]/20 shadow-md">
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <span className="text-xl md:text-2xl font-bold text-[#1d1d1f]">
                  $0 upfront.
                </span>
                <span className="text-xl md:text-2xl font-bold text-[#06B6D4]">
                  We take the risk.
                </span>
              </div>
              <p className="text-xs md:text-sm font-semibold text-[#424245] text-center leading-tight max-w-md">
                We only make money when buyer appointments show up on your calendar.
              </p>
              <div className="flex items-center gap-1.5 flex-wrap justify-center mt-1">
                <span className="text-xs text-[#86868b]">No upfront setup fees</span>
                <span className="text-[#86868b]">•</span>
                <span className="text-xs text-[#86868b]">No retainers</span>
                <span className="text-[#86868b]">•</span>
                <span className="text-xs text-[#86868b]">No management fees</span>
                <span className="text-[#86868b]">•</span>
                <span className="text-xs font-medium text-[#06B6D4]">Just appointments</span>
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
            <div className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  href={calendlyUrl}
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-3 shadow-[0_8px_24px_-8px_rgba(6,182,212,0.4)] hover:shadow-[0_12px_32px_-8px_rgba(6,182,212,0.5)] transition-all"
                >
                  Fill My Calendar
                </Button>
              </motion.div>
              <p className="text-xs text-[#86868b] mt-2">
                Book your free calendar audit
              </p>
            </div>
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
