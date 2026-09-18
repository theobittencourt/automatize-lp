import { CheckCircle2, Instagram, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/landing/reveal";
import { Highlight } from "@/components/landing/highlight";

const CHECKS = [
  "Campanhas de tráfego criadas com IA",
  "Posts, roteiros e artes em poucos cliques",
  "Mais pedidos sem depender de agência",
  "7 dias grátis para testar",
];

export function CaptureHero() {
  return (
    <section className="relative mx-auto grid max-w-6xl gap-12 overflow-hidden px-4 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 hidden h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40 blur-3xl dark:block"
        style={{
          backgroundImage: "url(/images/textures/gradient-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div>
        <Reveal>
          <Badge variant="brand" className="gap-1.5">
            <Sparkles className="size-3.5" />
            Isaac da Rocha • Automatize Marketing Oficial
          </Badge>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-4 font-body text-4xl font-bold leading-tight sm:text-5xl">
            Aumente as Vendas do Seu Delivery de forma{" "}
            <Highlight>100% Automática</Highlight> — Sem depender de Agências
            de Tráfego Pago
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-muted-foreground">
            A 1ª IA que cria todas suas campanhas de Tráfego Pago de forma
            assertiva, publica seus posts, cria roteiros e artes para o seu
            negócio — de forma acessível, rápida e inteligente.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {CHECKS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              asChild
              className="h-auto w-full whitespace-normal py-3 text-center leading-snug bg-brand text-brand-foreground hover:bg-brand/90 sm:w-auto"
            >
              <a href="#oferta">Quero desbloquear a condição especial</a>
            </Button>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Vagas promocionais ativas hoje
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.25}>
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/isaac_da_rocha_f87f4890.jpg"
            alt="Isaac da Rocha"
            className="aspect-square w-full object-cover"
          />

          <div className="flex items-center gap-3 border-t border-border bg-background/80 p-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-brand/10 text-brand">
              <Instagram className="size-5" />
            </div>
            <div>
              <p className="flex items-center gap-1.5 text-sm font-medium">
                Isaac da Rocha
                <Badge variant="brand" className="px-1.5 py-0 text-[10px]">
                  PRO
                </Badge>
              </p>
              <p className="text-xs text-muted-foreground">
                @expertdodelivery • Mentor de Food Service
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 divide-x divide-border border-t border-border">
            <div className="p-4 text-center">
              <p className="font-heading text-xl font-bold text-brand">+500</p>
              <p className="text-xs text-muted-foreground">Food services atendidos</p>
            </div>
            <div className="p-4 text-center">
              <p className="font-heading text-xl font-bold text-brand">&lt; 5 min</p>
              <p className="text-xs text-muted-foreground">Campanha no ar com IA</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
