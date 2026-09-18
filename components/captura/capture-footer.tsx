import Link from "next/link";

export function CaptureFooter() {
  return (
    <footer className="border-t border-border bg-muted/30 px-4 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
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

        <p className="text-sm text-muted-foreground">
          Parceria Oficial com Isaac da Rocha (@expertdodelivery)
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Site Oficial Automatize
          </Link>
          <a
            href="https://instagram.com/expertdodelivery"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Instagram @expertdodelivery
          </a>
          <a href="#oferta" className="hover:text-foreground">
            Formulário de Cadastro
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Automatize Marketing. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
