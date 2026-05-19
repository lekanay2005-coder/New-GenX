'use client';

import type { FormEvent } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success('Registration submitted. Check your email to confirm.');
  };

  return (
    <main className="min-h-screen bg-surface text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-12 sm:px-10">
        <div className="glass rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-glow">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Create account</p>
            <h1 className="mt-3 text-4xl font-black text-white">Build your NEW-GenX storefront.</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">Sign up with email to receive seller verification and connect your wallet for instant onboarding.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6">
            <label className="grid gap-2 text-sm text-slate-300">
              Full name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-3xl border border-white/10 bg-surface/90 px-4 py-4 text-white outline-none focus:border-cyan-400"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-300">
              Email address
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-3xl border border-white/10 bg-surface/90 px-4 py-4 text-white outline-none focus:border-cyan-400"
                placeholder="you@domain.com"
              />
            </label>
            <button type="submit" className="inline-flex justify-center rounded-3xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-black transition hover:bg-cyan-400">
              Register account
            </button>
          </form>

          <p className="mt-8 text-sm text-slate-400">
            Already have an account? <Link href="/login" className="text-cyan-300 hover:text-white">Sign in</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
