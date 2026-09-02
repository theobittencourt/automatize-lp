import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { SocialProof } from "@/components/landing/social-proof";
import { MatSection } from "@/components/landing/mat-section";
import { Features } from "@/components/landing/features";
import { Differentiators } from "@/components/landing/differentiators";
import { Pricing } from "@/components/landing/pricing";
import { TrialChallenge } from "@/components/landing/trial-challenge";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

type LandingPageProps = {
  heroVariant?: "v1" | "v2";
};

export function LandingPage({ heroVariant }: LandingPageProps) {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero variant={heroVariant} />
        <SocialProof />
        <MatSection />
        <Features />
        <Differentiators />
        <Pricing />
        <TrialChallenge />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
