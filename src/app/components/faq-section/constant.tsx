import { CircleDollarSign, RefreshCw, Waypoints } from "lucide-react";
import { ReactNode } from "react";

interface Faq {
  question: string;
  answer: string;
  icon: ReactNode;
}

export const FAQS: Faq[] = [
  {
    icon: <RefreshCw className="h-6 w-6 text-[#AFAFAF]" />,
    question: "What is a blockchain indexer and why do I need one?",
    answer:
      "A blockchain indexer is a service that organizes raw on-chain data into structured, searchable formats. Without an indexer, developers must parse raw blockchain data manually, which requires running nodes, maintaining servers, and writing custom code. Polygram’s blockchain indexer API eliminates this complexity by delivering real-time, enriched data that’s ready to integrate into any application — saving you time, money, and developer resources.",
  },
  {
    icon: <Waypoints className="h-6 w-6 text-[#AFAFAF]" />,
    question: "How does Polygram's blockchain indexer API work?",
    answer:
      "Polygram continuously ingests raw blockchain transactions, enriches the data, and exposes it through fast, low-latency APIs. Instead of dealing with RPC endpoints and complex queries, developers can instantly access pricing data, token balances, historical transactions, and aggregate metrics like volume and liquidity. With Polygram, you get accurate, developer-friendly data in seconds — without running your own indexer infrastructure.",
  },
  {
    icon: <CircleDollarSign className="h-6 w-6 text-[#AFAFAF]" />,
    question: "What makes Polygram different from running my own indexer?",
    answer:
      "Running your own indexer requires managing nodes, servers, and endless custom code — an expensive and time-consuming process. Polygram is a hosted blockchain indexer service that removes this overhead. Our API delivers structured, real-time data across multiple chains, ensuring reliability, scalability, and speed. This allows your team to focus on building products instead of maintaining infrastructure.",
  },
];
