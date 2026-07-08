import { Bot, ChevronRight, LineChart, Triangle } from "lucide-react";
import { FaFacebookF, FaGoogle, FaWhatsapp } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";

type Integration = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight?: boolean;
  comingSoon?: boolean;
};

const INTEGRATIONS: Integration[] = [
  {
    icon: FaFacebookF,
    title: "Facebook Ads",
    description:
      "Escale seus anúncios no Facebook e Instagram com segmentação precisa e criativos dinâmicos.",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp Automatizado",
    description:
      "Engaje seus leads instantaneamente com fluxos de conversa automatizados e personalizados.",
    highlight: true,
  },
  {
    icon: Triangle,
    title: "Criativo com IA",
    description:
      "Gere imagens, vídeos e textos persuasivos para seus anúncios em segundos com nossa IA generativa.",
  },
  {
    icon: LineChart,
    title: "Análise de Dados",
    description:
      "Visualize métricas em tempo real e tome decisões baseadas em dados com dashboards personalizados.",
  },
  {
    icon: Bot,
    title: "Renata Social Mídia IA",
    description:
      "Sua assistente virtual inteligente para gestão, agendamento e interação em todas as suas redes sociais.",
  },
  {
    icon: FaGoogle,
    title: "Google Ads",
    description:
      "Otimize suas campanhas de pesquisa e display com automação inteligente de lances e palavras-chave.",
    comingSoon: true,
  },
];

/**
 * SUGESTÃO (não faz parte do briefing original): seção de integrações
 * inspirada no padrão do brendi.com.br. Fica a critério do cliente manter,
 * ajustar ou remover — se for removida, também tirar o import/uso em
 * app/page.tsx.
 */
export function Integrations() {
  return (
    <section id="integracoes" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-body text-3xl font-bold sm:text-4xl">
            Integre com suas ferramentas favoritas
          </h2>
          <p className="mt-4 text-muted-foreground">
            Conecte-se perfeitamente com as plataformas e serviços mais
            populares para potencializar seu fluxo de trabalho.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INTEGRATIONS.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={i * 0.05}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border bg-card p-6 transition-shadow hover:shadow-md",
                  item.highlight ? "border-brand shadow-sm" : "border-border"
                )}
              >
                {item.comingSoon && (
                  <Badge variant="outline" className="absolute right-4 top-4">
                    Em breve
                  </Badge>
                )}

                <div
                  className={cn(
                    "flex size-11 items-center justify-center rounded-xl",
                    item.highlight
                      ? "bg-brand text-brand-foreground"
                      : "bg-brand/10 text-brand"
                  )}
                >
                  <Icon className="size-5" />
                </div>

                <p
                  className={cn(
                    "mt-4 font-medium",
                    item.highlight && "text-brand"
                  )}
                >
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-6 border-t border-dashed border-border pt-4">
                  <Button
                    size="sm"
                    variant={item.highlight ? "default" : "secondary"}
                    className={cn(
                      "gap-1",
                      item.highlight && "bg-brand text-brand-foreground hover:bg-brand/90"
                    )}
                  >
                    Saiba Mais
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
