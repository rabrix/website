'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Download, Zap, CalendarCheck, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';
  
  return (
    <section className="relative bg-white pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle static background gradient - no weird animation */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FC466B]/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#667EEA]/8 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Pain Hook - Immediate attention grabber */}
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mb-6"
          >
            <p className="text-sm md:text-base font-semibold text-[#FC466B] tracking-wide">
              Your calendar is empty. Your phone is silent. Your leads are going cold.
            </p>
          </motion.div> */}

          {/* Main Headline - Strikethrough effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-[#1d1d1f] flex flex-wrap items-center justify-center gap-3 md:gap-6"
          >
            <span>Start</span>
            <span className="relative inline-block">
              <span>chasing</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute left-0 top-1/2 w-full h-1 bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] origin-left"
                style={{ transform: 'translateY(-50%)' }}
              />
            </span>
            <span className="gradient-premium">closing deals</span>
          </motion.h1>

          {/* Subheadline - Bolder and more engaging */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-8 max-w-3xl mx-auto leading-tight"
          >
            Online leads → <span className="gradient-premium">Qualified buyer</span> → <span>On your calendar</span>
            <br />
            <span className="text-lg md:text-xl font-semibold text-[#424245] mt-2 block">
              100% reach-out. Zero work from you.
            </span>
          </motion.p>

          {/* Clean Flow Cards with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="my-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              {/* Step 1 */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative group"
              >
                <div className="rounded-2xl bg-white border-2 border-gray-200/60 p-6 shadow-sm hover:shadow-lg transition-all w-[200px]">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#FC466B]/10 to-[#3F5EFB]/10 mb-4 mx-auto">
                    <Download className="w-6 h-6 text-[#FC466B]" />
                  </div>
                  <div className="text-base font-bold text-[#1d1d1f] mb-1">Leads Come In</div>
                  <div className="text-xs text-[#86868b]">24/7 from ads</div>
                </div>
              </motion.div>

              {/* Arrow 1 */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="hidden md:block"
              >
                <ArrowRight className="w-6 h-6 text-[#86868b]" />
              </motion.div>

              {/* Step 2 - Rabrix Engine */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="relative group"
              >
                <div className="rounded-2xl bg-white border-2 border-[#667EEA]/30 p-6 shadow-sm hover:shadow-lg transition-all w-[200px] bg-gradient-to-br from-[#667EEA]/5 to-white">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#667EEA] to-[#764BA2] mb-4 mx-auto">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-base font-bold text-[#1d1d1f] mb-1">
                    <span className="gradient-premium-alt">Rabrix</span> Qualifies
                  </div>
                  <div className="text-xs text-[#86868b]">100% reach-out, instant</div>
                </div>
              </motion.div>

              {/* Arrow 2 */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="hidden md:block"
              >
                <ArrowRight className="w-6 h-6 text-[#86868b]" />
              </motion.div>

              {/* Step 3 - Booked */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="relative group"
              >
                <div className="rounded-2xl bg-white border-2 border-gray-200/60 p-6 shadow-sm hover:shadow-lg transition-all w-[200px]">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#F093FB]/10 to-[#764BA2]/10 mb-4 mx-auto">
                    <CalendarCheck className="w-6 h-6 text-[#764BA2]" />
                  </div>
                  <div className="text-base font-bold text-[#1d1d1f] mb-1">Appointment Booked</div>
                  <div className="text-xs text-[#86868b]">On your calendar</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Value Prop - Quick */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-[#86868b] mb-8 max-w-2xl mx-auto"
          >
           We only earn when we put <span className="gradient-premium font-semibold">buyer appointments</span> on your calendar.
          </motion.p>

          {/* CTAs - Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                href={calendlyUrl}
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
              >
                Book a 15-min discovery call
              </Button>
            </motion.div>
            <Button
              href="#solution"
              variant="text"
              size="lg"
              className="text-base"
            >
              See how it works →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
