'use client';

import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const Linkedin = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Facebook = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image 
                  src="/avocat-en-droit-immobilier.svg" 
                  alt="Maitre Yosra Abidi Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Maitre Yosra Abidi
              </span>
            </div>
            <p className="text-marble/60 text-sm leading-relaxed mb-8">
              Avocat spécialisé en droit immobilier et à la protection du patrimoine à Ariana. Excellence, Rigueur et Discrétion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors hover:border-accent hover:text-accent">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors hover:border-accent hover:text-accent">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Expertises</h4>
            <ul className="space-y-4 text-marble/60 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Audit Foncier</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Transactions Immobilières</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contentieux Locatif</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Droit de la Copropriété</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Cabinet</h4>
            <ul className="space-y-4 text-marble/60 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">À Propos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Nos Honoraires</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mentions Légales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-marble/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0" />
                <span>Carnoy Center, B23 Rue Tarek Ibn Zied, Ariana 2091, Tunisie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:+21654642190" className="hover:text-accent transition-colors">+216 54 642 190</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:contact@avocat-abidi.tn" className="hover:text-accent transition-colors">contact@avocat-abidi.tn</a>
              </li>
            </ul>
            <button className="btn-gold w-full mt-8 py-3">
              Prendre Rendez-vous
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-marble/40 text-xs">
            © {new Date().getFullYear()} Maitre Yosra Abidi. Tous droits réservés.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center transition-all hover:bg-accent group"
          >
            <ArrowUp size={20} className="text-white group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
