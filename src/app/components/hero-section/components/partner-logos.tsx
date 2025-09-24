import { FC } from "react";
import Image from "next/image";

const LOGO_LIST = [
  {
    src: "/assets/images/partner-logos/kyros-ventures-logo.png",
    alt: "Kyros Ventures",
    width: 121,
    height: 68,
  },
  {
    src: "/assets/images/partner-logos/caladanloho-logo.png",
    alt: "Caladan",
    width: 128,
    height: 72,
  },
  {
    src: "/assets/images/partner-logos/presto-logo.png",
    alt: "Presto",
    width: 142,
    height: 80,
  },
  {
    src: "/assets/images/partner-logos/tribe-logo.png",
    alt: "Tribe",
    width: 142,
    height: 80,
  },
  {
    src: "/assets/images/partner-logos/trive-logo.png",
    alt: "Trive",
    width: 124,
    height: 48,
  },
];

export const PartnerLogos: FC = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
        {LOGO_LIST.map((logo) => (
          <li key={logo.alt}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll"
        aria-hidden="true"
      >
        {LOGO_LIST.map((logo) => (
          <li key={logo.alt}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
