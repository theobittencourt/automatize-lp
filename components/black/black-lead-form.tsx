"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const inputClass =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand";

const labelClass =
  "flex flex-col gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground";

export function BlackLeadForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      id="garanta"
      className="scroll-mt-28 rounded-3xl border border-brand/30 bg-card p-6 shadow-2xl shadow-brand/10 sm:p-8"
    >
      {submitted ? (
        <div className="flex flex-col items-center gap-3 py-10 text-center">
          <CheckCircle2 className="size-12 text-brand" />
          <p className="font-body text-xl font-bold">Cadastro recebido!</p>
          <p className="text-sm text-muted-foreground">
            Um consultor vai falar com você pelo WhatsApp para liberar o seu
            desconto de 30%.
          </p>
        </div>
      ) : (
        <>
          <h2 className="font-body text-2xl font-bold">Garanta a sua Black!</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fale com um consultor e tenha acesso ao Desconto!
          </p>

          {/*
            TODO: este formulário ainda NÃO envia os dados para lugar nenhum.
            Integrar o onSubmit com o CRM / WhatsApp antes de publicar a campanha.
          */}
          <form
            className="mt-6 flex flex-col gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label className={labelClass}>
              Nome
              <input required name="nome" type="text" autoComplete="name" className={inputClass} />
            </label>
            <label className={labelClass}>
              E-mail
              <input required name="email" type="email" autoComplete="email" className={inputClass} />
            </label>
            <label className={labelClass}>
              WhatsApp
              <input
                required
                name="whatsapp"
                type="tel"
                autoComplete="tel"
                placeholder="(11) 91234-5678"
                className={inputClass}
              />
            </label>
            <label className={labelClass}>
              Nome do Restaurante
              <input required name="restaurante" type="text" className={inputClass} />
            </label>
            <label className={labelClass}>
              Instagram do Restaurante
              <input name="instagram" type="text" placeholder="@seurestaurante" className={inputClass} />
            </label>

            <Button
              type="submit"
              size="lg"
              className="mt-2 w-full bg-brand text-brand-foreground hover:bg-brand/90"
            >
              Quero 30% OFF
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
