import type { Metadata } from "next";

import { CaptureHeader } from "@/components/captura/capture-header";
import { CaptureHero } from "@/components/captura/capture-hero";
import { CaptureSocialProof } from "@/components/captura/capture-social-proof";
import { CapturePainPoints } from "@/components/captura/capture-pain-points";
import { CaptureAuthority } from "@/components/captura/capture-authority";
import { CaptureChallengeCta } from "@/components/captura/capture-challenge-cta";
import { CaptureLeadForm } from "@/components/captura/capture-lead-form";
import { CaptureFaq } from "@/components/captura/capture-faq";
import { CaptureFooter } from "@/components/captura/capture-footer";

export const metadata: Metadata = {
  title: "Isaac da Rocha + Automatize Marketing | A Máquina de Pedidos para Delivery",
  description:
    "A 1ª IA que cria e gerencia todo o seu Tráfego Pago e Marketing de forma 100% automática. Teste por 7 dias grátis.",
};

export default function CapturaPage() {
  return (
    <>
      <CaptureHeader />
      <main>
        <CaptureHero />
        <CaptureSocialProof />
        <CapturePainPoints />
        <CaptureAuthority />
        <CaptureChallengeCta />
        <CaptureLeadForm />
        <CaptureFaq />
      </main>
      <CaptureFooter />
    </>
  );
}
