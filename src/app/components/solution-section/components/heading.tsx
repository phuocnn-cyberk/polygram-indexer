import { FC } from "react";
import Image from "next/image";

const LOGOS = [
  { src: "/assets/icons/sol.svg", alt: "Solana" },
  { src: "/assets/icons/aptos.svg", alt: "Aptos" },
  { src: "/assets/icons/ethereum.svg", alt: "Ethereum" },
  { src: "/assets/icons/binance-logo-white.svg", alt: "Binance" },
  { src: "/assets/icons/base.svg", alt: "Base" },
];

export const Heading: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center text-xl px-11 md:px-0 md:text-[40px] uppercase font-medium leading-tight text-white">
        A Blockchain Indexer That Just Works
      </h2>
      <div className="mt-4 md:mt-6 flex items-center gap-x-2">
        {LOGOS.map(({ src, alt }) => (
          <div
            key={alt}
            className="flex h-10 w-10 md:h-[50px] md:w-[50px] items-center justify-center rounded-full bg-[#1C1C1C]"
          >
            <Image
              src={src}
              alt={alt}
              width={32}
              height={32}
              className="md:w-10 md:h-10 w-6 h-6"
            />
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-[525px] text-center text-xs md:text-lg text-[#5C5C5C]">
        Polygram eliminates the headaches of self-hosted infrastructure. Our
        hosted blockchain indexer API saves you time, money, and developer
        resources by delivering data that is clean, structured, and ready to
        use.
      </p>
    </div>
  );
};
