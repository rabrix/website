'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const valuePoints = [
  {
    icon: '⚡',
    title: 'We Do All The Work',
    description: 'Zero cost to you. We handle everything from lead qualification to appointment booking.',
  },
  {
    icon: '✅',
    title: 'Qualified Buyers',
    description: 'Pre-qualified buyers with all details - budget, timeline, area, needs. No tire-kickers.',
  },
  {
    icon: '📊',
    title: 'Custom CRM',
    description: 'See everything about each lead before meeting - chat transcripts, call transcripts, buyer summaries.',
  },
  {
    icon: '🎯',
    title: 'Just Meet & Close',
    description: 'You show up prepared. They\'re already qualified. You just close the deal.',
  },
];

export const ValueProposition: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';
  
  return (
    <section className="bg-gradient-to-br from-[#0071e3]/5 to-blue-50 py-20 md:py-32">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">
              The <span className="gradient-premium">No-Brainer</span> Offer
            </h2>
            <p className="text-lg md:text-xl font-semibold text-[#1d1d1f] mb-2">
              (We Take All The Risk)
            </p>
            <p className="text-base md:text-lg text-[#86868b] font-normal max-w-2xl mx-auto">
              Not an agency. Not a promise. <span className="font-semibold text-[#1d1d1f]">Real results.</span> Our risk.
            </p>
          </motion.div>

          {/* Value Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {valuePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{point.icon}</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#1d1d1f] mb-2 tracking-tight">
                      {point.title}
                    </h3>
                    <p className="text-base md:text-lg text-[#86868b] leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Risk Reversal Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-gradient-to-br from-[#0071e3] to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                You Only Pay When We Deliver
              </h3>
              <p className="text-lg md:text-xl mb-6 text-white/90 font-normal">
                We take all the risk. You get qualified buyers. You just close deals. It's that simple.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href={calendlyUrl}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-[#0071e3] hover:bg-[#f5f5f7] border-white font-semibold"
                >
                  Get Started - We Take The Risk
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Scarcity Element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 text-center"
          >
            <p className="text-sm md:text-base text-[#ff3b30] font-semibold">
              ⚡ Limited spots available this month
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

