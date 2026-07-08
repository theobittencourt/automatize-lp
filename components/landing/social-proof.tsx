import { Reveal } from "@/components/landing/reveal";
import { Highlight } from "@/components/landing/highlight";
import { LogoMarquee } from "@/components/landing/logo-marquee";
import { TestimonialVideo } from "@/components/landing/testimonial-video";

const LANDSCAPE_TESTIMONIAL = {
  src: "/images/depoimentos/depoimento-3.mp4",
  poster: "/images/depoimentos/depoimento-3-poster.jpg",
  aspect: "16 / 9",
};

const PORTRAIT_TESTIMONIALS = [
  {
    src: "/images/depoimentos/depoimento-1.mp4",
    poster: "/images/depoimentos/depoimento-1-poster.jpg",
    aspect: "9 / 16",
  },
  {
    src: "/images/depoimentos/depoimento-2.mp4",
    poster: "/images/depoimentos/depoimento-2-poster.jpg",
    aspect: "9 / 16",
  },
];

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

      <Reveal delay={0.15} className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-2xl xl:max-w-3xl">
        <div className="flex flex-col gap-4">
          <TestimonialVideo
            src={LANDSCAPE_TESTIMONIAL.src}
            poster={LANDSCAPE_TESTIMONIAL.poster}
            aspect={LANDSCAPE_TESTIMONIAL.aspect}
            label="Depoimento de cliente 1"
            className="w-full"
          />

          <div className="grid grid-cols-2 gap-4">
            {PORTRAIT_TESTIMONIALS.map((item, i) => (
              <TestimonialVideo
                key={item.src}
                src={item.src}
                poster={item.poster}
                aspect={item.aspect}
                label={`Depoimento de cliente ${i + 2}`}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
