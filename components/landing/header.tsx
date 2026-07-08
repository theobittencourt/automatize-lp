"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, Moon, Sun, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Integrações", href: "#integracoes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="size-9" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

function LanguageToggle() {
  return (
    // TODO: ligar à troca de locale real quando o roteamento next-intl for configurado
    <button
      type="button"
      aria-label="Alternar idioma"
      className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      <Globe className="size-4" />
    </button>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4">
      <div
        className={cn(
          "mx-auto transition-all duration-300",
          scrolled
            ? "mt-2 max-w-4xl rounded-2xl border border-border bg-background/80 px-4 shadow-sm backdrop-blur-lg lg:px-5"
            : "mt-0 max-w-6xl lg:px-12"
        )}
      >
        <div className="flex items-center justify-between gap-4 py-3 lg:py-4">
          <Link href="/" className="flex shrink-0 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/light-logo-footer-trimmed.png"
              alt="Automatize"
              className="h-9 w-auto object-contain dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-footer-trimmed.png"
              alt="Automatize"
              className="hidden h-9 w-auto object-contain dark:block"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <LanguageToggle />
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Login
            </Link>
            <Button className="rounded-full bg-brand text-brand-foreground hover:bg-brand/90">
              Teste 7 dias grátis
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-full text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mb-3 flex flex-col gap-1 rounded-3xl border border-border bg-background p-4 shadow-lg">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-2 flex items-center gap-2 border-t border-border pt-3">
                  <ThemeToggle />
                  <LanguageToggle />
                  <Link
                    href="/login"
                    className="ml-1 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    Login
                  </Link>
                </div>

                <Button className="mt-2 w-full rounded-full bg-brand text-brand-foreground hover:bg-brand/90">
                  Teste 7 dias grátis
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
