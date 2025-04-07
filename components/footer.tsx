"use client";

import { MdOutlineCopyright } from "react-icons/md";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full dark:bg-black py-6 mt-auto">
      <div className="flex items-center justify-center">
        <div
          className="flex items-center text-neutral-800 dark:text-white text-sm hover:text-gray-500 hover:border-b-1 border-black transition-colors "
          onClick={scrollToTop}
        >
          <MdOutlineCopyright />
          2025 &nbsp;|&nbsp; HI Lab.&nbsp;All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
