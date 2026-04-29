import Image from 'next/image';
import { ChevronRight, Scale } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" 
          alt="Avocat Immobilier Ariana Tunis" 
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 luxury-gradient opacity-90"></div>
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #C5A059 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-3/5">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold">Cabinet d'Avocat à Ariana</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display text-white font-bold leading-tight mb-8">
              Avocat à Ariana <br />
              Maitre <span className="text-accent italic">Yosra Abidi</span>
            </h1>
            
            <p className="text-marble/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Sécurisez vos transactions, protégez votre patrimoine et naviguez avec sérénité dans le droit immobilier à Ariana et partout en Tunisie grâce à un accompagnement juridique d'excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-gold px-8 py-4 text-lg">
                Prendre Rendez-vous
                <ChevronRight size={20} />
              </button>
              <button className="px-8 py-4 border border-white/30 text-white rounded-md font-semibold transition-all hover:bg-white/10 flex items-center justify-center gap-2">
                Nos Expertises
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
              {[
                { label: "Années d'Expérience", value: "15+" },
                { label: "Dossiers Résolus", value: "2500+" },
                { label: "Success Rate", value: "98%" },
                { label: "Client Satisfaits", value: "100%" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-white font-display text-2xl font-bold">{stat.value}</span>
                  <span className="text-marble/50 text-xs uppercase tracking-wider mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/5 relative animate-fade-in delay-300">
            <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] mx-auto">
              {/* Decorative background for the portrait */}
              <div className="absolute inset-0 border border-accent/20 rounded-t-full -translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10 rounded-t-full"></div>
              <div className="relative h-full w-full rounded-t-full overflow-hidden border border-accent/30 shadow-2xl shadow-accent/10">
                <Image 
                  src="/yosra.svg" 
                  alt="Maitre Yosra Abidi" 
                  fill
                  className="object-cover object-center"
                />
              </div>
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -left-6 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg animate-float z-20">
                <Scale className="text-accent mb-2" size={24} />
                <div className="text-white font-display font-bold">15+ Ans</div>
                <div className="text-marble/50 text-[10px] uppercase tracking-widest">D'Expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Scale Icon */}
      <div className="absolute right-[-10%] bottom-[-10%] opacity-5 text-white transform -rotate-12 pointer-events-none hidden lg:block">
        <Scale size={800} />
      </div>
    </section>
  );
};

export default Hero;
