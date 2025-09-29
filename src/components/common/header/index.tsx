"use client";

import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { AlignJustify } from "lucide-react";

import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MenuItem } from "./components";

const MENU_LIST = [
  {
    label: "About",
    path: "#",
  },
  {
    label: "Pricing",
    path: "/pricing",
  },
  {
    label: "Docs",
    path: "https://polygram-2.gitbook.io/polygram/",
  },
  {
    label: "Blog",
    path: "#",
  },
];

export const Header: FC = () => {
  const [show, setShow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center px-4 md:py-2 py-1 transition-all duration-300 md:px-8 lg:px-12 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-[#0A0A0A]" : "bg-transparent"}`}
    >
      <Link href="/">
        <Logo />
      </Link>
      <div className="hidden lg:flex items-center">
        <nav className="flex items-center bg-[#18181A] rounded-lg p-2">
          {MENU_LIST.map((item) => (
            item.path.startsWith('http') ? (
              <a key={item.label} href={item.path} target="_blank" rel="noopener noreferrer">
                <MenuItem>{item.label}</MenuItem>
              </a>
            ) : (
              <Link key={item.label} href={item.path}>
                <MenuItem>{item.label}</MenuItem>
              </Link>
            )
          ))}
          <Button className="bg-[#2172E6] text-base h-10 btn-discover hover:text-black text-white">
            Get started
          </Button>
        </nav>
      </div>
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <AlignJustify className="h-7 w-7 text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4 w-56 border-none bg-[#18181A] text-white">
            {MENU_LIST.map((item) => (
              <DropdownMenuItem key={item.label} asChild>
                {item.path.startsWith('http') ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer" className="w-full">
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.path} className="w-full">
                    {item.label}
                  </Link>
                )}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem>
              <Button className="w-full bg-[#2172E6] font-bold text-white">
                Get started
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
