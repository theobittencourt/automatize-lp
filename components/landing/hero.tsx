import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";
import { Highlight } from "@/components/landing/highlight";
import { HeroMockup } from "@/components/landing/hero-mockup";

const GUARANTEES = [
  "7 dias grátis",
  "Sem multa de cancelamento",
  "Implementação descomplicada",
];

export function Hero() {
  return (
    <section className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 overflow-hidden px-4 py-24 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 hidden h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40 blur-3xl dark:block"
        style={{
          backgroundImage: "url(/images/textures/gradient-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Reveal delay={0.05}>
        <h1 className="font-body text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          A forma mais inteligente de aumentar seus <Highlight>pedidos</Highlight>{" "}
          e o seu <Highlight>lucro</Highlight>
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="max-w-2xl text-muted-foreground">
          Aqui unimos estratégia, marketing e vendas de forma descomplicada e
          acessível para que você obtenha mais lucro, e menos estresse com
          serviços que prometem e não entregam.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90">
            Teste por 7 dias grátis
          </Button>
          <Button size="lg" variant="outline">
            Falar com um especialista
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
          {GUARANTEES.map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-brand" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.25} className="w-full">
        <HeroMockup />
      </Reveal>
    </section>
  );
}
