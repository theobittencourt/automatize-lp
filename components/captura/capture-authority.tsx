import { Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";

export function CaptureAuthority() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <Reveal>
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10 lg:grid-cols-[220px_1fr] lg:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/isaac_da_rocha_f87f4890.jpg"
            alt="Isaac da Rocha"
            className="mx-auto aspect-square w-40 shrink-0 rounded-2xl object-cover lg:w-full"
          />

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-brand">
              Autoridade e trincheira no food service
            </p>
            <h2 className="mt-2 font-body text-2xl font-bold sm:text-3xl">
              Por que Isaac da Rocha Escolheu e Recomenda a Automatize?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Com anos de experiência prática gerindo e mentorando operações
              de delivery em todo o país através da ME Academy, Isaac da
              Rocha consolidou-se como uma das maiores referências em
              posicionamento, cardápio vendedor e escala de vendas no food
              service.
            </p>

            <blockquote className="mt-6 border-l-2 border-brand bg-muted/40 p-4 text-sm italic text-foreground/90">
              &quot;No delivery de verdade, não há espaço para vaidade ou
              métricas que não viram dinheiro. O que o dono e o gestor
              precisam é de anúncio rodando rápido, foto atraente no cardápio
              e controle do custo. A Automatize é a única plataforma que
              entrega isso com a velocidade que o setor gastronômico
              exige.&quot;
            </blockquote>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-brand text-brand-foreground hover:bg-brand/90">
                <a href="#oferta">Aproveitar Oferta do Isaac</a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a
                  href="https://instagram.com/expertdodelivery"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="size-4" />
                  Conhecer o Instagram do Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
