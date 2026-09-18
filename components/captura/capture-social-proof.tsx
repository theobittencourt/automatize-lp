import { Reveal } from "@/components/landing/reveal";
import { Highlight } from "@/components/landing/highlight";
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
          <p className="mt-4 text-muted-foreground">
            Eles também pagavam caro por serviços de marketing amadores que
            não geravam resultados. Hoje conseguem mais pedidos e mais lucro,
            pagando muito menos.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <CaptureTestimonials />
      </Reveal>
    </section>
  );
}
