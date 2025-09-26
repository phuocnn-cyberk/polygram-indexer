"use client";

import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CopyIcon } from "lucide-react";
import { HolderAvatar } from ".";

const HOLDER_DATA = [
  {
    address: "0x30c1…a416",
    percentage: 1.95,
    quantity: 195000000000,
    valueUSD: 3480000,
  },
  {
    address: "0x1d5a…a157",
    percentage: 1.18,
    quantity: 118000000000,
    valueUSD: 2100000,
  },
  {
    address: "0x96d3…b929",
    percentage: 1.06,
    quantity: 106000000000,
    valueUSD: 1890000,
  },
  {
    address: "0x6f3e…d6f1",
    percentage: 0.91,
    quantity: 91000000000,
    valueUSD: 1620000,
  },
  {
    address: "0x7a3c…2f8b",
    percentage: 0.88,
    quantity: 88000000000,
    valueUSD: 1570000,
  },
  {
    address: "0x8a2b…c4d5",
    percentage: 0.85,
    quantity: 85000000000,
    valueUSD: 1510000,
  },
  {
    address: "0x4e5f…a1b2",
    percentage: 0.82,
    quantity: 82000000000,
    valueUSD: 1460000,
  },
  {
    address: "0x9c0d…e3f4",
    percentage: 0.79,
    quantity: 79000000000,
    valueUSD: 1410000,
  },
  {
    address: "0x2a1b…d5e6",
    percentage: 0.76,
    quantity: 76000000000,
    valueUSD: 1350000,
  },
  {
    address: "0x6d4c…b8a9",
    percentage: 0.73,
    quantity: 73000000000,
    valueUSD: 1300000,
  },
];

export const HoldersTable: FC = () => {
  return (
    <div className="relative mt-6 max-h-[374px] overflow-y-auto no-scrollbar">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-[#141415]">
          <TableRow className="border-b border-[#212020] !h-11 py- hover:bg-transparent">
            <TableHead className="w-[63px] text-left text-base font-medium uppercase text-[#8A8A8A]">
              Rank
            </TableHead>
            <TableHead className="w-[291px] text-left text-base font-medium uppercase text-[#8A8A8A]">
              Holder
            </TableHead>
            <TableHead className="w-[145px] text-left text-base font-medium uppercase text-[#8A8A8A]">
              Percentage
            </TableHead>
            <TableHead className="w-[390px] text-left text-base font-medium uppercase text-[#8A8A8A]">
              Quantity
            </TableHead>
            <TableHead className="w-auto text-right text-base font-medium uppercase text-[#8A8A8A]">
              Value USD
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {HOLDER_DATA.map((holder, index) => {
            const topHolderQuantity = HOLDER_DATA[0].quantity;
            const progress = (holder.quantity / topHolderQuantity) * 60;

            return (
              <TableRow
                key={index}
                className="border-b border-[#212020] hover:bg-transparent h-12"
              >
                <TableCell className="py-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#262626]">
                    <span className="text-base font-medium text-[#888888]">
                      {index + 1}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <HolderAvatar seed={holder.address} />
                    <span className="text-base font-medium text-white">
                      {holder.address}
                    </span>
                    <CopyIcon className="h-4 w-4 text-[#A4A4A4]" />
                  </div>
                </TableCell>
                <TableCell className="text-left text-base font-medium text-white">
                  {holder.percentage.toFixed(2)}%
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-full max-w-[186px] rounded-lg bg-[#252525]">
                      <div
                        className="h-3 rounded-lg bg-[#2172E6]"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className="text-base font-medium text-white">
                      {(holder.quantity / 1e9).toFixed(1)}B
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right text-base font-medium text-white">
                  ${(holder.valueUSD / 1e6).toFixed(0)}M
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
