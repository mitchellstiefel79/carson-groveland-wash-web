import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

const SITE_ORIGIN = "https://www.carsonssoftwashservices.com";
const AUTHOR_ID = `${SITE_ORIGIN}/#carson-stiefel`;
const BUSINESS_ID = `${SITE_ORIGIN}/#business`;
const SCHEMA_ID = "ld-blog-post";

interface Props {
  post: BlogPost;
}

const BlogPostTemplate = ({ post }: Props) => {
  // Inject Article + FAQPage JSON-LD as a graph keyed to this post.
  // Cleaned up on unmount so navigating to another post doesn't double-inject.
  useEffect(() => {
    const url = `${SITE_ORIGIN}/blog/${post.slug}`;
    const graph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${url}#article`,
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          author: { "@id": AUTHOR_ID },
          publisher: { "@id": BUSINESS_ID },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          image: `${SITE_ORIGIN}${post.heroImage}`,
          inLanguage: "en-US",
          articleSection: post.category,
        },
        {
          "@type": "FAQPage",
          "@id": `${url}#faq`,
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        },
      ],
    };

    let el = document.getElementById(SCHEMA_ID) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = SCHEMA_ID;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(graph);

    return () => {
      const node = document.getElementById(SCHEMA_ID);
      if (node) node.remove();
    };
  }, [post]);

  return (
    <Layout>
      <article className="bg-white">
        {/* Hero / header */}
        <header className="bg-secondary text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-6"
            >
              <ArrowLeft size={16} />
              All articles
            </Link>
            <span className="inline-block bg-accent text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <User size={14} /> By Carson Stiefel
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar size={14} />
                {new Date(post.datePublished).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={14} /> {post.readMinutes} min read
              </span>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {post.intro.map((p, i) => (
              <p key={`intro-${i}`} className="text-lg text-gray-700 leading-relaxed mb-6">
                {p}
              </p>
            ))}

            {post.sections.map((section, sIdx) => (
              <section key={`s-${sIdx}`} className="mt-10">
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p
                    key={`s-${sIdx}-p-${i}`}
                    className="text-gray-700 leading-relaxed mb-4"
                  >
                    {p}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    {section.bullets.map((b, i) => (
                      <li key={`s-${sIdx}-b-${i}`}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* FAQ */}
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {post.faqs.map((f, i) => (
                  <AccordionItem key={`faq-${i}`} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-secondary">
                      {f.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 text-base">
                      {f.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Internal links */}
            <section className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-secondary mb-3">
                  Related services
                </h3>
                <ul className="space-y-2">
                  {post.relatedServices.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        to={l.href}
                        className="text-primary hover:underline font-medium"
                      >
                        {l.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-secondary mb-3">
                  Service areas
                </h3>
                <ul className="space-y-2">
                  {post.relatedAreas.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        to={l.href}
                        className="text-primary hover:underline font-medium"
                      >
                        {l.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Author bio */}
            <section className="mt-12 border-t border-gray-200 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                  CS
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary">
                    About the author — Carson Stiefel
                  </h3>
                  <p className="text-gray-700 text-sm mt-2">
                    Carson Stiefel is the owner and lead soft wash technician at
                    Carson's Soft Wash, based in Groveland, FL. He specializes in
                    ARMA-compliant roof cleaning, Florida soft washing, and paver
                    sealing across Lake and Orange counties. Licensed, insured,
                    and BBB-accredited.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Ready for a free quote?
              </h3>
              <p className="text-gray-700 mb-6">
                Honest pricing, no high-pressure sales. We serve Groveland,
                Clermont, and surrounding Lake County, FL.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link to="/contact">Get a free quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:3524673964">Call (352) 467-3964</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CallToAction />
    </Layout>
  );
};

export default BlogPostTemplate;
