import { Sparkles } from "lucide-react";

// Faixa em movimento (puramente decorativa) que reforça a oferta.
const ITEMS = ["Black Friday Automatize", "30% OFF", "Só em novembro"];

function Group() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-6 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-foreground"
        >
          {item}
          <Sparkles className="size-4 opacity-70" />
        </span>
      ))}
    </div>
  );
}

export function BlackTicker() {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-brand/40 bg-brand py-3 shadow-[0_0_60px_-10px] shadow-brand/60"
    >
      <div className="flex w-max animate-ticker motion-reduce:animate-none">
        {/* Grupos idênticos: a animação anda -50% e reinicia sem "salto" */}
        {Array.from({ length: 8 }).map((_, i) => (
          <Group key={i} />
        ))}
      </div>
    </div>
  );
}
