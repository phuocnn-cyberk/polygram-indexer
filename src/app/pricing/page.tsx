import { FC } from "react";

import { PricingSection } from "@/app/components/pricing-section";
import { Header } from "@/components/common/header";
import { FaqSection } from "@/app/components/faq-section";
import { LogoCloud } from "@/components/common/logo-cloud";
import { LOGOS } from "@/components/common/logo-cloud/constant";
import { FadeIn } from "@/components/common/fade-in";
import { Footer } from "@/app/components/footer";

const PricingPage: FC = () => {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-between">
      <Header />
      <div className="h-full w-full bg-[#111111] lg:pb-20">
        <PricingSection />
        <section className="container mx-auto my-12 max-w-[1014px] px-4 md:px-0">
          <div className="w-full rounded-2xl border border-[#1E1E1E] bg-[#141415] p-6 px-0 md:p-8">
            <FadeIn className="text-center text-lg md:text-2xl leading-tight text-white">
              Trusted by the best
            </FadeIn>
            <LogoCloud logos={LOGOS} className="!mt-3 !gap-y-3">
              <span className="text-xs text-[#F8F8F8] md:text-lg">
                and more+
              </span>
            </LogoCloud>
          </div>
        </section>
        <FaqSection />
        <Footer />
      </div>
    </main>
  );
};

export default PricingPage;
