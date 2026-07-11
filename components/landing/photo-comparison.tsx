import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/landing/reveal";
import { BeforeAfterSlider } from "@/components/landing/before-after-slider";

export async function PhotoComparison() {
  const t = await getTranslations("PhotoComparison");

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
      <Reveal>
        <h2 className="font-body text-3xl font-bold leading-tight sm:text-4xl">
          {t("heading")}
        </h2>
        <p className="mt-4 text-muted-foreground">{t("paragraph")}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <BeforeAfterSlider
          beforeImage="/images/before.webp"
          afterImage="/images/after.webp"
          beforeLabel={t("beforeLabel")}
          afterLabel={t("afterLabel")}
        />
      </Reveal>
    </section>
  );
}
