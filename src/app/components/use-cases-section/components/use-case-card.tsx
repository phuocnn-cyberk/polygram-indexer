import Image from "next/image";
import { FC } from "react";

interface UseCaseCardProps {
  icon: string;
  title: string;
  description: string;
}

export const UseCaseCard: FC<UseCaseCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="w-[274px] rounded-2xl border border-[#262626] p-px">
      <div className="relative h-full w-full rounded-[15px] border border-transparent bg-transparent p-7">
        <div
          className="absolute inset-0 -z-10 rounded-[15px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(33, 114, 230, 0.2) 0%, rgba(33, 114, 230, 0) 100%)",
          }}
        />
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border border-[#454545] bg-white/5 backdrop-blur-xl" />
          <Image
            src={icon}
            alt={title}
            width={40}
            height={40}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <h3 className="mt-6 text-xl font-medium text-white">{title}</h3>
        <p className="mt-2 text-base text-[#6B6B6B]">{description}</p>
      </div>
    </div>
  );
};
