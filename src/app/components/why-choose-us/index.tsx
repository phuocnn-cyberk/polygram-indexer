import { FC } from "react";
import { BlockchainGrid, Description } from "./components";

export const WhyChooseUs: FC = () => {
  return (
    <section className="grid grid-cols-2 gap-x-4 mt-38 mb-25">
      <BlockchainGrid />
      <Description />
    </section>
  );
};
