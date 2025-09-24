import { FC } from "react";

import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
});

export const Logo: FC = () => {
  return (
    <h1 className={`text-xl text-white ${michroma.className}`}>Polygram</h1>
  );
};
