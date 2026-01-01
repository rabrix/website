'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ArrowRight, TrendingUp } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';

  useEffect(() => {
    // Use requestAnimationFrame for smooth, performant scroll handling
    let ticking = false;
    let lastScrollY = 0;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Only update state if scroll position changed significantly (throttle)
          if (Math.abs(currentScrollY - lastScrollY) > 10) {
            // Show after scrolling past Hero section (approximately 600px)
            if (currentScrollY > 600 && !isDismissed) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
            lastScrollY = currentScrollY;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-[90%] md:w-max max-w-[calc(100vw-2rem)]"
        >
          <div className="relative bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 border-[#06B6D4]/20  rounded-xl sm:rounded-2xl shadow-2xl border-2 border-[#06B6D4]/30 p-3 sm:p-4 backdrop-blur-sm md:backdrop-blur-xl overflow-visible">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#06B6D4]/5 via-transparent to-[#06B6D4]/5 opacity-50 rounded-xl sm:rounded-2xl" />
            
            {/* X button - Absolutely positioned in corner, doesn't affect layout */}
            <button
              onClick={handleDismiss}
              className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 p-1 sm:p-1 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 active:bg-slate-700/80 transition-colors z-30 shadow-md"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 hover:text-white" />
            </button>
            
            {/* All in row on mobile and desktop */}
            <div className="relative flex flex-row items-center gap-2 sm:gap-4 z-10">
              {/* Calendar + Content Row */}
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#06B6D4]/20 to-[#06B6D4]/10 flex items-center justify-center ring-2 ring-[#06B6D4]/30">
                  <Calendar className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#06B6D4]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-1">
                    <p className="text-xs sm:text-base font-bold text-white leading-tight">
                      Stop losing leads.
                    </p>
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#06B6D4] flex-shrink-0" />
                  </div>
                  <p className="text-[10px] sm:text-sm font-semibold text-white/90 leading-tight">
                  Want a <span className="text-[#06B6D4] font-bold">FILLED</span> calendar?
                  </p>
                </div>
              </div>
              
              {/* CTA Button - "Fill My Calendar" */}
              <motion.a
                href={calendlyUrl}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex-shrink-0 bg-gradient-to-r from-[#06B6D4] to-[#0891B2] hover:from-[#0891B2] hover:to-[#0E7490] text-white font-bold px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm shadow-xl shadow-[#06B6D4]/40 hover:shadow-[#06B6D4]/60 transition-all text-center items-center justify-center gap-1.5 sm:gap-2 group overflow-hidden whitespace-nowrap"
              >
                {/* Shine effect on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                
                {/* Pulse animation for attention */}
                <span className="absolute inset-0 rounded-full bg-[#06B6D4] opacity-0 group-hover:opacity-20 animate-pulse" />
                
                <span className="relative flex items-center justify-center gap-1 sm:gap-2">
                  <span className="text-[9px] sm:text-xs font-bold bg-white/20 px-1 sm:px-1.5 py-0.5 rounded">FREE</span>
                  <span className="hidden sm:inline">Fill My Calendar</span>
                  <span className="sm:hidden">Fill Calendar</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

