import Link from "next/link";
import { Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CaptureHeader() {
  return (
    <div className="sticky top-0 z-50">
      <div
        className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-xs font-medium text-white sm:text-sm"
        style={{
          backgroundImage:
            "linear-gradient(90deg, oklch(0.5 0.2 300), oklch(0.55 0.18 280), oklch(0.65 0.15 220))",
        }}
      >
        <span>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide sm:text-xs">
            Parceria oficial
          </span>{" "}
          Isaac da Rocha (@expertdodelivery) + Automatize: Condição Especial
          Liberada
        </span>
        <a href="#oferta" className="font-semibold underline underline-offset-2 hover:no-underline">
          Resgatar vaga →
        </a>
      </div>

      <header className="border-b border-border bg-background/95 px-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-3">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/light-logo-footer-trimmed.png"
              alt="Automatize"
              className="h-8 w-auto object-contain dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-footer-trimmed.png"
              alt="Automatize"
              className="hidden h-8 w-auto object-contain dark:block"
            />
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/expertdodelivery"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground md:flex"
            >
              <Instagram className="size-4" />
              @expertdodelivery
            </a>

            <Button asChild size="sm" className="rounded-full bg-brand text-brand-foreground hover:bg-brand/90">
              <a href="#oferta">Desbloquear Oferta</a>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
