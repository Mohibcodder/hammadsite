'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
        HAMMAD ABBASI
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link href="#about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="#skills" className="text-gray-700 hover:text-blue-600 transition">
            Skills
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="#work" className="text-gray-700 hover:text-blue-600 transition">
            Work
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="#skills" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
              Skills
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="#work" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
              Work
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;