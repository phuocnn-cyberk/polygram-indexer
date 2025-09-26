import Image from "next/image";
import { FC, ReactNode } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
  icon: ReactNode;
}

export const FaqItem: FC<FaqItemProps> = ({ question, answer, icon }) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center gap-2 md:gap-4 rounded-lg">
        <div className="flex h-8 w-8 md:h-12 md:w-12 flex-shrink-0 items-center bg-gradient-to-b from-[#303030] to-[#1B1B1B] p-px justify-center rounded-full">
          {icon}
        </div>
        <div className="p-4 bg-[#151618] rounded-lg">
          <p className="text-sm md:text-xl text-white leading-tight">
            {question}
          </p>
        </div>
      </div>

      <div className="flex md:items-center gap-4 xl:pl-35">
        <div className="flex-1 rounded-lg p-4 bg-[#151618] max-w-[760px]">
          <p className="text-sm md:text-xl text-[#ADADAD] text-right leading-tight">
            {answer}
          </p>
        </div>
        <Image
          src="/assets/images/avatar.png"
          alt="FAQ Avatar"
          width={48}
          height={48}
          className="h-8 w-8 md:h-12 md:w-12 flex-shrink-0 rounded-full"
        />
      </div>
    </div>
  );
};
