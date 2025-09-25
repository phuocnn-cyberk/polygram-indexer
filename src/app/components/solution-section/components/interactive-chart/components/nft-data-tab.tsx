import { FC } from "react";
import { NftCollectionTable } from "./nft-collection-table";
import { TokenSelector } from ".";

export const NftDataTab: FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <span className="text-lg font-medium text-[#8A8A8A]">
          Top 10 collection
        </span>
        <TokenSelector />
      </div>
      <NftCollectionTable />
    </div>
  );
};
