"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import { FC, useState } from "react";
import { TestimonialCard } from "./components";
import { FadeIn } from "@/components/common/fade-in";
import { FadeInBlock } from "@/components/common/fade-in-block";
import Link from "next/link";

export const BuildFasterSection: FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const [currentIndex] = useState(0);

  // const handleNext = useCallback(() => {
  //   setCurrentIndex((prev) => (prev + 1) % 4);
  // }, []);

  // const handlePrevious = useCallback(() => {
  //   setCurrentIndex((prev) => (prev - 1 + 4) % 4);
  // }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     handleNext();
  //   }, 5000);

  //   return () => clearInterval(timer);
  // }, [currentIndex, handleNext]);

  return (
    <section className="relative mt-20 h-[800px] w-full">
      <Image
        src="/images/build-faster-background.png"
        alt="Get Started Background"
        fill
        className="object-cover hidden lg:block"
        priority
      />
      <div className="absolute inset-0 gap-y-10 md:gap-y-0 flex flex-col xl:flex-row items-center justify-center gap-x-14">
        <div className="xl:max-w-md px-6 xl:px-0">
          <FadeIn className="text-xl md:text-[28px] lg:text-[40px] font-medium leading-tight uppercase text-white">
            Build Faster with the Blockchain Indexer API Built for Developers
          </FadeIn>
          <FadeInBlock className="mt-6 text-xs md:text-base lg:text-xl text-[#6B6B6B] font-medium">
            Forget managing nodes, custom pipelines, and constant infrastructure
            headaches. With Polygram’s blockchain indexer service, you get
            low-latency, high-performance on-chain data in a single, easy-to-use
            API.
          </FadeInBlock>
          <Link
            href="https://polygram-2.gitbook.io/polygram/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-8 h-12 gap-4 bg-[#2172E6] px-4 uppercase text-white hover:bg-[#2172E6] hover:shadow-[0_0_25px_0_rgba(33,114,230,0.5)] cursor-pointer">
              <span>Docs</span>
              <div className="flex h-8 w-8 items-center justify-center rounded bg-white">
                <Image
                  src="/icons//arrow-right-sharp.svg"
                  alt="Arrow Right"
                  width={18}
                  height={18}
                />
              </div>
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative h-[495px] w-[360px] xl:h-[650px] xl:w-[700px]">
            {Array.from({ length: 4 }).map((_, index) => {
              const stackIndex = 3 - ((currentIndex - index + 4) % 4);

              const top = isDesktop ? stackIndex * 40 : stackIndex * 20;
              const left = isDesktop
                ? (3 - stackIndex) * 40
                : `calc(50% - 150px + ${(3 - stackIndex) * 20}px)`;

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-300 ease-in-out"
                  style={{
                    top: `${top}px`,
                    left: isDesktop ? `${left}px` : left,
                    zIndex: stackIndex,
                  }}
                >
                  <TestimonialCard />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
