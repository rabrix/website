'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';
  
  return (
    <section className="relative bg-white pt-20 pb-16 md:pt-32 md:pb-32 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f5f5f7]/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0071e3]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0071e3]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <Container size="narrow">
        <div className="text-center relative z-10">
          {/* Trust Hook - First 3 seconds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mb-4"
          >
            <p className="text-sm md:text-base font-medium text-[#0071e3] tracking-wide uppercase">
              Not an agency. Not a scam. The actual solution.
            </p>
          </motion.div>

          {/* Pain-Focused Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] mb-4 leading-[1.05] tracking-tight px-4"
          >
            Tired of <span className="text-[#ff3b30]">cold calls</span>, <span className="text-[#ff3b30]">wasted time</span>, and{' '}
            <span className="text-[#ff3b30]">feeling scammed</span>?
          </motion.h1>
          
          {/* Uniqueness Statement */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold gradient-premium mb-6 leading-[1.05] tracking-tight px-4"
          >
            We're not like them.
          </motion.h2>

          {/* Subheadline with USP */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-lg md:text-xl text-[#86868b] mb-4 max-w-2xl mx-auto font-normal leading-relaxed px-4"
          >
            We get you <span className="gradient-partial font-semibold">qualified buyers</span> with{' '}
            <span className="gradient-partial font-semibold">100% reach-out</span> - zero delay, natural tonality.{' '}
            <span className="font-semibold text-[#1d1d1f]">Something no human can do.</span>
          </motion.p>

          {/* Risk Reversal Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-base md:text-lg font-semibold text-[#1d1d1f] mb-8 max-w-2xl mx-auto px-4"
          >
            We get you all at <span className="text-[#0071e3]">OUR risk</span>. You just close deals.
          </motion.p>

          {/* Animated Flow: Leads → Qualification → Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mb-10 px-4"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-3xl mx-auto">
              {/* Leads */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg mb-2">
                  👥
                </div>
                <p className="text-sm md:text-base font-semibold text-[#1d1d1f]">Leads</p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-3xl md:text-4xl text-[#0071e3]"
              >
                →
              </motion.div>

              {/* Qualification Engine */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0 rgba(0, 113, 227, 0.4)',
                      '0 0 0 10px rgba(0, 113, 227, 0)',
                      '0 0 0 0 rgba(0, 113, 227, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#0071e3] to-blue-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg mb-2"
                >
                  ⚙️
                </motion.div>
                <p className="text-sm md:text-base font-semibold text-[#1d1d1f]">Qualification</p>
                <p className="text-xs text-[#86868b]">100% Reach-Out</p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="text-3xl md:text-4xl text-[#0071e3]"
              >
                →
              </motion.div>

              {/* Booked Appointment */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg mb-2">
                  ✅
                </div>
                <p className="text-sm md:text-base font-semibold text-[#1d1d1f]">Booked</p>
                <p className="text-xs text-[#86868b]">On Your Calendar</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Proof & Urgency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mb-8 px-4"
          >
            <p className="text-sm md:text-base text-[#86868b] mb-2">
              <span className="font-semibold text-[#1d1d1f]">Real results.</span> Not promises.
            </p>
            <p className="text-sm md:text-base text-[#ff3b30] font-semibold">
              ⚡ Limited spots available this month
            </p>
          </motion.div>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <Button
              href={calendlyUrl}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow text-lg font-semibold"
            >
              Get Qualified Buyers - We Take All The Risk
            </Button>
            <Button
              href="#solution"
              variant="text"
              size="lg"
              className="w-full sm:w-auto"
            >
              See how it works →
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
