import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

// Estilo do botão principal da página (hero, formulário e fechamento).
export const ctaClass =
  "inline-flex items-center justify-center gap-4 rounded-lg border border-white/20 bg-gradient-to-r from-[#564fd1] to-[#766cf0] px-5 py-3.5 text-sm font-medium uppercase leading-snug text-white shadow-lg shadow-[#6a60e6]/30 transition-all duration-200 ease-premium hover:shadow-xl hover:shadow-[#6a60e6]/50 active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0";

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
