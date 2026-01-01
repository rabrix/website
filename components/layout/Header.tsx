'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60">
      <Container>
        <nav className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="flex items-center group">
            <div className="relative flex items-center justify-center">
              <Image
                // src="/logos/20251123_000357.png"
                src="https://p6l2vyu7e8eitno5.public.blob.vercel-storage.com/Logos/Rabrix.png"
                alt="Rabrix"
                width={120}
                height={120}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#comparison" 
              className="text-sm text-[#1d1d1f] hover:text-[#06B6D4] transition-colors duration-200 font-normal"
            >
              Comparison
            </Link>
            <Link 
              href="#pricing" 
              className="text-sm text-[#1d1d1f] hover:text-[#06B6D4] transition-colors duration-200 font-normal"
            >
              Pricing
            </Link>
            <Link 
              href="#faq" 
              className="text-sm text-[#1d1d1f] hover:text-[#06B6D4] transition-colors duration-200 font-normal"
            >
              FAQ
            </Link>
            <Button
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
              variant="primary"
              size="sm"
              className="ml-4"
            >
              Fill My Calendar
            </Button>
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
          <div className="md:hidden border-t border-gray-200/60 py-4 space-y-4">
            <Link 
              href="#how-it-works" 
              className="block text-sm text-[#1d1d1f] hover:text-[#06B6D4] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </Link>
            <Link 
              href="#comparison" 
              className="block text-sm text-[#1d1d1f] hover:text-[#06B6D4] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Comparison
            </Link>
            <Link 
              href="#pricing" 
              className="block text-sm text-[#1d1d1f] hover:text-[#06B6D4] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#faq" 
              className="block text-sm text-[#1d1d1f] hover:text-[#06B6D4] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-2">
              <Button
                href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
                variant="primary"
                size="sm"
                className="w-full"
              >
                Book your free calendar audit
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
