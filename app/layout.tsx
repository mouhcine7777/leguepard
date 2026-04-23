import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Le Guépard Tanger — Fooding and Dancing",
    template: "%s | Le Guépard Tanger",
  },
  description:
    "Le Guépard, restaurant gastronomique et soirées dansantes à Tanger. Cuisine raffinée, cocktails signatures et ambiance unique au cœur de la ville du Détroit.",

  keywords: [
    "Le Guépard",
    "Le Guépard Tanger",
    "leguepard-tanger.com",
    "restaurant Tanger",
    "restaurant gastronomique Tanger",
    "meilleur restaurant Tanger",
    "restaurant dîner Tanger",
    "restaurant soirée Tanger",
    "cuisine française Tanger",
    "cuisine internationale Tanger",
    "carte des vins Tanger",
    "cocktails Tanger",
    "champagne Tanger",
    "best restaurant Tangier",
    "fine dining Tangier",
    "restaurant Tangier Morocco",
    "dinner Tangier",
    "cocktail bar Tangier",
    "dancing Tanger",
    "soirée dansante Tanger",
    "night out Tanger",
    "bar restaurant Tanger",
    "sortie nocturne Tanger",
    "ambiance Tanger",
    "club restaurant Tanger",
    "fooding Tanger",
    "gastronomie Tanger",
    "expérience culinaire Tanger",
    "bonne table Tanger",
    "restaurant tendance Tanger",
    "restaurant chic Tanger",
    "Tanger Maroc restaurant",
    "Tangier Morocco",
    "restaurant détroit de Gibraltar",
  ],

  alternates: {
    canonical: "https://leguepard-tanger.com",
    languages: {
      "fr-MA": "https://leguepard-tanger.com",
      "en-US": "https://leguepard-tanger.com/eng",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  applicationName: "Le Guépard Tanger",
  authors: [{ name: "Le Guépard", url: "https://leguepard-tanger.com" }],
  creator: "Le Guépard Tanger",
  publisher: "Le Guépard Tanger",
  category: "restaurant",
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Le Guépard",
  description:
    "Restaurant gastronomique et soirées dansantes à Tanger. Cuisine raffinée, cocktails signatures et ambiance unique.",
  url: "https://leguepard-tanger.com",
  logo: "https://leguepard-tanger.com/logo.png",
  telephone: "+212-677 131 376",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tanger",
    addressCountry: "MA",
  },
  servesCuisine: ["Française", "Internationale", "Méditerranéenne"],
  hasMenu: "https://leguepard-tanger.com",
  currenciesAccepted: "MAD",
  paymentAccepted: "Cash, Credit Card",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
      ],
      opens: "18:00",
      closes: "02:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/leguepard.tanger",
    "https://www.facebook.com/leguepardtanger",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}