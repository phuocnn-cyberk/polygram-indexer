import { FadeIn } from "@/components/common/fade-in";
import { FadeInBlock } from "@/components/common/fade-in-block";
import { LOGOS } from "@/components/common/logo-cloud/constant";
import Image from "next/image";
import { FC } from "react";

export const TrustedBySection: FC = () => {
  return (
    <section className="mt-20 flex flex-col items-center">
      <FadeIn className="text-center text-xl md:text-4xl font-medium uppercase text-white md:max-w-3xl">
        Trusted Blockchain Indexer Service for Industry Leaders
      </FadeIn>
      <FadeInBlock className="mt-6 text-center text-xs md:text-xl px-2 md:px-0 text-[#6B6B6B] md:max-w-2xl">
        Leading teams, startups, and enterprises rely on Polygram to power their
        applications. By offloading blockchain indexing to Polygram, they cut
        infrastructure costs, accelerate time-to-market, and focus on what
        matters most — building products users love.
      </FadeInBlock>
      <div className="mt-8 md:mt-12 flex flex-wrap justify-center items-center gap-y-2 gap-x-8 md:gap-8 max-w-5xl">
        {LOGOS.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="object-contain max-md:h-10 max-md:w-auto"
          />
        ))}
        <span className="text-[#F8F8F8] text-xs md:text-lg">and more+</span>
      </div>
    </section>
  );
};
