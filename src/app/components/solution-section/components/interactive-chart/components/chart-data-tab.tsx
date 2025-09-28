"use client";

import { FC } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import { TokenSelector } from ".";

const data = [
  { name: "08:10", value: 4.11 },
  { name: "08:11", value: 4.1 },
  { name: "08:12", value: 4.09 },
  { name: "08:13", value: 4.08 },
  { name: "08:14", value: 4.09 },
  { name: "08:15", value: 4.07 },
  { name: "08:16", value: 4.08 },
  { name: "08:17", value: 4.07 },
  { name: "08:18", value: 4.08 },
  { name: "08:19", value: 4.06 },
  { name: "08:20", value: 4.07 },
  { name: "08:21", value: 4.05 },
  { name: "08:22", value: 4.04 },
  { name: "08:23", value: 4.03 },
  { name: "08:24", value: 4.04 },
  { name: "08:25", value: 4.03 },
  { name: "08:26", value: 4.04 },
  { name: "08:27", value: 4.03 },
  { name: "08:28", value: 4.04 },
  { name: "08:29", value: 4.05 },
  { name: "08:30", value: 4.06 },
  { name: "08:31", value: 4.05 },
  { name: "08:32", value: 4.06 },
  { name: "08:33", value: 4.07 },
  { name: "08:34", value: 4.08 },
  { name: "08:35", value: 4.09 },
  { name: "08:36", value: 4.1 },
  { name: "08:37", value: 4.09 },
  { name: "08:38", value: 4.08 },
  { name: "08:39", value: 4.07 },
  { name: "08:40", value: 4.06 },
  { name: "08:41", value: 4.05 },
  { name: "08:42", value: 4.04 },
  { name: "08:43", value: 4.05 },
  { name: "08:44", value: 4.04 },
  { name: "08:45", value: 4.03 },
  { name: "08:46", value: 4.04 },
  { name: "08:47", value: 4.03 },
  { name: "08:48", value: 4.04 },
  { name: "08:49", value: 4.03 },
  { name: "08:50", value: 4.02 },
];

const xAxisTicks = [
  "08:10",
  "08:15",
  "08:20",
  "08:25",
  "08:30",
  "08:35",
  "08:40",
  "08:45",
  "08:50",
];

const yAxisTicks = [3.98, 4.02, 4.06, 4.1, 4.14];

export const ChartDataTab: FC = () => {
  return (
    <div>
      <div className="flex items-start justify-between max-md:gap-4">
        <div>
          <p className="text-sm md:text-lg text-[#8A8A8A]">APT Price</p>
          <p className="font-satoshi text-2xl md:text-[32px] font-medium text-[#2172E6]">
            $4.09
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-satoshi text-sm font-medium text-white">UTC - 0</p>
          <TokenSelector />
        </div>
      </div>
      <div className="mt-4 h-[390px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="70%"
                  stopColor="rgba(33, 114, 230, 0.2)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="97.5%"
                  stopColor="rgba(33, 114, 230, 0)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="2 2"
              stroke="rgba(43, 43, 43, 1)"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={{ stroke: "rgba(43, 43, 43, 1)" }}
              tickLine={false}
              tick={{ fill: "#8A8A8A" }}
              ticks={xAxisTicks}
              tickMargin={10}
            />
            <YAxis
              orientation="left"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8A8A8A" }}
              ticks={yAxisTicks}
              domain={[3.98, 4.14]}
              tickMargin={30}
              tickFormatter={(value) =>
                value === 3.98 ? "" : value.toFixed(2)
              }
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1B1B1B",
                borderColor: "#262626",
              }}
              labelStyle={{ color: "#FFFFFF" }}
            />
            <Area
              type="linear"
              dataKey="value"
              stroke="#2172E6"
              fill="url(#colorValue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
