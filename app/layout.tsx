import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Best Avocat Ariana | Droit Immobilier | Maitre Yosra Abidi | Near Me",
  description: "Maitre Yosra Abidi, Cabinet d'Avocat à Ariana. Expertise en droit immobilier, droit des affaires, et pluridisciplinaire. Sécurisez votre patrimoine.",
  keywords: [
    "Avocat Ariana", "Droit Immobilier", "Maitre Yosra Abidi", "Droit des Sociétés", 
    "Droit des Investissements", "Droit Bancaire", "Droit des Assurances", 
    "Financement de Projets", "Contentieux", "Droit de la Concurrence", 
    "Droit du Travail", "Droit Fiscal", "Télécommunications", 
    "Propriété Intellectuelle", "Droit du Sport", "Tunisie"
  ],
  openGraph: {
    title: "Best Avocat Ariana | Droit Immobilier | Maitre Yosra Abidi | Near Me",
    description: "Maitre Yosra Abidi, Cabinet d'Avocat à Ariana. Expertise pluridisciplinaire en droit immobilier et droit des affaires.",
    url: "https://avocat-abidi.tn",
    siteName: "Cabinet Maitre Yosra Abidi",
    images: [
      {
        url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Avocat Ariana | Droit Immobilier | Maitre Yosra Abidi | Near Me",
    description: "Maitre Yosra Abidi, Cabinet d'Avocat à Ariana. Expertise en droit immobilier et affaires.",
    images: ["https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-marble text-dark antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
