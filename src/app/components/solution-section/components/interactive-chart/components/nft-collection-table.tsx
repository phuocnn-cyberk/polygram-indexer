"use client";

import { FC } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowDropUp } from "./arrow-drop-up";

const NFT_COLLECTIONS = Array(5).fill({
  name: "DX Terminal",
  logo: "/assets/images/dx-terminal.png",
  volume: 35800000,
  quantity: 22.88,
  avgTrade: 22.55,
  trades: 165000,
});

export const NftCollectionTable: FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b border-[#212020]">
          <TableHead className="w-[63px] py-3 text-left text-base font-medium uppercase text-[#8A8A8A]">
            Rank
          </TableHead>
          <TableHead className="w-[460px] py-3 text-left text-base font-medium uppercase text-[#8A8A8A]">
            Collection
          </TableHead>
          <TableHead className="w-[103px] py-3 text-left text-base font-medium uppercase text-[#8A8A8A]">
            Volume
          </TableHead>
          <TableHead className="w-[132px] py-3 text-left text-base font-medium uppercase text-[#8A8A8A]">
            Quantity
          </TableHead>
          <TableHead className="w-[89px] py-3 text-left text-base font-medium uppercase text-[#8A8A8A]">
            Avg Trade
          </TableHead>
          <TableHead className="w-auto py-3 text-right text-base font-medium uppercase text-[#8A8A8A]">
            Trade
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {NFT_COLLECTIONS.map((collection, index) => (
          <TableRow key={index} className="border-b border-[#212020]">
            <TableCell className="py-4">
              <div className="flex">
                <span className="text-base font-medium text-[#888888] rounded-full border border-[#262626] px-2">
                  {index + 1}
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Image
                  src={collection.logo}
                  alt={`${collection.name} logo`}
                  width={48}
                  height={48}
                  className="rounded"
                />
                <span className="text-base font-medium text-white">
                  {collection.name}
                </span>
              </div>
            </TableCell>
            <TableCell className="text-left text-base font-medium text-white">
              ${(collection.volume / 1000000).toFixed(1)}M
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <ArrowDropUp />
                <span className="text-base font-medium text-[#42C16E]">
                  {collection.quantity.toFixed(2)}%
                </span>
              </div>
            </TableCell>
            <TableCell className="text-left text-base font-medium text-white">
              ${collection.avgTrade.toFixed(2)}
            </TableCell>
            <TableCell className="text-right text-base font-medium text-white">
              {(collection.trades / 1000).toFixed(0)}K
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
