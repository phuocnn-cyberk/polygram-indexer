import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const satoshi = localFont({
  src: "../assets/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

const title = "Polygram Indexer";
const description = "Polygram Indexer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.polygram.co"),
  openGraph: {
    title,
    description,
    url: "https://www.polygram.co",
    type: "website",
    images: "/images/thumbnail-banner.png",
  },
  twitter: {
    title,
    description,
    images: "/images/thumbnail-banner.png",
  },
  icons: {
    icon: "/images/favicon.png",
  },
  // facebook: {
  //   appId: "1312157670574263",
  // },
  title,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${satoshi.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
