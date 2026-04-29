import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Mohamed Ben Salem",
    role: "Investisseur Immobilier",
    text: "Maître Abidi a su sécuriser mon achat à Ariana avec une rigueur exceptionnelle. Son audit de titre a évité bien des mauvaises surprises."
  },
  {
    name: "Leila Gharbi",
    role: "Propriétaire",
    text: "Un accompagnement humain et professionnel pour mon litige locatif à Tunis. J'ai récupéré mon bien en un temps record grâce à ses conseils."
  },
  {
    name: "Sami Trabelsi",
    role: "Directeur de Promotion",
    text: "Nous collaborons avec le cabinet pour tous nos règlements de copropriété en Tunisie. Une expertise juridique indispensable à notre activité."
  }
];

const SocialProof = () => {
  return (
    <section id="cabinet" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
          <div className="md:w-1/3">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-accent mb-4">Témoignages</h2>
            <h3 className="text-4xl font-display font-bold text-primary mb-6">Confiance & Expertise Locale</h3>
            <p className="text-dark/70">
              Chaque dossier est unique. Notre réputation à Ariana et Tunis repose sur un engagement total envers la réussite de nos clients.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((t, i) => (
              <div key={i} className="p-8 bg-marble rounded-2xl relative">
                <Quote className="text-accent/20 absolute top-6 right-6" size={40} />
                <p className="text-dark/80 italic mb-6 leading-relaxed relative z-10">"{t.text}"</p>
                <div>
                  <p className="font-display font-bold text-primary">{t.name}</p>
                  <p className="text-accent text-xs uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Logos / Partner Section */}
        <div className="border-t border-gray-100 pt-16">
          <p className="text-center text-dark/40 text-xs uppercase tracking-[0.4em] mb-12">Institutions & Partenaires</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
            {/* Logos Placeholders */}
            <div className="flex items-center gap-2 font-display text-xl font-bold">
               <span className="text-primary">ORDRE</span>
               <span className="text-primary/50">DES AVOCATS</span>
            </div>
            <div className="flex items-center gap-2 font-display text-xl font-bold">
               <span className="text-primary">BANQUE</span>
               <span className="text-primary/50">CENTRALE</span>
            </div>
            <div className="flex items-center gap-2 font-display text-xl font-bold">
               <span className="text-primary">CONSERVATION</span>
               <span className="text-primary/50">FONCIÈRE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
