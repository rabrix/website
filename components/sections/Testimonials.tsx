'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Real Estate Agent',
    location: 'Austin, TX',
    quote: 'I went from 0 buyer appointments to 8 booked meetings in my first month. Closed 3 deals. This is what I needed.',
    results: '8 appointments, 3 closed deals in 30 days',
    avatar: 'SM'
  },
  {
    name: 'Mike R.',
    role: 'Real Estate Agent',
    location: 'Phoenix, AZ',
    quote: 'After 2 years of empty calendars, I finally have a predictable flow. Rabrix handles everything while I focus on closing.',
    results: '$45K in commissions in 90 days',
    avatar: 'MR'
  },
  {
    name: 'Jennifer L.',
    role: 'Real Estate Agent',
    location: 'Denver, CO',
    quote: 'The best part? I see everything before each meeting. Budget, timeline, needs. I walk in prepared and close faster.',
    results: '12 appointments, 5 closed deals in 60 days',
    avatar: 'JL'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <>
      {/* Testimonials Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#1d1d1f] text-center mb-4">
          Real results from <span className="gradient-premium">real agents</span>
        </h2>
        <p className="text-base md:text-lg text-[#424245] text-center max-w-2xl mx-auto mb-12">
          See how other agents transformed their calendars with Rabrix
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#06B6D4] text-[#06B6D4]" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-base text-[#424245] leading-relaxed mb-6 italic">
              "{testimonial.quote}"
            </p>

            {/* Results Badge */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20">
                <TrendingUp className="w-4 h-4 text-[#06B6D4]" />
                <span className="text-sm font-semibold text-[#06B6D4]">
                  {testimonial.results}
                </span>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center text-white font-semibold text-sm">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold text-[#1d1d1f]">{testimonial.name}</div>
                <div className="text-sm text-[#86868b]">{testimonial.role} • {testimonial.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};



