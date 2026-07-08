import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/landing/reveal";

const FAQ_ITEMS = [
  {
    question: "Por que eu confiaria em uma IA e não em um humano?",
    answer:
      "Porque a IA não tem ego. Não tem preguiça. Não tem \"só não\". Ela executa o material estratégico, baseado em dados, 100% dos meses. Foi treinada por humanos de elite, para você não precisar pagar o salário deles.",
  },
  {
    question: "Meu plano a partir de R$ 297/mês não é muito barato? Qual é a pegadinha?",
    answer:
      "Não é barato, é eficiente. Nossa estrutura de custos é radicalmente menor: não tem escritórios caros, nem uma hierarquia inchada de diretores. Repassamos essa economia para você. A única \"pegadinha\" é que você vai se perguntar por que pagou tão caro por tanto tempo.",
  },
  {
    question: "E se eu já tiver uma agência?",
    answer:
      "Perfeito. Faça o Desafio dos 7 Dias em segredo. Compare o que nós entregamos em uma semana com o que eles entregaram no último mês. A decisão se torna óbvia.",
  },
  {
    question: "O valor do tráfego pago está incluso?",
    // TODO: confirmar texto exato — a imagem enviada estava com baixa legibilidade
    // neste trecho, este é um rascunho aproximado do sentido original.
    answer:
      "Não. O valor da assinatura e o investimento em tráfego pago são separados. Você define o orçamento de anúncios no Google e no Meta, e ele é 100% seu, sem intermediação da nossa equipe.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto grid max-w-5xl gap-10 px-4 py-20 md:grid-cols-2">
      <Reveal>
        <h2 className="font-body text-3xl font-bold sm:text-4xl">
          Perguntas Frequentes
        </h2>
        <p className="mt-4 text-muted-foreground">
          Tudo o que você precisa saber antes de começar.
        </p>
        <Button variant="outline" className="mt-6 gap-2">
          <MessageCircle className="size-4" />
          Quero tirar dúvidas com o suporte
        </Button>
      </Reveal>

      <Reveal delay={0.1}>
        <Accordion type="single" collapsible defaultValue="item-0">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
