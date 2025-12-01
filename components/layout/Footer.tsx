import React from 'react';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200/60 p-4 bg-white/50 backdrop-blur-sm">
      <Container className="flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <Image src="/logos/20251123_000511.png" alt="Rabrix" width={220} height={220} className="object-contain w-full h-full" />
        </div>
        <p className="text-xs md:text-sm text-[#86868b]">
            &copy; {currentYear} Rabrix. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};
