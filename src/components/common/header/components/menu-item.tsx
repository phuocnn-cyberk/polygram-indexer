import { FC, PropsWithChildren } from "react";

export const MenuItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="px-4 py-2 cursor-pointer text-base text-white">
      {children}
    </div>
  );
};
