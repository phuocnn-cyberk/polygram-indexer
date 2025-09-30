import { FC } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const ButtonGroup: FC = () => {
  return (
    <div className={`flex items-center gap-x-2 md:gap-x-4 z-30`}>
      <Button className="bg-[#2172E6] px-2 md:px-4 text-[10px] md:text-sm text-white z-50 uppercase cursor-pointer hover:bg-[#2172E6] hover:shadow-[0_0_25px_0_rgba(33,114,230,0.5)] font-semibold md:h-12 h-6 transition-all duration-300">
        <Image
          src="/icons//get-started-icon.svg"
          alt="arrow right"
          width={32}
          height={32}
          className="md:w-8 w-4"
        />
        Get started
      </Button>
      <Button
        variant="ghost"
        className="text-[10px] md:text-sm text-white uppercase bg-[#1F2124] cursor-pointer font-semibold md:h-12 h-6 btn-discover hover:bg-[#1F2124]"
      >
        Scroll to Discover
      </Button>
    </div>
  );
};
