import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import markdownitExternalLink from "markdown-it-external-link";
import { ContentObject, Professor, ProjectCard } from "./type";

const contentsDirectory = path.join(process.cwd(), "contents");

const md = new MarkdownIt({
  html: true,
  typographer: true,
});
md.use(markdownitExternalLink, {
  externalRel: "noopener noreferrer",
});

const getSlugFromFileName = (fileName: string): string => {
  const match = fileName.match(/^(?:\d+-)?(.+)\.md$/);
  return match ? match[1] : fileName.replace(/\.md$/, "");
};
// 画像タグと段落タグの後に余白を追加する関数を定義
function addSpacingToHtml(html: string): string {
  // 画像タグの後に余白を追加
  let processedHtml = html.replace(
    /<img(.+?)>/g,
    '<img$1><div class="h-4"></div>'
  );

  // グリッド要素を特定するための正規表現パターン
  const gridPattern = /<div class="grid[^>]*>[\s\S]*?<\/div>/g;

  // グリッド要素を一時的なプレースホルダーに置き換え
  const gridElements: string[] = [];
  processedHtml = processedHtml.replace(gridPattern, (match) => {
    const placeholder = `__GRID_PLACEHOLDER_${gridElements.length}__`;
    gridElements.push(match);
    return placeholder;
  });

  // グリッド外の段落タグの後に余白を追加
  processedHtml = processedHtml.replace(
    /<\/p>/g,
    '</p><div class="h-4"></div>'
  );

  // プレースホルダーをグリッド要素に戻す
  gridElements.forEach((grid, index) => {
    processedHtml = processedHtml.replace(
      `__GRID_PLACEHOLDER_${index}__`,
      grid
    );
  });

  return processedHtml;
}

export const getSortedContents = async (): Promise<ContentObject[]> => {
  const fileNames = fs
    .readdirSync(path.join(contentsDirectory))
    .filter((f) => /^(\d+)-(.*)-(ja|en)\.md$/.test(f));

  const contents = fileNames
    .map((fileName) => {
      const fullPath = path.join(contentsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      const renderedHtml = md.render(matterResult.content).toString();
      const htmlWithSpacing = addSpacingToHtml(renderedHtml);

      return {
        fileName: fileName,
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        language: matterResult.data.language,
        slug: getSlugFromFileName(fileName),
        image: matterResult.data.image,
        html: htmlWithSpacing,
      };
    })
    .sort((a, b) => {
      if (a.fileName > b.fileName) {
        return 1;
      } else {
        return -1;
      }
    });

  return contents;
};

export const getProjectCards = (
  contents: ContentObject[],
  locale: string
): ProjectCard[] => {
  const projectContent = contents.find(
    (content) => content.title === "Activities" && content.language === locale
  );

  if (!projectContent) return [];

  const fileContents = fs.readFileSync(
    path.join(process.cwd(), "contents", `2-activities-${locale}.md`),
    "utf8"
  );
  const matterResult = matter(fileContents);

  if (matterResult.data.card) {
    return matterResult.data.card.map(
      (card: {
        title: string;
        description: string;
        imageSrc: string;
        link?: string;
      }) => ({
        title: card.title,
        description: card.description,
        imageSrc: card.imageSrc,
        link: card.link || "",
      })
    );
  }

  return [];
};

// 教授情報を取得する関数
export const getProfessors = (
  contents: ContentObject[],
  locale: string
): Professor[] => {
  const membersContent = contents.find(
    (content) => content.title === "Members" && content.language === locale
  );

  if (!membersContent) return [];

  const fileContents = fs.readFileSync(
    path.join(process.cwd(), "contents", `3-members-${locale}.md`),
    "utf8"
  );
  const matterResult = matter(fileContents);

  if (matterResult.data.professors) {
    return matterResult.data.professors.map(
      (prof: {
        name: string;
        position: string;
        description: string;
        image: string;
        url: string;
      }) => ({
        name: prof.name,
        position: prof.position,
        description: prof.description,
        image: prof.image,
        url: prof.url,
      })
    );
  }

  return [];
};
