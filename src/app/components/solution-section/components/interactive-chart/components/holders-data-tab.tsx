import { FC } from "react";
import { TokenSelector, HoldersTable } from ".";

export const HoldersDataTab: FC = () => {
  return (
    <div>
      <div className="flex items-start justify-between max-md:gap-4">
        <div>
          <p className="text-sm whitespace-nowrap md:text-lg font-medium text-[#8A8A8A]">
            Total holder
          </p>
          <p className="font-satoshi text-2xl md:text-[32px] font-medium text-[#2172E6]">
            47.9M
          </p>
        </div>
        <TokenSelector />
      </div>
      <HoldersTable />
    </div>
  );
};
