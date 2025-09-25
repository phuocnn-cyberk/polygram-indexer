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
  { name: "08:10", value: 215.8 },
  { name: "08:11", value: 214.5 },
  { name: "08:12", value: 213.2 },
  { name: "08:13", value: 211.5 },
  { name: "08:14", value: 212.1 },
  { name: "08:15", value: 210.8 },
  { name: "08:16", value: 211.7 },
  { name: "08:17", value: 210.9 },
  { name: "08:18", value: 211.4 },
  { name: "08:19", value: 210.3 },
  { name: "08:20", value: 211.0 },
  { name: "08:21", value: 209.8 },
  { name: "08:22", value: 208.1 },
  { name: "08:23", value: 207.5 },
  { name: "08:24", value: 208.3 },
  { name: "08:25", value: 207.2 },
  { name: "08:26", value: 208.0 },
  { name: "08:27", value: 207.1 },
  { name: "08:28", value: 207.8 },
  { name: "08:29", value: 208.5 },
  { name: "08:30", value: 209.2 },
  { name: "08:31", value: 208.4 },
  { name: "08:32", value: 209.0 },
  { name: "08:33", value: 209.7 },
  { name: "08:34", value: 210.5 },
  { name: "08:35", value: 211.2 },
  { name: "08:36", value: 212.0 },
  { name: "08:37", value: 211.3 },
  { name: "08:38", value: 210.5 },
  { name: "08:39", value: 209.8 },
  { name: "08:40", value: 208.9 },
  { name: "08:41", value: 208.1 },
  { name: "08:42", value: 207.4 },
  { name: "08:43", value: 208.0 },
  { name: "08:44", value: 207.2 },
  { name: "08:45", value: 206.5 },
  { name: "08:46", value: 207.1 },
  { name: "08:47", value: 206.4 },
  { name: "08:48", value: 206.9 },
  { name: "08:49", value: 206.2 },
  { name: "08:50", value: 206.0 },
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

const yAxisTicks = [204, 206, 208, 210, 212, 214, 216];

export const ChartDataTab: FC = () => {
  return (
    <div>
      <div className="flex items-start justify-between max-md:gap-4">
        <div>
          <p className="text-sm md:text-lg text-[#8A8A8A]">SOL Price</p>
          <p className="font-satoshi text-2xl md:text-[32px] font-medium text-[#2172E6]">
            $213.56
          </p>
        </div>
        <TokenSelector />
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
              domain={[204, 216]}
              tickMargin={30}
              tickFormatter={(value) => (value === 204 ? "" : value)}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1B1B1B",
                borderColor: "#262626",
              }}
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
