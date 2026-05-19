'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { useAppStore } from '@/store/useAppStore';

export default function SettingsPage() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [wallet, setWallet] = useState('');
  const user = useAppStore((state) => state.user);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Save settings in client store or call API route in production.
  };

  return (
    <main className="min-h-screen bg-surface text-white">
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-10 lg:px-16">
        <div className="glass rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow">
          <h1 className="text-4xl font-black text-white">Profile settings</h1>
          <p className="mt-3 text-sm text-slate-400">Manage your account details, wallet connections, and notifications.</p>

          <form onSubmit={handleSubmit} className="mt-10 grid gap-6">
            <label className="grid gap-2 text-sm text-slate-300">
              Display name
              <input
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder={user?.displayName || 'Creator name'}
                className="rounded-3xl border border-white/10 bg-surface/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-300">
              Email address
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={user?.email || 'you@domain.com'}
                className="rounded-3xl border border-white/10 bg-surface/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-300">
              Connected wallet
              <input
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                placeholder={user?.walletAddress || 'Connect your wallet'}
                className="rounded-3xl border border-white/10 bg-surface/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400"
              />
            </label>
            <button type="submit" className="inline-flex justify-center rounded-3xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-black transition hover:bg-cyan-400">
              Save settings
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
