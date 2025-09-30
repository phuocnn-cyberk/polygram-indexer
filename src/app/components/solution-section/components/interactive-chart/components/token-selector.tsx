"use client";

import { FC } from "react";
import Image from "next/image";

const APTOS_TOKEN = {
  value: "apt",
  label: "Aptos",
  icon: "/icons//aptos.svg",
};

export const TokenSelector: FC = () => {
  return (
    <div className="flex h-9 md:h-13 items-center gap-2 rounded-lg bg-[#1B1B1B] p-2 sm:gap-4 lg:gap-6">
      <div className="flex cursor-pointer items-center gap-1 text-white sm:gap-2">
        <Image
          src={APTOS_TOKEN.icon}
          alt={APTOS_TOKEN.label}
          width={24}
          height={24}
          className="h-6 w-6"
        />
        <span className="text-base font-medium">{APTOS_TOKEN.label}</span>
      </div>
    </div>
  );
};

/*
"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const TOKENS = [
  {
    value: "sol",
    label: "Solana",
    icon: "/icons//sol.svg",
  },
  {
    value: "apt",
    label: "Aptos",
    icon: "/icons//aptos.svg",
  },
  {
    value: "eth",
    label: "Ethereum",
    icon: "/icons//ethereum.svg",
  },
  {
    value: "bsc",
    label: "BNB Chain",
    icon: "/icons//binance-logo-white.svg",
  },
  {
    value: "base",
    label: "Base",
    icon: "/icons//base.svg",
  },
];

export const TokenSelector: FC = () => {
  const [selectedToken, setSelectedToken] = useState("sol");

  return (
    <>
      // Desktop/Tablet View
      <div className="hidden lg:block">
        <Tabs
          defaultValue="sol"
          value={selectedToken}
          onValueChange={setSelectedToken}
        >
          <TabsList className="h-13 gap-2 sm:gap-4 lg:gap-6 rounded-lg bg-[#1B1B1B] p-1 sm:p-2">
            {TOKENS.map((token) => (
              <TabsTrigger
                key={token.value}
                value={token.value}
                className="flex items-center cursor-pointer gap-1 sm:gap-2 rounded-sm p-1 sm:p-2 text-xs sm:text-sm lg:text-base font-medium text-[#565656] data-[state=active]:bg-[#0F2545] data-[state=active]:text-white whitespace-nowrap min-w-0 flex-shrink-0"
              >
                <Image
                  src={token.icon}
                  alt={token.label}
                  width={16}
                  height={16}
                  className="sm:w-6 sm:h-6 w-4 h-4 flex-shrink-0"
                />
                <span className="hidden sm:inline lg:inline">
                  {token.label}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      // Mobile View
      <div className="lg:hidden w-full max-w-[280px]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full h-13 bg-[#1B1B1B] border-none text-white hover:bg-[#0F2545] flex items-center gap-2 justify-between"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={
                    TOKENS.find((t) => t.value === selectedToken)?.icon || ""
                  }
                  alt={
                    TOKENS.find((t) => t.value === selectedToken)?.label || ""
                  }
                  width={24}
                  height={24}
                />
                <span className="text-sm font-medium">
                  {TOKENS.find((t) => t.value === selectedToken)?.label}
                </span>
              </div>
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full bg-[#1B1B1B] border-[#565656] min-w-[200px]">
            {TOKENS.map((token) => (
              <DropdownMenuItem
                key={token.value}
                className={`cursor-pointer p-3 flex items-center gap-3 text-white hover:bg-[#0F2545] ${
                  selectedToken === token.value ? "bg-[#0F2545]" : ""
                }`}
                onClick={() => setSelectedToken(token.value)}
              >
                <Image
                  src={token.icon}
                  alt={token.label}
                  width={20}
                  height={20}
                />
                <span className="text-sm font-medium">{token.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
*/
