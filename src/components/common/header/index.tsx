"use client";

import { FC, useEffect, useRef, useState } from "react";

import { AlignJustify, X } from "lucide-react";

import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";

import { MenuItem } from "./components";

const MENU_LIST = [
  {
    label: "About",
    path: "#",
  },
  {
    label: "Pricing",
    path: "#",
  },
  {
    label: "Docs",
    path: "#",
  },
  {
    label: "Blog",
    path: "#",
  },
  {
    label: "dApp",
    path: "#",
  },
];

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const onToggle = () => setIsOpen(!isOpen);

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
      className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center px-12 py-2 transition-all duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-none" : "bg-transparent"}`}
    >
      <Logo />
      <div className="hidden lg:flex items-center">
        <nav className="flex items-center bg-[#18181A] rounded-lg p-2">
          {MENU_LIST.map((item) => (
            <MenuItem key={item.label}>{item.label}</MenuItem>
          ))}
          <Button className="bg-[#2172E6] text-base h-10 btn-discover hover:text-black text-white">
            Get started
          </Button>
        </nav>
      </div>
      <div className="lg:hidden">
        <Button onClick={onToggle} variant="ghost" size="icon">
          <AlignJustify />
        </Button>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-end">
          <div className="w-1/2 h-screen bg-[#18181A] p-4">
            <div className="flex justify-end">
              <Button onClick={onToggle} variant="ghost" size="icon">
                <X />
              </Button>
            </div>
            <nav className="flex flex-col items-center gap-y-4 mt-8">
              {MENU_LIST.map((item) => (
                <MenuItem key={item.label}>{item.label}</MenuItem>
              ))}
              <Button className="bg-[#2172E6] font-bold text-white">
                Get started
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
