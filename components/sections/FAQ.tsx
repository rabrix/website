'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How quickly do you respond to new leads?',
    answer: 'We message leads instantly via WhatsApp when they come in from Facebook/Instagram. If WhatsApp only got partial info or went quiet, our AI caller kicks in within ~60 minutes when possible.',
  },
  {
    question: 'What information do you capture from leads?',
    answer: 'We capture basics (name, email, phone) and dig into needs, budget, area, timeline, and challenges. For each booked appointment, you get a rich summary with chat + call transcripts, extracted challenges/objections, and all the key details.',
  },
  {
    question: 'How many follow-ups do you do?',
    answer: 'We run 7-9 follow-ups over time if leads go cold. The AI caller will also retry the next day if a call is ignored.',
  },
  {
    question: 'What calendars do you integrate with?',
    answer: 'We integrate with Google Calendar and Outlook. Appointments are booked directly onto your calendar.',
  },
  {
    question: 'Can I upload old lead lists?',
    answer: 'Yes! On higher plans, you can upload lead lists and we\'ll reactivate old leads using the same WhatsApp and AI caller process.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Setup is quick. We connect your Facebook/Instagram lead sources, set up your calendar integration, and you\'re ready to go. Book a call to learn more about the setup process.',
  },
  {
    question: 'What if a lead doesn\'t want to book an appointment?',
    answer: 'We handle objections and try to overcome them during the conversation. If they\'re not ready, we continue following up over time. You only get appointments with leads who are actually interested.',
  },
  {
    question: 'How do I see what\'s happening with my leads?',
    answer: 'You get full visibility: chat transcripts, call transcripts, lead status, and rich summaries for each booked appointment. Everything is organized and accessible.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <Container size="narrow">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-5 text-[#1d1d1f] tracking-tight"
          >
            Frequently Asked <span className="gradient-premium">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xl md:text-2xl text-[#86868b] text-center mb-20 font-normal"
          >
            Everything you need to know
          </motion.p>
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left py-6 flex items-center justify-between hover:opacity-70 transition-opacity"
                >
                  <span className="text-lg md:text-xl font-normal text-[#1d1d1f] pr-8">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-[#86868b] flex-shrink-0 transition-transform duration-300">
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
                      <div className="pb-6 text-lg text-[#86868b] leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
