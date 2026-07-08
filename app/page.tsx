import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { SocialProof } from "@/components/landing/social-proof";
import { PhotoComparison } from "@/components/landing/photo-comparison";
import { Features } from "@/components/landing/features";
import { Differentiators } from "@/components/landing/differentiators";
import { Pricing } from "@/components/landing/pricing";
import { TrialChallenge } from "@/components/landing/trial-challenge";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <SocialProof />
        <PhotoComparison />
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
