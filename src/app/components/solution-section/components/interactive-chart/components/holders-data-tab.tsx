import { FC } from "react";
import { TokenSelector, HoldersTable } from ".";

export const HoldersDataTab: FC = () => {
  return (
    <div>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-lg font-medium text-[#8A8A8A]">Total holder</p>
          <p className="font-satoshi text-[32px] font-medium text-[#2172E6]">
            100.3K
          </p>
        </div>
        <TokenSelector />
      </div>
      <HoldersTable />
    </div>
  );
};
