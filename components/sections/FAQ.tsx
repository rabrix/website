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
    answer: 'Not in the traditional sense. We don\'t lock you into big retainers or send vanity reports. Rabrix sets up and manages your lead generation, and then does the follow-up and qualification for you. You cover ad spend and a simple platform fee, and we only earn when we put buyer appointments on your calendar.',
  },
  {
    question: 'How fast do you follow up with new leads?',
    answer: 'New leads are followed up with very quickly during your set business hours, via messages and calls, so you\'re not losing them to slower agents.',
  },
  {
    question: 'Will you spam my leads?',
    answer: 'No. We use conversational, human-sounding messages and calls, with reasonable follow-up cadences. People can opt out at any time.',
  },
  {
    question: 'What information do I get before each appointment?',
    answer: 'You see a simple summary: budget, area, timeline, key needs and challenges, plus a history of the conversation so you\'re never walking in cold.',
  },
  {
    question: 'Do I need to already have ads running?',
    answer: 'No. We can help set up and manage your online lead campaigns for you.',
  },
  {
    question: 'How long does it take to get started?',
    answer: 'Typically just a few days once we\'ve had a quick call and connected the basics (your calendar and any existing lead sources).',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f] text-center mb-4"
          >
            Frequently Asked <span className="gradient-premium">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-3 text-sm md:text-base text-[#424245] text-center mb-12 max-w-2xl mx-auto"
          >
            Everything you need to know
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
                  className="w-full text-left flex items-center justify-between hover:opacity-70 transition-opacity"
                >
                  <span className="flex items-center justify-between text-sm md:text-base font-medium text-[#1d1d1f] pr-8">
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
                      <div className="mt-2 text-xs md:text-sm text-[#424245] max-w-3xl leading-relaxed">
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
