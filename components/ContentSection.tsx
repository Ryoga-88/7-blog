// components/ContentSection.tsx
import React from "react";
import Card from "@/components/card";
import Image from "next/image";
import { getProjectCards } from "@/lib/contents";
import { getProfessors } from "@/lib/contents";
import { ContentObject } from "@/lib/type";

interface ContentSectionProps {
  contents: ContentObject[];
  locale: string;
}

export default function ContentSection({
  contents,
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
                {getProjectCards(contents, locale).map((activity, index) => (
                  <Card
                    key={`project-card-${index}`}
                    title={activity.title}
                    description={activity.description}
                    imageSrc={activity.imageSrc}
                    link={activity.link}
                  />
                ))}
              </div>
            )}

            {title === "Members" && (
              <div className="w-full">
                {getProfessors(contents, locale).map((professor, index) => (
                  <a key={`professor-${index}`} href={professor.url}>
                    <div
                      className={`flex md:flex-row flex-col justify-center py-8 items-center md:justify-start md:items-start md:px-4 hover:bg-gray-50 ${
                        index > 0 ? "border-t-1 border-gray-400" : ""
                      }`}
                    >
                      <div className="md:w-full max-w-[114px]">
                        <Image
                          src={professor.image}
                          alt={professor.name}
                          width={114}
                          height={152}
                          className="object-cover aspect-4/3 min-w-[114px] min-h-[152px] rounded-sm"
                        />
                      </div>
                      <div>
                        <div className="text-base text-left mt-6 md:mt-0 md:ml-8">
                          <div className="text-xl font-bold mb-2">
                            {professor.name}
                          </div>
                          <div>
                            {professor.position}
                            <br />
                            {professor.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
