import { Reveal } from "@/components/landing/reveal";
import { Highlight } from "@/components/landing/highlight";
import { LogoMarquee } from "@/components/landing/logo-marquee";
import { CaptureTestimonials } from "@/components/captura/capture-testimonials";

export function CaptureSocialProof() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-brand">
            Quem usa Automatize?
          </p>
          <h2 className="mt-2 font-body text-3xl font-bold sm:text-4xl">
            Mais de <Highlight>500 food services</Highlight> já confiam na
            Automatize
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.05} className="mt-8">
        <LogoMarquee />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-8 max-w-2xl text-center text-muted-foreground">
          Eles também pagavam caro por serviços de marketing amadores que não
          geravam resultados. Hoje conseguem mais pedidos e mais lucro,
          pagando muito menos.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-10">
        <CaptureTestimonials />
      </Reveal>
    </section>
  );
}
