import { FC } from "react";

export const Description: FC = () => {
  return (
    <div className="flex flex-col gap-y-5 lg:max-w-xl justify-center text-left px-4 sm:px-0">
      <h2 className="text-lg lg:text-4xl font-medium text-white">
        <span className="text-[#2172E6]">Raw blockchain data</span> is messy,
        complex, and nearly impossible to use without heavy lifting.{" "}
        <span className="whitespace-nowrap">
          Developers often spend{" "}
          <span className="text-[#2172E6]">countless</span>
          <br />
          <span className="text-[#2172E6]">hours</span>
        </span>{" "}
        building fragile pipelines — maintaining RPC nodes, managing servers,
        and writing custom code — just to get{" "}
        <span className="text-[#2172E6]">
          data that&apos;s still incomplete.
        </span>
      </h2>
      <p className="text-sm lg:text-xl text-[#6B6B6B]">
        Running your own blockchain indexer is expensive, resource-draining, and
        takes focus away from what really matters: building your product.
      </p>
    </div>
  );
};
