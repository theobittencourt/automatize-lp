import { Reveal } from "@/components/landing/reveal";
import { BeforeAfterSlider } from "@/components/landing/before-after-slider";

export function PhotoComparison() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
      <Reveal>
        <h2 className="font-body text-3xl font-bold leading-tight sm:text-4xl">
          Do celular ao cardápio: sua foto amadora vira arte profissional
        </h2>
        <p className="mt-4 text-muted-foreground">
          Sem fotógrafo, sem estúdio. Nossa IA transforma a foto que você tira
          no celular em uma imagem pronta para vender, mantendo os
          ingredientes reais do seu prato. Arraste o divisor para comparar.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <BeforeAfterSlider
          beforeImage="/images/before.webp"
          afterImage="/images/after.webp"
          beforeLabel="Foto Amadora"
          afterLabel="Criado pela IA"
        />
      </Reveal>
    </section>
  );
}
