import { FC } from "react";
import Image from "next/image";

const LOGO_LIST = [
  {
    src: "icons/gamicard-logo.svg",
    alt: "Gamicard",
    width: 121,
    height: 68,
  },
  {
    src: "icons/amaterasu.svg",
    alt: "Amaterasu",
    width: 48,
    height: 48,
  },
  {
    src: "icons/asterix-logo.svg",
    alt: "Asterix",
    width: 236,
    height: 38,
  },
  {
    src: "icons/nexium-logo.svg",
    alt: "Nexium",
    width: 138,
    height: 20,
  },
];

export const PartnerLogos: FC = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden">
      <ul className="flex items-center justify-center md:justify-start md:[&_li]:mx-4 [&_li]:mx-2 [&_img]:max-w-none animate-scroll">
        {LOGO_LIST.map((logo) => (
          <li key={logo.alt}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain md:h-20 h-12 max-md:w-20"
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start md:[&_li]:mx-4 [&_li]:mx-2 [&_img]:max-w-none animate-scroll"
        aria-hidden="true"
      >
        {LOGO_LIST.map((logo) => (
          <li key={logo.alt}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain md:h-20 h-12 max-md:w-20"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
