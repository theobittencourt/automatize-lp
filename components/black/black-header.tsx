import Link from "next/link";

import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "A conta", href: "#calculadora" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function BlackHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 px-4 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-3">
        <Link href="/" className="flex shrink-0 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-footer-trimmed.png"
            alt="Automatize"
            className="h-8 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          size="sm"
          className="rounded-full bg-brand text-brand-foreground hover:bg-brand/90"
        >
          <a href="#garanta">Quero 30% OFF</a>
        </Button>
      </div>
    </header>
  );
}
