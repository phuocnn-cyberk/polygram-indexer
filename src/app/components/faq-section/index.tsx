"use client";

import { FC, useCallback, useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import { FAQS } from "./constant";
import { FaqItem } from "./components";
import { FadeInBlock } from "@/components/common/fade-in-block";

export const FaqSection: FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <FadeInBlock className="container mx-auto my-12 md:my-20 flex flex-col items-center gap-6 md:gap-8">
      <h2 className="text-center text-lg md:text-2xl lg:text-4xl font-medium text-white">
        Frequently Asked Questions
      </h2>
      <div className="flex items-center gap-1 md:gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            className={cn(
              "h-[6px] md:h-2 rounded-full bg-[#2A2A2A] transition-all",
              current === index ? "w-6 md:w-8 bg-[#DEDEDE]" : "w-[6px] md:w-2"
            )}
          />
        ))}
      </div>
      <Carousel setApi={setApi} className="w-full max-w-[1052px]">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, slideIndex) => (
            <CarouselItem key={slideIndex}>
              <div className="flex flex-col gap-7 md:gap-12 max-md:px-4">
                {FAQS.map((faq, faqIndex) => (
                  <FaqItem key={faqIndex} {...faq} />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </FadeInBlock>
  );
};
