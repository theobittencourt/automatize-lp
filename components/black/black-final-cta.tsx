import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";

// Seção de fechamento (adição de design, reaproveita os textos do formulário).
export function BlackFinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16 sm:pb-24">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-3xl border border-brand/30 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(10,8,20,0.35), rgba(10,8,20,0.8)), url(/images/textures/gradient-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-0 -z-10 h-64 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/40 blur-3xl"
          />

          <h2 className="font-body text-3xl font-bold uppercase leading-tight sm:text-5xl">
            Garanta a sua{" "}
            <span className="font-heading font-normal normal-case italic text-brand">
              Black!
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Fale com um consultor e tenha acesso ao Desconto!
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-brand text-brand-foreground shadow-lg shadow-brand/40 transition-shadow hover:bg-brand/90 hover:shadow-xl hover:shadow-brand/50"
            >
              <a href="#garanta">
                Quero 30% OFF
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
