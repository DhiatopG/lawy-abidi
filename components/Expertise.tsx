import { 
  Building, 
  TrendingUp, 
  Landmark, 
  Shield, 
  Handshake, 
  Gavel, 
  ShoppingCart, 
  Users, 
  Calculator, 
  Building2, 
  Smartphone, 
  Lock, 
  Trophy,
  ArrowUpRight
} from 'lucide-react';

const expertises = [
  {
    title: "Droit des Sociétés & Fusions-Acquisitions",
    description: "Accompagnement juridique pour la création, la gestion et la restructuration d'entreprises.",
    icon: Building,
    color: "bg-primary text-white"
  },
  {
    title: "Droit des Investissements",
    description: "Conseil et sécurisation des opérations d'investissement nationales et internationales.",
    icon: TrendingUp,
    color: "bg-white text-dark"
  },
  {
    title: "Droit Bancaire, Finance & Marchés des Capitaux",
    description: "Expertise en réglementation bancaire, financement et opérations sur les marchés financiers.",
    icon: Landmark,
    color: "bg-white text-dark"
  },
  {
    title: "Droit des Assurances & Réassurance",
    description: "Gestion des litiges, audit de polices et conseil en réglementation des assurances.",
    icon: Shield,
    color: "bg-accent/10 text-dark border-accent/20 border"
  },
  {
    title: "Financement de Projets & Partenariats",
    description: "Structuration juridique de projets complexes et partenariats public-privé (PPP).",
    icon: Handshake,
    color: "bg-white text-dark"
  },
  {
    title: "Droit du Contentieux & Arbitrage",
    description: "Représentation devant les juridictions et instances arbitrales pour la résolution de conflits.",
    icon: Gavel,
    color: "bg-primary text-white"
  },
  {
    title: "Concurrence, Consommation & Distribution",
    description: "Mise en conformité, rédaction de contrats de distribution et contentieux concurrentiel.",
    icon: ShoppingCart,
    color: "bg-white text-dark"
  },
  {
    title: "Droit du Travail & Protection Sociale",
    description: "Conseil en relations sociales, contrats de travail et gestion des litiges prud'homaux.",
    icon: Users,
    color: "bg-accent/10 text-dark border-accent/20 border"
  },
  {
    title: "Droit Fiscal",
    description: "Optimisation fiscale, assistance lors de contrôles et contentieux de l'impôt.",
    icon: Calculator,
    color: "bg-white text-dark"
  },
  {
    title: "Droit Immobilier, Construction & Tourisme",
    description: "Sécurisation des transactions, baux commerciaux et litiges de la construction.",
    icon: Building2,
    color: "bg-primary text-white"
  },
  {
    title: "Télécommunications & Nouvelles Technologies",
    description: "Accompagnement juridique dans les secteurs du numérique et de la tech.",
    icon: Smartphone,
    color: "bg-white text-dark"
  },
  {
    title: "Propriété Intellectuelle & Données",
    description: "Protection des marques, brevets et mise en conformité RGPD/protection des données.",
    icon: Lock,
    color: "bg-white text-dark"
  },
  {
    title: "Droit du Sport",
    description: "Conseil et représentation pour les acteurs du monde sportif, clubs et athlètes.",
    icon: Trophy,
    color: "bg-accent/10 text-dark border-accent/20 border"
  }
];

const Expertise = () => {
  return (
    <section id="expertises" className="py-24 bg-marble">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-accent mb-4">Domaines d'Intervention à Ariana</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Avocat à Ariana
          </h3>
          <p className="text-dark/70 leading-relaxed">
            Notre cabinet accompagne les particuliers et les professionnels dans toutes les étapes de leurs projets juridiques à Ariana, Tunis et partout en Tunisie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertises.map((item, i) => (
            <div 
              key={i} 
              className={`bento-card group relative flex flex-col justify-between overflow-hidden col-span-1 ${item.color}`}
            >
              <div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${item.color.includes('primary') ? 'bg-accent text-white' : 'bg-primary/5 text-primary'}`}>
                  <item.icon size={24} />
                </div>
                <h4 className={`text-2xl font-display font-bold mb-4 ${item.color.includes('primary') ? 'text-white' : 'text-primary'}`}>
                  {item.title}
                </h4>
                <p className={`text-sm leading-relaxed mb-8 ${item.color.includes('primary') ? 'text-marble/70' : 'text-dark/60'}`}>
                  {item.description}
                </p>
              </div>
              
              <div className="flex justify-end">
                <button className={`p-3 rounded-full transition-all duration-300 ${item.color.includes('primary') ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-primary/5 text-primary hover:bg-primary hover:text-white'}`}>
                  <ArrowUpRight size={20} />
                </button>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute top-[-20%] right-[-10%] opacity-[0.03] pointer-events-none transform rotate-12 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-45">
                <item.icon size={200} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
