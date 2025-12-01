'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const WithoutRabrix: React.FC = () => {
  return (
    <section id="problem" className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
            Why your calendar isn't as <span className="gradient-premium">full</span> as it should be
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#424245] max-w-2xl mx-auto">
            It's not that you're bad at sales. You're just doing follow-up the hard way.
          </p>
        </motion.div>

        {/* Current Reality - Visual Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center p-6 rounded-xl border border-gray-200/60 bg-white/50">
              <div className="text-3xl font-bold text-[#FC466B] mb-2">24/7</div>
              <div className="text-sm text-[#424245]">Leads come in, you're sleeping</div>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200/60 bg-white/50">
              <div className="text-3xl font-bold text-[#FC466B] mb-2">7-9x</div>
              <div className="text-sm text-[#424245]">Follow-ups needed per lead</div>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200/60 bg-white/50">
              <div className="text-3xl font-bold text-[#FC466B] mb-2">Cold</div>
              <div className="text-sm text-[#424245]">By the time you reach out</div>
            </div>
            <div className="text-center p-6 rounded-xl border border-gray-200/60 bg-white/50">
              <div className="text-3xl font-bold text-[#FC466B] mb-2">Empty</div>
              <div className="text-sm text-[#424245]">Calendar should be full</div>
            </div>
          </div>
        </motion.div>

        {/* With Rabrix Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-xl p-6 md:p-8 max-w-3xl mx-auto shadow-sm"
        >
          <h3 className="text-lg md:text-xl font-semibold text-[#1d1d1f] mb-6 text-center">
            With <span className="gradient-premium-alt">Rabrix</span>:
          </h3>
          <ul className="space-y-4 text-left">
            <li className="flex items-start gap-3">
              <span className="text-[#FC466B] mt-[2px] text-xs">✓</span>
              <span className="text-sm md:text-base text-[#424245] leading-relaxed">Every lead is followed up with consistently.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FC466B] mt-[2px] text-xs">✓</span>
              <span className="text-sm md:text-base text-[#424245] leading-relaxed">You only spend time with buyers who are actually ready to talk.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FC466B] mt-[2px] text-xs">✓</span>
              <span className="text-sm md:text-base text-[#424245] leading-relaxed">You start your day with appointments instead of chase lists.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
