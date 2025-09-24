import { FC } from "react";

const leftDots = [
  { top: 0, left: 0 },
  { top: 0, left: 6 },
  { top: 0, left: 12 },
  { top: 6, left: 0 },
  { top: 6, left: 6 },
  { top: 12, left: 0 },
];

const rightDots = [
  { top: 0, left: 0 },
  { top: 0, left: 6 },
  { top: 0, left: 12 },
  { top: 6, left: 6 },
  { top: 6, left: 12 },
  { top: 12, left: 12 },
];

export const Dots: FC<{ variant: "left" | "right" }> = ({ variant }) => {
  const positions = variant === "left" ? leftDots : rightDots;

  return (
    <div className="relative h-[15px] w-[15px]">
      {positions.map((pos, index) => (
        <div
          key={index}
          className="absolute h-[3px] w-[3px] rounded-full bg-[#484848]"
          style={{ top: `${pos.top}px`, left: `${pos.left}px` }}
        />
      ))}
    </div>
  );
};
