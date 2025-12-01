'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FacebookBanner } from '@/components/ui/FacebookBanner';

export const FinalCTA: React.FC = () => {
  
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-24 md:py-32">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      {/* Background accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-[#667EEA]/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Simplified - Just Facebook Hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8"
          >
            <p className="text-lg md:text-xl text-[#424245] mb-6 max-w-2xl mx-auto">
              Prefer to start more casually?
            </p>
          </motion.div>

          {/* Facebook Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-12"
          >
            <FacebookBanner />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
