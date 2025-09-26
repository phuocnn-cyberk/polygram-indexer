import { FC } from "react";
import { BlockchainGrid, Description } from "./components";

export const WhyChooseUs: FC = () => {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-x-8 gap-y-12 mt-9 lg:mt-42 mb-16 lg:mb-25">
      <BlockchainGrid />
      <Description />
    </section>
  );
};
