'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'WhatsApp Chat',
    shortTitle: 'WhatsApp',
    description: 'Leads from Facebook ads get messaged instantly. We capture basic contact info (name, email, phone), then dig into location, buying reasons, needs, and challenges. We recommend the best listings based on requirements and book appointments directly from chat.',
    details: 'Captures intent, needs, challenges, and preferences before booking.',
    icon: '💬',
    color: 'from-green-500 to-emerald-600',
  },
  {
    number: '2',
    title: 'AI Caller Follow-Up',
    shortTitle: 'AI Caller',
    description: 'If we only got basic contact details, our AI caller (trained on sales expert data with human tone) calls within 60 minutes. Friendly, professional conversation to capture needs, overcome objections, and book the appointment.',
    details: 'Human-like tone, follows up next day if ignored, finds perfect listings.',
    icon: '📞',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    number: '3',
    title: 'Smart Follow-Ups',
    shortTitle: 'Follow-Ups',
    description: 'If no contact details yet, we chase leads with 7-9 WhatsApp follow-ups. Once we get a response, we follow the complete flow. Even if calls are ignored, our AI caller dials again the next day with perfect listings and solutions.',
    details: 'Never waste a lead. Persistent but professional follow-up system.',
    icon: '🔄',
    color: 'from-purple-500 to-pink-600',
  },
  {
    number: '4',
    title: 'Calendar Booking + Rich Summary',
    shortTitle: 'Calendar',
    description: 'Appointments book directly to your calendar (Google/Outlook). You receive: complete chat transcripts, call transcripts, detailed buyer summary with extracted needs, challenges, and intents. Show up fully prepared.',
    details: 'Everything you need to know before the appointment.',
    icon: '📅',
    color: 'from-orange-500 to-red-600',
  },
];

