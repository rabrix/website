'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Is this an agency?',
    answer: 'Not in the traditional sense. We don\'t lock you into big retainers. Rabrix sets up and manages your lead generation, then does the follow-up and qualification. You cover ad spend and a simple platform fee. We only make money when buyer appointments show up on your calendar.',
  },
  {
    question: 'How fast do you follow up?',
    answer: 'New leads are followed up within minutes during your set business hours, via messages and calls. You won\'t lose them to slower agents.',
  },
  {
    question: 'Do I need ads running already?',
    answer: 'No. We can help set up and manage your online lead campaigns from scratch. The leads run from your brand and are yours.',
  },
  {
    question: 'What if it doesn\'t work in 30 days?',
    answer: 'We adjust strategy. If it still doesn\'t work, you can cancel anytime. No long-term contracts. We take the risk.',
  },
  {
    question: 'Do I keep the leads?',
    answer: 'Yes. Campaigns run from your brand and ad accounts. Every lead is yours. When you stop, you keep everything we\'ve built.',
  },
  {
    question: 'What markets do you work in?',
    answer: 'We work with real estate agents across North America. On the call, we\'ll confirm if your market is a good fit and walk through the numbers.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-white py-16 md:py-20 lg:py-24">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1d1d1f] text-center mb-6"
          >
            Common questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base md:text-lg text-[#424245] text-center mb-10 max-w-2xl mx-auto"
          >
            Before we get started, here's what you need to know.
          </motion.p>
          
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                className="border-b border-gray-200/60 py-3 md:py-4 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between hover:opacity-70 transition-opacity py-2"
                >
                  <span className="flex items-center justify-between text-lg md:text-xl font-semibold text-[#1d1d1f] pr-8">
                    {faq.question}
                  </span>
                  <span className="text-xl text-[#86868b] flex-shrink-0 transition-transform duration-300">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 text-sm md:text-base text-[#424245] max-w-3xl leading-relaxed pb-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
