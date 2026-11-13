import { ArrowUpRight, Gift } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { BlackLeadForm } from "@/components/black/black-lead-form";

const GIFTS = [
  {
    title: "Sistema Larica de Demanda",
    description:
      "Masterclass completa com Dudu Bastos sobre Gestão de Atendimento e Vendas.",
    href: "https://dudubastos.com.br/",
  },
  {
    title: "E-book do Caos ao Controle",
    description:
      "Todos os Processos Operacionais da Gibbous documentados pra você.",
    href: "https://www.orbiscompany.com.br/do-caos-ao-controle",
  },
];

export function BlackHero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Glow roxo com textura atrás do headline (mesma linguagem do hero da home) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-50 blur-2xl sm:top-0 sm:h-[520px] sm:w-[520px] sm:-translate-y-1/4 sm:opacity-35 sm:blur-3xl lg:left-[30%] lg:h-[460px] lg:w-[460px] lg:-translate-y-1/3 lg:opacity-25"
        style={{
          backgroundImage: "url(/images/textures/gradient-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Grade sutil, esmaecida nas bordas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 40% 30%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 40% 30%, #000 30%, transparent 100%)",
        }}
      />
      {/* Fade para o fundo da página */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1.5 text-xs font-semibold text-brand backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-brand" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              Black Friday Automatize • Só em novembro
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 font-body text-[2.5rem] font-bold uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
              O seu{" "}
              <span className="block font-heading text-[1.15em] font-normal normal-case italic leading-none text-brand sm:inline sm:text-[1em] sm:leading-[inherit]">
                marketing
              </span>
              <br className="hidden sm:block" />
              {/* No mobile "30% off" vira o destaque da tela (maior, em linha própria) */}
              <span className="mt-1 block whitespace-nowrap bg-gradient-to-r from-brand via-brand to-white bg-clip-text text-transparent sm:mt-0 sm:inline">
                <span className="block sm:inline">com</span>{" "}
                <span className="block text-[1.7em] leading-[0.95] sm:inline sm:text-[1em] sm:leading-[inherit]">
                  30% off
                </span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm lg:justify-start">
              <span className="hidden h-px w-8 bg-gradient-to-r from-transparent to-brand lg:block" />
              Nesta Black você ganha gratuitamente também
            </p>
          </Reveal>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {GIFTS.map((gift, i) => (
              <Reveal key={gift.title} delay={0.15 + i * 0.05}>
                <a
                  href={gift.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full items-center gap-3 overflow-hidden rounded-2xl border border-border bg-card/60 p-4 text-left backdrop-blur transition-all sm:flex-col sm:items-stretch sm:gap-2 sm:p-5 duration-300 ease-premium hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10"
                >
                  {/* brilho que aparece no hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-brand/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="flex shrink-0 items-start justify-between gap-2 sm:relative">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-brand/30 bg-gradient-to-br from-brand/25 to-brand/5 text-brand sm:size-10">
                      <Gift className="size-5" />
                    </span>
                    {/* No mobile o chip fica no canto do card; a partir do sm volta pro fluxo */}
                    <span className="absolute right-3 top-3 flex items-center gap-1.5 sm:static">
                      <span className="rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
                        Grátis
                      </span>
                      <ArrowUpRight className="hidden size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand sm:block" />
                    </span>
                  </div>
                  <div className="relative flex min-w-0 flex-col gap-1 sm:gap-2">
                    <p className="pr-14 text-[13px] font-semibold uppercase leading-snug tracking-wide sm:pr-0 sm:text-sm">
                      {gift.title}
                    </p>
                    <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {gift.description}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <BlackLeadForm />
        </Reveal>
      </div>
    </section>
  );
}
