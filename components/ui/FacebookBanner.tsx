'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, MessageSquare, Sparkles } from 'lucide-react';

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
      <div className="relative rounded-2xl bg-gradient-to-br from-[#1877F2]/10 via-white to-[#42A5F5]/5 border-2 border-[#1877F2]/20 p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 max-w-xl mx-auto overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#1877F2] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#42A5F5] rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10">
          {/* Icon Header */}
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1877F2] to-[#42A5F5] flex items-center justify-center shadow-lg"
            >
              <Facebook className="w-8 h-8 text-white" />
            </motion.div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-[#1d1d1f] mb-2">
              Prefer to start more casually?
            </h3>
            
            <div className="mb-5">
              <p className="text-sm text-[#86868b] mb-3">Add me on Facebook and DM:</p>
              <motion.div
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-block bg-gradient-to-r from-[#1877F2]/10 to-[#42A5F5]/10 border-2 border-[#1877F2]/30 rounded-xl px-5 py-3 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#1877F2] flex-shrink-0" />
                  <p className="text-sm md:text-base font-semibold text-[#1877F2] italic">
                    "Hey, can you send me the Rabrix secret?"
                  </p>
                </div>
              </motion.div>
            </div>
            
            <p className="text-xs md:text-sm text-[#86868b] mb-6">
              I'll walk you through how it works, no pressure.
            </p>
            
            <motion.a
              href={FACEBOOK_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-[#1877F2] to-[#42A5F5] hover:from-[#42A5F5] hover:to-[#1877F2] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-[#1877F2]/30 hover:shadow-[#1877F2]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              
              <Facebook className="w-5 h-5 relative z-10" />
              <span className="relative z-10">DM me on Facebook</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

