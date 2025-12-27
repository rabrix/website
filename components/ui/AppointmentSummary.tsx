'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface AppointmentSummaryProps {
  buyer: string;
  budget: string;
  area: string;
  timeline: string;
}

export const AppointmentSummary: React.FC<AppointmentSummaryProps> = ({
  buyer,
  budget,
  area,
  timeline,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="mt-3 w-max rounded-xl border border-[#06B6D4]/20 bg-gradient-to-br from-[#E0F7FB]/30 via-white/90 to-[#E0F7FB]/20 backdrop-blur-sm p-3.5 shadow-md shadow-[#06B6D4]/5"
    >
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-4 h-4 rounded-full bg-[#06B6D4] flex items-center justify-center">
          <span className="text-white text-[9px] font-bold">✓</span>
        </div>
        <span className="text-[8px] uppercase tracking-[0.1em] text-[#06B6D4] font-semibold">Appointment Summary</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] md:text-[10px]">
        <span className="flex items-center gap-1">
          <span className="text-[#86868b] font-medium">Buyer:</span>
          <span className="font-semibold text-[#1d1d1f]">{buyer}</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="text-[#86868b] font-medium">Budget:</span>
          <span className="font-semibold text-[#1d1d1f]">{budget}</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="text-[#86868b] font-medium">Area:</span>
          <span className="font-semibold text-[#1d1d1f]">{area}</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="text-[#86868b] font-medium">Timeline:</span>
          <span className="font-semibold text-[#1d1d1f]">{timeline}</span>
        </span>
      </div>
      <div className="mt-2 pt-2 border-t border-[#06B6D4]/20">
        <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#06B6D4]/10 text-[#0891B2] border border-[#06B6D4]/30">
          <span className="w-1 h-1 rounded-full bg-[#06B6D4] animate-pulse" />
          <span className="text-[8px] font-semibold">Confirmed</span>
        </div>
      </div>
    </motion.div>
  );
};

