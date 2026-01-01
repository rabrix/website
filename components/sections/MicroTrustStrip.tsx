'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const industries = [
  'Real estate',
  'Banking',
  'Restaurants',
  'Professional services'
];

export const MicroTrustStrip: React.FC = () => {
  return (
    <section className="relative bg-white py-8 md:py-10 border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <p className="text-sm md:text-base text-[#424245] leading-relaxed mb-4 max-w-3xl mx-auto">
            Built by someone who's run outbound systems for thousands of leads across real estate, banking and local services.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200/60"
              >
                <Building2 className="w-3.5 h-3.5 text-[#86868b]" />
                <span className="text-xs md:text-sm text-[#424245] font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

