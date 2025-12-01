'use client';

import React from 'react';
import { motion } from 'framer-motion';

const valuePoints = [
  {
    title: 'We Do All The Work',
    description: 'Zero cost to you. We handle everything from lead qualification to appointment booking.',
  },
  {
    title: 'Qualified Buyers',
    description: 'Pre-qualified buyers with all details - budget, timeline, area, needs. No tire-kickers.',
  },
  {
    title: 'Custom CRM',
    description: 'See everything about each lead before meeting - chat transcripts, call transcripts, buyer summaries.',
  },
  {
    title: 'Just Meet & Close',
    description: 'You show up prepared. They\'re already qualified. You just close the deal.',
  },
];

export const ValueProposition: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';
  
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
            Done-for-you <span className="gradient-premium">lead generation</span> and follow-up
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#424245] max-w-2xl mx-auto">
            We handle everything so you can focus on what you do best: closing deals.
          </p>
        </motion.div>

        {/* Value Points Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {valuePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-base md:text-lg font-semibold text-[#1d1d1f] mb-2">
                {point.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#424245] leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

