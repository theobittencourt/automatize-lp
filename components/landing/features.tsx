"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  badge: string;
  title: string;
  subtitle: string;
  cards: FeatureCard[];
};

const FEATURE_GROUPS: FeatureGroup[] = [
  {
    icon: Megaphone,
    badge: "Tráfego Pago",
    title: "Tráfego Pago com IA",
    subtitle:
      "Cria, publica e otimiza todas as suas campanhas de anúncios automaticamente",
    cards: [
      {
        icon: Megaphone,
        title: "Rápido como um miojo",
        description: "Suba seus anúncios de forma simples em menos de 5 minutos",
      },
      {
        icon: Megaphone,
        title: "Muito mais resultado",
        description:
          "A IA analisa a sua campanha em tempo real, e aplica as melhores otimizações para te gerar resultados",
      },
      {
        icon: Megaphone,
        title: "Para leigos",
        description:
          "Defina apenas o seu orçamento, toda parte técnica deixa com a nossa IA",
      },
    ],
  },
  {
    icon: Palette,
    badge: "Designer",
    title: "Designer",
    subtitle: "Solicite artes profissionais, melhore suas fotos e padronize o seu cardápio",
    cards: [
      {
        icon: Camera,
        title: "Ficou sem fotógrafo?",
        description:
          "Tire uma foto do seu celular, adicione na Automatize, e tenha uma foto atrativa e realista mantendo todos os seus ingredientes",
      },
      {
        icon: Palette,
        title: "Artes profissionais",
        description: "Crie artes para divulgar seus novos produtos e ações promocionais",
      },
      {
        icon: Palette,
        title: "Personalização",
        description:
          "Imagens criadas seguindo 100% das cores da sua marca, mantendo o padrão",
      },
    ],
  },
  {
    icon: Share2,
    badge: "Social Media",
    title: "Social Media",
    subtitle: "Organize, e programe todas as suas postagens sem complicação",
    cards: [
      {
        icon: Share2,
        title: "Mais organização",
        description: "Nunca mais esqueça de realizar uma postagem em seu Instagram",
      },
      {
        icon: Share2,
        title: "Métricas que fazem sentido",
        description:
          "Sem relatórios e números complexos, saiba exatamente o que analisar e o que deu certo",
      },
      {
        icon: Share2,
        title: "Clareza do que funciona",
        description:
          "Saiba como otimizar os seus conteúdos priorizando exatamente aquilo que funciona",
      },
    ],
  },
  {
    icon: GraduationCap,
    badge: "Masterclass",
    title: "Masterclass",
    subtitle: "Aprenda com quem realmente entende!",
    cards: [
      {
        icon: GraduationCap,
        title: "Aulas exclusivas",
        description:
          "Tenha acesso a aulas gravadas e ao vivo com grandes nomes do mercado",
      },
      {
        icon: GraduationCap,
        title: "Evolução contínua",
        description:
          "Tenha dicas e direcionamentos valiosos. Tudo que você precisa para crescer em um só lugar",
      },
      {
        icon: GraduationCap,
        title: "Aplique na hora",
        description: "Aprendeu? Aplique agora. Teve dúvidas? Seu mentor responde.",
      },
    ],
  },
  {
    icon: Clapperboard,
    badge: "Roteiros",
    title: "Gerador de Roteiros",
    subtitle: "Crie vídeos e postagens de forma simples que convertam e viralizem",
    cards: [
      {
        icon: Clapperboard,
        title: "Viralize",
        description:
          "Obtenha um roteiro profissional que prende a atenção e conecta com o seu cliente",
      },
      {
        icon: Clapperboard,
        title: "Profissionalismo",
        description: "Saiba exatamente como produzir um conteúdo realmente original e profissional",
      },
      {
        icon: Clapperboard,
        title: "Gere mais desejo",
        description:
          "Uma estrutura de vídeos pensada para atrair seu cliente direto para o seu cardápio",
      },
    ],
  },
];

export function Features() {
  const [active, setActive] = useState(0);
  const group = FEATURE_GROUPS[active];

  return (
    <section
      id="funcionalidades"
      className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 sm:py-28"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-body text-3xl font-bold sm:text-4xl">
            Tudo que seu restaurante precisa para vender, lucrar e dominar o
            mercado
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sem demorar dias, sem erros bobos, sem faltas de resultado. Para o
            seu restaurante de forma personalizada.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.05} className="w-full">
        <div className="no-scrollbar flex justify-start gap-2 overflow-x-auto rounded-full border border-border bg-muted/50 p-1.5 sm:justify-center sm:overflow-visible">
          {FEATURE_GROUPS.map((item, i) => {
            const Icon = item.icon;
            const isActive = i === active;
            return (
              <button
                key={item.title}
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
          key={group.title}
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
