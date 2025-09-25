"use client";

import { FC } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TOKENS = [
  {
    value: "sol",
    label: "Solana",
    icon: "/assets/icons/sol.svg",
  },
  {
    value: "apt",
    label: "Aptos",
    icon: "/assets/icons/aptos.svg",
  },
  {
    value: "eth",
    label: "Ethereum",
    icon: "/assets/icons/ethereum.svg",
  },
  {
    value: "bsc",
    label: "BNB Chain",
    icon: "/assets/icons/binance-logo-white.svg",
  },
  {
    value: "base",
    label: "Base",
    icon: "/assets/icons/base.svg",
  },
];

export const TokenSelector: FC = () => {
  return (
    <Tabs defaultValue="sol">
      <TabsList className="h-13 gap-6 rounded-lg bg-[#1B1B1B] p-2">
        {TOKENS.map((token) => (
          <TabsTrigger
            key={token.value}
            value={token.value}
            className="flex items-center gap-2 rounded-sm p-2 text-base font-medium text-[#565656] data-[state=active]:bg-[#0F2545] data-[state=active]:text-white"
          >
            <Image src={token.icon} alt={token.label} width={24} height={24} />
            {token.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
