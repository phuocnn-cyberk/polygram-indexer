# Polygram Indexer

Polygram Indexer là một nền tảng blockchain indexing hiện đại được xây dựng với Next.js, cung cấp giải pháp indexing không cần đau đầu cho các blockchain protocols.

## Tính năng

- 🚀 **Blockchain Indexing**: Hỗ trợ indexing cho nhiều blockchain protocols
- 📊 **Real-time Analytics**: Phân tích dữ liệu real-time
- 💳 **Payment Integration**: Tích hợp Stripe cho thanh toán
- 🎨 **Modern UI**: Giao diện hiện đại với Tailwind CSS
- ⚡ **Performance**: Tối ưu hiệu suất với Next.js 15

## Tech Stack

- **Framework**: Next.js 15.5.3
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Payment**: Stripe
- **Animations**: Motion (Framer Motion)
- **Charts**: Recharts

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── components/   # Page components
│   └── page.tsx      # Home page
├── components/       # Shared components
│   ├── common/      # Common UI components
│   └── ui/          # UI primitives
└── lib/             # Utilities and helpers
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
