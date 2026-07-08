import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";

const STEPS = [
  {
    number: "1",
    title: "Onboarding Imediato (5 min)",
    description:
      "Nossa IA faz as perguntas certas para entender seu negócio a fundo",
  },
  {
    number: "2",
    title: "Execução Rápida (1 hora)",
    description:
      "Você recebe seu plano de marketing, seus primeiros posts e sua campanha de tráfego já traçada",
  },
  {
    number: "3",
    title: "Análise de Valor (7º dia)",
    description:
      "Você vai ver os resultados reais, ganhos estratégicos e a execução do que jamais recebeu",
  },
];

export function TrialChallenge() {
  return (
    <section className="mx-auto px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-center font-body text-3xl font-bold sm:text-4xl">
            Aceite nosso desafio: Troque sua agência por nós por 7 dias.
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
            <p className="text-sm text-white/70">
              É simples. Você clica no botão abaixo, seu plano a partir de R$
              297/mês e a nossa IA começa a trabalhar imediatamente
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {STEPS.map((step) => (
                <div key={step.number} className="flex flex-col gap-2">
                  <span className="flex size-9 items-center justify-center rounded-full bg-white/10 font-heading text-lg text-white backdrop-blur-sm">
                    {step.number}
                  </span>
                  <p className="font-medium">{step.title}</p>
                  <p className="text-sm text-white/70">{step.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/70">
              Se a resposta for &quot;NÃO&quot;, você nos envia uma única
              mensagem. Nós devolvemos 100% do valor pago no fim, sem
              perguntas, sem burocracia.
            </p>

            <div className="mt-6 flex justify-center">
              <Button size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90">
                Aceito o desafio dos 7 dias
              </Button>
            </div>

            <p className="mt-4 text-center text-xs text-white/50">
              O risco é 100% nosso. A chance de ter um marketing que funcione
              é 100% sua.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
