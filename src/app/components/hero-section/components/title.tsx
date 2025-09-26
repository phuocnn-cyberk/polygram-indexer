import { FC } from "react";
import { FadeIn } from "@/components/common/fade-in";

export const Title: FC = () => {
  return (
    <FadeIn
      className={`md:text-5xl lg:text-7xl text-xl font-medium uppercase text-white md:pb-18 pb-7 z-10`}
    >
      The Fastest Blockchain
      <br />
      Indexer Service for Real-
      <br />
      Time, Reliable On-Chain Data
    </FadeIn>
  );
};
