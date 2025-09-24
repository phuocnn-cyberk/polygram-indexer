import { FC } from "react";

const LineSet: FC = () => (
  <div className="flex justify-between w-full h-[48%]">
    {Array.from({ length: 11 }).map((_, i) => (
      <div key={i} className="w-px h-full bg-[#242424]" />
    ))}
  </div>
);

export const Stripes: FC = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <LineSet />
      <LineSet />
    </div>
  );
};
