import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "@/components/common/header";
import { Footer } from "@/app/components/footer";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const satoshi = localFont({
  src: "../assets/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Polygram Indexer",
  description: "Polygram Indexer",
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
