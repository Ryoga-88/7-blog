import Header from "@/components/header";
import { getSortedContents } from "../lib/contents";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default async function Home() {
  const contents = await getSortedContents();
  return (
    <>
      <Header navItems={contents} />
      <Hero />
      <div className="flex flex-col items-center min-h-screen gap-6 font-[family-name:var(--font-geist-sans)]">
        {contents.map(({ title, html, slug }, index) => (
          // Home.tsx 内の section 要素のクラスを更新
          <section
            key={`section-${index}`}
            id={slug}
            className={`w-full mx-auto p-8 sm:p-10 scroll-margin-top-20 ${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            }`}
          >
            <div className="items-center max-w-3xl mx-auto">
              {title && <h1 className="text-3xl font-bold mb-8">{title}</h1>}
              <div
                className="prose prose-img:mx-auto prose-img:max-w-full prose-img:rounded-md prose-img:shadow-sm prose-img:mb-8 max-w-none"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </>
  );
}
