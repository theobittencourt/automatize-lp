"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { TestimonialVideo } from "@/components/landing/testimonial-video";

type TestimonialItem = {
  src: string;
  poster: string;
  name: string;
  business: string;
};

// o top desconta metade da altura da legenda, pra seta ficar no meio do vídeo
const arrowClass =
  "absolute top-[calc(50%-1.75rem)] z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 shadow-lg backdrop-blur transition-all duration-200 ease-premium hover:scale-105 hover:bg-muted disabled:pointer-events-none disabled:opacity-0";

// Carrossel com scroll nativo + snap: no celular arrasta com o dedo, no desktop
// usa as setas (ou o trackpad). Mostra 3 vídeos por vez a partir de "sm".
export function TestimonialSlider({ videos }: { videos: TestimonialItem[] }) {
  const t = useTranslations("SocialProof.carousel");
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    // folga de 1px por causa de arredondamento em telas com zoom
    setCanPrev(track.scrollLeft > 1);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  function go(direction: 1 | -1) {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  }

  return (
    <div className="relative w-full">
      <div className="rounded-3xl border border-border bg-card p-3 shadow-lg">
        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="no-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain rounded-2xl"
        >
          {videos.map((item) => (
            // no celular sobra um pedaço do próximo, indicando que dá pra arrastar
            <figure
              key={item.src}
              className="flex w-[68%] shrink-0 snap-start flex-col sm:w-[calc((100%-1rem)/3)]"
            >
              <TestimonialVideo
                src={item.src}
                poster={item.poster}
                aspect="9 / 16"
                label={`${item.name} (${item.business})`}
                playWhenVisible
                className="w-full"
              />
              <figcaption className="px-2 pb-1 pt-3 text-center">
                <p className="text-sm font-semibold leading-snug sm:text-base">
                  {item.name}
                </p>
                <p className="text-xs leading-snug text-brand sm:text-sm">
                  {item.business}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label={t("prev")}
        onClick={() => go(-1)}
        disabled={!canPrev}
        className={cn(arrowClass, "-left-2 sm:-left-5")}
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label={t("next")}
        onClick={() => go(1)}
        disabled={!canNext}
        className={cn(arrowClass, "-right-2 sm:-right-5")}
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
