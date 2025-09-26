import Image from "next/image";
import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface LogoCloudProps {
  logos: Logo[];
  children?: ReactNode;
  className?: string;
}

export const LogoCloud: FC<LogoCloudProps> = ({
  logos,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "mt-8 md:mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-8",
        className
      )}
    >
      {logos.map((logo) => (
        <Image
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="max-md:h-10 max-md:w-auto object-contain"
        />
      ))}
      {children}
    </div>
  );
};