export const WithRabrix: React.FC = () => {
  return (
    <section id="solution" className="bg-white py-20 md:py-32 overflow-hidden relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f5f5f7]/20 to-transparent pointer-events-none" />
      
      <Container>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-[#1d1d1f] tracking-tight">
              How <span className="gradient-premium">Rabrix</span> Works
            </h2>
            <p className="text-lg md:text-xl text-[#86868b] font-normal max-w-2xl mx-auto mb-4">
              From <span className="gradient-partial font-medium">Facebook ads</span> to <span className="gradient-partial font-medium">booked appointments</span> on your calendar
            </p>
            {/* Trust & USP Emphasis */}
            <div className="bg-gradient-to-r from-[#0071e3]/10 to-blue-50 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto border border-[#0071e3]/20">
              <p className="text-base md:text-lg font-semibold text-[#1d1d1f] mb-2">
                <span className="text-[#0071e3]">100% Reach-Out</span> - Zero Delay - Natural Tonality
              </p>
              <p className="text-sm md:text-base text-[#86868b] font-normal">
                Something no human caller can do. Every lead reached instantly. No missed opportunities.
              </p>
            </div>
          </motion.div>
          
          {/* Premium Animated Flow Visualization */}
          <div className="relative mb-24">
            {/* Desktop Flow - Horizontal with sophisticated design */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Animated Background Flow Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0071e3]/30 to-transparent -translate-y-1/2 z-0"
                  style={{ transformOrigin: 'left' }}
                />
                
                {/* Animated Flow Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0071e3] via-[#0071e3] to-[#0071e3] -translate-y-1/2 z-0"
                  style={{ transformOrigin: 'left' }}
                />
                
                <div className="flex items-center justify-between relative z-10">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5, y: 50 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.25, 
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }}
                      className="flex flex-col items-center w-1/4 group"
                    >
                      {/* Glow Effect */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.25 + 0.4 }}
                        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[#0071e3]/10 to-transparent blur-2xl -z-10"
                      />
                      
                      {/* Step Circle with Premium Design */}
                      <div className="relative mb-6">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.8, 
                            delay: index * 0.25 + 0.2, 
                            type: "spring",
                            stiffness: 150
                          }}
                          className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-4xl font-semibold shadow-2xl relative z-10 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-3xl`}
                          style={{
                            boxShadow: '0 20px 40px -10px rgba(0, 113, 227, 0.3)'
                          }}
                        >
                          <span className="text-3xl">{step.icon}</span>
                        </motion.div>
                        
                        {/* Animated Ring */}
                        <motion.div
                          initial={{ scale: 1, opacity: 0.8 }}
                          whileInView={{ scale: 1.4, opacity: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 2, 
                            delay: index * 0.25 + 0.6, 
                            repeat: Infinity, 
                            repeatDelay: 4,
                            ease: "easeOut"
                          }}
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-50`}
                        />
                        
                        {/* Number Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.25 + 0.8,
                            type: "spring",
                            stiffness: 200
                          }}
                          className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center text-sm font-bold shadow-lg"
                        >
                          {step.number}
                        </motion.div>
                      </div>
                      
                      {/* Step Content */}
                      <div className="text-center max-w-[220px]">
                        <h3 className="text-xl font-semibold mb-2 text-[#1d1d1f] tracking-tight">
                          <span className="gradient-partial">{step.shortTitle}</span>
                        </h3>
                        <p className="text-sm text-[#86868b] leading-relaxed font-normal line-clamp-3">
                          {step.description.split('.')[0]}.
                        </p>
                      </div>
                      
                      {/* Animated Arrow (except last) */}
                      {index < steps.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: -30, scale: 0.8 }}
                          whileInView={{ opacity: 1, x: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.25 + 1,
                            type: "spring"
                          }}
                          className="absolute top-12 right-[-10%] text-[#0071e3] text-3xl font-light"
                        >
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity, 
                              delay: index * 0.25 + 1.5 
                            }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Tablet/Mobile Flow - Vertical with premium design */}
            <div className="lg:hidden space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.2, 
                    type: "spring",
                    stiffness: 100
                  }}
                  className="flex items-start gap-5 relative"
                >
                  {/* Step Circle */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.7, 
                        delay: index * 0.2 + 0.1, 
                        type: "spring",
                        stiffness: 150
                      }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl font-semibold shadow-xl relative z-10`}
                    >
                      <span className="text-2xl">{step.icon}</span>
                    </motion.div>
                    
                    {/* Number Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.2 + 0.3,
                        type: "spring"
                      }}
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center text-xs font-bold shadow-lg"
                    >
                      {step.number}
                    </motion.div>
                    
                    {/* Connecting Line (except last) */}
                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.2 + 0.5,
                          ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                        className="absolute top-20 left-1/2 w-0.5 h-16 bg-gradient-to-b from-[#0071e3] to-transparent -translate-x-1/2"
                        style={{ transformOrigin: 'top' }}
                      />
                    )}
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2 text-[#1d1d1f] tracking-tight">
                      <span className="gradient-partial">{step.title}</span>
                    </h3>
                    <p className="text-sm text-[#86868b] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Detailed Steps with Premium Cards */}
          <div className="space-y-6 mt-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1, 
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="group"
              >
                <div className="bg-gradient-to-br from-[#f5f5f7] to-white rounded-3xl p-8 md:p-10 border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#0071e3]/20">
                  <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl md:text-3xl font-semibold shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#1d1d1f] tracking-tight">
                        <span className="gradient-premium">{step.title}</span>
                      </h3>
                      <p className="text-base md:text-lg text-[#86868b] leading-relaxed font-normal mb-3">
                        {step.description}
                      </p>
                      <p className="text-sm md:text-base text-[#424245] leading-relaxed font-medium italic border-l-2 border-[#0071e3]/30 pl-4">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Premium Summary Box with Trust Reminder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mt-24 text-center"
          >
            <div className="inline-block bg-gradient-to-br from-white via-[#f5f5f7] to-white rounded-3xl p-10 md:p-12 max-w-4xl border border-gray-200/50 shadow-xl backdrop-blur-sm">
              <p className="text-lg md:text-xl text-[#1d1d1f] font-normal leading-relaxed mb-4">
                <span className="font-semibold gradient-premium text-xl">FB Ads</span>
                <span className="mx-3 text-[#86868b]">→</span>
                <span className="font-semibold gradient-premium text-xl">Rabrix Qualification</span>
                <span className="mx-3 text-[#86868b]">→</span>
                <span className="font-semibold gradient-premium text-xl">Booked Appointment</span>
              </p>
              <p className="text-base md:text-lg text-[#86868b] font-normal italic">
                100% reach-out - something no human can do without delay
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
