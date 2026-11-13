import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/landing/reveal";

const FAQ_ITEMS = [
  {
    question: "O que é a Black Friday da Automatize?",
    answer:
      "É a condição especial em novembro de 2026 para os planos Pro e Premium nas modalidades mensais (apenas para o mês), e semestral e anual no valor total. Além disso, você ganha acesso gratuito a produtos do Matheus Branco (Gibbous) e Dudu Bastos (Larica).",
  },
  {
    question: "Até quando vale a Black da Automatize?",
    answer: "A Black ficará disponível somente em Novembro.",
  },
  {
    question: "Quanto eu economizo no semestral e anual?",
    answer:
      "No plano Pro e Premium, semestralmente você economiza o valor de duas mensalidades. Você paga 4 meses e ganha 6 (economia no plano Pro de R$894,6 - economia no plano Premium de R$1.614,6).",
  },
  {
    question:
      "Terei acesso imediato aos produtos do Dudu Bastos e Matheus Branco?",
    answer:
      "Sim! Você terá acesso imediato aos produtos após a assinatura do seu plano na Automatize.",
  },
];

export function BlackFaq() {
  return (
    <section
      id="duvidas"
      className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16 sm:py-24"
    >
      <Reveal>
        <div className="text-center">
          <h2 className="font-body text-3xl font-bold sm:text-4xl">
            O que perguntam antes de fechar?
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="mt-8"
        >
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={item.question} value={`item-${i}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
