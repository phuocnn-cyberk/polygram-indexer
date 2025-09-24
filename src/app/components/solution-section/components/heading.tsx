import { FC } from "react";
import Image from "next/image";

const LOGOS = [
  { src: "/assets/icons/eth.svg", alt: "Ethereum" },
  { src: "/assets/icons/solana.svg", alt: "Solana" },
  { src: "/assets/icons/binance.svg", alt: "Binance" },
];

export const Heading: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center text-[40px] uppercase font-medium leading-tight text-white">
        A Blockchain Indexer That Just Works
      </h2>
      <div className="mt-6 flex items-center gap-x-2">
        {LOGOS.map(({ src, alt }) => (
          <div
            key={alt}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1C1C1C]"
          >
            <Image src={src} alt={alt} width={16} height={16} />
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-[525px] text-center text-lg text-[#5C5C5C]">
        Polygram eliminates the headaches of self-hosted infrastructure. Our
        hosted blockchain indexer API saves you time, money, and developer
        resources by delivering data that is clean, structured, and ready to
        use.
      </p>
    </div>
  );
};
