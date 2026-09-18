import { Reveal } from "@/components/landing/reveal";

const PAIN_POINTS = [
  {
    number: "01",
    title: "Agências Caras e Ineficientes",
    description:
      "Mensalidades a partir de R$ 3.000, contratos de 12 meses, reuniões improdutivas e relatórios que mostram \"alcance\" mas não geram pedidos na cozinha.",
  },
  {
    number: "02",
    title: "Cardápios com Fotos Amadoras",
    description:
      "O cliente come primeiro com os olhos. Fotos escuras ou tiradas sem padrão desvalorizam o prato e derrubam a conversão do delivery em mais de 40%.",
  },
  {
    number: "03",
    title: "Complexidade no Tráfego Pago",
    description:
      "Configurar o Gerenciador de Anúncios da Meta exige tempo técnico. Errar o raio ou o público queima orçamento sem trazer vendas nos horários de pico.",
  },
];

export function CapturePainPoints() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-brand">
            O gargalo da operação
          </p>
          <h2 className="mt-2 font-body text-3xl font-bold sm:text-4xl">
            Por que a Maioria dos Deliveries Trabalha Muito e Lucra Pouco?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tanto quem é dono de restaurante quanto quem gerencia o delivery
            de terceiros enfrenta os mesmos vilões diários:
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {PAIN_POINTS.map((item, i) => (
          <Reveal key={item.number} delay={0.1 + i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="font-heading text-3xl font-bold text-brand/30">
                {item.number}
              </span>
              <p className="mt-3 font-medium">{item.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
