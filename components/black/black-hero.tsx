import { ArrowUpRight, Gift } from "lucide-react";

import { Badge } from "@/components/ui/badge";
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
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 40%, var(--background) 100%), linear-gradient(to bottom, rgba(10,8,20,0.35), rgba(10,8,20,0.75)), url(/images/textures/gradient-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <Badge variant="brand" className="gap-1.5">
              Black Friday Automatize • Só em novembro
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 font-body text-5xl font-bold uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
              O seu marketing
              <br />
              <span className="text-brand">com 30% off</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-sm font-medium uppercase tracking-wide text-muted-foreground">
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
                  className="group flex h-full flex-col gap-2 rounded-2xl border border-border bg-card/70 p-5 backdrop-blur transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Gift className="size-5" />
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-brand" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wide">
                    {gift.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {gift.description}
                  </p>
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
