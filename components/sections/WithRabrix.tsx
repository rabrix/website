'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MessageSquare, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: TrendingUp,
    title: 'We turn on leads',
    shortDesc: 'Steady stream from ads',
    color: 'from-[#FC466B] to-[#3F5EFB]',
  },
  {
    icon: MessageSquare,
    title: 'We follow up instantly',
    shortDesc: '100% reach-out, natural tone',
    color: 'from-[#667EEA] to-[#764BA2]',
  },
  {
    icon: Calendar,
    title: 'We qualify & book',
    shortDesc: 'Right buyers, your calendar',
    color: 'from-[#764BA2] to-[#F093FB]',
  },
  {
    icon: CheckCircle2,
    title: 'You just close',
    shortDesc: 'Show up ready, walk out with deals',
    color: 'from-[#FC466B] to-[#F093FB]',
  },
];

export const WithRabrix: React.FC = () => {
  return (
    <section id="solution" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            How <span className="gradient-premium-alt">Rabrix</span> works
          </h2>
          <p className="text-lg md:text-xl text-[#424245] max-w-2xl mx-auto font-medium">
            From Facebook scroll to buyer appointment — automatically.
          </p>
        </motion.div>
        
        {/* Visual Flow - Horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connection line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FC466B]/20 via-[#667EEA]/20 to-[#F093FB]/20 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15, 
                    ease: [0.25, 0.1, 0.25, 1] 
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl border-2 border-gray-200/60 p-6 shadow-sm hover:shadow-xl transition-all text-center">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} mb-4 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#1d1d1f] mb-2">
                      {step.title}
                    </h3>
                    
                    {/* Short description */}
                    <p className="text-sm text-[#86868b] leading-relaxed">
                      {step.shortDesc}
                    </p>
                  </div>
                  
                  {/* Arrow between steps (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                      <ArrowRight className="w-5 h-5 text-[#86868b]" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
