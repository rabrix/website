'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export const FinalCTA: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';
  
  return (
    <section className="bg-[#0071e3] text-white py-20 md:py-28">
      <Container size="narrow">
        <div className="text-center">
          {/* Trust Reminder */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base md:text-lg mb-4 text-white/90 font-semibold uppercase tracking-wide"
          >
            Not a scam. Not an agency. The solution.
          </motion.p>

          {/* Pain Point Reminder */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight"
          >
            Tired of <span className="text-white">wasting time</span> on unqualified leads?
          </motion.h2>
          
          {/* Risk Reversal */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xl md:text-2xl mb-6 text-white font-semibold"
          >
            We take all the risk. You just close deals.
          </motion.p>

          {/* Value Recap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl mx-auto border border-white/20"
          >
            <p className="text-lg md:text-xl text-white mb-4 font-semibold">What You Get:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              <div className="flex items-start gap-2">
                <span className="text-white text-lg font-bold mt-0.5">✓</span>
                <span className="text-white/90 font-normal">100% lead reach-out - zero delay</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white text-lg font-bold mt-0.5">✓</span>
                <span className="text-white/90 font-normal">Pre-qualified buyers with all details</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white text-lg font-bold mt-0.5">✓</span>
                <span className="text-white/90 font-normal">Custom CRM - see everything before meeting</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white text-lg font-bold mt-0.5">✓</span>
                <span className="text-white/90 font-normal">We do all the work - you just close</span>
              </div>
            </div>
          </motion.div>

          {/* Urgency & FOMO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl mb-8 text-white font-semibold"
          >
            ⚡ Limited spots available - Book now before they're gone
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Button
              href={calendlyUrl}
              variant="secondary"
              size="lg"
              className="bg-white text-[#0071e3] hover:bg-[#f5f5f7] border-white font-semibold text-lg px-10 py-4 shadow-2xl hover:shadow-3xl transition-all"
            >
              Book Now - Limited Spots Available
            </Button>
          </motion.div>

          {/* Final Trust Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm md:text-base mt-8 text-white/80 font-normal"
          >
            Remember: We only win when you close deals. We take all the risk.
          </motion.p>
        </div>
      </Container>
    </section>
  );
};
