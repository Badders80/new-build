"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@futureverse/auth-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  const { userSession, signIn, signOutPass } = useAuth();

  const navLinks = [
    { name: 'Our Mission', href: '#our-mission', isExternal: false },
    { name: 'About', href: '#about', isExternal: false },
    { name: 'Innovation', href: '#innovation', isExternal: false },
    { name: 'MyStable', href: '/mystable', isExternal: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
    if (isExternal) {
      return;
    }
    
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (pathname !== '/') {
      router.push('/' + href);
      return;
    }
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleSignIn = async () => {
    try {
      // Check if client ID is configured
      if (!process.env.NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID || 
          process.env.NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID === 'your_client_id_here') {
        alert('⚠️ Futureverse Client ID not configured!\n\nTo enable authentication:\n1. Get a client ID from Futureverse\n2. Update NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID in .env.local');
        return;
      }
      
      // Use authFlow like the working Proof-2 demo
      await signIn({ authFlow: 'redirect' });
    } catch (error) {
      console.error('Sign in error:', error);
      alert('Authentication failed. Please check your configuration and try again.');
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutPass();
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#d4a964]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/logo-grey.svg"
                alt="Evolution Stables Logo"
                width={80}
                height={24}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-[#d4a964] px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4a964] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.isExternal)}
                    className="text-white hover:text-[#d4a964] px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out relative group cursor-pointer"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4a964] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {userSession ? (
              <>
                <span className="text-white text-sm">
                  Welcome, {userSession.futurepass || 'User'}!
                </span>
                <button 
                  onClick={handleSignOut}
                  className="text-white hover:text-[#d4a964] px-4 py-2 text-sm font-medium transition-colors duration-300 ease-in-out"
                >
                  SIGN OUT
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={handleSignIn}
                  className="text-white hover:text-[#d4a964] px-4 py-2 text-sm font-medium transition-colors duration-300 ease-in-out"
                >
                  SIGN IN
                </button>
                <button 
                  onClick={handleSignIn}
                  className="bg-black border border-[#d4a964] text-[#d4a964] hover:bg-[#d4a964] hover:text-white px-6 py-2 text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#d4a964]/20"
                >
                  GET STARTED
                </button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#747474] hover:text-[#d4a964] inline-flex items-center justify-center p-2 transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-[#d4a964]/20">
          {navLinks.map((link) => (
            link.isExternal ? (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#d4a964] block px-3 py-2 text-base font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isExternal)}
                className="text-white hover:text-[#d4a964] block px-3 py-2 text-base font-medium transition-colors duration-300 cursor-pointer"
              >
                {link.name}
              </a>
            )
          ))}
          <div className="pt-4 pb-3 border-t border-[#747474]/30">
            <div className="flex flex-col space-y-3 px-3">
              {userSession ? (
                <>
                  <span className="text-white text-sm">
                    Welcome, {userSession.futurepass || 'User'}!
                  </span>
                  <button 
                    onClick={handleSignOut}
                    className="text-white hover:text-[#d4a964] text-left text-base font-medium transition-colors duration-300"
                  >
                    SIGN OUT
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={handleSignIn}
                    className="text-white hover:text-[#d4a964] text-left text-base font-medium transition-colors duration-300"
                  >
                    SIGN IN
                  </button>
                  <button 
                    onClick={handleSignIn}
                    className="bg-black border border-[#d4a964] text-[#d4a964] hover:bg-[#d4a964] hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 text-center"
                  >
                    GET STARTED
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
