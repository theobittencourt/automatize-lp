import { CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";
import { Highlight } from "@/components/landing/highlight";
import { HeroMockup } from "@/components/landing/hero-mockup";

type HeroProps = {
  variant?: "v1" | "v2";
};

export async function Hero({ variant }: HeroProps) {
  const t = await getTranslations("Hero");

  const guarantees = [
    t("guarantees.trial"),
    t("guarantees.noFee"),
    t("guarantees.easySetup"),
  ];

  return (
    <section className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 overflow-hidden px-4 py-24 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 hidden h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40 blur-3xl dark:block"
        style={{
          backgroundImage: "url(/images/textures/gradient-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {variant ? (
        <>
          <Reveal delay={0.05}>
            <h1 className="font-body text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
              {t(`variants.${variant}.headlineLine1`)}
              <br />
              <span className="text-brand">
                {t(`variants.${variant}.headlineLine2`)}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-2xl font-medium">
              {t(`variants.${variant}.aiLine`)}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="max-w-2xl text-muted-foreground">
              {t(`variants.${variant}.resultLine`)}
            </p>
          </Reveal>
        </>
      ) : (
        <>
          <Reveal delay={0.05}>
            <h1 className="font-body text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              {t.rich("headline", {
                highlight: (chunks) => <Highlight>{chunks}</Highlight>,
                highlight2: (chunks) => <Highlight>{chunks}</Highlight>,
              })}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-2xl text-muted-foreground">{t("subtitle")}</p>
          </Reveal>
        </>
      )}

      <Reveal delay={0.15}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90">
            {t("ctaPrimary")}
          </Button>
          <Button size="lg" variant="outline">
            {t("ctaSecondary")}
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
          {guarantees.map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-brand" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.25} className="w-full">
        <HeroMockup />
      </Reveal>
    </section>
  );
}
