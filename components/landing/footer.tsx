import Link from "next/link";

const LINK_COLUMNS = [
  {
    title: "Links",
    items: [
      { label: "Funcionalidades", href: "#funcionalidades" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Planos", href: "#planos" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Contato",
    items: [
      // TODO: confirmar canais oficiais de contato
      { label: "WhatsApp", href: "#" },
      { label: "E-mail", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      // TODO: confirmar links reais de termos/privacidade
      { label: "Termos de uso", href: "#" },
      { label: "Política de privacidade", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-zinc-950 text-zinc-300"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(9,9,11,0.94), rgba(9,9,11,0.98)), url(/images/textures/gradient-2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-footer-trimmed.png"
            alt="Automatize"
            className="h-9 w-auto object-contain"
          />
          <p className="font-heading text-sm italic text-zinc-400">
            Marketing e tráfego, no piloto automático.
          </p>
        </div>

        {LINK_COLUMNS.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              • {column.title}
            </p>
            <ul className="flex flex-col gap-2">
              {column.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Automatize Marketing. Todos os direitos reservados.
      </div>
    </footer>
  );
}
