import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/services";

const Expertise = () => {
  return (
    <section id="expertises" className="py-24 bg-marble">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-accent mb-4">
            Domaines d&apos;Intervention à Ariana
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Avocat à Ariana
          </h3>
          <p className="text-dark/70 leading-relaxed">
            Notre cabinet accompagne les particuliers et les professionnels dans
            toutes les étapes de leurs projets juridiques à Ariana, Tunis et
            partout en Tunisie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <Link
              key={i}
              href={`/services/${item.slug}`}
              className={`bento-card group relative flex flex-col justify-between overflow-hidden col-span-1 ${item.color} focus:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${
                    item.color.includes("primary")
                      ? "bg-accent text-white"
                      : "bg-primary/5 text-primary"
                  }`}
                >
                  <item.icon size={24} />
                </div>
                <h4
                  className={`text-2xl font-display font-bold mb-4 ${
                    item.color.includes("primary") ? "text-white" : "text-primary"
                  }`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-sm leading-relaxed mb-8 ${
                    item.color.includes("primary")
                      ? "text-marble/70"
                      : "text-dark/60"
                  }`}
                >
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-semibold uppercase tracking-widest transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                    item.color.includes("primary") ? "text-accent" : "text-accent"
                  }`}
                >
                  En savoir plus
                </span>
                <div
                  className={`p-3 rounded-full transition-all duration-300 ${
                    item.color.includes("primary")
                      ? "bg-white/10 text-white group-hover:bg-accent group-hover:text-white"
                      : "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white"
                  }`}
                >
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute top-[-20%] right-[-10%] opacity-[0.03] pointer-events-none transform rotate-12 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-45">
                <item.icon size={200} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
