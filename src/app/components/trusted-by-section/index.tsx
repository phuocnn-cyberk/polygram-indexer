import Image from "next/image";
import { FC } from "react";

const LOGOS = [
  {
    src: "/assets/images/partner-logos/kyros-ventures-logo.png",
    alt: "Partner Logo 1",
    width: 121,
    height: 68,
  },
  {
    src: "/assets/images/partner-logos/caladanloho-logo.png",
    alt: "Partner Logo 2",
    width: 128,
    height: 72,
  },
  {
    src: "/assets/images/partner-logos/presto-logo.png",
    alt: "Partner Logo 3",
    width: 142,
    height: 80,
  },
  {
    src: "/assets/images/partner-logos/tribe-logo.png",
    alt: "Partner Logo 4",
    width: 142,
    height: 80,
  },
  {
    src: "/assets/images/partner-logos/trive-logo.png",
    alt: "Partner Logo 5",
    width: 124,
    height: 48,
  },
  {
    src: "/assets/images/partner-logos/x21-logo.png",
    alt: "Partner Logo 6",
    width: 128,
    height: 72,
  },
  {
    src: "/assets/images/partner-logos/aquanow-logo.png",
    alt: "Partner Logo 7",
    width: 178,
    height: 60,
  },
  {
    src: "/assets/images/partner-logos/blockbase-logo.png",
    alt: "Partner Logo 8",
    width: 239,
    height: 64,
  },
  {
    src: "/assets/images/partner-logos/credit-scend-logo.png",
    alt: "Partner Logo 9",
    width: 142,
    height: 80,
  },
];

export const TrustedBySection: FC = () => {
  return (
    <section className="mt-20 flex flex-col items-center">
      <h2 className="text-center text-4xl font-medium uppercase text-white max-w-3xl">
        Trusted Blockchain Indexer Service for Industry Leaders
      </h2>
      <p className="mt-6 text-center text-xl text-[#6B6B6B] max-w-2xl">
        Leading teams, startups, and enterprises rely on Polygram to power their
        applications. By offloading blockchain indexing to Polygram, they cut
        infrastructure costs, accelerate time-to-market, and focus on what
        matters most — building products users love.
      </p>
      <div className="mt-12 flex flex-wrap justify-center items-center gap-8 max-w-5xl">
        {LOGOS.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="object-contain"
          />
        ))}
        <span className="text-[#F8F8F8] text-lg">and more+</span>
      </div>
    </section>
  );
};
