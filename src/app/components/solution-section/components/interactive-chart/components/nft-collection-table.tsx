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

const NFT_COLLECTIONS = [
  {
    name: "CryptoPunks",
    logo: "/assets/images/cryptopunks.png",
    volume: 1213000,
    quantity: -15.23,
    avgTrade: 45000,
    trades: 27,
  },
  {
    name: "Bored Ape Yacht Club",
    logo: "/assets/images/bored-ape-yacht-club.png",
    volume: 987000,
    quantity: 22.88,
    avgTrade: 29000,
    trades: 34,
  },
  {
    name: "Azuki",
    logo: "/assets/images/azuki.png",
    volume: 876000,
    quantity: 12.45,
    avgTrade: 15000,
    trades: 58,
  },
  {
    name: "Doodles",
    logo: "/assets/images/doodles.png",
    volume: 765000,
    quantity: -5.67,
    avgTrade: 8000,
    trades: 95,
  },
  {
    name: "Moonbirds",
    logo: "/assets/images/moonbirds.png",
    volume: 654000,
    quantity: 33.12,
    avgTrade: 6000,
    trades: 109,
  },
  {
    name: "Pudgy Penguins",
    logo: "/assets/images/pudgy-penguins.png",
    volume: 543000,
    quantity: 8.79,
    avgTrade: 4500,
    trades: 120,
  },
  {
    name: "Cool Cats",
    logo: "/assets/images/cool-cats.png",
    volume: 432000,
    quantity: -11.05,
    avgTrade: 3000,
    trades: 144,
  },
  {
    name: "VeeFriends",
    logo: "/assets/images/vee-friends.png",
    volume: 321000,
    quantity: 18.91,
    avgTrade: 9000,
    trades: 35,
  },
  {
    name: "Meebits",
    logo: "/assets/images/meebits.png",
    volume: 210000,
    quantity: -2.34,
    avgTrade: 4000,
    trades: 52,
  },
  {
    name: "World of Women",
    logo: "/assets/images/world-of-women.png",
    volume: 198000,
    quantity: 25.55,
    avgTrade: 3500,
    trades: 56,
  },
];

export const NftCollectionTable: FC = () => {
  return (
    <div className="relative mt-6 max-h-[374px] overflow-y-auto no-scrollbar">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-[#212020] hover:bg-transparent">
            <TableHead className="w-[63px] py-3 text-left text-xs md:text-base font-medium uppercase text-[#8A8A8A]">
              Rank
            </TableHead>
            <TableHead className="w-[460px] max-md:min-w-[160px] py-3 text-left text-xs md:text-base font-medium uppercase text-[#8A8A8A]">
              Collection
            </TableHead>
            <TableHead className="w-[103px] py-3 text-left text-xs md:text-base font-medium uppercase text-[#8A8A8A]">
              Volume
            </TableHead>
            <TableHead className="w-[132px] py-3 text-left text-xs md:text-base font-medium uppercase text-[#8A8A8A]">
              Quantity
            </TableHead>
            <TableHead className="w-[89px] py-3 text-left text-xs md:text-base font-medium uppercase text-[#8A8A8A]">
              Avg Trade
            </TableHead>
            <TableHead className="w-auto py-3 text-right text-xs md:text-base font-medium uppercase text-[#8A8A8A]">
              Trade
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {NFT_COLLECTIONS.map((collection, index) => (
            <TableRow
              key={index}
              className="border-b border-[#212020] hover:bg-transparent"
            >
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
                    className="rounded w-8 h-8 md:w-12 md:h-12"
                  />
                  <span className="text-xs md:text-base font-medium text-white">
                    {collection.name}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-left text-xs md:text-base font-medium text-white">
                ${(collection.volume / 1000000).toFixed(2)}M
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <ArrowDropUp isNegative={collection.quantity < 0} />
                  <span
                    className={`text-xs md:text-base font-medium ${
                      collection.quantity >= 0
                        ? "text-[#42C16E]"
                        : "text-red-500"
                    }`}
                  >
                    {collection.quantity.toFixed(2)}%
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-left text-xs md:text-base font-medium text-white">
                ${collection.avgTrade.toLocaleString()}
              </TableCell>
              <TableCell className="text-right text-xs md:text-base font-medium text-white">
                {collection.trades.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
