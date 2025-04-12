import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { metadata as siteMetadata } from "./metadata";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Next.jsのMetadata APIを使用
export const metadata: Metadata = siteMetadata;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="ja">
      <head>
        {/* Google Search Console 所有権確認用タグ */}
        <meta
          name="google-site-verification"
          content="S2Fh7s0Q-33hlV1A8lsORIhjitoh-spczARETbbT-cE"
        />

        {/* クローラー制御 */}
        <meta name="robots" content="index, follow" />

        {/* 外部リソース - 代替方法でCSSを読み込み */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />

        {/* 構造化データ (JSON-LD) - 拡張版 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteMetadata.title,
              description: siteMetadata.description,
              url: "https://his-lab.vercel.app",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "人間情報システム研究室",
              alternateName: "Human Information Systems Laboratory",
              url: "https://his-lab.vercel.app",
              logo: "https://his-lab.vercel.app/img/logo.png",
              description: siteMetadata.description,
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "academic department",
                areaServed: "JP",
                availableLanguage: ["Japanese", "English"],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "トップページ",
                  item: "https://his-lab.vercel.app",
                },
              ],
            }),
          }}
        />

        {/* PWA対応のためのリンク */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* パフォーマンス最適化のためのプリロードCSS遅延読み込みスクリプト */}
        <Script id="css-media-script" strategy="afterInteractive">
          {`
            (function() {
              var linkEls = document.querySelectorAll('link[href*="devicon"]');
              if (linkEls.length > 0) {
                setTimeout(function() {
                  linkEls.forEach(function(link) {
                    link.media = 'all';
                  });
                }, 0);
              }
            })();
          `}
        </Script>
        <main>{children}</main>
      </body>
    </html>
  );
}
