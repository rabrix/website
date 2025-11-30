'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/80">
      <Container>
        <nav className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="flex items-center group">
            <div className="relative flex items-center justify-center">
              <Image
                src="/logos/20251123_000357.png"
                alt="Rabrix"
                width={120}
                height={120}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              href="#solution" 
              className="text-sm text-[#1d1d1f] hover:text-[#86868b] transition-colors duration-200 font-normal"
            >
              How It Works
            </Link>
            <Link 
              href="#pricing" 
              className="text-sm text-[#1d1d1f] hover:text-[#86868b] transition-colors duration-200 font-normal"
            >
              Pricing
            </Link>
            <Link 
              href="#faq" 
              className="text-sm text-[#1d1d1f] hover:text-[#86868b] transition-colors duration-200 font-normal"
            >
              FAQ
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-full bg-[#1d1d1f] transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-full bg-[#1d1d1f] transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-[#1d1d1f] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 py-4 space-y-4">
            <Link 
              href="#solution" 
              className="block text-sm text-[#1d1d1f] hover:text-[#86868b] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#pricing" 
              className="block text-sm text-[#1d1d1f] hover:text-[#86868b] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#faq" 
              className="block text-sm text-[#1d1d1f] hover:text-[#86868b] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
};
