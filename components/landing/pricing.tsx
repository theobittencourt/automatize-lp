"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, Gift } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";

// TODO: preços/planos ainda não validados pelo cliente — valores de
// referência para calibrar o layout. Períodos trimestral/semestral/anual
// hoje reaproveitam o preço mensal (sem desconto real aplicado ainda).
const PERIOD_KEYS = ["monthly", "quarterly", "biannual", "annual"] as const;

const PLAN_KEYS = [
  { key: "starter", price: 297, popular: false },
  { key: "pro", price: 497, popular: true },
  { key: "premium", price: 897, popular: false },
] as const;

export function Pricing() {
  const t = useTranslations("Pricing");
  const [period, setPeriod] = useState<(typeof PERIOD_KEYS)[number]>("monthly");

  const plans = PLAN_KEYS.map((plan) => ({
    ...plan,
    name: t(`plans.${plan.key}.name`),
    description: t(`plans.${plan.key}.description`),
    features: Object.values(
      t.raw(`plans.${plan.key}.features`) as Record<string, string>
    ),
  }));

  return (
    <section id="planos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-body text-3xl font-bold sm:text-4xl">
              {t("heading")}
            </h2>
            <p className="mt-4 text-muted-foreground">{t("subtitle")}</p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mx-auto mt-8 flex w-fit gap-1 rounded-full border border-border bg-muted/50 p-1">
            {PERIOD_KEYS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPeriod(item)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ease-premium",
                  period === item
                    ? "text-brand-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {period === item && (
                  <motion.div
                    layoutId="pricing-period-bg"
                    className="absolute inset-0 rounded-full bg-brand"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{t(`periods.${item}`)}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.key} delay={0.1 + i * 0.05}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 ease-premium hover:-translate-y-1 sm:p-8",
                  plan.popular
                    ? "border-brand shadow-lg shadow-brand/10 hover:shadow-xl hover:shadow-brand/15"
                    : "border-border shadow-sm hover:shadow-lg"
                )}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 border-transparent bg-brand text-brand-foreground">
                    {t("popularBadge")}
                  </Badge>
                )}

                <p className={cn("font-medium", plan.popular && "text-brand")}>
                  {plan.name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <p className="mt-6">
                  <span className="font-heading text-3xl font-bold">
                    R$ {plan.price.toLocaleString("pt-BR")},00
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    {t("perMonth")}
                  </span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t("noCommitment")}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <Gift className="size-3.5" />
                  {t("freeTrial")}
                </p>

                <ul className="mt-6 flex flex-col gap-3 border-t border-dashed border-border pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground/90"
                    >
                      <Check className="size-4 shrink-0 text-brand" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "default" : "secondary"}
                  className={cn(
                    "mt-8 w-full",
                    plan.popular && "bg-brand text-brand-foreground hover:bg-brand/90"
                  )}
                >
                  {t("subscribeTo", { plan: plan.name })}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
