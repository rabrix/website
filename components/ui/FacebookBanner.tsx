'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, ExternalLink } from 'lucide-react';

interface FacebookBannerProps {
  className?: string;
}

const FACEBOOK_PROFILE_URL = 'https://www.facebook.com/shashank.vishwakarma.16121/';

export const FacebookBanner: React.FC<FacebookBannerProps> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`${className}`}
    >
      <div className="rounded-2xl bg-gradient-to-br from-[#1877F2]/10 via-[#1877F2]/5 to-[#42A5F5]/10 border-2 border-[#1877F2]/20 p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <a
            href={FACEBOOK_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1877F2] to-[#42A5F5] flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
          >
            <Facebook className="w-6 h-6 text-white" />
          </a>
          <div>
            <p className="text-lg md:text-xl font-bold text-[#1d1d1f] mb-1">
              Prefer to start more casually?
            </p>
            <a
              href={FACEBOOK_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-[#1877F2] hover:text-[#42A5F5] transition-colors inline-flex items-center gap-1"
            >
              Connect with me on Facebook
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-[#1877F2]/10">
          <p className="text-sm md:text-base text-[#424245] mb-3">
            Add me on Facebook and send:
          </p>
          <div className="inline-block bg-[#1877F2]/10 border border-[#1877F2]/20 rounded-lg px-4 py-2 mb-3">
            <p className="text-sm md:text-base font-semibold text-[#1877F2] font-mono">
              'Hey, can you send me the Rabrix secret?'
            </p>
          </div>
          <p className="text-sm md:text-base text-[#86868b]">
            I'll show you how it works.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

