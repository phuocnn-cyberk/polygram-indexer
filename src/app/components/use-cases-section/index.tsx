"use client";
import { FC } from "react";
import { UseCaseCard } from "./components/use-case-card";
import { motion } from "motion/react";
import { FadeIn } from "@/components/common/fade-in";
import { cardVariants, containerVariants } from "@/lib/animations";

const USE_CASES_DATA = [
  {
    icon: "/icons//use-cases/crypto-wallets.svg",
    title: "Crypto Wallets Made Simple",
    description:
      "With the Polygram API, wallet apps instantly fetch transaction history, token balances, and NFT collections across chains — no need to build or maintain a custom indexer.",
  },
  {
    icon: "/icons//use-cases/analytics.svg",
    title: "Analytics Without the Hassle",
    description:
      "Analytics platforms use Polygram to turn raw blockchain data into structured, query-ready datasets for dashboards, reporting, and deep on-chain insights.",
  },
  {
    icon: "/icons//use-cases/nft-marketplaces.svg",
    title: "NFT Marketplaces at Scale",
    description:
      "Marketplaces rely on Polygram’s blockchain indexer API to track ownership history, floor prices, and trading volume, delivering real-time insights and rich user dashboards.",
  },
  {
    icon: "/icons//use-cases/defi-protocols.svg",
    title: "DeFi Protocols Powered by Polygram",
    description:
      "DeFi apps integrate Polygram to index user positions, liquidity pools, and trading activity, ensuring their interfaces stay fast and accurate for real-time decision-making.",
  },
  {
    icon: "/icons//use-cases/subgraphs.svg",
    title: "Subgraphs Without Complexity",
    description:
      "Instead of building and running your own subgraph infrastructure, teams use Polygram’s hosted indexing to query liquidity, swaps, and token data instantly.",
  },
  {
    icon: "/icons//use-cases/real-time-lending.svg",
    title: "Real-Time Lending Data",
    description:
      "Lending protocols depend on Polygram for up-to-date lending rates, collateral values, and borrower data — improving both transparency and user experience.",
  },
  {
    icon: "/icons//use-cases/enterprise-grade.svg",
    title: "Enterprise-Grade Indexing",
    description:
      "Companies choose Polygram to handle large-scale indexing of events, transactions, and states, supporting internal analytics, audits, and compliance systems.",
  },
  {
    icon: "/icons//use-cases/security-monitoring.svg",
    title: "Security & Monitoring",
    description:
      "Teams integrate Polygram’s indexer API into monitoring tools to detect suspicious activity, contract exploits, and vulnerabilities in real time.",
  },
  {
    icon: "/icons//use-cases/asset-ownership.svg",
    title: "Asset Ownership & Registries",
    description:
      "From digital land registries to asset provenance, Polygram helps retrieve ownership details and transaction history instantly without manual blockchain queries.",
  },
  {
    icon: "/icons//use-cases/beyond-crypto.svg",
    title: "Beyond Crypto: Supply Chain & Industry Use",
    description:
      "Businesses apply Polygram indexing to track goods, provenance, and energy production data — enabling real-time visibility across industries, not just crypto.",
  },
];

export const UseCasesSection: FC = () => {
  return (
    <section className="mt-8 md:mt-20 flex flex-col items-center">
      <FadeIn className="text-center text-xl md:text-4xl font-medium uppercase text-white md:max-w-3xl">
        Why Developers Choose Polygram for Blockchain Indexing
      </FadeIn>
      <motion.div
        className="mt-8 w-full max-w-[375px] sm:max-w-[600px] no-scrollbar md:max-w-[900px] xl:max-w-[1156px] gap-5 overflow-x-auto md:mt-12 xl:flex xl:flex-wrap xl:justify-center xl:overflow-x-visible grid grid-flow-col grid-rows-2 pl-6 xl:pl-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {USE_CASES_DATA.map((useCase) => (
          <UseCaseCard
            key={useCase.title}
            {...useCase}
            variants={cardVariants}
          />
        ))}
      </motion.div>
    </section>
  );
};
