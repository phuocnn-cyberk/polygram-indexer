import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";

export const CtaButton: FC = () => {
  return (
    <Button className="bg-[#2172E6] text-white uppercase cursor-pointer hover:bg-[#2172E6] hover:shadow-[0_0_25px_0_rgba(33,114,230,0.5)] font-semibold h-12 transition-all duration-300">
      <Image
        src="/assets/icons/get-started-icon.svg"
        alt="arrow right"
        width={32}
        height={32}
      />
      Learn more about polygram
    </Button>
  );
};
