import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";

const STEP_KEYS = ["onboarding", "execucao", "analise"] as const;

export async function TrialChallenge() {
  const t = await getTranslations("TrialChallenge");

  const steps = STEP_KEYS.map((key, i) => ({
    key,
    number: String(i + 1),
    title: t(`steps.${key}.title`),
    description: t(`steps.${key}.description`),
  }));

  return (
    <section className="mx-auto px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-center font-body text-3xl font-bold sm:text-4xl">
            {t("heading")}
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <div
            className="relative overflow-hidden rounded-3xl p-6 text-white shadow-xl sm:p-10"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(10,8,20,0.55), rgba(10,8,20,0.88)), url(/images/textures/gradient-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className="text-sm text-white/70">{t("paragraph")}</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {steps.map((step) => (
                <div key={step.key} className="flex flex-col gap-2">
                  <span className="flex size-9 items-center justify-center rounded-full bg-white/10 font-heading text-lg text-white backdrop-blur-sm">
                    {step.number}
                  </span>
                  <p className="font-medium">{step.title}</p>
                  <p className="text-sm text-white/70">{step.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/70">
              {t("guarantee")}
            </p>

            <div className="mt-6 flex justify-center">
              <Button size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90">
                {t("cta")}
              </Button>
            </div>

            <p className="mt-4 text-center text-xs text-white/50">{t("risk")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
