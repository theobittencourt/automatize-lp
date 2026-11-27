import { ArrowRight, Check, ShieldCheck, Sparkles, UtensilsCrossed } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { RestaurantesCtaButton } from "@/components/restaurantes/restaurantes-cta-button";
import { RestaurantesLeadForm } from "@/components/restaurantes/restaurantes-lead-form";

const STEPS = [
  { lead: "Assumimos", highlight: "seu tráfego" },
  { lead: "Produzimos", highlight: "seu criativo" },
  { lead: "Convertemos interessados", highlight: "em pedidos" },
];

export function RestaurantesHero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Glow roxo no canto esquerdo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 -z-10 size-[34rem] rounded-full bg-[#564fd1]/20 blur-3xl"
      />
      {/* Grade sutil, esmaecida nas bordas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 20%, transparent 100%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-14 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-14">
        <div className="min-w-0">
          <Reveal>
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a8a1ff] sm:text-[11px]">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-[#766cf0]/40 bg-[#766cf0]/15">
                <Sparkles aria-hidden className="size-3.5" />
              </span>
              Seja bem-vindo à nova era dos restaurantes
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-[2.35rem] font-black uppercase leading-[0.98] tracking-tight min-[400px]:text-[2.65rem] sm:text-6xl lg:text-[3.6rem] xl:text-[4rem]">
              <span className="block">Lotamos seu</span>
              <span className="block">restaurante</span>
              <span className="block text-[#a8a1ff]">de pedidos</span>
              <span className="block">todos os dias</span>
              <span className="mt-2 block font-heading text-[1.25em] font-normal italic leading-none text-[#938bff]">
                usando IA
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Do anúncio ao pedido dentro do seu cardápio próprio: cuidamos de todo
              o processo enquanto você se preocupa apenas em entregar.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ol id="como-funciona" className="mt-7 grid scroll-mt-28 gap-3 sm:grid-cols-3 sm:gap-2.5">
              {STEPS.map((step, i) => (
                <li
                  key={step.highlight}
                  className="relative flex min-h-[4.5rem] items-center gap-2.5 rounded-lg border border-border bg-card/40 px-3 py-4"
                >
                  <span aria-hidden className="absolute right-2 top-1.5 text-[9px] text-muted-foreground">
                    /0{i + 1}
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-[#766cf0]/40 bg-[#766cf0]/15 text-[#a8a1ff]">
                    <Check aria-hidden className="size-3.5" />
                  </span>
                  <span className="text-xs leading-snug">
                    {step.lead} <strong className="font-semibold text-[#a8a1ff]">{step.highlight}</strong>
                  </span>
                  {i < STEPS.length - 1 && (
                    <ArrowRight
                      aria-hidden
                      className="absolute -right-[11px] top-1/2 z-10 hidden size-3.5 -translate-y-1/2 text-[#a8a1ff] sm:block"
                    />
                  )}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.2}>
            <RestaurantesCtaButton className="mt-6 w-full sm:w-auto" />
            <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck aria-hidden className="size-3.5 shrink-0 text-[#a8a1ff]" />
              Conte um pouco sobre a sua loja e dê o próximo passo.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="min-w-0">
          <RestaurantesLeadForm />
        </Reveal>
      </div>

      <p className="mx-auto hidden max-w-6xl items-center justify-end gap-2.5 px-4 pb-8 text-[10px] uppercase tracking-[0.14em] text-muted-foreground lg:flex">
        <UtensilsCrossed aria-hidden className="size-3.5 text-[#a8a1ff]" />
        Restaurante × Tecnologia
      </p>
    </section>
  );
}
