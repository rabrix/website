'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

const oldWayMethods = [
  { icon: '📱', label: 'Social Media' },
  { icon: '📞', label: 'Cold Calls' },
  { icon: '📧', label: 'Emails' },
  { icon: '💬', label: 'Text' },
];

export const WithoutRabrix: React.FC = () => {
  return (
    <section id="problem" className="bg-white py-20 md:py-32">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">
              Why You're Still <span className="text-[#ff3b30]">Struggling</span>
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold gradient-premium mb-4">
              (And Why We're Different)
            </h3>
            <p className="text-lg md:text-xl text-[#86868b] font-normal max-w-2xl mx-auto">
              We're not an agency. We're the solution that actually works.
            </p>
          </motion.div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side - Old Way */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-[#f5f5f7] rounded-3xl p-8 md:p-10 border-2 border-red-200/50"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#ff3b30] mb-2">The Old Way</h3>
                <p className="text-sm md:text-base text-[#86868b] font-medium">Agencies promise. You pay. Results? Maybe.</p>
              </div>

              {/* Methods */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {oldWayMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center bg-white rounded-xl p-4 min-w-[80px] shadow-sm"
                  >
                    <span className="text-3xl mb-2">{method.icon}</span>
                    <span className="text-xs md:text-sm font-medium text-[#1d1d1f]">{method.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Plus Sign */}
              <div className="flex justify-center mb-6">
                <span className="text-3xl text-[#86868b]">+</span>
              </div>

              {/* Result */}
              <div className="bg-white rounded-xl p-6 text-center border-2 border-red-300/50">
                <div className="text-4xl mb-2">❌</div>
                <h4 className="text-xl md:text-2xl font-semibold text-[#ff3b30] mb-2">Bad Results</h4>
                <ul className="text-sm md:text-base text-[#86868b] space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff3b30]">•</span>
                    <span>Hours wasted on unqualified leads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff3b30]">•</span>
                    <span>Leads go cold before you reach them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff3b30]">•</span>
                    <span>Feeling scammed by empty promises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff3b30]">•</span>
                    <span>No system, no visibility, no results</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Side - Rabrix Way */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-gradient-to-br from-[#0071e3]/10 to-blue-50 rounded-3xl p-8 md:p-10 border-2 border-[#0071e3]/30 relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0071e3]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="text-center mb-6 relative z-10">
                <h3 className="text-2xl md:text-3xl font-semibold gradient-premium mb-2">With Rabrix</h3>
                <p className="text-sm md:text-base text-[#1d1d1f] font-semibold">We deliver. You close. We take the risk.</p>
              </div>

              {/* Rabrix Logo/Icon */}
              <div className="flex justify-center mb-6 relative z-10">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0 rgba(0, 113, 227, 0.4)',
                      '0 0 0 15px rgba(0, 113, 227, 0)',
                      '0 0 0 0 rgba(0, 113, 227, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0071e3] to-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl"
                >
                  R
                </motion.div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center mb-6 relative z-10">
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-4xl text-[#0071e3]"
                >
                  ↓
                </motion.div>
              </div>

              {/* Result */}
              <div className="bg-white rounded-xl p-6 text-center border-2 border-[#0071e3]/30 shadow-lg relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-3xl">📅</div>
                  <span className="text-2xl text-[#0071e3]">→</span>
                  <div className="text-3xl">✅</div>
                </div>
                <h4 className="text-xl md:text-2xl font-semibold gradient-premium mb-2">Meetings → Close</h4>
                <ul className="text-sm md:text-base text-[#1d1d1f] space-y-2 text-left font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0071e3] font-bold">✓</span>
                    <span>100% lead reach-out - zero delay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0071e3] font-bold">✓</span>
                    <span>Pre-qualified buyers with all details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0071e3] font-bold">✓</span>
                    <span>We take all the risk - you just close</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0071e3] font-bold">✓</span>
                    <span>Custom CRM - see everything before meeting</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-12 text-center"
          >
            <p className="text-lg md:text-xl font-semibold text-[#1d1d1f] max-w-3xl mx-auto">
              <span className="text-[#0071e3]">Not an agency.</span> Not a promise.{' '}
              <span className="gradient-premium">Real results.</span> Our risk.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
