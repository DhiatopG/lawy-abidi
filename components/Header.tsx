'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image 
              src="/avocat-en-droit-immobilier.svg" 
              alt="Maitre Yosra Abidi Logo" 
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-display text-xl font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Maitre Yosra Abidi
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${isScrolled ? 'text-dark' : 'text-marble/80'}`}>
              Avocat à la Cour
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Accueil', 'Expertises', 'Cabinet', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <button className="btn-gold text-sm py-2 px-5">
            Prendre Rendez-vous
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-primary' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {['Accueil', 'Expertises', 'Cabinet', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-dark font-medium py-2 border-b border-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="btn-gold w-full mt-2">
              Prendre Rendez-vous
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
