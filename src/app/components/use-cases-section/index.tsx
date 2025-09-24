import { FC } from "react";
import { UseCaseCard } from "./components/use-case-card";

const USE_CASES_DATA = [
  {
    icon: "/assets/icons/use-cases/crypto-wallets.svg",
    title: "Crypto Wallets Made Simple",
    description:
      "With the Polygram API, wallet apps instantly fetch transaction history, token balances, and NFT collections across chains — no need to build or maintain a custom indexer.",
  },
  {
    icon: "/assets/icons/use-cases/analytics.svg",
    title: "Analytics Without the Hassle",
    description:
      "Analytics platforms use Polygram to turn raw blockchain data into structured, query-ready datasets for dashboards, reporting, and deep on-chain insights.",
  },
  {
    icon: "/assets/icons/use-cases/nft-marketplaces.svg",
    title: "NFT Marketplaces at Scale",
    description:
      "Marketplaces rely on Polygram’s blockchain indexer API to track ownership history, floor prices, and trading volume, delivering real-time insights and rich user dashboards.",
  },
  {
    icon: "/assets/icons/use-cases/defi-protocols.svg",
    title: "DeFi Protocols Powered by Polygram",
    description:
      "DeFi apps integrate Polygram to index user positions, liquidity pools, and trading activity, ensuring their interfaces stay fast and accurate for real-time decision-making.",
  },
  {
    icon: "/assets/icons/use-cases/subgraphs.svg",
    title: "Subgraphs Without Complexity",
    description:
      "Instead of building and running your own subgraph infrastructure, teams use Polygram’s hosted indexing to query liquidity, swaps, and token data instantly.",
  },
  {
    icon: "/assets/icons/use-cases/real-time-lending.svg",
    title: "Real-Time Lending Data",
    description:
      "Lending protocols depend on Polygram for up-to-date lending rates, collateral values, and borrower data — improving both transparency and user experience.",
  },
  {
    icon: "/assets/icons/use-cases/enterprise-grade.svg",
    title: "Enterprise-Grade Indexing",
    description:
      "Companies choose Polygram to handle large-scale indexing of events, transactions, and states, supporting internal analytics, audits, and compliance systems.",
  },
  {
    icon: "/assets/icons/use-cases/security-monitoring.svg",
    title: "Security & Monitoring",
    description:
      "Teams integrate Polygram’s indexer API into monitoring tools to detect suspicious activity, contract exploits, and vulnerabilities in real time.",
  },
  {
    icon: "/assets/icons/use-cases/asset-ownership.svg",
    title: "Asset Ownership & Registries",
    description:
      "From digital land registries to asset provenance, Polygram helps retrieve ownership details and transaction history instantly without manual blockchain queries.",
  },
  {
    icon: "/assets/icons/use-cases/beyond-crypto.svg",
    title: "Beyond Crypto: Supply Chain & Industry Use",
    description:
      "Businesses apply Polygram indexing to track goods, provenance, and energy production data — enabling real-time visibility across industries, not just crypto.",
  },
];

export const UseCasesSection: FC = () => {
  return (
    <section className="mt-20 flex flex-col items-center">
      <h2 className="text-center text-4xl font-medium uppercase text-white max-w-3xl">
        Why Developers Choose Polygram for Blockchain Indexing
      </h2>
      <div className="mt-12 flex flex-wrap justify-center gap-5 max-w-[1156px]">
        {USE_CASES_DATA.map((useCase) => (
          <UseCaseCard key={useCase.title} {...useCase} />
        ))}
      </div>
    </section>
  );
};
