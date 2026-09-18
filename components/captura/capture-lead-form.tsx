import { Briefcase, Lock, ShieldCheck, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";
import { Highlight } from "@/components/landing/highlight";

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand";

export function CaptureLeadForm() {
  return (
    <section id="oferta" className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <Reveal>
        <div className="text-center">
          <Badge variant="brand" className="mx-auto w-fit gap-1.5">
            <Sparkles className="size-3.5" />
            Vagas limitadas com mentoria &amp; condição especial
          </Badge>
          <h2 className="mt-4 font-body text-3xl font-bold sm:text-4xl">
            Desbloqueie a Condição Exclusiva do{" "}
            <Highlight>Isaac da Rocha</Highlight>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Preencha seus dados para receber o diagnóstico no WhatsApp e
            liberar os 7 dias grátis em planos a partir de R$ 297/mês, com
            condições reservadas nesta página.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 flex gap-3 rounded-2xl border border-brand/30 bg-brand/5 p-4 text-sm">
          <Briefcase className="mt-0.5 size-5 shrink-0 text-brand" />
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">
              Aviso especial para gestores e consultores de delivery:
            </span>{" "}
            Caso você seja um Gestor de Delivery ou atenda carteira de
            restaurantes clientes, selecione a opção abaixo no formulário.
            Nosso time liberará nossa grade comercial exclusiva para
            parceiros (tabela multi-contas e remuneração recorrente).
          </p>
        </div>
      </Reveal>

      {/*
        TODO: formulário estático, sem integração de backend/CRM ainda.
        Ligar o onSubmit a um endpoint (ex: webhook de WhatsApp/CRM) antes
        de publicar a campanha de verdade.
      */}
      <Reveal delay={0.1}>
        <form className="mt-8 flex flex-col gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <fieldset>
            <legend className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Qual é o seu perfil de atuação? *
            </legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="flex cursor-pointer flex-col gap-1 rounded-xl border border-input p-4 text-sm transition-colors has-[:checked]:border-brand has-[:checked]:bg-brand/5">
                <span className="flex items-center gap-2 font-medium">
                  <input
                    type="radio"
                    name="perfil"
                    value="dono"
                    defaultChecked
                    className="accent-brand"
                  />
                  Dono de Delivery / Food Service
                </span>
                <span className="pl-6 text-xs text-muted-foreground">
                  Restaurante, hamburgueria, pizzaria, sushi, etc.
                </span>
              </label>

              <label className="flex cursor-pointer flex-col gap-1 rounded-xl border border-input p-4 text-sm transition-colors has-[:checked]:border-brand has-[:checked]:bg-brand/5">
                <span className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 font-medium">
                    <input type="radio" name="perfil" value="gestor" className="accent-brand" />
                    Gestor de Delivery / Consultor
                  </span>
                  <Badge variant="brand" className="shrink-0">
                    Condição exclusiva
                  </Badge>
                </span>
                <span className="pl-6 text-xs text-muted-foreground">
                  Atendo clientes e quero tabela de parceiro
                </span>
              </label>
            </div>
          </fieldset>

          <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Seu nome completo *
            <input required name="nome" type="text" className={inputClass} />
          </label>

          <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            WhatsApp com DDD *
            <input required name="whatsapp" type="tel" placeholder="(11) 91234-5678" className={inputClass} />
          </label>

          <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            E-mail principal *
            <input required name="email" type="email" placeholder="seuemail@exemplo.com" className={inputClass} />
          </label>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Faturamento médio mensal do delivery
              <select name="faturamento" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option>Até R$ 20.000 / mês</option>
                <option>De R$ 20.000 a R$ 50.000 / mês</option>
                <option>De R$ 50.000 a R$ 100.000 / mês</option>
                <option>Acima de R$ 100.000 / mês</option>
              </select>
            </label>

            <label className="flex flex-col gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Principal objetivo imediato
              <select name="objetivo" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option>Aumentar volume diário de pedidos</option>
                <option>Reduzir custo de agência / equipe cara</option>
                <option>Melhorar fotos do cardápio com IA</option>
                <option>Anúncios automáticos sem depender de terceiros</option>
              </select>
            </label>
          </div>

          <Button
            type="submit"
            size="lg"
            className="h-auto w-full whitespace-normal py-3 text-center leading-snug bg-brand text-brand-foreground hover:bg-brand/90"
          >
            Quero meu teste de 7 dias + oferta do Isaac
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Lock className="size-3.5" />
              Seus dados estão 100% seguros
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-3.5" />
              Sem fidelidade contratual
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-3.5" />
              Resposta rápida via WhatsApp
            </span>
          </div>
        </form>
      </Reveal>
    </section>
  );
}
