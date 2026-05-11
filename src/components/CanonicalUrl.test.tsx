import { describe, it, expect } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CanonicalUrl from "@/components/CanonicalUrl";

const ROUTES = [
  "/",
  "/about",
  "/services",
  "/gallery",
  "/contact",
  "/service-areas",
  "/service-areas/groveland",
  "/service-areas/clermont",
  "/service-areas/minneola",
  "/service-areas/mascotte",
  "/service-areas/montverde",
  "/service-areas/winter-garden",
  "/service-areas/windermere",
  "/service-areas/oakland",
];

const renderAt = (path: string) => {
  cleanup();
  render(
    <MemoryRouter initialEntries={[path]}>
      <CanonicalUrl />
    </MemoryRouter>,
  );
};

const getMeta = (selector: string) =>
  document.head
    .querySelector<HTMLMetaElement>(selector)
    ?.getAttribute("content") ?? "";

describe("Per-route SEO (CanonicalUrl)", () => {
  it("sets a non-empty title and meta description on every route", () => {
    for (const path of ROUTES) {
      renderAt(path);
      expect(document.title, `title for ${path}`).toBeTruthy();
      expect(document.title.length, `title length for ${path}`).toBeLessThan(75);
      const desc = getMeta('meta[name="description"]');
      expect(desc, `description for ${path}`).toBeTruthy();
      expect(desc.length, `description length for ${path}`).toBeLessThan(180);
    }
  });

  it("emits a unique title and meta description for every route", () => {
    const titles = new Map<string, string[]>();
    const descriptions = new Map<string, string[]>();

    for (const path of ROUTES) {
      renderAt(path);
      const title = document.title;
      const desc = getMeta('meta[name="description"]');
      titles.set(title, [...(titles.get(title) ?? []), path]);
      descriptions.set(desc, [...(descriptions.get(desc) ?? []), path]);
    }

    const dupTitles = [...titles.entries()].filter(([, v]) => v.length > 1);
    const dupDescs = [...descriptions.entries()].filter(([, v]) => v.length > 1);

    expect(
      dupTitles,
      `duplicate titles: ${JSON.stringify(dupTitles, null, 2)}`,
    ).toEqual([]);
    expect(
      dupDescs,
      `duplicate descriptions: ${JSON.stringify(dupDescs, null, 2)}`,
    ).toEqual([]);
  });

  it("mirrors title/description to og: and twitter: tags and updates canonical", () => {
    for (const path of ROUTES) {
      renderAt(path);
      const title = document.title;
      const desc = getMeta('meta[name="description"]');

      expect(getMeta('meta[property="og:title"]'), `og:title for ${path}`).toBe(
        title,
      );
      expect(
        getMeta('meta[property="og:description"]'),
        `og:description for ${path}`,
      ).toBe(desc);
      expect(
        getMeta('meta[name="twitter:title"]'),
        `twitter:title for ${path}`,
      ).toBe(title);
      expect(
        getMeta('meta[name="twitter:description"]'),
        `twitter:description for ${path}`,
      ).toBe(desc);

      const canonical = document.head
        .querySelector<HTMLLinkElement>('link[rel="canonical"]')
        ?.getAttribute("href");
      const expectedPath = path === "/" ? "/" : path.replace(/\/+$/, "");
      expect(canonical, `canonical for ${path}`).toBe(
        `https://www.carsonssoftwashservices.com${expectedPath}`,
      );
    }
  });
});
