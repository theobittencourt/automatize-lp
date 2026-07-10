import { Reveal } from "@/components/landing/reveal";
import { Highlight } from "@/components/landing/highlight";
import { LogoMarquee } from "@/components/landing/logo-marquee";
import { TestimonialCarousel } from "@/components/landing/testimonial-carousel";

export function SocialProof() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-20">
      <Reveal>
        <h2 className="text-center font-body text-2xl font-bold sm:text-3xl">
          Mais de <Highlight>500 restaurantes</Highlight> confiam na Automatize
        </h2>
      </Reveal>

      <Reveal className="w-full">
        <LogoMarquee />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto max-w-2xl text-center font-body text-xl leading-snug">
          Eles também pagavam caro por serviços de marketing amadores que não
          geravam resultados. Hoje conseguem <Highlight>+pedidos</Highlight> e{" "}
          <Highlight>+lucro</Highlight>, pagando muito menos.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="w-full">
        <TestimonialCarousel />
      </Reveal>
    </section>
  );
}
