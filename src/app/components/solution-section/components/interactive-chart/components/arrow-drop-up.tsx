import { FC } from "react";

interface ArrowDropUpProps {
  isNegative?: boolean;
}

export const ArrowDropUp: FC<ArrowDropUpProps> = ({ isNegative }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isNegative ? "transform rotate-180" : ""}
    >
      <path
        d="M7 4.66666L3.5 8.16666H10.5L7 4.66666Z"
        fill={isNegative ? "#FF0000" : "#42C16E"}
      />
    </svg>
  );
};
