import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center w-full bg-gray-50">
        {/* 左側：テキスト部分 */}
        <div className="w-full sm:w-1/2 p-6 sm:p-8 text-center sm:mb-0 min-h-[250px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span>人と情報のソフトな</span>
            <br className="sm:hidden" />
            <span>インターフェース</span>
          </h2>
          <p className="text-lg md:text-xl">
            人間のあいまいを科学し、
            <br className="sm:hidden" />
            確かな未来を創る
          </p>
        </div>

        {/* 右側：画像部分 */}
        <div className="w-full sm:w-1/2 h-64 sm:h-96 md:h-[500px] lg:h-[600px] relative">
          <Image
            src="/img/eyecatch.jpg"
            alt="Hero image"
            fill
            quality={90}
            priority
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}
