
// Ignore missing type declarations for CSS side-effect import
// @ts-ignore
import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NEW-GENX',
  description: 'The Marketplace of the Next Generation'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
