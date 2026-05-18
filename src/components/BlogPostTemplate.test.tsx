import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BlogPostTemplate from "./BlogPostTemplate";
import { blogPosts } from "@/data/blogPosts";

afterEach(() => {
  cleanup();
  document.getElementById("ld-blog-post")?.remove();
});

/**
 * Pre-deployment guard: every blog post must inject a valid JSON-LD graph
 * containing both an Article and a FAQPage node so Google can render rich
 * results. If this test fails, the post is missing required fields or the
 * template stopped emitting structured data.
 */
describe("Blog post structured data", () => {
  it("has at least one post to validate", () => {
    expect(blogPosts.length).toBeGreaterThan(0);
  });

  blogPosts.forEach((post) => {
    it(`emits valid Article + FAQPage JSON-LD for "${post.slug}"`, () => {
      // Post-level data prerequisites
      expect(post.faqs.length, "post must define FAQs").toBeGreaterThan(0);
      post.faqs.forEach((f, i) => {
        expect(f.question.trim(), `faq[${i}].question`).not.toBe("");
        expect(f.answer.trim(), `faq[${i}].answer`).not.toBe("");
      });

      render(
        <MemoryRouter>
          <BlogPostTemplate post={post} />
        </MemoryRouter>
      );

      const el = document.getElementById("ld-blog-post");
      expect(el, "JSON-LD script tag must be injected").not.toBeNull();
      expect(el!.getAttribute("type")).toBe("application/ld+json");

      // Must be valid JSON
      const data = JSON.parse(el!.textContent || "");
      expect(data["@context"]).toBe("https://schema.org");
      expect(Array.isArray(data["@graph"])).toBe(true);

      const article = data["@graph"].find(
        (n: { "@type": string }) => n["@type"] === "Article"
      );
      const faq = data["@graph"].find(
        (n: { "@type": string }) => n["@type"] === "FAQPage"
      );

      // Article requirements (Google rich result minimums)
      expect(article, "Article node required").toBeTruthy();
      expect(article.headline).toBe(post.title);
      expect(article.description).toBe(post.metaDescription);
      expect(article.datePublished).toBeTruthy();
      expect(article.dateModified).toBeTruthy();
      expect(article.author?.["@id"]).toBeTruthy();
      expect(article.publisher?.["@id"]).toBeTruthy();
      expect(article.image).toMatch(/^https?:\/\//);
      expect(article.mainEntityOfPage?.["@id"]).toContain(`/blog/${post.slug}`);

      // FAQPage requirements
      expect(faq, "FAQPage node required").toBeTruthy();
      expect(Array.isArray(faq.mainEntity)).toBe(true);
      expect(faq.mainEntity.length).toBe(post.faqs.length);
      faq.mainEntity.forEach(
        (q: {
          "@type": string;
          name: string;
          acceptedAnswer: { "@type": string; text: string };
        }) => {
          expect(q["@type"]).toBe("Question");
          expect(q.name?.trim()).not.toBe("");
          expect(q.acceptedAnswer?.["@type"]).toBe("Answer");
          expect(q.acceptedAnswer?.text?.trim()).not.toBe("");
        }
      );
    });
  });
});
