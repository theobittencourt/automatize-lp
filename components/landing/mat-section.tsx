import { CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/landing/reveal";

const BULLET_KEYS = ["estrategia", "resposta", "relatorios", "campanhas"] as const;

export async function MatSection() {
  const t = await getTranslations("Mat");

  const bullets = BULLET_KEYS.map((key) => t(`bullets.${key}`));

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
      <Reveal>
        <h2 className="font-body text-3xl font-bold leading-tight sm:text-4xl">
          {t("heading")}
        </h2>
        <ul className="mt-6 flex flex-col gap-3">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mat_arte.png"
          alt={t("imageAlt")}
          className="mx-auto w-full max-w-md object-contain"
        />
      </Reveal>
    </section>
  );
}
