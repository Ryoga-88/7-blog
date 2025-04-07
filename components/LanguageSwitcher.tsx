// components/LanguageSwitcher.tsx
"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const router = useRouter();

  const switchLanguage = useCallback(
    (newLocale: string) => {
      // 現在のパスを取得して、クエリパラメータを変更
      router.push(`/?locale=${newLocale}`);
    },
    [router]
  );

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLanguage("ja")}
        className={`px-2 py-1 text-sm rounded ${
          currentLocale === "ja"
            ? "bg-gray-400 text-white font-medium"
            : "text-gray-600 hover:text-gray-400"
        }`}
      >
        日本語
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => switchLanguage("en")}
        className={`px-2 py-1 text-sm rounded ${
          currentLocale === "en"
            ? "bg-blue-500 text-white font-medium"
            : "text-gray-600 hover:text-blue-500"
        }`}
      >
        English
      </button>
    </div>
  );
}
