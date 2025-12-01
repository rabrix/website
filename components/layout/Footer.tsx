import React from 'react';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200/60 mt-16 md:mt-24 py-8 bg-white/50 backdrop-blur-sm">
      <Container>
        <div className="max-w-5xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-4 sm:px-6 lg:px-8">
          <p className="text-xs md:text-sm text-[#86868b]">
            &copy; {currentYear} Rabrix. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs md:text-sm text-[#86868b]">
            <Link href="#solution" className="hover:text-[#FC466B] transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="hover:text-[#007AFF] transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="hover:text-[#007AFF] transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
