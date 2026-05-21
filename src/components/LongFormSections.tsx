import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";

export interface LongFormSection {
  heading: string;
  body?: string;
  subSections?: { heading: string; body: string }[];
  bullets?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  /** Unique id used for the injected FAQPage JSON-LD script element */
  schemaId: string;
  /** Absolute canonical URL for this page — used as @id for the FAQ graph */
  pageUrl: string;
  intro?: string;
  sections: LongFormSection[];
  faqs?: FAQ[];
  faqHeading?: string;
}

/**
 * Renders long-form H2/H3 + bullet content beneath the existing page layout
 * and injects a FAQPage JSON-LD block for rich results.
 */
const LongFormSections = ({
  schemaId,
  pageUrl,
  intro,
  sections,
  faqs,
  faqHeading = "Frequently Asked Questions",
}: Props) => {
  useEffect(() => {
    if (!faqs || faqs.length === 0) return;
    const graph = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };
    let el = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = schemaId;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(graph);
    return () => {
      const node = document.getElementById(schemaId);
      if (node) node.remove();
    };
  }, [schemaId, pageUrl, faqs]);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose-lg">
            {intro && (
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                {intro}
              </p>
            )}
            <div className="space-y-12">
              {sections.map((section, i) => (
                <article key={i}>
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                    {section.heading}
                  </h2>
                  {section.body && (
                    <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                      {section.body}
                    </p>
                  )}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {section.bullets.map((b, j) => (
                        <li key={j} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.subSections?.map((sub, k) => (
                    <div key={k} className="mt-6">
                      <h3 className="text-xl font-semibold text-secondary mb-2">
                        {sub.heading}
                      </h3>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {sub.body}
                      </p>
                    </div>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {faqs && faqs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8 text-center">
                {faqHeading}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-semibold text-secondary">
                      <h3 className="text-base font-semibold m-0">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LongFormSections;
