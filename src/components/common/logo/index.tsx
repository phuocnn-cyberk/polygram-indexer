import { FC } from "react";

import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
});

export const Logo: FC = () => {
  return (
    <h1
      className={`md:text-xl text-sm leading-tight text-white ${michroma.className}`}
    >
      Polygram
    </h1>
  );
};
