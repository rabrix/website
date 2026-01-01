'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TrendingUp, Shield, Clock, CheckCircle2, Zap, Building2 } from 'lucide-react';
// ============================================
// TESTIMONIALS COMPONENT - EASILY TOGGLEABLE
// To show testimonials: Uncomment the import and component below
// To hide testimonials: Comment out the import and component usage
// ============================================
// import { Testimonials } from './Testimonials';

// ============================================
// TRUST PILLARS
// ============================================
const trustPillars = [
  {
    title: '$0 upfront risk',
    description: 'We only make money when appointments show up on your calendar. You take zero financial risk.',
    icon: Shield,
    highlight: true
  },
  {
    title: 'Proven systems',
    description: 'Built and scaled outreach systems for thousands of professionals across multiple industries.',
    icon: TrendingUp
  },
  {
    title: 'Transparent process',
    description: 'See every message, every call, every qualification. Full transparency, no black boxes.',
    icon: Clock
  },
  {
    title: 'Cancel anytime',
    description: 'No long-term contracts. If it doesn\'t work, you walk away. We take the risk.',
    icon: CheckCircle2
  }
];

// ============================================
// FOUNDER EXPERIENCE DATA
// ============================================
const experience = {
  industries: ['Banking', 'Restaurants', 'Real Estate', 'Professional Services'],
  professionals: 'Thousands of professionals',
  focus: 'Multi-channel outreach automation',
  realtorSpecific: 'Built systems specifically for realtor lead follow-up'
};

const earlyAccess = {
  status: 'Early Access for Realtors',
  spots: 'Limited to 10 agents',
  benefit: 'Founder pricing + priority support',
  timeframe: 'Launching Q1 2024'
};

export const SocialProof: React.FC = () => {
  return (
    <section id="social-proof" className="relative bg-white py-16 md:py-20 lg:py-24">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================
            TRUST SECTION - Why You Can Trust Rabrix
            ============================================ */}
        
        {/* Trust Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#1d1d1f] mb-4">
            Why you can <span className="gradient-premium">trust Rabrix</span>
          </h2>
          <p className="text-lg md:text-xl text-[#424245] max-w-2xl mx-auto">
            Built by someone who's scaled outreach systems for thousands of professionals. This isn't theory - it's proven.
          </p>
        </motion.div>

        {/* Trust Pillars */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {trustPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all text-center ${
                  pillar.highlight 
                    ? 'border-[#06B6D4]/30 bg-white/80 backdrop-blur-sm md:backdrop-blur-xl' 
                    : 'border-gray-200/60 bg-white/80 backdrop-blur-sm md:backdrop-blur-xl'
                }`}
              >
                <h3 className="text-lg font-bold text-[#1d1d1f] mb-2 flex items-center justify-center gap-2">
                  <Icon className={`w-5 h-5 ${pillar.highlight ? 'text-[#06B6D4]' : 'text-[#86868b]'}`} />
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#424245] leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Founder Credibility - Twitter Post Inspired */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-gray-200/60 bg-white p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              {/* Profile Header - Horizontal on desktop, vertical on mobile */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mb-6">
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-1 border-[#06B6D4]/20 overflow-hidden flex-shrink-0">
                  <Image
                    src="https://lh3.googleusercontent.com/a/ACg8ocJv3I4269o3OfBjh5m8G0mVKah0IU1vz-BatjAg62N0GXzTwaw=s576-c-no"
                    alt="Shashank Vishwakarma"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 64px, 80px"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg md:text-xl font-bold text-[#1d1d1f] mb-1">Shashank Vishwakarma</h3>
                  <p className="text-sm md:text-base text-[#86868b]">Founder & CEO @Rabrix</p>
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-4 mb-6">
                <p className="text-base md:text-lg text-[#1d1d1f] leading-relaxed">
                  Over the years, I've helped thousands of professionals solve their lead follow-up challenges. When I saw realtors struggling with the exact same problems—leads going cold, missed opportunities, empty calendars—I knew there had to be a better way.
                </p>
                <p className="text-base md:text-lg text-[#1d1d1f] leading-relaxed">
                  That's how Rabrix was born. <span className="font-semibold text-[#06B6D4]">You keep 95-98% of your commissions</span> while we handle the follow-up. Just qualified appointments on your calendar.
                </p>
                <p className="text-base md:text-lg text-[#1d1d1f] leading-relaxed">
                  I believe in having skin in the game. <span className="font-semibold text-[#06B6D4]">$0 upfront. Pay per appointment.</span> If we don't deliver results, you don't pay. Simple as that.
                </p>
              </div>

              {/* Stats Row */}
              <div className="flex flex-row gap-3 mb-6">
                <div className="flex-1 px-4 py-3 rounded-xl bg-[#06B6D4]/5 border border-[#06B6D4]/20 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#06B6D4] mb-1">150+</div>
                  <div className="text-xs md:text-sm text-[#424245]">Professionals</div>
                </div>
                <div className="flex-1 px-4 py-3 rounded-xl bg-[#06B6D4]/5 border border-[#06B6D4]/20 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#06B6D4] mb-1">4</div>
                  <div className="text-xs md:text-sm text-[#424245]">Industries</div>
                </div>
              </div>

              {/* CTA - Engaging Invitation */}
              <div className="pt-6 border-t border-gray-200/60 flex flex-col items-center justify-center">
                <p className="text-base md:text-lg text-[#1d1d1f] mb-4 text-center sm:text-left font-medium">
                Still unsure before hopping on a call? Ask me anything. 👋
                </p>
                <a
                  href="https://www.facebook.com/shashank.vishwakarma.16121/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold rounded-full text-sm md:text-base shadow-lg shadow-[#06B6D4]/30 hover:shadow-[#06B6D4]/40 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Send a "Hi" on Facebook
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why This Matters + Early Access Combined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto rounded-3xl border-2 border-[#06B6D4]/20 bg-gradient-to-br from-white via-[#06B6D4]/5 to-white p-8 md:p-10 lg:p-12 shadow-2xl">
            {/* Inspiring Quote */}
            <div className="text-center mb-8">
              <div className="relative max-w-3xl mx-auto">
                <svg className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 text-[#06B6D4]/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                </svg>
                <blockquote className="text-xl font-semibold text-[#1d1d1f] leading-relaxed italic relative z-10">
                  Rabrix isn't an experiment—it's a proven system, adapted specifically for realtors.
                </blockquote>
                <svg className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16 text-[#06B6D4]/20 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                </svg>
              </div>
            </div>

            {/* Early Access Badge - Matching website theme */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20">
                <Zap className="w-5 h-5 text-[#06B6D4] flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <div className="font-bold text-[#1d1d1f] mb-1 text-sm md:text-base">{earlyAccess.status}</div>
                  <div className="text-xs md:text-sm text-[#424245]">
                    {earlyAccess.spots} • {earlyAccess.benefit}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================
            TESTIMONIALS COMPONENT - EASILY TOGGLEABLE
            To show: Uncomment the line below
            To hide: Keep it commented out
            ============================================ */}
        {/* <Testimonials /> */}
      </div>
    </section>
  );
};
