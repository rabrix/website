import React from 'react';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#f5f5f7] border-t border-gray-200/50 py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          <div>
            <Image src="/logos/20251123_000511.png" alt="Rabrix" width={400} height={400} priority />
            <p className="text-sm text-[#86868b] leading-relaxed font-normal">
              Automated lead qualification and appointment booking for real estate professionals.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#1d1d1f]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#86868b]">
              <li>
                <Link href="#solution" className="hover:text-[#1d1d1f] transition-colors font-normal">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-[#1d1d1f] transition-colors font-normal">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#1d1d1f] transition-colors font-normal">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#1d1d1f]">Contact</h4>
            <p className="text-sm text-[#86868b] leading-relaxed font-normal">
              Book a call to learn more about how Rabrix can help you qualify and book more leads.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200/50 pt-8 text-center text-sm text-[#86868b] font-normal">
          <p>&copy; {currentYear} Rabrix. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
