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
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  subServices: string[];
}

export const services: Service[] = [
  {
    slug: "droit-des-societes",
    title: "Droit des Sociétés & Fusions-Acquisitions",
    description:
      "Accompagnement juridique pour la création, la gestion et la restructuration d'entreprises.",
    icon: Building,
    color: "bg-primary text-white",
    subServices: [
      "Création et immatriculation de sociétés (SARL, SA, SNC…)",
      "Rédaction et négociation de statuts sociaux",
      "Pactes d'actionnaires et gouvernance d'entreprise",
      "Restructurations, fusions et acquisitions (M&A)",
      "Scissions et apports partiels d'actifs",
      "Cession de fonds de commerce et de parts sociales",
      "Dissolution et liquidation de sociétés",
      "Assemblées générales et résolutions sociales",
      "Audit juridique (due diligence) pré-acquisition",
    ],
  },
  {
    slug: "droit-des-investissements",
    title: "Droit des Investissements",
    description:
      "Conseil et sécurisation des opérations d'investissement nationales et internationales.",
    icon: TrendingUp,
    color: "bg-white text-dark",
    subServices: [
      "Structuration juridique de projets d'investissement",
      "Investissements étrangers en Tunisie (Code d'Investissement)",
      "Création de joint-ventures et partenariats stratégiques",
      "Montage contractuel pour les opérations transfrontalières",
      "Accompagnement auprès des organismes d'agrément (FIPA, etc.)",
      "Protection des investissements et traités bilatéraux (TBI)",
      "Résolution de litiges investisseurs-État",
    ],
  },
  {
    slug: "droit-bancaire-finance",
    title: "Droit Bancaire, Finance & Marchés des Capitaux",
    description:
      "Expertise en réglementation bancaire, financement et opérations sur les marchés financiers.",
    icon: Landmark,
    color: "bg-white text-dark",
    subServices: [
      "Conseil en réglementation bancaire et conformité",
      "Montage de financements structurés et syndiqués",
      "Crédits immobiliers et financement de projets",
      "Sûretés et garanties (hypothèques, nantissements, cautions)",
      "Opérations sur titres et marchés boursiers (BVMT)",
      "Émissions obligataires et introductions en bourse",
      "Financement islamique (Sukuk, Mourabaha…)",
      "Gestion des contentieux bancaires et recouvrement",
    ],
  },
  {
    slug: "droit-des-assurances",
    title: "Droit des Assurances & Réassurance",
    description:
      "Gestion des litiges, audit de polices et conseil en réglementation des assurances.",
    icon: Shield,
    color: "bg-accent/10 text-dark border-accent/20 border",
    subServices: [
      "Conseil aux compagnies d'assurance et intermédiaires",
      "Analyse et audit de polices d'assurance",
      "Gestion et défense en cas de sinistres complexes",
      "Litiges en indemnisation (accidents, dommages, RC)",
      "Assurance vie et prévoyance",
      "Conformité réglementaire (CGA, ACAPS équivalent tunisien)",
      "Réassurance : structuration et contentieux",
    ],
  },
  {
    slug: "financement-de-projets",
    title: "Financement de Projets & Partenariats",
    description:
      "Structuration juridique de projets complexes et partenariats public-privé (PPP).",
    icon: Handshake,
    color: "bg-white text-dark",
    subServices: [
      "Montage juridique de projets d'infrastructure",
      "Contrats de concession et délégations de service public",
      "Partenariats Public-Privé (PPP) et BOT",
      "Contrats EPC, O&M et autres contrats de construction",
      "Financement de projets énergétiques (EnR, solaire, éolien)",
      "Négociation avec les bailleurs de fonds (BM, BAD, BEI…)",
      "Gestion des risques contractuels et documentation de projet",
    ],
  },
  {
    slug: "contentieux-arbitrage",
    title: "Droit du Contentieux & Arbitrage",
    description:
      "Représentation devant les juridictions et instances arbitrales pour la résolution de conflits.",
    icon: Gavel,
    color: "bg-primary text-white",
    subServices: [
      "Représentation devant toutes les juridictions tunisiennes",
      "Procédures civiles et commerciales",
      "Référés et mesures conservatoires d'urgence",
      "Arbitrage national (CACC, CACCIA…)",
      "Arbitrage international (CCI, CIRDI, CNUDCI…)",
      "Médiation et modes alternatifs de règlement des conflits (MARC)",
      "Reconnaissance et exécution des sentences arbitrales",
      "Voies d'exécution et recouvrement de créances",
    ],
  },
  {
    slug: "concurrence-consommation",
    title: "Concurrence, Consommation & Distribution",
    description:
      "Mise en conformité, rédaction de contrats de distribution et contentieux concurrentiel.",
    icon: ShoppingCart,
    color: "bg-white text-dark",
    subServices: [
      "Audit et conformité au droit de la concurrence tunisien",
      "Pratiques anticoncurrentielles : cartels, abus de position dominante",
      "Procédures devant le Conseil de la Concurrence",
      "Rédaction de contrats de distribution, franchise et agence commerciale",
      "Contentieux en droit de la consommation",
      "Publicité comparative et pratiques commerciales déloyales",
      "Protection des données personnelles des consommateurs",
    ],
  },
  {
    slug: "droit-du-travail",
    title: "Droit du Travail & Protection Sociale",
    description:
      "Conseil en relations sociales, contrats de travail et gestion des litiges prud'homaux.",
    icon: Users,
    color: "bg-accent/10 text-dark border-accent/20 border",
    subServices: [
      "Rédaction et négociation de contrats de travail (CDI, CDD…)",
      "Règlements intérieurs et chartes d'entreprise",
      "Gestion des procédures disciplinaires et licenciements",
      "Relations avec les syndicats et négociation collective",
      "Contentieux prud'homaux et représentation au tribunal",
      "Harcèlement moral et sexuel : prévention et défense",
      "Conformité au Code du Travail tunisien",
      "Conseil en protection sociale et sécurité au travail",
    ],
  },
  {
    slug: "droit-fiscal",
    title: "Droit Fiscal",
    description:
      "Optimisation fiscale, assistance lors de contrôles et contentieux de l'impôt.",
    icon: Calculator,
    color: "bg-white text-dark",
    subServices: [
      "Conseil en fiscalité des entreprises et des particuliers",
      "Optimisation fiscale et planification successorale",
      "TVA, IS, IRPP : gestion et déclarations",
      "Fiscalité des opérations de M&A et restructurations",
      "Assistance lors des contrôles et vérifications fiscales",
      "Contentieux fiscaux devant le Tribunal administratif",
      "Fiscalité internationale et prix de transfert",
      "Conventions fiscales bilatérales (CDI)",
    ],
  },
  {
    slug: "droit-immobilier",
    title: "Droit Immobilier, Construction & Tourisme",
    description:
      "Sécurisation des transactions, baux commerciaux et litiges de la construction.",
    icon: Building2,
    color: "bg-primary text-white",
    subServices: [
      "Transactions immobilières : vente, acquisition, due diligence",
      "Baux commerciaux, résidentiels et ruraux",
      "Copropriété et gestion d'immeubles",
      "Promotion immobilière et contrats de construction (CCMI, VFA…)",
      "Litiges de la construction : malfaçons, retards, résiliation",
      "Droit de l'urbanisme et permis de construire",
      "Expropriation pour utilité publique",
      "Investissements hôteliers et touristiques",
    ],
  },
  {
    slug: "telecoms-nouvelles-technologies",
    title: "Télécommunications & Nouvelles Technologies",
    description:
      "Accompagnement juridique dans les secteurs du numérique et de la tech.",
    icon: Smartphone,
    color: "bg-white text-dark",
    subServices: [
      "Contrats IT : développement logiciel, SaaS, cloud",
      "Réglementation des télécommunications (Instance Nationale des Télécoms)",
      "Cybersécurité et protection des systèmes d'information",
      "Commerce électronique et plateformes numériques",
      "Intelligence artificielle : enjeux éthiques et juridiques",
      "Protection des données et conformité RGPD/loi 2004-63",
      "Licences de logiciels et contrats open source",
      "Litiges numériques et contentieux IT",
    ],
  },
  {
    slug: "propriete-intellectuelle",
    title: "Propriété Intellectuelle & Données",
    description:
      "Protection des marques, brevets et mise en conformité RGPD/protection des données.",
    icon: Lock,
    color: "bg-white text-dark",
    subServices: [
      "Dépôt et enregistrement de marques (INNORPI, OMPI)",
      "Brevets d'invention et modèles d'utilité",
      "Dessins et modèles industriels",
      "Droits d'auteur et droits voisins",
      "Contrats de licence, cession et transfert de technologie",
      "Action en contrefaçon et concurrence déloyale",
      "Noms de domaine et identité numérique",
      "Mise en conformité RGPD et protection des données personnelles",
    ],
  },
  {
    slug: "droit-du-sport",
    title: "Droit du Sport",
    description:
      "Conseil et représentation pour les acteurs du monde sportif, clubs et athlètes.",
    icon: Trophy,
    color: "bg-accent/10 text-dark border-accent/20 border",
    subServices: [
      "Contrats de sportifs professionnels et agents sportifs",
      "Contrats de sponsoring et partenariats commerciaux",
      "Droit disciplinaire sportif et recours devant les fédérations",
      "Arbitrage sportif (TAS / CAS) et litiges internationaux",
      "Constitution et gestion juridique de clubs sportifs",
      "Droits TV, médias et exploitation commerciale des événements",
      "Lutte contre le dopage : aspects juridiques",
      "Protection de l'image et de la réputation des athlètes",
    ],
  },
];
