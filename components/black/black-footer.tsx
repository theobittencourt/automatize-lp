import Link from "next/link";

export function BlackFooter() {
  return (
    <footer className="border-t border-border bg-muted/30 px-4 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-footer-trimmed.png"
          alt="Automatize"
          className="h-8 w-auto object-contain"
        />
        <Link
          href="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Site Oficial Automatize
        </Link>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Automatize Marketing. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
