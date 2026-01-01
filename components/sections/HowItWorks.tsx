'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageSquare, Calendar } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    number: 1,
    title: 'Fresh buyer interest',
    description: 'We set up and run your online lead campaigns from your ad accounts, so the leads are truly yours.',
    icon: Sparkles,
  },
  {
    number: 2,
    title: 'Rabrix AI follow-up engine',
    description: 'Rabrix responds in minutes, follows up 7–9 times via chat and calls, and asks the right questions to qualify buyers.',
    icon: MessageSquare,
  },
  {
    number: 3,
    title: 'Qualified appointments on your calendar',
    description: 'Only when someone\'s serious—budget, area, timeline clear—do they land as a buyer appointment on your calendar.',
    icon: Calendar,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative bg-gradient-to-b from-gray-50/30 to-white py-16 md:py-20 lg:py-24">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1d1d1f] mb-4">
            How Rabrix works in <span className="gradient-premium">3 simple steps</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-8 md:mb-12 last:mb-0"
              >
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                  {/* Step Number and Icon */}
                  <div className="flex-shrink-0 flex items-center gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="hidden md:block w-6 h-6 text-[#06B6D4] flex-shrink-0" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#06B6D4]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#06B6D4]" />
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1d1d1f]">
                        Step {step.number} – {step.title}
                      </h3>
                    </div>
                    <p className="text-base md:text-lg text-[#424245] leading-relaxed ml-14 md:ml-0">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Optional: Lead Factory Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 max-w-2xl mx-auto"
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-200/60">
            <Image
              src="/banners/hero.png"
              alt="Rabrix Lead Factory - How it works"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

