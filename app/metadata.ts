import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "人間情報システム研究室/Human Information Systems Laboratory",
  description:
    "大阪公立大学大学院 情報学研究科 人間情報システム研究室(Human Information Systems Laboratory)では，ファジィ理論と多変量解析法との融合手法による，大規模データベースからの知識発見，人間のあいまいな価値判断を含む感性情報の処理を実現するデータ解析法，認知モデルや感性モデルに基づいたエージェントシミュレーションや学習アルゴリズム，情報メディアの開発などの研究を行っています．",
  keywords: [
    "人間情報システム研究室",
    "人間情報システム",
    "大阪公立大学大学院",
    "情報学研究科",
    "協調フィルタリング",
    "ファジィ理論",
    "ラフ集合理論",
    "クラスタリング",
    "データマイニング",
    "推薦システム開発",
    "知能情報学",
    "花房亮雅",
    "はなふさりょうが",
    "Ryoga Hanafusa",
    "Hanafusa Ryoga",
    "花房",
    "亮雅",
    "Ryoga",
  ],
  authors: [{ name: "花房亮雅 (Ryoga Hanafusa)" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Human Information Systems Laboratory/人間情報システム研究室",
    description:
      "大阪公立大学大学院 情報学研究科 人間情報システム研究室(Human Information Systems Laboratory)では，ファジィ理論と多変量解析法との融合手法による，大規模データベースからの知識発見，人間のあいまいな価値判断を含む感性情報の処理を実現するデータ解析法，認知モデルや感性モデルに基づいたエージェントシミュレーションや学習アルゴリズム，情報メディアの開発などの研究を行っています．",
    url: "https://his-lab.vercel.app/",
    siteName: "Human Information Systems Laboratory/人間情報システム研究室",
    images: [
      {
        url: "https://his-lab.vercel.app/img/eyecatch.jpg",
        width: 1200,
        height: 630,
        alt: "人間情報システム研究室",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Information Systems Laboratory/人間情報システム研究室",
    description:
      "大阪公立大学大学院 情報学研究科 人間情報システム研究室(Human Information Systems Laboratory)では，ファジィ理論と多変量解析法との融合手法による，大規模データベースからの知識発見，人間のあいまいな価値判断を含む感性情報の処理を実現するデータ解析法，認知モデルや感性モデルに基づいたエージェントシミュレーションや学習アルゴリズム，情報メディアの開発などの研究を行っています．",
    creator: "@ryoga_8723",
    images: ["https://his-lab.vercel.app/img/eyecatch.jpg"],
  },
  metadataBase: new URL("https://his-lab.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "ja-JP": "/",
      "en-US": "/en",
    },
  },
};

// viewportの設定
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#3B82F6",
  width: "device-width",
  initialScale: 1,
};
