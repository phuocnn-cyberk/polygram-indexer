import { FC } from "react";
import { Check } from "lucide-react";

export const CheckIcon: FC = () => {
  return (
    <div className="flex h-[14px] w-[14px] flex-shrink-0 items-center justify-center rounded-full border border-white bg-transparent">
      <Check className="h-3 w-3 text-white" />
    </div>
  );
};
