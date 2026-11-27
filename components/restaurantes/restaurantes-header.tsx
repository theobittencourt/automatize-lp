import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Cases", href: "#depoimentos" },
  { label: "Clientes", href: "#clientes" },
];

export function RestaurantesAnnouncement() {
  return (
    <div className="flex items-center justify-center gap-3 border-b border-border bg-white/[0.02] px-4 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
      <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px] shadow-cyan-400" />
      <span>Marketing feito para quem vive de restaurante</span>
      <span aria-hidden className="hidden h-3 w-px bg-border sm:block" />
      <span className="hidden sm:block">Da primeira impressão ao pedido</span>
    </div>
  );
}

export function RestaurantesHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 px-4 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-4">
        <Link href="/" className="flex shrink-0 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-footer-trimmed.png"
            alt="Automatize"
            className="h-7 w-auto object-contain sm:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          size="sm"
          className="rounded-full border border-white/15 bg-gradient-to-r from-[#564fd1] to-[#766cf0] px-4 text-xs font-semibold text-white shadow-lg shadow-[#6a60e6]/30 hover:shadow-xl hover:shadow-[#6a60e6]/40"
        >
          <a href="#cadastro">
            {/* no celular o texto completo não cabe ao lado do logo */}
            <span className="sm:hidden">Fale conosco</span>
            <span className="hidden sm:inline">Fale com a Automatize</span>
            <ArrowUpRight />
          </a>
        </Button>
      </div>
    </header>
  );
}
