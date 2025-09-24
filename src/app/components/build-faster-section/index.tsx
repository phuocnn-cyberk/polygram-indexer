import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";
import { TestimonialCard } from "./components";

const TESTIMONIALS_COUNT = 5;

export const BuildFasterSection: FC = () => {
  return (
    <section className="relative mt-20 h-[800px] w-full">
      <Image
        src="/assets/images/get-started-background.png"
        alt="Get Started Background"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center gap-x-14">
        <div className="max-w-md">
          <h2 className="text-[40px] font-medium leading-tight uppercase text-white">
            Build Faster with the Blockchain Indexer API Built for Developers
          </h2>
          <p className="mt-6 text-xl text-[#6B6B6B] font-medium">
            Forget managing nodes, custom pipelines, and constant infrastructure
            headaches. With Polygram’s blockchain indexer service, you get
            low-latency, high-performance on-chain data in a single, easy-to-use
            API.
          </p>
          <Button className="mt-8 h-12 gap-4 bg-[#2172E6] px-4 uppercase text-white hover:bg-[#2172E6] hover:shadow-[0_0_25px_0_rgba(33,114,230,0.5)]">
            <span>Docs</span>
            <div className="flex h-8 w-8 items-center justify-center rounded bg-white">
              <Image
                src="/assets/icons/arrow-right-sharp.svg"
                alt="Arrow Right"
                width={18}
                height={18}
              />
            </div>
          </Button>
        </div>
        <div className="relative h-[650px] w-[700px]">
          {Array.from({ length: TESTIMONIALS_COUNT }).map((_, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                top: `${index * 40}px`,
                left: `${(TESTIMONIALS_COUNT - 1 - index) * 40}px`,
                zIndex: index,
              }}
            >
              <TestimonialCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
