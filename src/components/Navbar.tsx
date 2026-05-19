
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Stores', href: '/store/new-genx' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Checkout', href: '/checkout' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-glow">
            <span className="text-lg font-black">N</span>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">NEW-GenX</p>
            <p className="text-base font-semibold text-slate-100">Web3 Marketplace</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <WalletMultiButton className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-white shadow-lg shadow-violet-500/10 transition hover:bg-white/10" />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-surface/95 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10">
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-3">
              <ThemeToggle />
              <WalletMultiButton className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-white shadow-lg shadow-violet-500/10 transition hover:bg-white/10" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
