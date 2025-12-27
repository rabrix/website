'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { X, Calendar } from 'lucide-react';

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
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4"
        >
          <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-[#06B6D4]/20 p-4 backdrop-blur-sm md:backdrop-blur-xl">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4 text-[#86868b]" />
            </button>
            
            <div className="flex items-center gap-3 pr-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#06B6D4]/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#06B6D4]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#1d1d1f] mb-1">
                  Stop losing leads. Get your free calendar audit.
                </p>
                <p className="text-xs text-[#86868b]">
                  See how Rabrix can fill your calendar
                </p>
              </div>
              <a
                href={calendlyUrl}
                className="flex-shrink-0 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-4 py-2 rounded-full text-sm shadow-lg transition-all"
              >
                Book Now
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

