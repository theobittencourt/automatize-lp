import type { Metadata } from "next";

import { BlackHeader } from "@/components/black/black-header";
import { BlackHero } from "@/components/black/black-hero";
import { BlackCalculator } from "@/components/black/black-calculator";
import { BlackSocialProof } from "@/components/black/black-social-proof";
import { BlackFaq } from "@/components/black/black-faq";
import { BlackFooter } from "@/components/black/black-footer";

export const metadata: Metadata = {
  title: "Black Friday Automatize | O seu marketing com 30% OFF",
  description:
    "Só em novembro: planos Pro e Premium da Automatize com 30% OFF, além de produtos gratuitos do Dudu Bastos e do Matheus Branco (Gibbous).",
};

// A página inteira usa o tema escuro (visual "Black"), independente do tema do
// usuário. Para seguir o tema do site, é só remover a classe "dark" abaixo.
export default function BlackPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <BlackHeader />
      <main>
        <BlackHero />
        <BlackCalculator />
        <BlackSocialProof />
        <BlackFaq />
      </main>
      <BlackFooter />
    </div>
  );
}
