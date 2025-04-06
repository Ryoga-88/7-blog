"use client";
import React, { useState, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  link?: string;
}

interface CardWrapperProps {
  children: ReactNode;
  link?: string;
}

export default function Card({
  imageSrc,
  title,
  description,
  link,
}: CardProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // 説明文の短縮版と完全版
  const shortDescription =
    description.length > 50 ? `${description.slice(0, 50)}...` : description;

  // モバイルでの表示を制御
  const toggleExpand = (e: React.MouseEvent<HTMLButtonElement>) => {
    // リンククリックとの競合を防ぐために、イベントの伝播を停止
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  // カードをラップするコンポーネント
  const CardWrapper = ({ children, link }: CardWrapperProps) => {
    return link ? (
      <Link href={link}>
        <div className="bg-white rounded-sm flex flex-col md:flex-row w-full max-w-5xl mx-auto md:h-52 cursor-pointer transition-transform hover:bg-gray-100">
          {children}
        </div>
      </Link>
    ) : (
      <div className="bg-white rounded-sm flex flex-col md:flex-row w-full max-w-5xl mx-auto md:h-52">
        {children}
      </div>
    );
  };

  return (
    <CardWrapper link={link}>
      {/* 画像 - モバイルでは上部、PCでは左側 */}
      <div className="w-full md:w-1/3 h-48 md:h-full relative">
        <Image
          className="object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      {/* コンテンツ - モバイルでは下部、PCでは右側 */}
      <div className="p-4 flex flex-col justify-between w-full md:w-2/3">
        {/* タイトル */}
        <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>
        {/* 説明文 - PCでは全文表示、モバイルでは条件付き */}
        <div className="pr-1">
          {/* PCでの表示 (md以上) */}
          <p className="hidden md:block text-gray-700">{description}</p>
          {/* モバイルでの表示 (md未満) */}
          <div className="block md:hidden">
            <p className="text-gray-700 dark:text-white">
              {isExpanded ? description : shortDescription}
            </p>
            {/* 「もっと見る」ボタン - 説明文が長い場合のみ表示 */}
            {description.length > 50 && (
              <button
                className="text-blue-500 text-sm mt-1 font-medium"
                onClick={toggleExpand}
              >
                {isExpanded ? "折りたたむ" : "もっと見る"}
              </button>
            )}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
