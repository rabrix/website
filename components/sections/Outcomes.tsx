'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

const outcomes = [
  {
    title: 'Pre-Qualified Leads',
    description: 'Rich context before every meeting. Budget, timeline, area, needs - everything you need to close.',
    metric: '100%',
  },
  {
    title: 'Just Close Deals',
    description: 'No chasing, no qualifying, no wasted time. Show up prepared. They\'re ready. You close.',
    metric: 'Ready',
  },
  {
    title: 'Custom CRM Access',
    description: 'See chat transcripts, call transcripts, buyer summaries - everything about each lead before meeting.',
    metric: 'Full',
  },
  {
    title: 'We Take The Risk',
    description: 'You only pay when we deliver qualified buyers. We win when you close deals.',
    metric: 'Zero',
  },
];

export const Outcomes: React.FC = () => {
  return (
    <section id="outcomes" className="bg-[#f5f5f7] py-20 md:py-28">
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 text-[#1d1d1f] tracking-tight"
          >
            What <span className="gradient-premium">You Get</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl font-semibold text-[#1d1d1f] text-center mb-2"
          >
            Real results. Not promises. See the difference.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base md:text-lg text-[#86868b] text-center mb-4 font-normal"
          >
            We only win when you close deals
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm md:text-base text-[#ff3b30] text-center mb-16 font-semibold"
          >
            ⚡ Limited spots available - High demand
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1d1d1f] tracking-tight pr-4">{outcome.title}</h3>
                  <span className="text-3xl md:text-4xl font-semibold gradient-accent flex-shrink-0">{outcome.metric}</span>
                </div>
                <p className="text-base md:text-lg text-[#86868b] leading-relaxed font-normal">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
