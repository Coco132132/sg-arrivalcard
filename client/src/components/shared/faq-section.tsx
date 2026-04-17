import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FaqSectionProps {
  items: FaqItem[];
  className?: string;
}

export function FaqSection({ items, className }: FaqSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={cn("space-y-3", className)}>
      <h2 className="text-xl font-semibold text-foreground">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-foreground hover:text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {typeof item.answer === "string" ? (
                <p>{item.answer}</p>
              ) : (
                item.answer
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
