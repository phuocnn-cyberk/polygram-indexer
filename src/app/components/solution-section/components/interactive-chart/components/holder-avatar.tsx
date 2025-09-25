"use client";

import { FC, useMemo } from "react";
import Image from "next/image";
import { createAvatar } from "@dicebear/core";
import * as micah from "@dicebear/micah";

interface HolderAvatarProps {
  seed: string;
}

export const HolderAvatar: FC<HolderAvatarProps> = ({ seed }) => {
  const avatarUri = useMemo(() => {
    return createAvatar(micah, {
      seed,
      radius: 50,
    }).toDataUri();
  }, [seed]);

  return (
    <Image
      src={avatarUri}
      alt={seed}
      width={24}
      height={24}
      className="rounded-full"
    />
  );
};
