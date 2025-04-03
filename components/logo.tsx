"use client";

import Image from "next/image";

export default function Logo() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative w-[200px] h-[40px] sm:w-[300px] sm:h-[60px] md:w-[350px] md:h-[70px] cursor-pointer"
      onClick={scrollToTop}
    >
      <Image
        src="/img/lab.png"
        alt="Hero image"
        fill
        style={{
          objectFit: "contain",
        }}
        sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, 350px"
        quality={100}
        priority
      />
    </div>
  );
}
