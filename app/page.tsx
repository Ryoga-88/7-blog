// page.tsx (App Router)
import React from "react";
import Header from "@/components/header";
import { getSortedContents } from "@/lib/contents";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ContentSection from "@/components/ContentSection";

interface SearchParams {
  locale?: string;
}

interface HomeProps {
  searchParams: Promise<SearchParams>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const locale: "ja" | "en" = params?.locale === "en" ? "en" : "ja";

  const contents = await getSortedContents();
  const allContents = {
    ja: contents.filter(
      (content: { language: string }) => content.language === "ja"
    ),
    en: contents.filter(
      (content: { language: string }) => content.language === "en"
    ),
  };

  return (
    <>
      <Header navItems={allContents[locale]} currentLocale={locale} />
      <Hero locale={locale} />

      <div className="flex flex-col items-center min-h-screen gap-6 font-[family-name:var(--font-geist-sans)]">
        <ContentSection contents={allContents[locale]} locale={locale} />
      </div>
      <Footer />
    </>
  );
}
