
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-radial opacity-80" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-200 shadow-sm shadow-cyan-500/10">
            <Sparkles size={18} />
            Solana-powered premium launchpad
          </div>

          <div>
            <p className="text-xl font-semibold uppercase tracking-[0.3em] text-cyan-300">Digital marketplace</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-tight text-white md:text-6xl">
              NEW-GenX connects creators, collectors and brands with immersive Web3 commerce.
            </h1>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Explore NFTs, digital goods, physical drops, and service listings with real crypto payments, a native wallet stack, and modern seller analytics.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/marketplace" className="inline-flex items-center gap-2 rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-glow">
              Browse Marketplace
              <ArrowRight size={18} />
            </Link>
            <Link href="/dashboard" className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
              Open Seller Dashboard
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow"
        >
          <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute -right-6 bottom-6 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative grid gap-6 sm:grid-cols-2">
            <div className="glass rounded-[1.5rem] p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Instant checkout</p>
              <h2 className="mt-4 text-3xl font-bold text-white">Solana Pay</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">Fast crypto receipts, low fees, and native wallet confirmation.</p>
            </div>
            <div className="glass rounded-[1.5rem] p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-fuchsia-300">Seller analytics</p>
              <h2 className="mt-4 text-3xl font-bold text-white">Revenue charts</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">View orders, inventory health, and verified buyer demand in real time.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
