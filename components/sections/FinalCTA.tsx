'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FacebookBanner } from '@/components/ui/FacebookBanner';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';
  
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-20 md:py-28 lg:py-32">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      {/* Background accent */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-[#06B6D4]/5 to-transparent rounded-full blur-3xl" />
        </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Primary CTA - Emotional Hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1d1d1f] mb-6 leading-tight">
              One more empty calendar?
              <br />
              <span className="gradient-premium">Or your first booked week?</span>
            </h2>
            <p className="text-lg md:text-xl text-[#424245] mb-8 max-w-2xl mx-auto">
              Every day you wait is another day of chasing leads that go cold. Stop the cycle. Start filling your calendar.
            </p>
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                href={calendlyUrl}
                variant="primary"
                size="lg"
                className="text-lg px-10 py-5 shadow-[0_8px_24px_-8px_rgba(6,182,212,0.4)] hover:shadow-[0_12px_32px_-8px_rgba(6,182,212,0.5)] transition-all"
              >
                Book your free calendar audit
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <p className="text-sm text-[#86868b] mt-4">
              Takes 2 minutes. No commitment. See if Rabrix can fill your calendar.
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto my-12" />

          {/* Facebook Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <FacebookBanner />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
