import { Reveal } from "@/components/landing/reveal";
import { Highlight } from "@/components/landing/highlight";
import { LogoMarquee } from "@/components/landing/logo-marquee";
import { NEW_LOGOS, NEW_TESTIMONIALS } from "@/components/black/black-social-proof";
import { TestimonialSlider } from "@/components/restaurantes/testimonial-slider";

const testimonial = (name: string) => ({
  src: `/images/depoimentos/depoimento-${name}.mp4`,
  poster: `/images/depoimentos/depoimento-${name}-poster.jpg`,
});

const TESTIMONIALS = [
  ...NEW_TESTIMONIALS, // os três da /black primeiro: Midnight, Lessa e Letícia
  testimonial("1"), // Dudu Bastos
  testimonial("2"), // Guilherme (Santo Burger)
  testimonial("4"), // Matheus Branco
  testimonial("junqueira"), // Tiago Junqueira
];

// Mesma seção de prova social da /black, trocando a grade de 3 vídeos por um
// carrossel com todos os depoimentos.
export function RestaurantesSocialProof() {
  return (
    <section
      id="depoimentos"
      className="relative isolate scroll-mt-20 border-y border-border/60 bg-gradient-to-b from-brand/[0.06] via-transparent to-brand/[0.06]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-72 w-[40rem] max-w-full rounded-full bg-brand/15 blur-3xl"
      />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-16 sm:py-24">
        <Reveal>
          <h2 className="text-center font-body text-2xl font-bold sm:text-4xl">
            Mais de <Highlight>500 restaurantes</Highlight> confiam na Automatize
          </h2>
        </Reveal>

        {/* min-w-0 + w-full: sem isso o conteúdo largo estica a coluna flex */}
        <div id="clientes" className="w-full min-w-0 scroll-mt-28">
          <Reveal>
            <LogoMarquee extraLogos={NEW_LOGOS} />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto max-w-2xl text-center font-body text-xl leading-snug">
            Eles também pagavam caro por serviços de marketing amadores que não
            geravam resultados. Hoje conseguem <Highlight>+pedidos</Highlight> e{" "}
            <Highlight>+lucro</Highlight>, pagando muito menos.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="w-full min-w-0">
          <TestimonialSlider videos={TESTIMONIALS} />
        </Reveal>
      </div>
    </section>
  );
}
