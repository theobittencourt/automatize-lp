import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/landing/reveal";

const FAQ_ITEMS = [
  {
    question: "A Automatize serve para quem nunca mexeu com anúncios na internet?",
    answer:
      "Sim, exatamente para isso! Você não precisa saber usar o Gerenciador de Anúncios da Meta ou entender termos técnicos. Apenas defina o raio do seu delivery e o valor diário. A nossa inteligência artificial cuida de todo o resto, da criação da peça à otimização dos melhores horários de pico.",
  },
  {
    question: "Como funciona a condição exclusiva para Gestores de Delivery?",
    answer:
      "Gestores que prestam consultoria e atendem carteira de clientes contam com plano de parceria diferenciado, tabela comercial para multi-contas de restaurantes e bonificação por volume. Basta selecionar \"Gestor de Delivery\" no formulário para ser direcionado à nossa equipe de parcerias.",
  },
  {
    question: "Preciso contratar um fotógrafo profissional para os meus pratos?",
    answer:
      "Não. Com o nosso módulo \"Do Celular ao Cardápio\", você tira fotos com o celular dentro da cozinha. A IA da Automatize ajusta a iluminação, cria um fundo gourmet realista e valoriza seu produto sem descaracterizar a receita real.",
  },
  {
    question: "Existe fidelidade contratual ou multa para cancelar?",
    answer:
      "Nenhuma fidelidade. Nossos planos são mensais e podem ser cancelados ou pausados a qualquer momento pelo próprio painel do usuário, sem surpresas ou burocracias.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer:
      "Você tem 7 dias inteiros para usar todas as funcionalidades. Se não gostar dos resultados ou da plataforma, nós devolvemos 100% do valor investido. O risco financeiro é todo nosso.",
  },
];

export function CaptureFaq() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <Reveal>
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-brand">
            Dúvidas comuns
          </p>
          <h2 className="mt-2 font-body text-3xl font-bold sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tudo o que você precisa saber antes de iniciar sua jornada.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <Accordion type="single" collapsible defaultValue="item-4" className="mt-8">
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
