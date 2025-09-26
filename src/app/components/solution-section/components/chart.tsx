"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { FC, useRef } from "react";

const chartLines = [
  {
    d: "M0.0442938 194.822C0.0442938 194.822 121.307 183.822 230.781 94.445C269.22 63.0619 306.57 0.255224 306.57 0.255224",
    transform: "translate(0, 0)",
  },
  {
    d: "M0.300015 194.601C0.300015 194.601 62.4052 147.891 104.368 88.8174C127.664 56.0217 153.045 0.20644 153.045 0.20644",
    transform: "translate(164.19, 0)",
  },
  {
    d: "M0.440488 194.76C0.440488 194.76 37.0094 127.803 53.2892 82.944C64.8543 51.0768 77.1564 0.117357 77.1564 0.117357",
    transform: "translate(251.24, 0)",
  },
  {
    d: "M0.492384 193.913C0.492384 193.913 13.843 119.083 19.0428 70.8475C22.0194 43.2356 24.9452 0.0333773 24.9452 0.0333773",
    transform: "translate(313.1, 0)",
  },
  {
    d: "M24.952 193.913C24.952 193.913 11.6014 119.083 6.40151 70.8475C3.42491 43.2356 0.499102 0.0333773 0.499102 0.0333773",
    transform: "translate(347.46, 0)",
  },
  {
    d: "M77.204 194.76C77.204 194.76 40.6351 127.803 24.3553 82.944C12.7903 51.0768 0.48813 0.117357 0.48813 0.117357",
    transform: "translate(357.39, 0)",
  },
  {
    d: "M153.2 194.601C153.2 194.601 91.0948 147.891 49.1319 88.8174C25.8356 56.0217 0.454875 0.20644 0.454875 0.20644",
    transform: "translate(368.08, 0)",
  },
  {
    d: "M307.803 195.502C307.803 195.502 186.537 184.502 77.0616 95.1296C38.6212 63.7482 0.428522 0.257463 0.428522 0.257463",
    transform: "translate(378.01, 0)",
  },
];

export const Chart: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <div ref={ref} className="w-[345px] md:w-[685px]">
      <svg
        width="345"
        height="196"
        className="w-[345px] h-[98px] md:w-[685px] md:h-[196px]"
        viewBox="0 0 685 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="paint0_linear_22_3535"
            x1="153.307"
            y1="0.255224"
            x2="153.307"
            y2="194.822"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.120192" stopColor="#383838" stopOpacity="0.05" />
            <stop offset="0.524038" stopColor="#606060" />
            <stop offset="1" stopColor="#383838" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {chartLines.map((line, index) => (
          <g key={index} transform={line.transform}>
            <motion.path
              d={line.d}
              stroke="url(#paint0_linear_22_3535)"
              style={{ pathLength }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};
