import { MessageCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/landing/reveal";

const ITEM_KEYS = ["confianca", "preco", "agenciaAtual", "trafegoPago"] as const;

export async function Faq() {
  const t = await getTranslations("Faq");

  const items = ITEM_KEYS.map((key) => ({
    key,
    question: t(`items.${key}.question`),
    answer: t(`items.${key}.answer`),
  }));

  return (
    <section id="faq" className="mx-auto grid max-w-5xl gap-10 px-4 py-20 md:grid-cols-2">
      <Reveal>
        <h2 className="font-body text-3xl font-bold sm:text-4xl">
          {t("heading")}
        </h2>
        <p className="mt-4 text-muted-foreground">{t("subtitle")}</p>
        <Button variant="outline" className="mt-6 gap-2">
          <MessageCircle className="size-4" />
          {t("supportCta")}
        </Button>
      </Reveal>

      <Reveal delay={0.1}>
        <Accordion type="single" collapsible defaultValue="item-0">
          {items.map((item, i) => (
            <AccordionItem key={item.key} value={`item-${i}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
