import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";

import { BlackFooter } from "@/components/black/black-footer";
import {
  RestaurantesAnnouncement,
  RestaurantesHeader,
} from "@/components/restaurantes/restaurantes-header";
import { RestaurantesHero } from "@/components/restaurantes/restaurantes-hero";
import { RestaurantesSocialProof } from "@/components/restaurantes/restaurantes-social-proof";
import { RestaurantesFinalCta } from "@/components/restaurantes/restaurantes-final-cta";

// Itálico da referência: substitui a IvyMode (sem arquivos no projeto) só aqui.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Automatize | Lotamos seu restaurante de pedidos usando IA",
  description:
    "Do anúncio ao pedido dentro do seu cardápio próprio: cuidamos de todo o processo enquanto você se preocupa apenas em entregar.",
};

// Tema escuro fixo, como na /black.
export default function RestaurantesPage() {
  return (
    <div
      className={`${instrumentSerif.variable} dark min-h-screen bg-background text-foreground [--font-ivy-mode:var(--font-instrument-serif),Georgia,serif]`}
    >
      <RestaurantesAnnouncement />
      <RestaurantesHeader />
      <main>
        <RestaurantesHero />
        <RestaurantesSocialProof />
        <RestaurantesFinalCta />
      </main>
      <BlackFooter />
    </div>
  );
}
