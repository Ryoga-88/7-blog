import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import markdownitExternalLink from "markdown-it-external-link";
import { ContentObject } from "./type";

const contentsDirectory = path.join(process.cwd(), "contents");

const md = new MarkdownIt({
  html: true,
});
md.use(markdownitExternalLink, {
  externalRel: "noopener noreferrer",
});

const getSlugFromFileName = (fileName: string): string => {
  const match = fileName.match(/^(?:\d+-)?(.+)\.md$/);
  return match ? match[1] : fileName.replace(/\.md$/, "");
};

const getSlugFromPath = (filePath: string): string => {
  const relativePath = path.relative(contentsDirectory, filePath);
  return getSlugFromFileName(relativePath);
};

const getAllFiles = (dir: string): string[] => {
  const files: string[] = [];
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else if (item.endsWith(".md")) {
      files.push(fullPath);
    }
  });

  return files;
};

const getContentBySlug = async (
  slug: string
): Promise<ContentObject | null> => {
  const findFile = (searchSlug: string): string | null => {
    const files = getAllFiles(contentsDirectory);
    return (
      files.find((file) => {
        const fileSlug = getSlugFromPath(file).replace(/\.md$/, "");
        return fileSlug === searchSlug;
      }) || null
    );
  };

  const filePath = findFile(slug);
  if (!filePath) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);

  return {
    slug: slug,
    title: matterResult.data.title,
    image: matterResult.data.image,
    html: md.render(matterResult.content).toString(),
  };
};

const getAllContentSlugs = async (): Promise<string[]> => {
  const files = getAllFiles(contentsDirectory).filter((f) =>
    /(?:^\d+-.*\.md$|[^/]+\.md$)/.test(path.basename(f))
  );

  return files.map((file) => getSlugFromPath(file).replace(/\.md$/, ""));
};

const getRootContents = async (): Promise<ContentObject[]> => {
  const filePaths = fs
    .readdirSync(contentsDirectory)
    .filter((f) => /^(?:\d+-)?.+\.md$/.test(f))
    .map((f) => path.join(contentsDirectory, f))
    .sort((a, b) => {
      if (a > b) return 1;
      return -1;
    });

  const contents = filePaths.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug: getSlugFromPath(filePath).replace(/\.md$/, ""),
      title: matterResult.data.title,
      image: matterResult.data.image,
      html: md.render(matterResult.content).toString(),
    };
  });

  return contents;
};
// 画像タグの後に余白を追加する関数を定義
function addSpacingAfterImages(html: string): string {
  return html.replace(/<img(.+?)>/g, '<img$1><div class="h-4"></div>');
}

const getSortedContents = async (): Promise<ContentObject[]> => {
  const fileNames = fs
    .readdirSync(path.join(contentsDirectory))
    .filter((f) => /^(\d+)-(.*)\.md$/.test(f));

  const contents = fileNames
    .map((fileName) => {
      const fullPath = path.join(contentsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      // HTMLをレンダリングした後、画像の後に余白を追加
      const renderedHtml = md.render(matterResult.content).toString();
      const htmlWithSpacing = addSpacingAfterImages(renderedHtml);

      return {
        fileName: fileName,
        title: matterResult.data.title,
        slug: getSlugFromFileName(fileName),
        image: matterResult.data.image,
        html: htmlWithSpacing, // 修正したHTMLを使用
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

export {
  getContentBySlug,
  getAllContentSlugs,
  getRootContents,
  getSortedContents,
};
