import { LandingPage } from "@/components/landing/landing-page";

// Rota de teste A/B — headline 1.1 (ver messages/pt.json: Hero.variants.v1)
export default function HeroV1Page() {
  return <LandingPage heroVariant="v1" />;
}
