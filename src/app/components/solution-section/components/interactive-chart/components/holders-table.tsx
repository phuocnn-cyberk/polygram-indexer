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

const HOLDER_DATA = Array.from({ length: 10 }, (_, i) => ({
  address: `0xf977…ace${i}`,
  percentage: 8.98 - i * 0.3,
  quantity: 24500000000000 - i * 1234567890,
  valueUSD: 435000000 - i * 15000000,
  progress: 60 - i * 4,
}));

export const HoldersTable: FC = () => {
  return (
    <div className="relative mt-6 max-h-[427px] overflow-y-auto">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-[#141415]">
          <TableRow className="border-b border-[#212020]">
            <TableHead className="w-[63px] py-3 text-left text-base font-medium uppercase text-[#8A8A8A]">
              Rank
            </TableHead>
            <TableHead className="w-[291px] py-3 text-left text-base font-medium uppercase text-[#8A8A8A]">
              Holder
            </TableHead>
            <TableHead className="w-[145px] py-3 text-left text-base font-medium uppercase text-[#8A8A8A]">
              Percentage
            </TableHead>
            <TableHead className="w-[390px] py-3 text-left text-base font-medium uppercase text-[#8A8A8A]">
              Quantity
            </TableHead>
            <TableHead className="w-auto py-3 text-right text-base font-medium uppercase text-[#8A8A8A]">
              Value USD
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {HOLDER_DATA.map((holder, index) => {
            return (
              <TableRow key={index} className="border-b border-[#212020]">
                <TableCell className="py-4">
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
                        style={{ width: `${holder.progress}%` }}
                      />
                    </div>
                    <span className="text-base font-medium text-white">
                      {(holder.quantity / 1e12).toFixed(1)}T
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
