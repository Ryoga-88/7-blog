import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-20 h-16 relative">
      <Image
        src="/img/image.png"
        alt="Hero image"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
