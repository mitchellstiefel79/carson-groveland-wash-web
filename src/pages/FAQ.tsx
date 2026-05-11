import { useEffect } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

type FaqItem = { question: string; answer: string };
type FaqCategory = { category: string; items: FaqItem[] };

const FAQS: FaqCategory[] = [
  {
    category: "Services & Methods",
    items: [
      {
        question: "What's the difference between soft washing and pressure washing?",
        answer:
          "Pressure washing relies on high-PSI water to blast surfaces clean — great for concrete and pavers, but damaging to roofs, screens, and painted siding. Soft washing uses low pressure plus an ARMA-approved cleaning solution to kill the algae, mildew, and bacteria at the root. We pick the method based on the surface, never the other way around.",
      },
      {
        question: "What services do you offer?",
        answer:
          "Roof soft washing, house soft washing, driveway and paver pressure washing, paver sealing, pool screen enclosure cleaning, and commercial pressure washing throughout Lake and Orange County, FL.",
      },
      {
        question: "Will soft washing damage my landscaping?",
        answer:
          "No. We pre-wet plants and shrubs, tarp sensitive areas when needed, and rinse thoroughly during and after the job. Our cleaning solution is diluted to ARMA-approved levels safe for established landscaping.",
      },
      {
        question: "Is your cleaning solution safe for pets and kids?",
        answer:
          "Yes — once surfaces are dry (typically 1-2 hours after rinsing), the area is safe for pets and kids. We'll let you know exactly when it's safe to use the yard or driveway again.",
      },
    ],
  },
  {
    category: "Pricing & Quotes",
    items: [
      {
        question: "How much does soft washing cost?",
        answer:
          "Pricing depends on square footage, surface type, pitch, and condition. Most single-family house washes in Lake County fall between $250 and $500. We provide free written quotes — no high-pressure sales, no surprise add-ons.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes. Call (352) 467-3964 or send a message through our contact page. Most quotes can be done remotely from photos and an address; larger commercial jobs may require an on-site walkthrough.",
      },
      {
        question: "What forms of payment do you accept?",
        answer:
          "Cash, check, and all major credit/debit cards. Payment is due upon completion unless other terms are agreed in writing for commercial accounts.",
      },
    ],
  },
  {
    category: "Scheduling & Service Area",
    items: [
      {
        question: "What areas do you serve?",
        answer:
          "We serve Groveland, Clermont, Minneola, Mascotte, Montverde, Winter Garden, Windermere, Oakland, and the surrounding Lake and Orange County, FL communities. No travel fees inside Groveland city limits.",
      },
      {
        question: "How soon can you get to my job?",
        answer:
          "Most residential jobs are scheduled within 3-7 days. Same-week and same-day service is often available in Groveland — just ask when you call.",
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer:
          "No. As long as we have access to water spigots and the areas being cleaned, we can complete the job while you're at work. We'll text before, during, and after the job.",
      },
      {
        question: "What happens if it rains?",
        answer:
          "Light rain doesn't affect soft washing — the cleaning solution still does its work. For heavy storms, we'll reach out to reschedule at no charge.",
      },
    ],
  },
  {
    category: "Trust & Insurance",
    items: [
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes. Carson's Soft Wash Inc. is fully licensed and carries general liability insurance. Certificates of insurance are available on request — required for many HOA and gated communities.",
      },
      {
        question: "Are you ARMA-compliant?",
        answer:
          "Yes. We follow Asphalt Roofing Manufacturers Association (ARMA) recommended methods for shingle cleaning, which preserves your shingle warranty and keeps the roof intact.",
      },
      {
        question: "Do you offer a satisfaction guarantee?",
        answer:
          "Yes. If you spot something we missed, call us within 7 days and we'll come back and make it right at no charge.",
      },
    ],
  },
];

const SCHEMA_ID = "ld-faq-page";

const FAQ = () => {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.flatMap((cat) =>
        cat.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      ),
    };

    let script = document.getElementById(SCHEMA_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = SCHEMA_ID;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema);

    return () => {
      const el = document.getElementById(SCHEMA_ID);
      if (el) el.remove();
    };
  }, []);

  return (
    <Layout>
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/85">
            Straight answers about soft washing, pressure washing, paver sealing,
            and what it's like to work with us in Lake County, FL.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {FAQS.map((cat) => (
            <div key={cat.category} className="mb-12">
              <SectionTitle title={cat.category} />
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm border border-gray-200 px-6">
                {cat.items.map((item, idx) => (
                  <AccordionItem
                    key={item.question}
                    value={`${cat.category}-${idx}`}
                    className="border-b last:border-b-0"
                  >
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-secondary hover:text-primary hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 text-base leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're happy to talk through your project — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-white" size="lg" asChild>
              <a href="tel:3524673964" className="flex items-center gap-2">
                <Phone size={18} /> Call (352) 467-3964
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:carsonssoftwash@gmail.com" className="flex items-center gap-2">
                <Mail size={18} /> Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
