import { getSortedContents } from "../lib/contents";

export default async function Home() {
  const contents = await getSortedContents();
  return (
    <div className="flex flex-col items-center min-h-screen gap-6 font-[family-name:var(--font-geist-sans)]">
      {contents.map(({ title, html, slug }, index) => (
        <section
          key={`section-${index}`}
          id={slug}
          className={`w-full mx-auto p-8 sm:p-10 ${
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
  );
}
