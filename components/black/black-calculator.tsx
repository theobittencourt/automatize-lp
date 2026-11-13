"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import { ArrowRight, Check, Tag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";

// Desconto da Black aplicado em todos os meses do período escolhido.
const DISCOUNT_PERCENT = 30;

const MONTHS = [
  "NOV",
  "DEZ",
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
];

const PERIODS = [
  { key: "mensal", label: "Mensal", months: 1 },
  { key: "semestral", label: "Semestral", months: 6 },
  { key: "anual", label: "Anual", months: 12 },
] as const;

// TODO: benefícios derivados da seção de planos da LP principal (ainda não
// validados pelo cliente). Revisar quando o conteúdo final dos planos sair.
const PLANS = [
  {
    key: "pro",
    name: "Pro",
    price: 497,
    benefits: [
      "25 postagens",
      "Legendas com IA",
      "Tráfego pago automático",
      "Setup da primeira campanha",
      "Suporte dedicado via WhatsApp",
    ],
  },
  {
    key: "premium",
    name: "Premium",
    price: 897,
    benefits: [
      "Tudo do Pro",
      "Gerente de contas dedicado",
      "Até 1 reunião mensal",
    ],
  },
] as const;

type PlanKey = (typeof PLANS)[number]["key"];
type PeriodKey = (typeof PERIODS)[number]["key"];

// Valores em centavos (inteiros) para evitar erro de ponto flutuante.
function formatBRL(cents: number) {
  return (cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function useCountUp(target: number) {
  const [display, setDisplay] = useState(target);
  const current = useRef(target);

  useEffect(() => {
    const controls = animate(current.current, target, {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        current.current = value;
        setDisplay(value);
      },
      onComplete: () => {
        current.current = target;
        setDisplay(target);
      },
    });
    return () => controls.stop();
  }, [target]);

  return Math.round(display);
}

export function BlackCalculator() {
  const [planKey, setPlanKey] = useState<PlanKey>("pro");
  const [periodKey, setPeriodKey] = useState<PeriodKey>("semestral");

  const plan = PLANS.find((item) => item.key === planKey)!;
  const period = PERIODS.find((item) => item.key === periodKey)!;

  const normalMonthly = plan.price * 100;
  const blackMonthly = plan.price * (100 - DISCOUNT_PERCENT);
  const normalTotal = normalMonthly * period.months;
  const blackTotal = blackMonthly * period.months;
  const savings = normalTotal - blackTotal;

  const animatedSavings = useCountUp(savings);

  const practicalLabel =
    period.months === 1 ? "neste mês" : `por mês durante ${period.months} meses`;

  return (
    <section id="calculadora" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-brand">
            A conta
          </p>
          <h2 className="mt-2 font-body text-3xl font-bold sm:text-4xl">
            Quanto você economiza na Black.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escolha o período e o plano e veja o desconto de {DISCOUNT_PERCENT}%
            em cada mês.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 grid gap-6 rounded-3xl border border-border bg-card p-4 shadow-xl sm:p-6 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-8">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                1. Período
              </p>
              <div
                role="radiogroup"
                aria-label="Período do plano"
                className="mt-3 grid grid-cols-3 gap-1 rounded-full border border-border bg-muted/50 p-1"
              >
                {PERIODS.map((item) => {
                  const active = item.key === periodKey;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setPeriodKey(item.key)}
                      className={cn(
                        "relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ease-premium",
                        active
                          ? "text-brand-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="black-period-bg"
                          className="absolute inset-0 rounded-full bg-brand"
                          transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  );
                })}
              </div>
              {periodKey === "mensal" && (
                <p className="mt-2 text-xs text-muted-foreground">
                  No mensal, o desconto vale apenas para o mês.
                </p>
              )}
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                2. Seu plano
              </p>
              <div
                role="radiogroup"
                aria-label="Plano"
                className="mt-3 flex flex-col gap-3"
              >
                {PLANS.map((item) => {
                  const active = item.key === planKey;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setPlanKey(item.key)}
                      className={cn(
                        "rounded-2xl border p-4 text-left transition-all duration-300 ease-premium",
                        active
                          ? "border-brand bg-brand/5 shadow-lg shadow-brand/10"
                          : "border-border hover:border-brand/40"
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className={cn("font-medium", active && "text-brand")}>
                            {item.name}
                          </p>
                          <p className="mt-0.5 text-xs text-muted-foreground line-through">
                            {formatBRL(item.price * 100)}/mês
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-heading text-xl font-bold">
                            {formatBRL(item.price * (100 - DISCOUNT_PERCENT))}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            /mês na Black
                          </p>
                        </div>
                      </div>

                      <ul className="mt-3 flex flex-col gap-1.5 border-t border-dashed border-border pt-3">
                        {item.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <Check className="size-3.5 shrink-0 text-brand" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-border bg-background/60 p-5 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-wide text-brand">
              {period.label} {plan.name} na Black
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Você economiza</p>
            <p
              aria-live="polite"
              className="font-heading text-5xl font-bold leading-tight tracking-tight text-brand sm:text-6xl lg:text-7xl"
            >
              {formatBRL(animatedSavings)}
            </p>

            <ul
              key={`${periodKey}`}
              className={cn(
                "mt-6 grid gap-2",
                period.months === 1 ? "grid-cols-3 sm:grid-cols-6" : "grid-cols-6"
              )}
            >
              {MONTHS.slice(0, period.months).map((month, i) => (
                <motion.li
                  key={`${periodKey}-${month}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center gap-1 rounded-lg border border-border bg-card py-2 text-[10px] font-semibold tracking-wide text-muted-foreground"
                >
                  {month}
                  <Check className="size-3.5 text-brand" />
                </motion.li>
              ))}
            </ul>
            <p className="mt-3 flex items-center justify-center gap-1.5 border-t-2 border-brand/60 pt-3 text-sm font-medium text-brand">
              <Tag className="size-4" />
              {DISCOUNT_PERCENT}% OFF em todos os meses
            </p>

            <div className="mt-6 grid grid-cols-1 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="p-4">
                <p className="text-xs text-muted-foreground">
                  {period.months} {period.months === 1 ? "mês" : "meses"} no preço normal
                </p>
                <p className="mt-1 text-lg font-semibold text-muted-foreground line-through">
                  {formatBRL(normalTotal)}
                </p>
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground">Você paga na Black</p>
                <p className="mt-1 text-lg font-semibold">{formatBRL(blackTotal)}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Na prática, o {plan.name} sai por{" "}
              <span className="font-semibold text-foreground">
                {formatBRL(blackMonthly)}
              </span>{" "}
              {practicalLabel}.
            </p>

            <div className="mt-6">
              <Button
                asChild
                size="lg"
                className="h-auto w-full whitespace-normal bg-brand py-3 text-center leading-snug text-brand-foreground hover:bg-brand/90 sm:w-auto"
              >
                <a href="#garanta">
                  Quero o {plan.name} na Black
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
