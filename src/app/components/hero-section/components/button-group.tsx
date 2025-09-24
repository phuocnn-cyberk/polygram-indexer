import { FC } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const ButtonGroup: FC = () => {
  return (
    <div className={`flex items-center gap-x-4`}>
      <Button className="bg-[#2172E6] text-white uppercase cursor-pointer hover:bg-[#2172E6] hover:shadow-[0_0_25px_0_rgba(33,114,230,0.5)] font-semibold h-12 transition-all duration-300">
        <Image
          src="/assets/icons/get-started-icon.svg"
          alt="arrow right"
          width={32}
          height={32}
        />
        Get started
      </Button>
      <Button
        variant="ghost"
        className="text-white uppercase bg-[#1F2124] cursor-pointer font-semibold h-12 btn-discover hover:bg-[#1F2124]"
      >
        Scroll to Discover
      </Button>
    </div>
  );
};
