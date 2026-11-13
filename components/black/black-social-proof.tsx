import { Reveal } from "@/components/landing/reveal";
import { Highlight } from "@/components/landing/highlight";
import { LogoMarquee, type ClientLogo } from "@/components/landing/logo-marquee";
import { CaptureTestimonials } from "@/components/captura/capture-testimonials";

// Logos novos do Drive (campanha Black). Os demais vêm do LogoMarquee padrão,
// igual ao site oficial. "La Brasa" é branca, por isso inverte no tema claro.
const NEW_LOGOS: ClientLogo[] = [
  { file: "la-brasa-trimmed.png", invert: "light" },
  { file: "midnight-trimmed.png" },
  { file: "lessas-trimmed.png" },
  { file: "lets-trimmed.png" },
];

// Apenas os depoimentos novos do Drive (todos 9:16).
const NEW_TESTIMONIALS = [
  {
    src: "/images/depoimentos/depoimento-midnight.mp4",
    poster: "/images/depoimentos/depoimento-midnight-poster.jpg",
  },
  {
    src: "/images/depoimentos/depoimento-lessa.mp4",
    poster: "/images/depoimentos/depoimento-lessa-poster.jpg",
  },
  {
    src: "/images/depoimentos/depoimento-leticia.mp4",
    poster: "/images/depoimentos/depoimento-leticia-poster.jpg",
  },
];

export function BlackSocialProof() {
  return (
    <section
      id="depoimentos"
      className="mx-auto flex max-w-5xl scroll-mt-20 flex-col items-center gap-10 px-4 py-16 sm:py-24"
    >
      <Reveal>
        <h2 className="text-center font-body text-2xl font-bold sm:text-3xl">
          Mais de <Highlight>500 restaurantes</Highlight> confiam na Automatize
        </h2>
      </Reveal>

      <Reveal className="w-full">
        <LogoMarquee extraLogos={NEW_LOGOS} />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto max-w-2xl text-center font-body text-xl leading-snug">
          Eles também pagavam caro por serviços de marketing amadores que não
          geravam resultados. Hoje conseguem <Highlight>+pedidos</Highlight> e{" "}
          <Highlight>+lucro</Highlight>, pagando muito menos.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="w-full">
        <CaptureTestimonials videos={NEW_TESTIMONIALS} />
      </Reveal>
    </section>
  );
}
