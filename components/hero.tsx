import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="flex flex-row items-center w-full max-h-180">
        {/* 左側：テキスト部分 */}
        <div className="w-1/2 p-4 text-center">
          <h2 className="text-2xl font-bold mb-4">これは左部分です</h2>
          <p className="text-lg">ここにテキストコンテンツを追加できます</p>
        </div>

        {/* 右側：画像部分 */}
        <div className="w-1/2 max-h-[700px] overflow-hidden">
          <Image
            src="/img/image.png"
            alt="Hero image"
            layout="responsive"
            width={961}
            height={894}
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}
