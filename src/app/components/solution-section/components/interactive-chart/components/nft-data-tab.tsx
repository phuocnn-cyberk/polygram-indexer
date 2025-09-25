import { FC } from "react";
import { NftCollectionTable } from "./nft-collection-table";
import { TokenSelector } from ".";

export const NftDataTab: FC = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between items-center gap-3 sm:gap-0">
        <span className="text-base sm:text-lg font-medium text-[#8A8A8A] text-center sm:text-left">
          Top 10 collection
        </span>
        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <TokenSelector />
        </div>
      </div>
      <NftCollectionTable />
    </div>
  );
};
