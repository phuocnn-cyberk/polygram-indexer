import { FC } from "react";
import Image from "next/image";

const LOGO_LIST = [
  {
    src: "/assets/partner-logos/kyros-ventures-logo.png",
    alt: "Kyros Ventures",
    width: 121,
    height: 68,
  },
  {
    src: "/assets/partner-logos/caladanloho.png",
    alt: "Caladan",
    width: 128,
    height: 72,
  },
  {
    src: "/assets/partner-logos/presto-logo.png",
    alt: "Presto",
    width: 142,
    height: 80,
  },
  {
    src: "/assets/partner-logos/tribe-logo.png",
    alt: "Tribe",
    width: 142,
    height: 80,
  },
  {
    src: "/assets/partner-logos/trive-logo.png",
    alt: "Trive",
    width: 124,
    height: 48,
  },
];

export const PartnerLogos: FC = () => {
  return (
    <div className="flex items-center justify-center gap-x-8 py-4">
      {LOGO_LIST.map((logo) => (
        <Image
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="object-contain"
        />
      ))}
    </div>
  );
};
