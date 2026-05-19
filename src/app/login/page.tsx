'use client';

import type { FormEvent } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const { theme } = useTheme();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success('Magic link sent to your inbox.');
  };

  return (
    <main className="min-h-screen bg-surface text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-12 sm:px-10">
        <div className="glass rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Sign in</p>
            <h1 className="mt-3 text-4xl font-black text-white">Secure wallet and email authentication.</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">Connect with your Solana wallet or log in with email to manage listings, orders, and your profile.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-7">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Wallet login</p>
              <div className="mt-8">
                <WalletMultiButton className="w-full rounded-3xl bg-cyan-500 px-5 py-4 text-sm font-semibold text-black transition hover:bg-cyan-400" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-7">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Email authentication</p>
              <label className="mt-8 block text-sm text-slate-300">
                Email address
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-4 w-full rounded-3xl border border-white/10 bg-surface/90 px-4 py-4 text-white outline-none focus:border-cyan-400"
                  placeholder="you@domain.com"
                />
              </label>
              <button type="submit" className="mt-8 inline-flex w-full justify-center rounded-3xl bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
                Send magic link
              </button>
            </form>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            New to NEW-GenX? <Link href="/register" className="text-cyan-300 hover:text-white">Create an account</Link> to manage your storefront.
          </p>
        </div>
      </div>
    </main>
  );
}
