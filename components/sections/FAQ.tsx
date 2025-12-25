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
          {/* Trust Strip - Who's behind Rabrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-12 md:mb-16"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm p-5 md:p-6 shadow-lg shadow-black/10">
              {/* Avatar placeholder */}
              <div className="size-14 rounded-full bg-gradient-to-br from-[#667EEA] to-[#764BA2] flex items-center justify-center text-white text-xl font-semibold flex-shrink-0">
                SV
              </div>
              <div className="flex-1">
                <p className="text-sm md:text-base text-[#424245] leading-relaxed mb-2">
                  I've been building outbound systems for years. I saw realtors drowning in follow-up, working 14-hour days with empty calendars. I built Rabrix to fix it.
                </p>
                <a
                  href="https://www.facebook.com/shashank.vishwakarma.16121/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#667EEA] hover:text-[#764BA2] transition-colors inline-flex items-center gap-1"
                >
                  Connect with me on Facebook
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#1d1d1f] text-center mb-6"
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
