import Header from "@/components/header";
import { getSortedContents } from "../lib/contents";
import { getProjectCards } from "../lib/cardcontents";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Card from "@/components/card";

export default async function Home() {
  const contents = await getSortedContents();
  const projectCards = getProjectCards;

  return (
    <>
      <Header navItems={contents} />
      <Hero />
      <div className="flex flex-col items-center min-h-screen gap-6 font-[family-name:var(--font-geist-sans)]">
        {contents.map(({ title, subtitle, html, slug }, index) => (
          <section
            key={`section-${index}`}
            id={slug}
            className={`w-full mx-auto p-4 sm:p-6 scroll-margin-top-20 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <div className="items-center max-w-5xl mx-auto">
              {title && <h1 className="text-3xl font-bold">{title}</h1>}
              {subtitle && <h1 className="text-md mb-8">{subtitle}</h1>}

              {/* mdファイルの内容を表示 */}
              <div
                className="font-medium prose prose-img:mx-auto prose-img:max-w-full prose-img:rounded-md prose-img:shadow-sm prose-img:mb-8 prose-strong:text-black max-w-none"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              {/* titleがProjectの場合のみ、カードを追加表示 */}
              {title === "Project" && (
                <div className="grid grid-cols-1 gap-2">
                  {projectCards.map((card, cardIndex) => (
                    <Card
                      key={`project-card-${cardIndex}`}
                      imageSrc={card.imageSrc}
                      title={card.title}
                      description={card.description}
                      link={card.link}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </>
  );
}
