'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

export const WhoIsThisFor: React.FC = () => {
  return (
    <section id="who-is-this-for" className="bg-[#1d1d1f] text-white py-20 md:py-28">
      <Container>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-20 tracking-tight"
          >
            Who This Is For
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0071e3] tracking-tight">✓ Perfect For</h3>
              <ul className="space-y-4 text-[#d2d2d7]">
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">•</span>
                  <span className="text-lg font-normal leading-relaxed">Real estate agents and brokers getting leads from Facebook/Instagram ads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">•</span>
                  <span className="text-lg font-normal leading-relaxed">Professionals spending too much time on lead follow-up</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">•</span>
                  <span className="text-lg font-normal leading-relaxed">Those who want to show up to appointments prepared</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">•</span>
                  <span className="text-lg font-normal leading-relaxed">Teams looking to scale without hiring more staff</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0071e3] mt-1">•</span>
                  <span className="text-lg font-normal leading-relaxed">Agents with old lead lists they want to reactivate</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#ff3b30] tracking-tight">✗ Not For</h3>
              <ul className="space-y-4 text-[#d2d2d7]">
                <li className="flex items-start gap-3">
                  <span className="text-[#ff3b30] mt-1">•</span>
                  <span className="text-lg font-normal leading-relaxed">Agents who don&apos;t use Facebook/Instagram for lead generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff3b30] mt-1">•</span>
                  <span className="text-lg font-normal leading-relaxed">Those who prefer manual, hands-on lead management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff3b30] mt-1">•</span>
                  <span className="text-lg font-normal leading-relaxed">Professionals not ready to automate their process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff3b30] mt-1">•</span>
                  <span className="text-lg font-normal leading-relaxed">Teams that don&apos;t use Google Calendar or Outlook</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
