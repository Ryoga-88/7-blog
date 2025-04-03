"use client";

import React, { useState } from "react";

interface NavItem {
  title: string;
  slug: string;
}

interface NavProps {
  items?: NavItem[];
}

export default function Nav({ items = [] }: NavProps) {
  // メニュー開閉状態の管理
  const [isOpen, setIsOpen] = useState(false);

  // メニュー開閉の処理
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  // 実際に表示するナビアイテム（指定がなければデフォルト項目を使用）
  const navItems =
    items.length > 0
      ? items
      : [
          { title: "ホーム", slug: "home" },
          { title: "Vision", slug: "vision" },
          { title: "Value", slug: "value" },
        ];

  return (
    <>
      {/* PC用ナビゲーション */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between mx-16 md:mx-32">
          <div className="flex gap-8 md:gap-16 items-center">
            {navItems.map((item, index) => (
              <a
                key={`nav-${index}`}
                href={`#${item.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* スマホ用ハンバーガーメニューボタン */}
      <div className="md:hidden flex justify-end p-4 z-50 relative">
        <button onClick={handleMenuToggle} className="p-2">
          {isOpen ? (
            // ✕アイコン (メニュー開いているとき)
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // ハンバーガーアイコン (メニュー閉じているとき)
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* スマホ用スライドインメニュー */}
      <div
        className={`fixed top-0 left-0 h-full bg-white/90 shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-3/4 backdrop-blur-md md:hidden z-40`}
      >
        <div className="flex flex-col space-y-6 pt-20 px-6">
          {navItems.map((item, index) => (
            <a
              key={`mobile-nav-${index}`}
              href={`#${item.slug}`}
              className="text-lg hover:text-blue-600 transition-colors"
              onClick={() => {
                // リンククリック時にメニューを閉じる
                setIsOpen(false);
              }}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>

      {/* オーバーレイ背景（メニュー開いているときに表示） */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
