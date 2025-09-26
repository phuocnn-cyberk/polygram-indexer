"use client";

import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartDataTab, NftDataTab, HoldersDataTab } from "./components";

const TABS = [
  { value: "chart-data", label: "CHART DATA", component: <ChartDataTab /> },
  { value: "nft-data", label: "NFT DATA", component: <NftDataTab /> },
  {
    value: "token-holders-data",
    label: "TOKEN HOLDERS DATA",
    component: <HoldersDataTab />,
  },
];

export const InteractiveChart: FC = () => {
  return (
    <div className="mt-8 w-full max-w-6xl rounded-3xl border border-[#262626] bg-[#141415]">
      <Tabs defaultValue="chart-data" className="w-full">
        <TabsList className="grid w-full grid-cols-3  bg-[#141415] rounded-t-3xl p-0">
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex-1 cursor-pointer rounded-none border-b border-[#212020] py-4 text-xs font-medium uppercase text-[#B5B2B2] data-[state=active]:rounded-t-3xl data-[state=active]:border-b-2 data-[state=active]:border-[#2172E6] data-[state=active]:bg-[#141415] data-[state=active]:text-white md:text-lg"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {TABS.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="m-0 p-6">
            {tab.component}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
