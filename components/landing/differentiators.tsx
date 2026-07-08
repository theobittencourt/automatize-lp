import { CheckCircle2, XCircle } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";

const COMPARISON_ROWS = [
  {
    label: "Investimento Mensal",
    agency: "A partir de R$ 3.000",
    automatize: "A partir de R$ 297,00",
  },
  {
    label: "Fidelidade",
    agency: "Sim, geralmente 12 meses",
    automatize: "Não! Sem fidelidade",
  },
  { label: "Reuniões", agency: "Intermináveis", automatize: "Otimizadas" },
  {
    label: "Cancelamento",
    agency: "Multa rescisória",
    automatize: "Quando quiser",
  },
  {
    label: "Implementação",
    agency: "Semanas/Meses",
    automatize: "Imediata",
  },
  { label: "Resultados", agency: "Escassos", automatize: "Previsíveis" },
  {
    label: "Começa no ar",
    agency: "Dias",
    automatize: "Em menos de 24h",
  },
  {
    label: "Adaptação",
    agency: "Você se adapta",
    automatize: "IA se adapta a você",
  },
];

const GUARANTEES = [
  "7 dias de teste grátis",
  "Suporte 24/7 via WhatsApp",
  "Sem multa de cancelamento",
  "Implementação em minutos",
];

export function Differentiators() {
  return (
    <section
      id="diferenciais"
      className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-20 text-center"
    >
      <Reveal>
        <h2 className="font-body text-3xl font-bold sm:text-4xl">
          Chega de Amadorismo. A Escolha é Sua.
        </h2>
      </Reveal>

      <Reveal delay={0.05} className="w-full">
        <div className="w-full rounded-3xl border border-border bg-card p-6 text-left shadow-sm sm:p-10">
          <p className="text-sm text-muted-foreground">
            Compare e veja por que a Automatize é a evolução do marketing.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted text-muted-foreground">
                  <th className="py-3 pl-4 pr-4 text-left font-medium">
                    O que você recebe
                  </th>
                  <th className="py-3 pr-4 text-left font-medium">
                    Agência Tradicional
                  </th>
                  <th className="py-3 pr-4 text-left font-medium text-brand">
                    Automatize Marketing
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-border last:border-b-0"
                  >
                    <td className="py-3 pl-4 pr-4 font-medium">{row.label}</td>
                    <td className="py-3 pr-4 text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <XCircle className="size-4 shrink-0 text-red-500" />
                        {row.agency}
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="inline-flex items-center gap-1.5 font-medium text-brand">
                        <CheckCircle2 className="size-4 shrink-0" />
                        {row.automatize}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="w-full">
        <p className="font-body text-2xl font-bold sm:text-3xl">
          Tudo que uma agência faz, só que melhor.
          <br />
          E claro, sem o preço de agência.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="w-full border-t border-border pt-8">
        <div className="grid gap-3 sm:grid-cols-2">
          {GUARANTEES.map((item) => (
            <p key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="size-4 shrink-0 text-brand" />
              {item}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
