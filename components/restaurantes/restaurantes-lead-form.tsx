"use client";

import { useState } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { CTA_LABEL, ctaClass } from "@/components/restaurantes/restaurantes-cta-button";

const FIELDS = [
  {
    name: "nome",
    label: "Nome",
    type: "text",
    placeholder: "Como podemos chamar você?",
    autoComplete: "name",
  },
  {
    name: "telefone",
    label: "Telefone",
    type: "tel",
    placeholder: "(00) 00000-0000",
    autoComplete: "tel",
  },
  {
    name: "instagram",
    label: "Instagram da loja",
    type: "text",
    placeholder: "@seurestaurante",
    autoComplete: "off",
  },
  {
    name: "faturamento",
    label: "Média de faturamento",
    type: "text",
    placeholder: "Ex.: R$ 35.000 por mês",
    autoComplete: "off",
  },
];

export function RestaurantesLeadForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      id="cadastro"
      className="scroll-mt-28 rounded-2xl bg-gradient-to-b from-[#766cf0]/80 via-[#766cf0]/30 to-[#766cf0]/60 p-px shadow-2xl shadow-black/40"
    >
      <div className="rounded-[calc(1rem-1px)] bg-[#0e0e17] p-6 sm:p-9">
        <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          <span aria-hidden className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px] shadow-cyan-400" />
          Vamos falar do seu restaurante
        </p>

        <h2 className="mt-5 text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-[2rem]">
          Seu próximo pedido
          <span className="block font-heading text-[1.15em] font-normal italic leading-none text-[#a8a1ff]">
            começa por aqui.
          </span>
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Preencha seus dados para conversar sobre os próximos passos.
        </p>

        {/*
          TODO: o formulário ainda NÃO envia os dados para lugar nenhum.
          Integrar o onSubmit com o CRM / WhatsApp / webhook antes de publicar e
          trocar os dois avisos de "demonstrativo" abaixo.
        */}
        <form
          className="mt-6 flex flex-col gap-3.5"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          {FIELDS.map((field) => (
            <label
              key={field.name}
              className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.1em]"
            >
              {field.label}
              <input
                required
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                onChange={() => setSubmitted(false)}
                // text-base no mobile evita o zoom automático do iOS ao focar
                className="w-full rounded-lg border border-border bg-black/30 px-3.5 py-3 text-base font-normal normal-case tracking-normal outline-none transition-all placeholder:text-muted-foreground/70 focus:border-[#766cf0] focus:ring-4 focus:ring-[#766cf0]/20 sm:text-sm"
              />
            </label>
          ))}

          <button type="submit" className={cn(ctaClass, "mt-1 w-full justify-between text-left")}>
            {CTA_LABEL}
            <ArrowUpRight />
          </button>
        </form>

        <p role="status" className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
          <ShieldCheck aria-hidden className="mt-0.5 size-3.5 shrink-0" />
          {submitted
            ? "Formulário demonstrativo: nada foi enviado."
            : "Formulário demonstrativo. Seus dados não são enviados nem armazenados."}
        </p>
      </div>
    </div>
  );
}
