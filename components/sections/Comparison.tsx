'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Comparison: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';

  return (
    <section id="comparison" className="relative bg-white py-16 md:py-20 lg:py-24">
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
            Not another <span className="gradient-premium">"pay at closing"</span> lead platform.
          </h2>
          <p className="text-lg md:text-xl text-[#424245] max-w-3xl mx-auto leading-relaxed">
            Shiny "free" referrals look good—until they take 25–40% of every cheque. Rabrix is built for agents who want to keep their commission and own their pipeline.
          </p>
        </motion.div>

        {/* 2-Column Comparison */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Left: Pay-at-closing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="rounded-2xl border-2 border-red-200/60 bg-red-50/30 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-6">
                Pay at closing referral model
              </h3>
              
              {/* Image */}
              <div className="relative w-full aspect-[4/3] mb-6 rounded-xl overflow-hidden bg-white border border-red-200/40">
                <Image
                  // src="/banners/pay-per-close.png"
                  src="https://p6l2vyu7e8eitno5.public.blob.vercel-storage.com/Public/pay-per-close.png"
                  alt="Sad realtor with payout summary showing 25-40% commission loss"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>

              {/* Bullets */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#424245] leading-relaxed">
                    You pay 25–40% of your commission on every closing.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />                 
                  <span className="text-sm md:text-base text-[#424245] leading-relaxed">
                    You're renting someone else's lead flow.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#424245] leading-relaxed">
                    When you stop, your pipeline disappears.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Rabrix */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="rounded-2xl border-2 border-[#06B6D4]/30 bg-gradient-to-br from-[#06B6D4]/5 via-white to-[#0891B2]/5 p-6 md:p-8 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-6">
                Rabrix appointment model
              </h3>
              
              {/* Image */}
              <div className="relative w-full aspect-[4/3] mb-6 rounded-xl overflow-hidden bg-white border border-[#06B6D4]/20">
                <Image
                  // src="/banners/Rabrix-model.png"
                  src="https://p6l2vyu7e8eitno5.public.blob.vercel-storage.com/Public/Rabrix-model.png"
                  alt="Happy realtor with Rabrix summary showing 95-98% commission kept"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>

              {/* Bullets */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#424245] leading-relaxed">
                    You keep 95–98% of your commissions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#424245] leading-relaxed">
                    Campaigns run from your brand; you own every lead.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#424245] leading-relaxed">
                  A small platform fee + a clear per-appointment cost. We only win when you get appointments.                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10 md:mt-12"
        >
          <div className="flex flex-col items-center">
            <Button
              href={calendlyUrl}
              variant="text"
              size="lg"
              className="text-base md:text-lg group"
            >
              Show Me The Buyer Appointments
              <svg className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
            <p className="text-xs text-[#86868b] mt-1">
              Walk me through the math on a call
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

