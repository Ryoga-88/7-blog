// components/header.tsx
import React from "react";
import Logo from "./logo";
import Nav from "./nav";

interface NavItem {
  title: string;
  slug: string;
}

interface HeaderProps {
  navItems?: NavItem[];
}

export default function Header({ navItems = [] }: HeaderProps) {
  return (
    <>
      <div className="w-full sticky top-0 z-50 bg-white py-2">
        <div className="flex items-center justify-between mx-4 md:mx-24 flex-wrap">
          <Logo />
          <Nav items={navItems} />
        </div>
      </div>
    </>
  );
}
