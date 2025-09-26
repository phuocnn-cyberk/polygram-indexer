import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const TestimonialCard: FC<{
  className?: string;
  showControls?: boolean;
  onNext?: () => void;
  onPrevious?: () => void;
}> = ({ className, showControls, onNext, onPrevious }) => {
  return (
    <div
      className={cn(
        "w-[295px] md:w-[400px] lg:w-[540px] rounded-2xl border border-[#484848] bg-[#2E2E2E]/60 p-6 md:p-12 backdrop-blur-[32px]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2.5">
        <span className="text-xl font-bold text-white">Amaterasu</span>
        <Image
          src="/assets/icons/amaterasu.svg"
          alt="Amaterasu"
          width={40}
          height={40}
          className="object-cover"
          priority
        />
      </div>
      <p className="mt-6 text-sm md:text-xl font-medium uppercase text-white">
        Amaterasu, the first Hybrid project on Aptos, relies on Polygram as the
        trusted source of truth for all on-chain data.
      </p>
      <div className="mt-6">
        <p className="text-xs md:text-base text-white">
          Polygram has been instrumentals in our effort to support high quality
          DEX data via the TradingView interface. We were using 3-4 data
          providers previously, including the Graph, and have now consolidated
          everything to Polygram.
        </p>
        <p className="mt-3 text-xs md:text-sm text-[#8C8C8C]">
          Alex T., Head of Product, Crypto
        </p>
      </div>

      {showControls && (
        <div className="mt-8 flex items-center justify-end gap-x-2">
          <Button
            onClick={onPrevious}
            size="icon"
            className="h-7 w-7 rounded-md bg-[#D9D9D9] border border-[#484848] hover:bg-white/20"
          >
            <ArrowLeft className="text-[#111111]" />
          </Button>
          <Button
            onClick={onNext}
            size="icon"
            className="h-7 w-7 rounded-md bg-[#D9D9D9] border border-[#484848] hover:bg-white/20"
          >
            <ArrowRight className="text-[#111111]" />
          </Button>
        </div>
      )}
    </div>
  );
};
