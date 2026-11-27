import { Reveal } from "@/components/landing/reveal";
import { RestaurantesCtaButton } from "@/components/restaurantes/restaurantes-cta-button";

// Fechamento no mesmo visual da /black.
export function RestaurantesFinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-3xl border border-brand/30 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(10,8,20,0.35), rgba(10,8,20,0.8)), url(/images/textures/gradient-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-0 -z-10 h-64 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/40 blur-3xl"
          />

          <h2 className="mx-auto max-w-3xl text-balance font-body text-2xl font-bold leading-tight sm:text-4xl">
            Enquanto você cuida do preparo, a gente cuida do cliente até o pedido.
          </h2>
          <div className="mt-8 flex justify-center">
            <RestaurantesCtaButton className="w-full text-center sm:w-auto" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
