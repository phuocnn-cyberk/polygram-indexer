import Image from "next/image";
import { forwardRef } from "react";
import { motion, MotionProps } from "motion/react";

interface UseCaseCardProps {
  icon: string;
  title: string;
  description: string;
}

export const UseCaseCard = forwardRef<
  HTMLDivElement,
  UseCaseCardProps & MotionProps
>(({ icon, title, description, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      {...props}
      className="w-[274px] shrink-0 rounded-2xl border border-[#262626] p-px"
    >
      <div className="relative h-full w-full rounded-[15px] border border-transparent bg-transparent p-4 md:p-7">
        <div
          className="absolute inset-0 -z-10 rounded-[15px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(33, 114, 230, 0.2) 0%, rgba(33, 114, 230, 0) 100%)",
          }}
        />
        <div className="relative h-8 w-8 md:h-16 md:w-16">
          <div className="absolute inset-0 rounded-full border border-[#454545] bg-white/5 backdrop-blur-xl" />
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 md:w-10 md:h-10"
          />
        </div>
        <h3 className="mt-3 md:mt-6 text-base md:text-xl font-medium text-white leading-tight">
          {title}
        </h3>
        <p className="mt-2 text-xs md:text-base text-[#6B6B6B] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
});

UseCaseCard.displayName = "UseCaseCard";
