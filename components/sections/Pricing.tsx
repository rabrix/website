'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';
  
  return (
    <section id="pricing" className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-4"
          >
            We only win when <span className="gradient-premium">you</span> win
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-3 text-sm md:text-base text-[#424245] mb-12 max-w-2xl mx-auto"
          >
            You're not paying for 'activity'. You're paying for buyer appointments.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-3xl border border-gray-200/60 bg-white/80 backdrop-blur-2xl p-6 md:p-8 space-y-6 max-w-3xl mx-auto shadow-lg"
          >
            <div className="space-y-2 text-left">
              <div className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-[#FC466B]">✓</span>
                <span className="text-sm md:text-base text-[#424245]">You cover your ad spend directly to the platform.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-[#FC466B]">✓</span>
                <span className="text-sm md:text-base text-[#424245]">You pay a simple monthly platform fee for Rabrix.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[2px] text-xs text-[#FC466B]">✓</span>
                <span className="text-sm md:text-base text-[#424245]">You pay us a straightforward per-appointment fee when we put buyer appointments on your calendar.</span>
              </div>
            </div>
            
            <div className="rounded-xl border border-gray-200/60 bg-white/60 backdrop-blur-sm p-4 md:p-6">
              <p className="text-sm md:text-base text-[#86868b]">
                No retainers. No hidden management fees. We'll walk you through exact numbers on the call.
              </p>
            </div>
            
            <div className="pt-4">
              <Button
                href={calendlyUrl}
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              >
                Book a 15-min discovery call
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
