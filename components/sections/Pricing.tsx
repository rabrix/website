'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';
  
  return (
    <section id="pricing" className="bg-[#f5f5f7] py-20 md:py-28">
      <Container size="narrow">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-[#1d1d1f] tracking-tight"
          >
            Transparent Pricing. <span className="gradient-premium">No Hidden Fees.</span> No Scams.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl font-semibold text-[#1d1d1f] mb-2"
          >
            You pay per booked appointment. We take the risk.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base md:text-lg text-[#86868b] mb-12 font-normal"
          >
            Agencies charge upfront. We charge on results.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-2 text-[#1d1d1f]">Software</h3>
              <p className="text-3xl font-semibold mb-4 gradient-accent">$200-400<span className="text-lg text-[#86868b] font-normal">/month</span></p>
              <p className="text-base text-[#86868b] leading-relaxed">
                Includes full CRM, appointment tracking, chat summaries, and intent extraction.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-2 text-[#1d1d1f]">Per Appointment</h3>
              <p className="text-3xl font-semibold mb-4 gradient-accent">$200<span className="text-lg text-[#86868b] font-normal">/booking</span></p>
              <p className="text-base text-[#86868b] leading-relaxed">
                Only charged when an appointment is successfully booked on your calendar.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200/50 shadow-sm"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-[#1d1d1f] mb-2 tracking-tight">What You Get (We Do All The Work)</h3>
            <p className="text-base text-[#86868b] mb-6 font-normal">Everything included. Zero extra costs. Just close deals.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
              <div className="flex items-start gap-3">
                <span className="text-[#0071e3] text-lg font-semibold mt-0.5">✓</span>
                <span className="text-base text-[#1d1d1f] font-normal">WhatsApp automated messaging</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#0071e3] text-lg font-semibold mt-0.5">✓</span>
                <span className="text-base text-[#1d1d1f] font-normal">AI caller (human-like tone)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#0071e3] text-lg font-semibold mt-0.5">✓</span>
                <span className="text-base text-[#1d1d1f] font-normal">Calendar integration</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#0071e3] text-lg font-semibold mt-0.5">✓</span>
                <span className="text-base text-[#1d1d1f] font-normal">Rich buyer summaries</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#0071e3] text-lg font-semibold mt-0.5">✓</span>
                <span className="text-base text-[#1d1d1f] font-normal">7-9 automated follow-ups</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#0071e3] text-lg font-semibold mt-0.5">✓</span>
                <span className="text-base text-[#1d1d1f] font-normal">Full CRM & tracking</span>
              </div>
            </div>
            
            <div className="bg-[#f5f5f7] rounded-xl p-6 mb-6">
              <p className="text-sm text-[#86868b] mb-2"><strong className="text-[#1d1d1f]">Premium Plan ($400/month):</strong> Includes campaign launch feature - upload lead lists for reactivation via WhatsApp + AI caller.</p>
              <p className="text-sm text-[#86868b]"><strong className="text-[#1d1d1f]">Note:</strong> $30/day minimum Facebook ad budget required (paid by client).</p>
            </div>
            
            <Button
              href={calendlyUrl}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-semibold"
            >
              Get Started - We Take The Risk
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
