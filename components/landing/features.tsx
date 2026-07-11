"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Camera,
  Clapperboard,
  GraduationCap,
  Megaphone,
  Palette,
  Share2,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";

type FeatureCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FeatureGroup = {
  icon: LucideIcon;
  key: string;
  badge: string;
  title: string;
  subtitle: string;
  cards: FeatureCard[];
};

function useFeatureGroups(): FeatureGroup[] {
  const t = useTranslations("Features.groups");

  return [
    {
      icon: Megaphone,
      key: "trafego",
      badge: t("trafego.badge"),
      title: t("trafego.title"),
      subtitle: t("trafego.subtitle"),
      cards: [
        {
          icon: Megaphone,
          title: t("trafego.cards.rapido.title"),
          description: t("trafego.cards.rapido.description"),
        },
        {
          icon: Megaphone,
          title: t("trafego.cards.resultado.title"),
          description: t("trafego.cards.resultado.description"),
        },
        {
          icon: Megaphone,
          title: t("trafego.cards.leigos.title"),
          description: t("trafego.cards.leigos.description"),
        },
      ],
    },
    {
      icon: Palette,
      key: "designer",
      badge: t("designer.badge"),
      title: t("designer.title"),
      subtitle: t("designer.subtitle"),
      cards: [
        {
          icon: Camera,
          title: t("designer.cards.fotografo.title"),
          description: t("designer.cards.fotografo.description"),
        },
        {
          icon: Palette,
          title: t("designer.cards.artes.title"),
          description: t("designer.cards.artes.description"),
        },
        {
          icon: Palette,
          title: t("designer.cards.personalizacao.title"),
          description: t("designer.cards.personalizacao.description"),
        },
      ],
    },
    {
      icon: Share2,
      key: "social",
      badge: t("social.badge"),
      title: t("social.title"),
      subtitle: t("social.subtitle"),
      cards: [
        {
          icon: Share2,
          title: t("social.cards.organizacao.title"),
          description: t("social.cards.organizacao.description"),
        },
        {
          icon: Share2,
          title: t("social.cards.metricas.title"),
          description: t("social.cards.metricas.description"),
        },
        {
          icon: Share2,
          title: t("social.cards.clareza.title"),
          description: t("social.cards.clareza.description"),
        },
      ],
    },
    {
      icon: GraduationCap,
      key: "masterclass",
      badge: t("masterclass.badge"),
      title: t("masterclass.title"),
      subtitle: t("masterclass.subtitle"),
      cards: [
        {
          icon: GraduationCap,
          title: t("masterclass.cards.aulas.title"),
          description: t("masterclass.cards.aulas.description"),
        },
        {
          icon: GraduationCap,
          title: t("masterclass.cards.evolucao.title"),
          description: t("masterclass.cards.evolucao.description"),
        },
        {
          icon: GraduationCap,
          title: t("masterclass.cards.aplique.title"),
          description: t("masterclass.cards.aplique.description"),
        },
      ],
    },
    {
      icon: Clapperboard,
      key: "roteiros",
      badge: t("roteiros.badge"),
      title: t("roteiros.title"),
      subtitle: t("roteiros.subtitle"),
      cards: [
        {
          icon: Clapperboard,
          title: t("roteiros.cards.viralize.title"),
          description: t("roteiros.cards.viralize.description"),
        },
        {
          icon: Clapperboard,
          title: t("roteiros.cards.profissionalismo.title"),
          description: t("roteiros.cards.profissionalismo.description"),
        },
        {
          icon: Clapperboard,
          title: t("roteiros.cards.desejo.title"),
          description: t("roteiros.cards.desejo.description"),
        },
      ],
    },
  ];
}

export function Features() {
  const t = useTranslations("Features");
  const featureGroups = useFeatureGroups();
  const [active, setActive] = useState(0);
  const group = featureGroups[active];

  return (
    <section
      id="funcionalidades"
      className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 sm:py-28"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-body text-3xl font-bold sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("subtitle")}</p>
        </div>
      </Reveal>

      <Reveal delay={0.05} className="w-full">
        <div className="no-scrollbar flex justify-start gap-2 overflow-x-auto rounded-full border border-border bg-muted/50 p-1.5 sm:justify-center sm:overflow-visible">
          {featureGroups.map((item, i) => {
            const Icon = item.icon;
            const isActive = i === active;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "relative flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-brand-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="feature-tab-bg"
                    className="absolute inset-0 rounded-full bg-brand"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <Icon className="relative z-10 size-4" />
                <span className="relative z-10">{item.badge}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={group.key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center">
            <h3 className="font-heading text-2xl sm:text-3xl">{group.title}</h3>
            <p className="mt-2 text-muted-foreground">{group.subtitle}</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {group.cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="size-5" />
                  </div>
                  <p className="mt-4 font-medium">{card.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
