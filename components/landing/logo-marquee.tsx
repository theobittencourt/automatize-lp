"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

type ClientLogo = {
  file: string;
  // logos com traço preto ficam invisíveis no dark mode / logos com traço
  // branco ficam invisíveis no light mode — invertemos só nesses casos.
  invert?: "dark" | "light";
};

const CLIENT_LOGOS: ClientLogo[] = [
  { file: "316751419_494404305833792_4042028796563848573_n-removebg-preview (1)-trimmed.png" },
  {
    file: "320884937_1178299336129748_306394934765032337_n-removebg-preview-trimmed.png",
    invert: "dark",
  },
  {
    file: "491431537_17843015838475794_7331104341643691550_n-removebg-preview-trimmed.png",
    invert: "dark",
  },
  {
    file: "608245405_18088245149063037_888061182921516587_n-removebg-preview-trimmed.png",
    invert: "dark",
  },
  { file: "6a3f1be2logo-e-aplicacoes_1oxoo7a_page-0002-removebg-preview-trimmed.png" },
  { file: "d4a620174554375.667b1382e2c0e__1_-removebg-preview-trimmed.png" },
  {
    file: "duzeca-pizzaria-e-especializad-removebg-preview-trimmed.png",
    invert: "light",
  },
  {
    file: "images__9_-removebg-preview (1)-trimmed.png",
    invert: "light",
  },
];

// precisa bater com o "gap-16" usado entre os itens e entre os grupos abaixo
const GAP_PX = 64;
const SPEED_PX_PER_SEC = 40;

function logoSrc(file: string) {
  return `/images/Logo dos Clientes/${encodeURIComponent(file)}`;
}

function LogoGroup({ innerRef }: { innerRef?: React.Ref<HTMLDivElement> }) {
  const t = useTranslations("SocialProof");
  return (
    <div ref={innerRef} className="flex shrink-0 items-center gap-16">
      {CLIENT_LOGOS.map((logo) => (
        <div key={logo.file} className="flex h-14 shrink-0 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc(logo.file)}
            alt={t("logoAlt")}
            className={cn(
              "h-full w-auto max-w-none object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0",
              logo.invert === "dark" && "dark:invert",
              logo.invert === "light" && "invert dark:invert-0"
            )}
          />
        </div>
      ))}
    </div>
  );
}

export function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const offsetRef = useRef(0);

  useEffect(() => {
    let raf: number;
    let last = performance.now();

    function tick(now: number) {
      const dt = (now - last) / 1000;
      last = now;

      const groupWidth = groupRef.current?.getBoundingClientRect().width ?? 0;
      const cycle = groupWidth + GAP_PX;

      if (!pausedRef.current && cycle > 0) {
        offsetRef.current -= SPEED_PX_PER_SEC * dt;
        if (offsetRef.current <= -cycle) {
          offsetRef.current += cycle;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
        }
      }

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div ref={trackRef} className="flex w-max items-center gap-16">
        <LogoGroup innerRef={groupRef} />
        <LogoGroup />
      </div>
    </div>
  );
}
