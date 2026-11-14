import Image from "next/image";
import { ArrowUpRight, Gift } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";
import { Highlight } from "@/components/landing/highlight";
import { BlackLeadForm } from "@/components/black/black-lead-form";

const GIFTS = [
  {
    title: "Sistema Larica de Demanda",
    description:
      "Masterclass completa com Dudu Bastos sobre Gestão de Atendimento e Vendas.",
    href: "https://dudubastos.com.br/",
    // Foto recortada (P&B) do Dudu para dar rosto ao brinde, no estilo da seção
    // "Convidados especiais" do site da Imersão Orbis.
    photo: {
      src: "/images/dudu-bastos.webp",
      alt: "Dudu Bastos",
      tag: "Dudu Bastos",
    },
  },
  {
    title: "E-book do Caos ao Controle",
    description:
      "Todos os Processos Operacionais da Gibbous documentados pra você.",
    href: "https://www.orbiscompany.com.br/do-caos-ao-controle",
    photo: {
      src: "/images/matheus-branco.webp",
      alt: "Matheus Branco",
      tag: "Matheus Branco",
    },
  },
];

export function BlackHero() {
  return (
    // No desktop o hero ocupa a 1ª tela (viewport - header - ticker), conteúdo centralizado
    <section className="relative isolate overflow-hidden lg:flex lg:min-h-[calc(100svh-3.8rem-2.9rem)] lg:items-center">
      {/* Glow roxo com textura atrás do headline (mesma linguagem do hero da home) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-30 blur-2xl sm:top-0 sm:h-[520px] sm:w-[520px] sm:-translate-y-1/4 sm:opacity-35 sm:blur-3xl lg:left-[30%] lg:h-[460px] lg:w-[460px] lg:-translate-y-1/3 lg:opacity-25"
        style={{
          backgroundImage: "url(/images/textures/gradient-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Grade sutil, esmaecida nas bordas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
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

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10 lg:py-8">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1.5 text-xs font-semibold text-brand backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-brand" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              <span>
                <strong className="font-extrabold uppercase tracking-wider text-foreground">
                  Black Friday
                </strong>{" "}
                Automatize • Só em novembro
              </span>
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            {/* Mesma tipografia do hero da home: Urbane bold em caixa normal + destaques em serifada itálica */}
            <h1 className="mt-6 font-body text-[2.5rem] font-bold leading-[1.1] sm:text-6xl lg:text-[4.25rem]">
              O seu{" "}
              <Highlight>
                <span className="block text-[1.2em] leading-none sm:inline sm:text-[1em] sm:leading-[inherit]">
                  marketing
                </span>
              </Highlight>
              <br className="hidden sm:block" />
              {/* No mobile "30% off" vira o destaque da tela (maior, em linha própria) */}
              <span className="mt-1 block whitespace-nowrap sm:mt-0 sm:inline">
                <span className="block sm:inline">com</span>{" "}
                <Highlight>
                  <span className="block text-[1.9em] leading-[0.95] sm:inline sm:text-[1em] sm:leading-[inherit]">
                    30% off
                  </span>
                </Highlight>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm lg:justify-start">
              <span className="hidden h-px w-8 bg-gradient-to-r from-transparent to-brand lg:block" />
              <span>
                Nesta{" "}
                <span className="font-heading text-lg font-normal normal-case italic text-brand">
                  Black
                </span>{" "}
                você ganha gratuitamente também
              </span>
            </p>
          </Reveal>

          <div className="mt-4 grid gap-3">
            {GIFTS.map((gift, i) => (
              <Reveal key={gift.title} delay={0.15 + i * 0.05}>
                <a
                  href={gift.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group relative flex h-full items-center overflow-hidden rounded-2xl border bg-card/60 text-left backdrop-blur transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10",
                    gift.photo
                      ? "min-h-[13.5rem] border-brand/40 bg-gradient-to-br from-brand/20 via-card/70 to-card/60 hover:border-brand/70 sm:min-h-[13rem] lg:min-h-0"
                      : "gap-3 border-border p-4 hover:border-brand/50 sm:p-5"
                  )}
                >
                  {/* brilho que aparece no hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-brand/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {gift.photo ? (
                    <>
                      {/* halo atrás da foto */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -bottom-10 right-0 size-56 rounded-full bg-brand/40 blur-3xl"
                      />
                      <div className="relative z-10 flex w-[56%] flex-col items-start gap-2 p-4 sm:w-[58%] sm:gap-3 sm:p-6 lg:p-5">
                        <span className="flex items-center gap-2">
                          <span className="flex size-9 items-center justify-center rounded-xl border border-brand/30 bg-gradient-to-br from-brand/25 to-brand/5 text-brand">
                            <Gift className="size-[18px]" />
                          </span>
                          <span className="rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
                            Grátis
                          </span>
                        </span>
                        <p className="text-[13px] font-semibold uppercase leading-snug tracking-wide sm:text-base">
                          {gift.title}
                        </p>
                        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {gift.description}
                        </p>
                      </div>

                      <Image
                        src={gift.photo.src}
                        alt={gift.photo.alt}
                        width={900}
                        height={1200}
                        sizes="(min-width: 640px) 260px, 45vw"
                        className="pointer-events-none absolute bottom-0 right-0 h-full w-[46%] object-contain object-bottom transition-transform duration-500 ease-premium group-hover:scale-[1.03]"
                      />
                      {/* etiqueta de nome em bloco, como na referência */}
                      <span className="absolute bottom-3 right-3 z-10 bg-brand px-2.5 py-1 text-[10px] font-extrabold uppercase leading-tight tracking-wide text-brand-foreground shadow-lg shadow-black/30 sm:text-xs">
                        {gift.photo.tag}
                      </span>
                      <span className="absolute right-3 top-3 z-10 flex size-7 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur">
                        <ArrowUpRight className="size-3.5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-gradient-to-br from-brand/25 to-brand/5 text-brand">
                        <Gift className="size-5" />
                      </span>
                      <div className="relative flex min-w-0 flex-col gap-1">
                        <p className="pr-20 text-[13px] font-semibold uppercase leading-snug tracking-wide sm:text-sm">
                          {gift.title}
                        </p>
                        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {gift.description}
                        </p>
                      </div>
                      <span className="absolute right-3 top-3 flex items-center gap-1.5">
                        <span className="rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
                          Grátis
                        </span>
                        <ArrowUpRight className="hidden size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand sm:block" />
                      </span>
                    </>
                  )}
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
