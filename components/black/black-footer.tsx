import Link from "next/link";

export function BlackFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border px-4 py-12">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, var(--background), rgba(10,8,20,0.55)), url(/images/textures/gradient-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
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
