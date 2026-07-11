import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/landing/reveal";
import { Highlight } from "@/components/landing/highlight";
import { LogoMarquee } from "@/components/landing/logo-marquee";
import { TestimonialCarousel } from "@/components/landing/testimonial-carousel";

export async function SocialProof() {
  const t = await getTranslations("SocialProof");

  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-20">
      <Reveal>
        <h2 className="text-center font-body text-2xl font-bold sm:text-3xl">
          {t.rich("heading", {
            highlight: (chunks) => <Highlight>{chunks}</Highlight>,
          })}
        </h2>
      </Reveal>

      <Reveal className="w-full">
        <LogoMarquee />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto max-w-2xl text-center font-body text-xl leading-snug">
          {t.rich("paragraph", {
            highlight: (chunks) => <Highlight>{chunks}</Highlight>,
            highlight2: (chunks) => <Highlight>{chunks}</Highlight>,
          })}
        </p>
      </Reveal>

      <Reveal delay={0.15} className="w-full">
        <TestimonialCarousel />
      </Reveal>
    </section>
  );
}
