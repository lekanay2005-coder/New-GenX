
import '../styles/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'NEW-GenX | Premium Solana Marketplace',
  description: 'NEW-GenX is the next generation decentralized marketplace for Web3 creators, NFTs, products, and services powered by Solana and Supabase.',
  metadataBase: new URL('https://new-genx.vercel.app'),
  icons: {
    icon: '/new-genx-logo.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
