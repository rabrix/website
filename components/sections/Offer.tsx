'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Shield, Clock, Users } from 'lucide-react';

export const Offer: React.FC = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';

  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          {/* Real Urgency Hook - Not Generic */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm font-semibold text-red-600">
                Only 3 spots left this month • 7 agents already booked
              </span>
            </div>
          </motion.div>
          
          {/* Opportunity Cost Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6"
          >
            <p className="text-sm md:text-base text-[#86868b] italic">
              Every day you wait, dozens of leads in your market are talking to other agents.
            </p>
          </motion.div>

          {/* Main Headline - Premium, Not Desperate */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-[#1d1d1f] mb-6 leading-tight">
            We only work with agents who are <span className="text-[#06B6D4]">ready to stop the cycle.</span>
          </h2>

          {/* The Reveal - $0 Upfront */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-10 max-w-2xl mx-auto"
          >
            <div className="rounded-2xl bg-gradient-to-br from-[#06B6D4]/10 via-[#06B6D4]/5 to-[#0891B2]/10 border-2 border-[#06B6D4]/20 p-8 md:p-10 shadow-xl">
              <p className="text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-3">
                $0 upfront.
              </p>
              <p className="text-xl md:text-2xl text-[#424245] leading-relaxed">
                You cover ad spend. We handle everything else. <span className="font-semibold text-[#1d1d1f]">We only make money when appointments show up on your calendar.</span>
              </p>
            </div>
          </motion.div>

          {/* What You Get - Clean, Scannable, Maintains Rhythm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10"
          >
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50/50 border border-gray-200/50">
                <CheckCircle2 className="w-6 h-6 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1d1d1f] mb-1">We build your lead engine to generate fresh buyer leads</p>
                  <p className="text-sm text-[#424245]">Set up and run your online lead campaigns</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50/50 border border-gray-200/50">
                <CheckCircle2 className="w-6 h-6 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1d1d1f] mb-1">Rabrix reaches out and follows up 7–9 times</p>
                  <p className="text-sm text-[#424245]">Every lead gets qualified with consistent energy and attention</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50/50 border border-gray-200/50">
                <CheckCircle2 className="w-6 h-6 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1d1d1f] mb-1">We book appointments for you with qualified buyers</p>
                  <p className="text-sm text-[#424245]">Buyer meetings appear on your calendar and app dashboard</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50/50 border border-gray-200/50">
                <CheckCircle2 className="w-6 h-6 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1d1d1f] mb-1">You just show up and close the deals</p>
                  <p className="text-sm text-[#424245]">With full buyer context before each meeting, so you can close deals without any surprises</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Strong CTA - Blue, Action-Oriented */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href={calendlyUrl}
                  className="inline-flex items-center gap-3 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-[0_8px_24px_-8px_rgba(6,182,212,0.4)] hover:shadow-[0_12px_32px_-8px_rgba(6,182,212,0.5)] transition-all duration-200"
                >
                  Build My Buyer Engine
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
              <p className="text-xs text-[#86868b] mt-2">
                Claim your pilot spot – book your free calendar audit
              </p>
              <p className="text-sm text-[#86868b] mt-2">
                No commitment. See if we're a fit in 15 minutes.
              </p>
            </div>
          </motion.div>

          {/* Trust Badges and Risk Reversal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50/50 border border-gray-200/50">
              <Shield className="w-5 h-5 text-[#06B6D4] flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#1d1d1f]">Cancel anytime</p>
                <p className="text-xs text-[#86868b]">No long-term contracts</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50/50 border border-gray-200/50">
              <Clock className="w-5 h-5 text-[#06B6D4] flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#1d1d1f]">Results in 30 days</p>
                <p className="text-xs text-[#86868b]">Or we adjust strategy</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50/50 border border-gray-200/50">
              <Users className="w-5 h-5 text-[#06B6D4] flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#1d1d1f]">Pilot program</p>
                <p className="text-xs text-[#86868b]">Limited spots, founder support</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
