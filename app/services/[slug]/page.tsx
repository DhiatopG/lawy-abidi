import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Phone, Mail } from "lucide-react";
import { services } from "@/lib/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

// ── SEO ──────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service introuvable | Maître Yosra Abidi",
    };
  }

  const title = `${service.title} | Avocat Ariana – Maître Yosra Abidi`;
  const description = `Cabinet Maître Yosra Abidi à Ariana : expertise en ${service.title}. ${service.description} Contactez-nous pour une consultation.`;

  return {
    title,
    description,
    keywords: [
      service.title,
      "Avocat Ariana",
      "Maître Yosra Abidi",
      "Cabinet d'avocat Tunisie",
      ...service.subServices.slice(0, 5),
    ],
    openGraph: {
      title,
      description,
      url: `https://avocat-abidi.tn/services/${service.slug}`,
      siteName: "Cabinet Maître Yosra Abidi",
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = service.icon;
  const isPrimary = service.color.includes("primary");

  return (
    <main className="flex-grow bg-marble min-h-screen">
      {/* ── Hero Banner ── */}
      <section className="bg-primary text-white pt-32 pb-20 relative overflow-hidden">
        {/* Decorative background icon */}
        <div className="absolute top-[-10%] right-[-5%] opacity-[0.04] pointer-events-none">
          <Icon size={500} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Back link */}
          <Link
            href="/#expertises"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors duration-200 mb-10 group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Retour aux domaines d&apos;intervention
          </Link>

          {/* Icon badge */}
          <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 shadow-lg">
            <Icon size={30} className="text-white" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white max-w-3xl leading-tight mb-6">
            {service.title}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* ── Sub-Services Grid ── */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-accent mb-4">
              Nos Prestations
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-12">
              Ce que nous faisons pour vous
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.subServices.map((sub, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border border-primary/5 group hover:border-accent/30 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle2
                    size={20}
                    className="text-accent mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-dark/80 text-sm leading-relaxed font-medium">
                    {sub}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
              Consultation
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
              Besoin d&apos;un conseil en{" "}
              <span className="text-accent italic">{service.title}</span> ?
            </h2>
            <p className="text-dark/60 leading-relaxed mb-10 text-lg">
              Maître Yosra Abidi et son cabinet sont à votre disposition pour
              analyser votre situation et vous accompagner avec rigueur et
              expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+21698765432"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md"
              >
                <Phone size={18} />
                Appeler le cabinet
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-primary text-primary font-semibold px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Mail size={18} />
                Envoyer un message
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
