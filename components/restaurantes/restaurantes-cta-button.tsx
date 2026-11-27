import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

// Estilo do botão principal da página (hero, formulário e fechamento).
export const ctaClass =
  // a seta é absoluta pra não empurrar o texto pra fora do centro
  "relative inline-flex items-center justify-center rounded-lg border border-white/20 bg-gradient-to-r from-[#564fd1] to-[#766cf0] px-10 py-3.5 text-center text-sm font-medium uppercase leading-snug text-white shadow-lg shadow-[#6a60e6]/30 transition-all duration-200 ease-premium hover:shadow-xl hover:shadow-[#6a60e6]/50 active:scale-[0.98] [&_svg]:absolute [&_svg]:right-4 [&_svg]:size-4";

export const CTA_LABEL = "Quero meu restaurante lotado de pedidos";

// Âncora que leva o visitante (de volta) para o formulário de cadastro.
export function RestaurantesCtaButton({ className }: { className?: string }) {
  return (
    <a href="#cadastro" className={cn(ctaClass, className)}>
      {CTA_LABEL}
      <ArrowUpRight />
    </a>
  );
}
