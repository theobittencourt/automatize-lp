"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { TestimonialVideo } from "@/components/landing/testimonial-video";

type Testimonial = {
  src: string;
  poster: string;
  aspect: string;
};

const LANDSCAPE_TESTIMONIAL: Testimonial = {
  src: "/images/depoimentos/depoimento-3.mp4",
  poster: "/images/depoimentos/depoimento-3-poster.jpg",
  aspect: "16 / 9",
};

const PORTRAIT_TESTIMONIALS: Testimonial[] = [
  {
    src: "/images/depoimentos/depoimento-1.mp4",
    poster: "/images/depoimentos/depoimento-1-poster.jpg",
    aspect: "9 / 16",
  },
  {
    src: "/images/depoimentos/depoimento-2.mp4",
    poster: "/images/depoimentos/depoimento-2-poster.jpg",
    aspect: "9 / 16",
  },
];

// cada slide pode conter 1 vídeo (deitado) ou os 2 em pé lado a lado
const SLIDES: Testimonial[][] = [[LANDSCAPE_TESTIMONIAL], PORTRAIT_TESTIMONIALS];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  function go(delta: number) {
    setIndex((i) => (i + delta + SLIDES.length) % SLIDES.length);
  }

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-5 sm:max-w-2xl">
      {/*
        Cada slide ocupa 100% da largura disponível (nunca estoura a tela) e a
        altura é derivada da proporção do conteúdo — por isso a altura muda
        entre os slides, mas o tamanho sempre aproveita o espaço ao máximo.
      */}
      <div className="relative w-full">
        <motion.div
          layout
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full overflow-hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex w-full gap-4"
            >
              {slide.map((item, i) => (
                <TestimonialVideo
                  key={item.src}
                  src={item.src}
                  poster={item.poster}
                  aspect={item.aspect}
                  label={`Depoimento de cliente ${index === 0 ? 1 : i + 2}`}
                  className="flex-1"
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <button
          type="button"
          aria-label="Depoimento anterior"
          onClick={() => go(-1)}
          className="absolute left-0 top-1/2 flex size-9 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 shadow-sm backdrop-blur transition-all duration-200 ease-premium hover:scale-105 hover:bg-muted"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Próximo depoimento"
          onClick={() => go(1)}
          className="absolute right-0 top-1/2 flex size-9 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-border bg-background/90 shadow-sm backdrop-blur transition-all duration-200 ease-premium hover:scale-105 hover:bg-muted"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para o grupo de depoimentos ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300 ease-premium",
              i === index ? "w-6 bg-brand" : "w-1.5 bg-border hover:bg-muted-foreground/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
