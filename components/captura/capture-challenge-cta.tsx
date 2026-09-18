import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";

export function CaptureChallengeCta() {
  return (
    <section className="mx-auto px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl p-8 text-center text-white shadow-xl sm:p-14"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(10,8,20,0.55), rgba(10,8,20,0.88)), url(/images/textures/gradient-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-balance font-body text-2xl font-bold sm:text-3xl">
              Aceite Nosso Desafio: Teste por 7 Dias Sem Risco
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-sm text-white/70">
              Você entra em um plano a partir de R$ 297/mês, sobe suas
              primeiras campanhas de anúncios com IA, transforma suas fotos
              de pratos e sente o impacto no movimento de pedidos. Se por
              qualquer motivo achar que não é para você, basta nos enviar uma
              mensagem. Devolvemos 100% do seu dinheiro. Sem perguntas e sem
              letras miúdas.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild className="bg-brand text-brand-foreground hover:bg-brand/90">
                <a href="#oferta">Quero testar por 7 dias grátis</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
