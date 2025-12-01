'use client';

import React from 'react';
import { motion } from 'framer-motion';

const outcomes = [
  {
    title: 'More buyer appointments',
    description: 'Your calendar fills with real conversations, not just more "leads" in a spreadsheet.',
  },
  {
    title: 'Prepared meetings',
    description: 'Before each appointment, you see a simple summary of the buyer\'s budget, area, timeline, needs, and challenges.',
  },
  {
    title: 'Time back in your day',
    description: 'Rabrix chases, nurtures, and qualifies your leads so you can spend your time showing homes and closing deals.',
  },
  {
    title: 'One clear place to see it all',
    description: 'Our dashboard shows your appointments and key buyer info in one place, so you\'re never guessing who you\'re talking to.',
  },
];

export const Outcomes: React.FC = () => {
  return (
    <section id="outcomes" className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f] text-center mb-4"
        >
          What you actually get with <span className="gradient-premium-alt">Rabrix</span>
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-xl p-6 shadow-sm hover:shadow-lg transition-all text-center"
            >
              <h3 className="text-lg font-bold text-[#1d1d1f] mb-2">{outcome.title}</h3>
              <p className="text-sm text-[#424245] leading-relaxed">{outcome.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
