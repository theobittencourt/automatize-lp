import { LandingPage } from "@/components/landing/landing-page";

// Rota de teste A/B — headline 2.2 (ver messages/pt.json: Hero.variants.v2)
export default function HeroV2Page() {
  return <LandingPage heroVariant="v2" />;
}
