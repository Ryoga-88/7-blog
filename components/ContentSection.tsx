// components/ContentSection.tsx
import React from "react";
import Card from "@/components/card";
import Image from "next/image";

interface Content {
  title?: string;
  subtitle?: string;
  html: string;
  slug: string;
}

interface ProjectCard {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

interface ContentSectionProps {
  contents: Content[];
  projectCards: ProjectCard[];
  locale: string;
}

export default function ContentSection({
  contents,
  projectCards,
  locale,
}: ContentSectionProps) {
  return (
    <>
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

            {title === "Activities" && (
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
                <a href="https://www.omu.ac.jp/i/ci/profs/honda/index.html">
                  <div className="flex md:flex-row flex-col justify-center py-8 items-center md:justify-start md:items-start md:px-4 hover:bg-gray-50">
                    <div className="md:w-full max-w-[114px]">
                      <Image
                        src="/img/KatsuhiroHonda.jpg"
                        alt="human"
                        width={114}
                        height={152}
                        className="object-cover aspect-4/3 min-w-[114px] min-h-[152px] rounded-sm"
                      />
                    </div>
                    <div>
                      <div className="text-base text-left mt-6 md:mt-0 md:ml-8">
                        <div className="text-xl font-bold mb-2">
                          {locale === "ja"
                            ? "本多 克宏 (Katsuhiro Honda)"
                            : "Katsuhiro Honda (本多 克宏)"}
                        </div>
                        <div>
                          {locale === "ja" ? (
                            <>
                              大学院情報学研究科 基幹情報学専攻 教授
                              <br />
                              専門はソフトコンピューティングとデータマイニングで、特にファジィクラスタリングを中心とした研究に取り組んでいる。多変量データ解析や推薦システムの開発を通じて、ユーザの意思決定を支援するシステム構築に注力。研究室では学生とともに、人に優しい情報化社会の実現を目指している。
                            </>
                          ) : (
                            <>
                              Professor, Graduate School of Informatics,
                              Department of Fundamental Informatics
                              <br />
                              Specializes in soft computing and data mining,
                              with a focus on fuzzy clustering. He is dedicated
                              to building systems that support user
                              decision-making through multivariate data analysis
                              and recommendation system development. In his lab,
                              he works with students toward realizing a
                              human-friendly information society.
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://www.omu.ac.jp/i/ci/profs/ubukata/index.html">
                  <div className="flex md:flex-row flex-col justify-center py-8 items-center md:justify-start md:items-start md:px-4 border-t-1 border-gray-400 hover:bg-gray-50">
                    <div className="md:w-full max-w-[114px]">
                      <Image
                        src="/img/SeikiUbukata.jpg"
                        alt="human"
                        width={114}
                        height={152}
                        className="object-cover aspect-4/3 min-w-[114px] min-h-[152px] rounded-sm"
                      />
                    </div>
                    <div>
                      <div className="text-base text-left mt-6 md:mt-0 md:ml-8">
                        <div className="text-xl font-bold mb-2">
                          {locale === "ja"
                            ? "生方 誠希 (Seiki Ubukata)"
                            : "Seiki Ubukata (生方 誠希)"}
                        </div>
                        <div>
                          {locale === "ja" ? (
                            <>
                              大学院情報学研究科 基幹情報学専攻 准教授
                              <br />
                              AmazonやYouTube、Netflixで見られるようなコンテンツ推薦システムの実現方法の一つに、クラスタリングによって類似した嗜好を持つユーザをグループ化し、所属グループ内で嗜好度の高いコンテンツを推薦する方法がある。研究室では、ラフ集合理論に基づいて拡張を行った様々なラフクラスタリング技法を用いて推薦性能の向上を目指す。
                            </>
                          ) : (
                            <>
                              Associate Professor, Graduate School of
                              Informatics, Department of Fundamental Informatics
                              <br />
                              One method for implementing content recommendation
                              systems like those used by Amazon, YouTube, and
                              Netflix is to cluster users with similar
                              preferences and recommend high-preference content
                              within those groups. His lab aims to improve
                              recommendation performance using various rough
                              clustering techniques extended from rough set
                              theory.
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
