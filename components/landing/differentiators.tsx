import { CheckCircle2, XCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/landing/reveal";

export async function Differentiators() {
  const t = await getTranslations("Differentiators");

  const comparisonRows = [
    "investimento",
    "fidelidade",
    "reunioes",
    "cancelamento",
    "implementacao",
    "resultados",
    "comecaNoAr",
    "adaptacao",
  ].map((key) => ({
    key,
    label: t(`table.rows.${key}.label`),
    agency: t(`table.rows.${key}.agency`),
    automatize: t(`table.rows.${key}.automatize`),
  }));

  const guarantees = [
    t("guarantees.trial"),
    t("guarantees.support"),
    t("guarantees.noFee"),
    t("guarantees.setup"),
  ];

  return (
    <section
      id="diferenciais"
      className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-20 text-center"
    >
      <Reveal>
        <h2 className="font-body text-3xl font-bold sm:text-4xl">
          {t("heading")}
        </h2>
      </Reveal>

      <Reveal delay={0.05} className="w-full">
        <div className="w-full rounded-3xl border border-border bg-card p-6 text-left shadow-sm sm:p-10">
          <p className="text-sm text-muted-foreground">{t("cardParagraph")}</p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted text-muted-foreground">
                  <th className="py-3 pl-4 pr-4 text-left font-medium">
                    {t("table.colFeature")}
                  </th>
                  <th className="py-3 pr-4 text-left font-medium">
                    {t("table.colAgency")}
                  </th>
                  <th className="py-3 pr-4 text-left font-medium text-brand">
                    {t("table.colAutomatize")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.key}
                    className="border-b border-border transition-colors duration-200 ease-premium last:border-b-0 hover:bg-muted/50"
                  >
                    <td className="py-3 pl-4 pr-4 font-medium">{row.label}</td>
                    <td className="py-3 pr-4 text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <XCircle className="size-4 shrink-0 text-red-500" />
                        {row.agency}
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="inline-flex items-center gap-1.5 font-medium text-brand">
                        <CheckCircle2 className="size-4 shrink-0" />
                        {row.automatize}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="w-full">
        <p className="font-body text-2xl font-bold sm:text-3xl">
          {t("tagline1")}
          <br />
          {t("tagline2")}
        </p>
      </Reveal>

      <Reveal delay={0.15} className="w-full border-t border-border pt-8">
        <div className="grid gap-3 sm:grid-cols-2">
          {guarantees.map((item) => (
            <p key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="size-4 shrink-0 text-brand" />
              {item}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
