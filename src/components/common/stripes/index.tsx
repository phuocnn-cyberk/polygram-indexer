import { FC } from "react";

interface StripesProps {
  count?: number;
  lineClassName?: string;
}

const LineSet: FC<StripesProps> = ({ count = 11, lineClassName }) => (
  <div className="flex justify-between w-full h-[48%]">
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className={`h-full w-px ${lineClassName ?? "bg-[#242424]"}`}
      />
    ))}
  </div>
);

export const Stripes: FC<StripesProps> = ({ count, lineClassName }) => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <LineSet count={count} lineClassName={lineClassName} />
      <LineSet count={count} lineClassName={lineClassName} />
    </div>
  );
};
