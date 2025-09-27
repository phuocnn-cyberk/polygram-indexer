import { FC } from "react";
import { NftCollectionTable } from "./nft-collection-table";
import { TokenSelector } from ".";

export const NftDataTab: FC = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="flex flex-row justify-between items-center gap-3 lg:gap-0">
        <span className="text-base lg:text-lg font-medium text-[#8A8A8A] text-center lg:text-left">
          Top 10 collection
        </span>
        <div className="w-auto">
          <TokenSelector />
        </div>
      </div>
      <NftCollectionTable />
    </div>
  );
};
