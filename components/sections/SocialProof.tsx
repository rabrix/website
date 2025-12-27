'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
    description: 'We only get paid when appointments show up on your calendar. You take zero financial risk.',
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

const pilotProgram = {
  status: 'Pilot Program',
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-2xl border-2 p-6 ${
                  pillar.highlight 
                    ? 'bg-gradient-to-br from-[#06B6D4]/10 to-[#0891B2]/5 border-[#06B6D4]/30 shadow-lg' 
                    : 'bg-white/80 border-gray-200/60 shadow-sm'
                } hover:shadow-lg transition-all`}
              >
                <Icon className={`w-8 h-8 mb-4 ${pillar.highlight ? 'text-[#06B6D4]' : 'text-[#86868b]'}`} />
                <h3 className="text-lg font-bold text-[#1d1d1f] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#424245] leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Founder Credibility - Using Real Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl border-2 border-[#06B6D4]/20 bg-gradient-to-br from-white via-[#06B6D4]/5 to-white p-8 md:p-10 shadow-xl">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                  SV
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-3">
                    Built by someone who's done this at scale
                  </h3>
                  <p className="text-base md:text-lg text-[#424245] leading-relaxed mb-6">
                    I've built and scaled multi-channel outreach systems for thousands of professionals across banking, restaurants, real estate, and professional services. I saw realtors struggling with the same follow-up problems I'd solved for other industries. So I built Rabrix - a system specifically designed for realtor lead follow-up.
                  </p>
                  
                  {/* Experience Badges */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {experience.industries.map((industry, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/20"
                      >
                        <Building2 className="w-4 h-4 text-[#06B6D4]" />
                        <span className="text-sm font-semibold text-[#1d1d1f]">{industry}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Points */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-[#424245]">
                        Built systems for <strong>{experience.professionals}</strong> across multiple industries
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-[#424245]">
                        Specialized in <strong>{experience.focus}</strong> and lead qualification
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-[#424245]">
                        <strong>{experience.realtorSpecific}</strong> - this isn't my first rodeo
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://www.facebook.com/shashank.vishwakarma.16121/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#06B6D4] hover:text-[#0891B2] transition-colors"
                  >
                    Connect with me on Facebook
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why This Matters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <div className="max-w-3xl mx-auto rounded-2xl bg-gray-50/50 border border-gray-200/60 p-6 md:p-8">
            <h4 className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-4 text-center">
              Why this matters
            </h4>
            <p className="text-base text-[#424245] leading-relaxed text-center">
              Most "lead follow-up" services are built by people who've never done it at scale. I've built systems that handle thousands of leads across multiple industries. I know what works, what doesn't, and how to scale it. Rabrix isn't an experiment - it's a proven system, adapted specifically for realtors.
            </p>
          </div>
        </motion.div>

        {/* Pilot Program Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#06B6D4]/10 to-[#0891B2]/10 border-2 border-[#06B6D4]/30">
            <Zap className="w-6 h-6 text-[#06B6D4]" />
            <div className="text-left">
              <div className="font-bold text-[#1d1d1f] mb-1">{pilotProgram.status}</div>
              <div className="text-sm text-[#424245]">
                {pilotProgram.spots} • {pilotProgram.benefit}
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
