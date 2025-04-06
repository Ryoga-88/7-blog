import Header from "@/components/header";
import { getSortedContents } from "../lib/contents";
import { getProjectCards } from "../lib/cardcontents";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Card from "@/components/card";
import Image from "next/image";

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

              <div
                className="font-medium prose prose-img:mx-auto prose-img:max-w-full prose-img:rounded-md prose-img:shadow-sm prose-img:mb-8 prose-strong:text-black max-w-none"
                dangerouslySetInnerHTML={{ __html: html }}
              />

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

              {title === "Members" && (
                <div className="w-full">
                  <div className="flex md:flex-row flex-col justify-center pb-8 items-center md:justify-start md:items-start md:pr-4 ">
                    <div className="md:w-full max-w-[114px]">
                      <Image
                        src="/img/KatsuhiroHonda.jpg"
                        alt="human"
                        width={114}
                        height={152}
                        className="object-cover aspect-4/3  min-w-[114px] min-h-[152px] rounded-sm"
                      />
                    </div>
                    <div>
                      <div className="text-base text-left dark:text-white mt-6 md:mt-0 md:ml-8">
                        <div className="text-xl font-bold mb-2">
                          本多 克宏 (Katsuhiro Honda)
                        </div>
                        <div>
                          大学院情報学研究科 基幹情報学専攻 教授<br></br>
                          専門はソフトコンピューティングとデータマイニングで、特にファジィクラスタリングを中心とした研究に取り組んでいる。多変量データ解析や推薦システムの開発を通じて、ユーザの意思決定を支援するシステム構築に注力。研究室では学生とともに、人に優しい情報化社会の実現を目指している。
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-row flex-col justify-center py-8 items-center md:justify-start md:items-start md:pr-4 border-t-1 border-gray-400">
                    <div className="md:w-full max-w-[114px]">
                      <Image
                        src="/img/SeikiUbukata.jpg"
                        alt="human"
                        width={114}
                        height={152}
                        className="object-cover aspect-4/3  min-w-[114px] min-h-[152px] rounded-sm"
                      />
                    </div>
                    <div>
                      <div className="text-base text-left dark:text-white mt-6 md:mt-0 md:ml-8">
                        <div className="text-xl font-bold mb-2">
                          生方 誠希 (Seiki Ubukata)
                        </div>
                        <div>
                          大学院情報学研究科 基幹情報学専攻 准教授<br></br>
                          ラフクラスタリング技術を専門とし、新たなクラスタリングアルゴリズムの開発と協調フィルタリングへの応用研究を進めている。データ解析の理論と実践の両面から研究に取り組み、国内外での学術発表や受賞歴も多数。学生と共に最先端の知能情報技術の探求に日々励んでいる。
                        </div>
                      </div>
                    </div>
                  </div>
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
